import React, { useEffect, useState } from 'react';
import { MapContainer, TileLayer, GeoJSON } from 'react-leaflet';
import 'leaflet/dist/leaflet.css';
import L from 'leaflet';
import ReactDOMServer from 'react-dom/server';

import SDProjectsPopup from './SDProjectsPopup';

function App() {
  const [outlineData, setOutlineData] = useState(null);
  const [clickableData, setClickableData] = useState(null);
  const [selectedFeature, setSelectedFeature] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const outlineResponse = await fetch('/geojson/philippines1.json');
        const outlineData = await outlineResponse.json();
        setOutlineData(outlineData);

        const clickableResponse = await fetch('/geojson/cdo.json');
        const clickableData = await clickableResponse.json();
        setClickableData(clickableData);
      } catch (error) {
        console.error('Error loading GeoJSON data:', error);
      }
    };

    fetchData();
  }, []);

  const handleClick = (e) => {
    setSelectedFeature(e.target.feature);
  };

  const resetHighlight = (e) => {
    e.target.setStyle({
      color: 'blue',
      fillOpacity: 0.4,
    });
  };

  const handleMouseover = (e) => {
    e.target.setStyle({
      color: 'blue',
      fillOpacity: 0.4,
    });
  };

  const handleMouseout = (e) => {
    e.target.setStyle({
      color: 'blue',
      fillOpacity: 0.8,
    });
  };

  const closePopup = () => {
    setSelectedFeature(null);
  };

  return (
    <div className="App">
      <MapContainer center={[12.8797, 121.7740]} zoom={6} style={{ height: '1000px', width: '100%' }}>
        <TileLayer
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
          attribution="Map data &copy; <a href='https://www.openstreetmap.org/'>OpenStreetMap</a> contributors"
        />
        {outlineData && (
          <GeoJSON
            data={outlineData}
            style={() => ({
              color: 'red',
              fillOpacity: 0,
              weight: 2
            })}
          />
        )}
        {clickableData && (
          <GeoJSON
            data={clickableData}
            style={() => ({
              color: 'blue',
              fillOpacity: 0.4,
              weight: 1
            })}
            eventHandlers={{
              click: handleClick,
              mouseover: handleMouseover,
              mouseout: handleMouseout,
            }}
            onEachFeature={(feature, layer) => {
              layer.on({
                click: () => {
                  const { leadUnit, projectTitle } = feature.properties;
                  const projects = [{ leadUnit, projectTitle }];

                  // Render the SDProjectsPopup component
                  layer.bindPopup(
                    new L.Popup().setContent(
                      ReactDOMServer.renderToString(<SDProjectsPopup projects={projects} />)
                    )
                  );
                  layer.openPopup();
                },
              });
            }}
          />
        )}
      </MapContainer>
    </div>
  );
}

export default App;
