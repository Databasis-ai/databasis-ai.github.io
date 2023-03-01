import * as React from 'react';
import { useState, useCallback, useMemo } from 'react';
import MapGL, { Source, Layer } from '@urbica/react-map-gl';
const CRAZY_HIGH_EMPLOYMENT = 1_000_000_000;
const DEFAULT_FILTER = ["<", ["get", "employment"], CRAZY_HIGH_EMPLOYMENT];
import {COLOR_RANGE} from '../lib/constants';
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

  const [tract, setTract] = useState({ employment: CRAZY_HIGH_EMPLOYMENT }) as any;
  const [employmentFilter, setFilter] = useState(DEFAULT_FILTER) as any;

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
    onClick={() => {
      if (tract.employment !== CRAZY_HIGH_EMPLOYMENT) {
        setTract({ employment: CRAZY_HIGH_EMPLOYMENT });
        setFilter(DEFAULT_FILTER);
      }
    }}
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
          ...COLOR_RANGE,
          '#fff'
        ],
        'fill-opacity': 0.25
      }}
    />
    <Layer {...highlightLayer} filter={filter} />
    </Source>
  </MapGL>;
}
