import * as React from 'react';
import { useState, useCallback, useMemo } from 'react';
import MapGL, { Source, Layer } from '@urbica/react-map-gl';

const highlightLayer = {
  id: 'tracts',
  type: 'fill',
  source: 'tracts',
  'source-layer': 'tracts',
  beforeId: 'tracts-highlight',
  paint: {
    'fill-outline-color': '#484896',
    'fill-color': '#6e599f',
    'fill-opacity': 0.5
  }
};


export default function Mapbox() {
  const [viewport, setViewport] = useState({
    latitude: 37.78,
    longitude: -122.41,
    zoom: 11
  });

  const [tract, setTract] = useState({ employment: 100000000 }) as any;

  const [employmentFilter, setFilter] = useState(["<", ["get", "employment"], tract?.employment]) as any;

  const onClick = useCallback((event: any) => {
    const county = event.features && event.features[0];
    setFilter(["==", ["get", "employment"], county.properties.employment]);
    setTract({
      longitude: event.lngLat.lng,
      latitude: event.lngLat.lat,
      employment: county.properties.employment
    });
  }, []);

  const filter = useMemo(() => employmentFilter, [tract?.employment]);

  return <MapGL
    style={{ width: '100%', height: '400px' }}
    mapStyle='mapbox://styles/mapbox/light-v9'
    accessToken={'pk.eyJ1IjoiYW5vbnJvc2UiLCJhIjoiY2xlNjloc2doMDNydjNvcHA5aDZycWdldyJ9.uLp08yXVWfvGFVGQHjRIoQ'}
    onViewportChange={setViewport}
    {...viewport}>
    <Source id='tracts' type='vector' url='mapbox://anonrose.08vc4x0b' >
      <Layer
        id='tracts'
        type='fill'
        source='tracts'
        beforeId='tracts-highlight'
        source-layer='tracts'
        onClick={onClick}
        paint={{
        "fill-color": [
          "step",
          ["get", "employment"],
          "#ffffcc", 1,
          "#ffeda0", 2,
          "#fed976", 3,
          "#feb24c", 4,
          "#fd8d3c", 5,
          "#fc4e2a", 6,
          "#e31a1c", 7,
          "#bd0026", 8,
          "#800026", 9,
          '#fff'
        ],
        'fill-opacity': 0.25,
      }}
    />
    <Layer {...highlightLayer} filter={filter} />
    </Source>
  </MapGL>;
}
