import React from "react";
import '../App.css';
import { MapContainer, Marker,  TileLayer, Popup } from "react-leaflet";
import MyPopup from './Popup'

const center = {
    lat: 36.7753606,
    lng: 3.0601882,
  }
  

function Map (){

    return (
      <MapContainer center={center} zoom={13} scrollWheelZoom={false}>
          <TileLayer
          attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
          />
        <Marker position={center}>
        <Popup>
            <MyPopup />
        </Popup>
        </Marker>
            
      </MapContainer>
)
  
}
export default Map