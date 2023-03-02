import { useRef } from 'react';
import { useState, useCallback, useMemo } from 'react';
import type { MapRef } from 'react-map-gl';
import Map, { Source, Layer } from 'react-map-gl';
const CRAZY_HIGH_EMPLOYMENT = 0;
const DEFAULT_FILTER = ["<", ["get", "employment"], CRAZY_HIGH_EMPLOYMENT];
import { COLOR_RANGE } from '../lib/constants';
import bbox from '@turf/bbox';

const highlightLayer = {
  id: 'tracts-highlighted',
  type: 'fill',
  source: 'tracts',
  'source-layer': 'tracts',
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
    console.log(event);

    const county = event.features && event.features[0];

    setFilter(["==", ["get", "employment"], county.properties.employment]);
    setTract({
      longitude: event.lngLat.lng,
      latitude: event.lngLat.lat,
      employment: county.properties.employment
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

  const filter = useMemo(() => employmentFilter, [tract?.employment]);

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
    interactiveLayerIds={['tracts']}>
    <Source id='tracts' type='vector' url='mapbox://anonrose.4237a8lo' >
      <Layer
        id='tracts'
        type='fill'
        source='tracts'
        source-layer='tracts'
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
  </Map>;
}
