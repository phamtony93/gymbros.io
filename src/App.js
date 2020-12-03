import React, { useEffect } from "react";
import "./App.css";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Login from "./components/Login/Login";
import Home from "./components/Home/Home";
import Header from "./components/Header/Header";
import Help from "./components/Help/Help";
import Profile from "./components/Profile/Profile";
import { useStateProvider } from "./StateProvider";
import { auth } from "./firebase.js";
import ListingPage from "./components/ListingPage/ListingPage";
import { useQuery, gql } from "@apollo/client";

const MEMBER_QUERY = gql`
  query MemberInfoQuery($filter: String!) {
    member(filter: $filter) {
      role
    }
  }
`;

// const _getRole = async (uid) => {
//   const { data, loading, error } = useQuery(MEMBER_QUERY, {
//     variables: { uid: uid },
//   });

//   if (data) {
//     return data;
//   } else {
//     console.log(error);
//     return null;
//   }
// };
function App() {
  const [{ user }, dispatch] = useStateProvider();

  useEffect(() => {
    const unsubscribe = auth.onAuthStateChanged((authUser) => {
      if (authUser) {
        dispatch({
          type: "SET_USER",
          user: authUser,
        });

        // get and set role
        // const role = _getRole(authUser.uid);
        // console.log(role);
      } else {
        dispatch({
          type: "SET_USER",
          user: null,
        });
      }
    });
    return () => {
      unsubscribe();
    };
  }, []);

  return (
    <div className="app">
      <Router>
        <Header />
        <Switch>
          <Route path="/listing/:id" component={ListingPage} />
          <Route exact path="/" component={Home} />
          <Route exact path="/login" component={Login} />
          <Route exact path="/help" component={Help} />
          <Route exact path="/profile" component={Profile} />
        </Switch>
      </Router>
    </div>
  );
}

export default App;
