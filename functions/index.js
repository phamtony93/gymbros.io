const admin = require("firebase-admin");
const functions = require("firebase-functions");
const express = require("express");
admin.initializeApp();
const db = admin.firestore();
const { ApolloServer, gql } = require("apollo-server-express");

// define typeDefs
const typeDefs = gql`
  type Hotdog {
    isKosher: String
    location: String
    name: String
    style: String
    website: String
  }
  type Geocode {
    longitude: String
    latitude: String
  }
  type listing {
    address: String
    city: String
    hostName: String
    gymPhotos: [String]
    perDayPrice: Int
    perMonthPrice: Int
    zipcode: String
    description: String
    geocode: Geocode
  }
  type Query {
    hotdogs: [Hotdog]
    listings: [listing]
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
    listings: async () => {
      const listingsRef = db.collection("listings");
      const snapshot = await listingsRef.get();
      if (snapshot.empty) {
        console.log("No matching documents");
      } else {
        let items = snapshot.docs.map((doc) => {
          const data = doc.data();
          return {
            id: doc.id,
            ...data,
          };
        });
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
