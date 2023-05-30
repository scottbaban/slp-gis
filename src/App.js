import React from 'react';
import { Routes, Route } from 'react-router-dom';
import CitMun from './PHMap/CitMun/CitMun';
import CDOProjects from './projects/cdo/CDOProjects';
import BalingasagProjects from './projects/balingasag/BalingasagProjects';
import BARMMProjects from './projects/barmm/BARMMProjects';
import NorthminProjects from './projects/northmin/NorthminProjects';
import MarawiProjects from './projects/marawi/MarawiProjects';
import CARAGAProjects from './projects/caraga/CARAGAProjects';
import CagdianaoProjects from './projects/cagdianao/CagdianaoProjects';
import NCRProjects from './projects/ncr/NCRProjects';
import BataanProjects from './projects/bataan/BataanProjects';
import TagoloanProjects from './projects/tagoloan/TagoloanProjects';


function App() {
  return (
    <Routes>
      <Route path="/" element={<CitMun />} />
      <Route path="/projects/cdo/CDOProjects" element={<CDOProjects />} />
      <Route path="/projects/caraga/CARAGAProjects" element={<CARAGAProjects />} />
      <Route path="/projects/balingasag/BalingasagProjects" element={<BalingasagProjects />} />
      <Route path="/projects/barmm/BARMMProjects" element={<BARMMProjects />} />
      <Route path="/projects/northmin/NorthminProjects" element={<NorthminProjects />} />
      <Route path="/projects/marawi/MarawiProjects" element={<MarawiProjects />} />
      <Route path="/projects/ncr/NCRProjects" element={<NCRProjects />} />
      <Route path="/projects/bataan/BataanProjects" element={<BataanProjects />} />
      <Route path="/projects/cagdianao/CagdianaoProjects" element={<CagdianaoProjects />} />
      <Route path="/projects/tagoloan/TagoloanProjects" element={<TagoloanProjects />} />
    </Routes>
  );
}

export default App;
