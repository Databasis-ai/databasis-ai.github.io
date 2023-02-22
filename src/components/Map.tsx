import * as React from 'react';
import Map from 'react-map-gl';
//  [, 44.0582],
export default function App() {
  return (
    <div>

      <Map
        initialViewState={{
          latitude: 43.000000,
          longitude: -75.000000,
          zoom: 6
        }}
        style={{width: '100%', height: 400}}
        mapStyle="mapbox://styles/anonrose/clegajk2o000a01potmh7302u"
        mapboxAccessToken={'pk.eyJ1IjoiYW5vbnJvc2UiLCJhIjoiY2xlNjloc2doMDNydjNvcHA5aDZycWdldyJ9.uLp08yXVWfvGFVGQHjRIoQ'}
      >
      </Map>
    </div>
  );
}
