import React, { useState } from 'react';
import { MapContainer, TileLayer, GeoJSON } from 'react-leaflet';
import 'leaflet/dist/leaflet.css';
import cdoGeoJSON from '../../data/citmun/cdo.json';
import CDOProjects from '../../projects/CDOProjects';

const CDOMapTile = () => {
  const [showPopup, setShowPopup] = useState(false);

  const handleMapClick = () => {
    setShowPopup(!showPopup);
  };

  const handleTileMouseOver = (event) => {
    event.target.setStyle({ fillOpacity: 0.7 });
  };

  const handleTileMouseOut = (event) => {
    event.target.setStyle({ fillOpacity: 0.4 });
  };

  return (
    <MapContainer center={[9.8797, 121.7740]} zoom={7.2} style={{ height: '500px', width: '100%' }}>
      <TileLayer
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        attribution="Map data &copy; <a href='https://www.openstreetmap.org/'>OpenStreetMap</a> contributors"
      />
      <GeoJSON
        data={cdoGeoJSON}
        eventHandlers={{
          click: handleMapClick,
          mouseover: handleTileMouseOver,
          mouseout: handleTileMouseOut,
        }}
      />
      {showPopup && <CDOProjects />}
    </MapContainer>
  );
};

export default CDOMapTile;
