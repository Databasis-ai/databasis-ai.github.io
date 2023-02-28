import * as React from 'react';
import { useState, useCallback, useMemo } from 'react';
import MapGL, { Source, Layer, Popup } from '@urbica/react-map-gl';

 const highlightLayer = {
  id: 'tracts',
  type: 'fill',
  source: 'tracts',
  'source-layer': 'tracts',
  paint: {
    'fill-outline-color': '#484896',
    'fill-color': '#6e599f',
    'fill-opacity': 0.75
  }
};

export default function Mapbox() {
  const [viewport, setViewport] = useState({
    latitude: 37.78,
    longitude: -122.41,
    zoom: 11
  });

  const [tract, setTract] = useState(null) as any;

  const onClick = useCallback((event: any) => {
    const county = event.features && event.features[0];

    setTract({
      longitude: event.lngLat.lng,
      latitude: event.lngLat.lat,
      employment: county.properties.employment
    });
  }, []);

  const selectedTract = tract;
  const filter = useMemo(() => ["==", ["get", "employment"], tract?.employment], [tract?.employment]);

  return <MapGL
    style={{ width: '100%', height: '400px' }}
    mapStyle='mapbox://styles/mapbox/light-v9'
    accessToken={'pk.eyJ1IjoiYW5vbnJvc2UiLCJhIjoiY2xlNjloc2doMDNydjNvcHA5aDZycWdldyJ9.uLp08yXVWfvGFVGQHjRIoQ'}
    onViewportChange={setViewport}
    {...viewport}
    >
    <Source id='tracts' type='vector' url='mapbox://anonrose.08vc4x0b' >
    <Layer
      id='tracts'
      type='fill'
      source='tracts'
      source-layer='tracts'
      onClick={onClick}
      paint={{
        "fill-color": [
          "step",
          ["get", "employment"],
          "#ffffd4", 1,
          "#fee391", 2,
          "#fec44f", 3,
          "#fe9929", 4,
          "#ec7014", 5,
          "#cc4c02", 6,
          "#8c2d04", 250002,
          "#fff"
        ],
        'fill-opacity': 0.3,
      }}
    />
    <Layer {...highlightLayer} filter={filter} />
    </Source>
  </MapGL>;
}
