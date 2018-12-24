import React, { Component } from "react";
import { Map, GoogleApiWrapper, MapProps } from "google-maps-react";

export class MapContainer extends Component<MapProps> {
  render() {
    const location = { lat: 43.0731, lng: -89.4012 }; // Madison
    return (
      <Map google={this.props.google} zoom={14} initialCenter={location} />
    );
  }
}

export default GoogleApiWrapper({
  apiKey: process.env.REACT_APP_GOOGLE_API as string
})(MapContainer);
