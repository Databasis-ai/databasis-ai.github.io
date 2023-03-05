import { useRef } from 'react';
import { useState, useCallback, useMemo } from 'react';
import type { MapRef } from 'react-map-gl';
import Map, { Source, Layer } from 'react-map-gl';
const CRAZY_HIGH_EMPLOYMENT = 0;
const DEFAULT_FILTER = ["<", ["get", "employment"], CRAZY_HIGH_EMPLOYMENT];
import { COLOR_RANGE } from '../lib/constants';
import bbox from '@turf/bbox';

const highlightLayer = {
  id: 'tractsclippedbystatenew-highlighted',
  type: 'fill',
  source: 'tractsclippedbystatenew',
  'source-layer': 'tractsclippedbystatenew',
  paint: {
    'fill-outline-color': '#484896',
    'fill-color': '#6e599f',
    'fill-opacity': 0.5
  }
};

export default function Mapbox() {
  const mapRef = useRef<MapRef>();

  const [tract, setTract] = useState({ employment: CRAZY_HIGH_EMPLOYMENT }) as any;
  const [employmentFilter, setFilter] = useState(DEFAULT_FILTER) as any;

  const onClick = useCallback((event: any) => {
    const county = event.features && event.features[0];

    setFilter(["==", ["get", "geoid"], county.properties.geoid]);
    setTract({
      longitude: event.lngLat.lng,
      latitude: event.lngLat.lat,
      employment: county.properties.employment,
      geoid: county.properties.geoid
    });

    const [minLng, minLat, maxLng, maxLat] = bbox(county);
      mapRef?.current?.fitBounds(
        [
          [minLng, minLat],
          [maxLng, maxLat]
        ],
        { padding: 40, duration: 1000 }
      );

  }, []);

  const filter = useMemo(() => employmentFilter, [employmentFilter]);

  return <Map
    ref={mapRef}
    initialViewState={{
      latitude: 37.78,
      longitude: -122.4,
      zoom: 11
    }}
    style={{ width: '100%', height: '400px' }}
    mapStyle='mapbox://styles/mapbox/light-v9'
    mapboxAccessToken={'pk.eyJ1IjoiYW5vbnJvc2UiLCJhIjoiY2xlNjloc2doMDNydjNvcHA5aDZycWdldyJ9.uLp08yXVWfvGFVGQHjRIoQ'}
    onClick={onClick}
    interactiveLayerIds={['tractsclippedbystatenew']}>
    <Source id='tractsclippedbystatenew' type='vector' url='mapbox://anonrose.bdj30eoj' >
      <Layer
        id='tractsclippedbystatenew'
        type='fill'
          source='tractsclippedbystatenew'
          source-layer='tractsclippedbystatenew'
          paint={{
            "fill-color": [
              "step",
              ["get", "total_est_2013-2017"],
              ...COLOR_RANGE,
              '#000'
            ],
            'fill-opacity': 0.45
          }}
      />
      <Layer {...highlightLayer} filter={filter} />
    </Source>
  </Map>;
}
