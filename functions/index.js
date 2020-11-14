const admin = require("firebase-admin");
const functions = require("firebase-functions");
const express = require("express");
admin.initializeApp();
const db = admin.firestore();
const { ApolloServer, gql } = require("apollo-server-express");

// define typeDefs
const typeDefs = gql`
  type Hotdog {
    isKosher: Boolean
    location: String
    name: String
    style: String
    website: String
  }
  type Query {
    hotdogs: [Hotdog]
  }
`;

// define resolvers
const resolvers = {
  Query: {
    hotdogs: async () => {
      const hotdogRef = db.collection("hotdogs");
      const snapshot = await hotdogRef.get();
      if (snapshot.empty) {
        console.log("No matching documents");
      } else {
        // graphql expects an array
        let items = snapshot.docs.map((doc) => {
          const data = doc.data();
          return {
            id: doc.id,
            ...data,
          };
        });
        console.log(items);
        return items;
      }
    },
  },
};

// initialize express
const app = express();
const server = new ApolloServer({ typeDefs, resolvers });
server.applyMiddleware({ app, path: "/", cors: true });
exports.graphql = functions.https.onRequest(app);
