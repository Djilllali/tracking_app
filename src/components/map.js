import React from "react";
import '../App.css';
import { MapContainer, Marker,  TileLayer, Popup } from "react-leaflet";
import { Icon } from "leaflet";
import MyPopup from './Popup'

const center = {
    lat: 36.7753606,
    lng: 3.0601882,
  }
  
  export const icon = new Icon({
    iconUrl: "https://www.flaticon.com/svg/static/icons/svg/1181/1181732.svg",
    iconSize: [40, 40]
  });
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