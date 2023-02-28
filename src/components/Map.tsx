import * as React from 'react';
import { useState } from 'react';
import MapGL, { Source, Layer } from '@urbica/react-map-gl';


export default function Mapbox() {
  const [viewport, setViewport] = useState({
    latitude: 37.78,
    longitude: -122.41,
    zoom: 11
  });

  return <MapGL
    style={{ width: '100%', height: '400px' }}
    mapStyle='mapbox://styles/mapbox/light-v9'
    accessToken={'pk.eyJ1IjoiYW5vbnJvc2UiLCJhIjoiY2xlNjloc2doMDNydjNvcHA5aDZycWdldyJ9.uLp08yXVWfvGFVGQHjRIoQ'}
    onViewportChange={setViewport}
    {...viewport}
  >
    <Source id='tracts' type='vector' url='mapbox://anonrose.08vc4x0b' />
    <Layer
      onClick={(e) => console.log(e, 'layer')}
      id='tracts'
      type='fill'
      source='tracts'
      source-layer='tracts'
      paint={{
        "fill-color": [
          "step",
          ["get", "employment"],
          "#eff3ff", 1,
          "#c6dbef", 2,
          "#9ecae1", 3,
          "#6baed6", 4,
          "#4292c6", 5,
          "#2171b5", 6,
          "#084594", 250002,
          "#fff"
        ]
      }}
    />
  </MapGL>;
}
