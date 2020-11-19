import React from "react";
import "./Home.css";
import Feed from "../Feed/Feed";

function Home() {
  return (
    <div className="home">
      <div className="home__feed">
        <Feed />
      </div>
      <div className="home__map">google map</div>
    </div>
  );
}

export default Home;
