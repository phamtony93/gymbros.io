import React from "react";
import "./Listing.css";
import Carousel from "react-material-ui-carousel";

function Listing({ hostName, city, gymPhotos }) {
  const firstPhoto = gymPhotos[1];
  return (
    <div className="listing">
      <div className="listing__images">
        <Carousel
          autoPlay={false}
          navButtonsAlwaysVisible={false}
          indicators={false}
        >
          {gymPhotos.map((item, i) => (
            <img className="listing__carouselImages" src={item} alt="" />
          ))}
        </Carousel>
      </div>
      <div className="listing__info">
        <ul>
          <li>{hostName}</li>
          <li>{city}</li>
        </ul>
      </div>
    </div>
  );
}

export default Listing;
