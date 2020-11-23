import React from "react";
import "./Listing.css";
import Carousel from "react-material-ui-carousel";
import { useStateProvider } from "../../StateProvider";

function Listing({
  hostName,
  city,
  gymPhotos,
  perDayPrice,
  perMonthPrice,
  description,
  geocode,
}) {
  const [{ map_marker }, dispatch] = useStateProvider();

  const handleClick = () => {
    dispatch({
      type: "SET_MAP_MARKER",
      map_marker: { lat: geocode.latitude, lng: geocode.longitude },
    });
  };
  return (
    <div className="listing" onClick={handleClick}>
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
        <div className="listing__infoDesc">
          <div>Host: {hostName}</div>
          <div>City: {city}</div>
          <div>Description: {description}</div>
        </div>
        <hr></hr>
        <div className="listing__infoPrice">
          <div>
            $/Day: {perDayPrice}
            $/Month: {perMonthPrice}
          </div>
        </div>
      </div>
    </div>
  );
}

export default Listing;
