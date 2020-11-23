import React from "react";
import "./Home.css";
import Feed from "../Feed/Feed";
import Filters from "../Filter/Filter";
import GoogleMap from "../GoogleMap/GoogleMap";
import { useStateProvider } from "../../StateProvider.js";

function Home() {
  const [{ map_marker }] = useStateProvider();
  return (
    <div className="home">
      <div className="home__feed">
        <Filters className="home__feedFilters" />
        <hr></hr>
        <div className="home__feedListings">
          <Feed />
        </div>
      </div>
      <div className="home__map">
        <GoogleMap geocode={map_marker} />
      </div>
    </div>
  );
}

export default Home;
