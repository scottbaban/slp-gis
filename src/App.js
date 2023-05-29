import React from 'react';
import PHMapCentered from './PHMap/PHMapCentered';
import 'leaflet/dist/leaflet.css';
import CDOMapTile from './PHMap/CitMun/CDO';

const App = () => {
  return (
    <div>

      <CDOMapTile />
    </div>
  );
};

export default App;
