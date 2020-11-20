import React, { Component } from "react";
import { Map, GoogleApiWrapper, Marker } from "google-maps-react";
import { googleMapsKey } from "../../config";

const mapStyles = {
  width: "50%",
  height: "100%",
};

export class MapContainer extends Component {
  render() {
    return (
      <Map
        google={this.props.google}
        zoom={14}
        style={mapStyles}
        initialCenter={{
          lat: -1.2884,
          lng: 36.8233,
        }}
      />
    );
  }
}

export default GoogleApiWrapper({
  apiKey: googleMapsKey,
})(MapContainer);
