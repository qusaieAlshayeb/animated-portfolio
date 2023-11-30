import React from "react";


import {
  ComposableMap,
  Geographies,
  Geography,
  Annotation,
  ZoomableGroup
} from "react-simple-maps";

const Map = () => {
  return (
    <ComposableMap
       projection="geoAzimuthalEqualArea"

      projectionConfig={{
        rotate: [-10.0, -53.0, 0],

        center: [-5, -3],
        scale: 700,
      }}

      style={{
        width : "100%",
        height:"95%",
        
      }}
    >
      <Geographies
               
        geography="/features.json"
        fill="#2C065D"
        stroke="#FFFFFF"
        strokeWidth={0.5}
      >
        {({ geographies }) =>
          geographies.map((geo) => (
            <Geography key={geo.rsmKey} geography={geo} />
          ))
        }
      </Geographies>

      <Annotation
        subject={[36.443158, 31.630359]}
        dx={-80}
        dy={-30}
        connectorProps={{
          stroke: "white",
          strokeWidth: 2,
          strokeLinecap: "round"
        }}
  >
      <text x="-8" textAnchor="end" alignmentBaseline="middle" fill="white">
       {"Jordan"}
      </text>
      </Annotation>
    </ComposableMap>
  );
};

export default Map;