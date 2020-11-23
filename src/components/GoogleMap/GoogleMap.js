import React, { Component } from "react";
import { Map, GoogleApiWrapper, Marker } from "google-maps-react";
import { googleMapsKey } from "../../config";
import { useStateProvider } from "../../StateProvider";
import "./GoogleMap.css";

const mapStyles = {
  width: "100%",
  height: "100%",
  //   border: "red 1px solid",
};

export class MapContainer extends Component {
  render() {
    let { lat, lng } = this.props.geocode;
    console.log({ lat, lng });
    return (
      <div className="googleMap__mapContainer">
        <Map
          google={this.props.google}
          zoom={14}
          style={mapStyles}
          initialCenter={{
            lat: lat,
            lng: lng,
          }}
          center={{
            lat: lat,
            lng: lng,
          }}
        >
          <Marker
            title={"Test"}
            name={"SF"}
            position={{ lat: lat, lng: lng }}
          />
        </Map>
      </div>
    );
  }
}

export default GoogleApiWrapper({
  apiKey: googleMapsKey,
})(MapContainer);
