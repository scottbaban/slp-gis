import React from 'react';
import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet';
import 'leaflet/dist/leaflet.css';
import markerIconPng from "leaflet/dist/images/marker-icon.png"
import {Icon} from 'leaflet'

function PHMap({ children }) {
  const center = [12.8797, 121.7740]; // Corrected center coordinates for the Philippines
  const markerCoordinates1 = [7.869870064343089, 125.0451037979433]; // Marker 1 coordinates
  const popupContent1 = (
    <a href="/projects/northmin/NorthminProjects" style={{ color: 'blue', textDecoration: 'underline' }}>
      SD Projects in Region X (2017-2021)
    </a>
  ); // Popup 1 content

  const markerCoordinates2 = [8.844839780108616, 125.84321072961421]; // Marker 2 coordinates
  const popupContent2 = (
    <a href="/projects/caraga/CARAGAProjects" style={{ color: 'blue', textDecoration: 'underline' }}>
      SD Projects in CARAGA (2017-2021)
    </a>
  ); // Popup 2 content

  const markerCoordinates3 = [7.75532463950237, 124.27638752871218]; // Marker 3 coordinates
  const popupContent3 = (
    <a href="/projects/barmm/BARMMProjects" style={{ color: 'blue', textDecoration: 'underline' }}>
      SD Projects in BARMM (2017-2021)
    </a>
  ); // Popup 3 content

  return (
    <MapContainer center={center} zoom={7} style={{ height: '1500px', width: '100%' }}>
      <TileLayer
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        attribution="Map data &copy; <a href='https://www.openstreetmap.org/'>OpenStreetMap</a> contributors"
      />

      <Marker position={markerCoordinates1} icon={new Icon({iconUrl: markerIconPng, iconSize: [25, 41], iconAnchor: [12, 41]})} >
        <Popup>{popupContent1}</Popup>
      </Marker>

      <Marker position={markerCoordinates2} icon={new Icon({iconUrl: markerIconPng, iconSize: [25, 41], iconAnchor: [12, 41]})} >
        <Popup>{popupContent2}</Popup>
      </Marker>

      <Marker position={markerCoordinates3} icon={new Icon({iconUrl: markerIconPng, iconSize: [25, 41], iconAnchor: [12, 41]})} >
        <Popup>{popupContent3}</Popup>
      </Marker>

      {children}
    </MapContainer>
  );
}

export default PHMap;
