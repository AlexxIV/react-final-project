import { withScriptjs, withGoogleMap, GoogleMap, Marker } from "react-google-maps"
import React from 'react';

const MyMapComponent = withScriptjs(withGoogleMap((props) =>
  <GoogleMap
    defaultZoom={props.zoom}
    defaultCenter={{ lat: props.markLat, lng: props.markLng }}
  >
    {props.isMarkerShown && <Marker position={{ lat: props.markLat, lng: props.markLng }} />}
  </GoogleMap>
))

export default MyMapComponent
