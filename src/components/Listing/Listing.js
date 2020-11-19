import React from "react";
import "./Listing.css";

function Listing({ hostName, city, gymPhotos }) {
  return (
    <div className="listing">
      <ul>
        <li>{hostName}</li>
        <li>{city}</li>
        <li>{gymPhotos}</li>
      </ul>
    </div>
  );
}

export default Listing;
