import React from "react";
import "./Home.css";
import Feed from "../Feed/Feed";
import Filters from "../Filter/Filter";

function Home() {
  return (
    <div className="home">
      <div className="home__feed">
        <Filters className="home__feedFilters" />
        <hr></hr>
        <div className="home__feedListings">
          <Feed />
        </div>
      </div>
      <div className="home__map">google map</div>
    </div>
  );
}

export default Home;
