import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import PHMap from "../PHMapCentered";
import { GeoJSON, Popup } from "react-leaflet";
import 'leaflet/dist/leaflet.css';


import balingasagData from "../../data/citmun/balingasag.json";
import cdoData from "../../data/citmun/cdo.json";
import marawiData from "../../data/citmun/marawi.json";
import ncrData from "../../data/province/ncr.json";
import bataanData from "../../data/province/bataan.json";
import cagdianaoData from "../../data/citmun/cagdianao.json";
import tagoloanData from "../../data/citmun/tagoloan.json";


function CitMun() {
  const geoJSONLayers = [
    { data: balingasagData, name: "SD Projects in Balingasag (2017-2021)", mapTileColor: "gray" },
    { data: cdoData, name: "SD Projects in CDO (2017-2021)", mapTileColor: "darkred" },
    { data: marawiData, name: "SD Projects in Marawi (2017-2021)", mapTileColor: "darkblue" },
    { data: ncrData, name: "SD Projects in NCR (2017-2021)", mapTileColor: "green" },
    { data: bataanData, name: "SD Projects in Bataan (2017-2021)", mapTileColor: "yellow" },
    { data: cagdianaoData, name: "SD Projects in Cagdianao (2017-2021)", mapTileColor: "darkolivegreen" },
    { data: tagoloanData, name: "SD Projects in Tagoloan (2017-2021)", mapTileColor: "lime" },
  ];

  const handleClick = (event, feature) => {
    console.log("Clicked feature:", feature);
  };

  const [hoveredFeature, setHoveredFeature] = useState(null);

  const handleMouseover = (event, feature) => {
    setHoveredFeature(feature);
  };

  const handleMouseout = () => {
    setHoveredFeature(null);
  };

  const mapTileStyle = {
    fillColor: "white",
    color: "blue",
    weight: 1 ,
  };

  const mapTileHoverStyle = {
    fillColor: "white",
    color: "red",
    weight: 2,
  };

  const navigate = useNavigate();

  const handleLinkClick = (link) => {
    navigate(link);
  };


  return (
    <div>
    <PHMap>
      {geoJSONLayers.map((layer, index) => (
        <GeoJSON
          key={index}
          data={layer.data}
          style={(feature) =>
            feature === hoveredFeature ? { ...mapTileHoverStyle, fillColor: layer.mapTileColor } : { ...mapTileStyle, fillColor: layer.mapTileColor }
          }
            onEachFeature={(feature, layer) => {
              layer.on({
                click: (event) => handleClick(event, feature),
                mouseover: (event) => handleMouseover(event, feature),
                mouseout: handleMouseout,
              });
            }}
          >
            <Popup>
              {layer.name === "SD Projects in CDO (2017-2021)" && (
                <span
                  onClick={() => handleLinkClick("/projects/cdo/CDOProjects")}
                  style={{
                    cursor: "pointer",
                    color: "blue",
                    textDecoration: "underline",
                  }}
                >
                  SD Projects in CDO (2017-2021)
                </span>
              )}
              {layer.name === "SD Projects in Balingasag (2017-2021)" && (
                <span
                  onClick={() =>
                    handleLinkClick("/projects/balingasag/BalingasagProjects")
                  }
                  style={{
                    cursor: "pointer",
                    color: "blue",
                    textDecoration: "underline",
                  }}
                >
                  SD Projects in Balingasag (2017-2021)
                </span>
              )}
              {layer.name === "SD Projects in Marawi (2017-2021)" && (
                <span
                  onClick={() =>
                    handleLinkClick("/projects/marawi/MarawiProjects")
                  }
                  style={{
                    cursor: "pointer",
                    color: "blue",
                    textDecoration: "underline",
                  }}
                >
                  SD Projects in Marawi (2017-2021)
                </span>
              )}
              {layer.name === "SD Projects in NCR (2017-2021)" && (
                <span
                  onClick={() => handleLinkClick("/projects/ncr/NCRProjects")}
                  style={{
                    cursor: "pointer",
                    color: "blue",
                    textDecoration: "underline",
                  }}
                >
                  SD Projects in Metro Manila (2017-2021)
                </span>
              )}
              {layer.name === "SD Projects in Bataan (2017-2021)" && (
                <span
                  onClick={() =>
                    handleLinkClick("/projects/bataan/BataanProjects")
                  }
                  style={{
                    cursor: "pointer",
                    color: "blue",
                    textDecoration: "underline",
                  }}
                >
                  SD Projects in Bataan (2017-2021)
                </span>
              )}
              {layer.name === "SD Projects in Cagdianao (2017-2021)" && (
                <span
                  onClick={() =>
                    handleLinkClick("/projects/cagdianao/CagdianaoProjects")
                  }
                  style={{
                    cursor: "pointer",
                    color: "blue",
                    textDecoration: "underline",
                  }}
                >
                  SD Projects in Cagdianao (2017-2021)
                </span>
              )}
              {layer.name === "SD Projects in Tagoloan (2017-2021)" && (
                <span
                  onClick={() =>
                    handleLinkClick("/projects/tagoloan/TagoloanProjects")
                  }
                  style={{
                    cursor: "pointer",
                    color: "blue",
                    textDecoration: "underline",
                  }}
                >
                  SD Projects in Tagoloan (2017-2021)
                </span>
              )}
            </Popup>
          </GeoJSON>
        ))}
      </PHMap>
    </div>
  );
}

export default CitMun;
