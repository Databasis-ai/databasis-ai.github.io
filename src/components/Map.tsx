import * as React from 'react';
import { useState } from 'react';
import MapGL, { Source, Layer } from '@urbica/react-map-gl';


// mapbox://anonrose.03pn9osn
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
    <Source id='tracts' type='vector' url='mapbox://anonrose.03pn9osn' />
    <Layer
      id='tracts'
      type='line'
      source='tracts'
      source-layer='tracts'
      paint={{
        'line-color': '#877b59',
        'line-width': 1
      }}
    />
  </MapGL>;
  }
