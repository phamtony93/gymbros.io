import React from "react";
import "./Listing.css";
import Carousel from "react-material-ui-carousel";
import { useStateProvider } from "../../StateProvider";
import { useHistory } from "react-router-dom";

function Listing({
  id,
  hostName,
  city,
  gymPhotos,
  perDayPrice,
  perMonthPrice,
  description,
  geocode,
}) {
  const [{ map_marker }, dispatch] = useStateProvider();
  const history = useHistory();

  // const handleClick = () => {

  // };

  const handleHover = () => {
    dispatch({
      type: "SET_MAP_MARKER",
      map_marker: { lat: geocode.latitude, lng: geocode.longitude },
    });
  };

  const handleClick = () => {
    console.log(id);
    history.push(`/listing/${id}`);
  };

  return (
    <div className="listing" onMouseEnter={handleHover}>
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
      <div className="listing__info" onClick={handleClick}>
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
