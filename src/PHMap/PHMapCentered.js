import React from 'react';
import { MapContainer, TileLayer } from 'react-leaflet';
import 'leaflet/dist/leaflet.css';
import CDOMapTile from './CitMun/CDO.js';

const PHMapCentered = () => {
  return (
    <MapContainer center={[9.8797, 121.7740]} zoom={4} style={{ height: '2000px', width: '100%' }}>
      <TileLayer
        url="https://{s}.tile.openstreetmap.fr/hot/{z}/{x}/{y}.png"
        attribution="Map data &copy; <a href='https://www.openstreetmap.org/'>OpenStreetMap</a> contributors"
      />
      <CDOMapTile />
    </MapContainer>
  );
};

export default PHMapCentered;
