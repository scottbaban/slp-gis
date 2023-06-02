import React from 'react';
import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet';
import 'leaflet/dist/leaflet.css';
import { divIcon } from 'leaflet';

const violetMarkerHtmlStyles = `
  background-color: violet;
  width: 2rem;
  height: 2rem;
  display: block;
  left: -1.5rem;
  top: -1.5rem;
  position: relative;
  border-radius: 2rem 2rem 0;
  transform: rotate(45deg);
  border: 1px solid #FFFFFF`;

const orangeMarkerHtmlStyles = `
  background-color: orange;
  width: 2rem;
  height: 2rem;
  display: block;
  left: -1.5rem;
  top: -1.5rem;
  position: relative;
  border-radius: 2rem 2rem 0;
  transform: rotate(45deg);
  border: 1px solid #FFFFFF`;

const cyanMarkerHtmlStyles = `
  background-color: cyan;
  width: 2rem;
  height: 2rem;
  display: block;
  left: -1.5rem;
  top: -1.5rem;
  position: relative;
  border-radius: 2rem 2rem 0;
  transform: rotate(45deg);
  border: 1px solid #FFFFFF`;

const violetIcon = divIcon({
  className: 'my-custom-pin',
  iconAnchor: [0, 24],
  labelAnchor: [-6, 0],
  popupAnchor: [0, -36],
  html: `<span style="${violetMarkerHtmlStyles}" />`
});

const orangeIcon = divIcon({
  className: 'my-custom-pin',
  iconAnchor: [0, 24],
  labelAnchor: [-6, 0],
  popupAnchor: [0, -36],
  html: `<span style="${orangeMarkerHtmlStyles}" />`
});

const cyanIcon = divIcon({
  className: 'my-custom-pin',
  iconAnchor: [0, 24],
  labelAnchor: [-6, 0],
  popupAnchor: [0, -36],
  html: `<span style="${cyanMarkerHtmlStyles}" />`
});

function Legend() {
  return (
    <div style={{ position: 'absolute', top: '10px', right: '10px', zIndex: 1000, backgroundColor: 'white', padding: '10px' }}>
      <h3>SD-OVP Projects in the Philippines:</h3>
      <div style={{ display: 'flex', alignItems: 'center', marginBottom: '5px' }}>
        <div style={{ backgroundColor: 'red', width: '20px', height: '10px', marginRight: '5px' }}></div>
        <span>Cagayan de Oro</span>
      </div>
      <div style={{ display: 'flex', alignItems: 'center', marginBottom: '5px' }}>
        <div style={{ backgroundColor: 'blue', width: '20px', height: '10px', marginRight: '5px' }}></div>
        <span>Marawi City</span>
      </div>
      <div style={{ display: 'flex', alignItems: 'center', marginBottom: '5px' }}>
        <div style={{ backgroundColor: 'green', width: '20px', height: '10px', marginRight: '5px' }}></div>
        <span>Metro Manila</span>
      </div>
      <div style={{ display: 'flex', alignItems: 'center', marginBottom: '5px' }}>
        <div style={{ backgroundColor: 'yellow', width: '20px', height: '10px', marginRight: '5px' }}></div>
        <span>Bataan</span>
      </div>

      <div style={{ display: 'flex', alignItems: 'center', marginBottom: '5px', color: 'green' }}>
        <div style={{ backgroundColor: 'darkolivegreen', width: '20px', height: '10px', marginRight: '5px' }}></div>
        <span>Cagdianao</span>
      </div>
      <div style={{ display: 'flex', alignItems: 'center', marginBottom: '5px', color: 'green' }}>
        <div style={{ backgroundColor: 'lime', width: '20px', height: '10px', marginRight: '5px' }}></div>
        <span>Tagoloan</span>
      </div>
      <div style={{ display: 'flex', alignItems: 'center', marginBottom: '5px', color: 'green' }}>
        <div style={{ backgroundColor: 'gray', width: '20px', height: '10px', marginRight: '5px' }}></div>
        <span>Balingasag</span>
      </div>
      <h4>Regions:</h4>
      <div style={{ display: 'flex', alignItems: 'center', marginBottom: '5px' }}>
        <div style={{ backgroundColor: 'violet', width: '20px', height: '10px', marginRight: '5px' }}></div>
        <span>CARAGA</span>
      </div>
      <div style={{ display: 'flex', alignItems: 'center', marginBottom: '5px', color: 'orange' }}>
        <div style={{ backgroundColor: 'orange', width: '20px', height: '10px', marginRight: '5px' }}></div>
        <span>BARMM</span>
      </div>
      <div style={{ display: 'flex', alignItems: 'center', marginBottom: '5px', color: 'blue' }}>
        <div style={{ backgroundColor: 'cyan', width: '20px', height: '10px', marginRight: '5px' }}></div>
        <span>Region X</span>
      </div>
    </div>
  );
}


function PHMap({ children }) {
  const center = [9.8797, 121.7740]; // Corrected center coordinates for the Philippines
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
<MapContainer center={center} zoom={6.5} style={{ height: '1500px', width: '100%' }}>
  <TileLayer
    url="https://api.maptiler.com/maps/dataviz/{z}/{x}/{y}.png?key=5pRAW6G4h2aoeAL9b9DD"
    attribution="<a href='https://www.maptiler.com/copyright/' target='_blank'>&copy; MapTiler</a> <a href='https://www.openstreetmap.org/copyright' target='_blank'>&copy; OpenStreetMap contributors</a>"
  />

  <Marker position={markerCoordinates1} icon={violetIcon}>
    <Popup>{popupContent1}</Popup>
  </Marker>

  <Marker position={markerCoordinates2} icon={orangeIcon}>
    <Popup>{popupContent2}</Popup>
  </Marker>

  <Marker position={markerCoordinates3} icon={cyanIcon}>
    <Popup>{popupContent3}</Popup>
  </Marker>

  <Legend />
  {children}
</MapContainer>


  );
}

export default PHMap;
