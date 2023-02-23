import * as React from 'react';
import Map from 'react-map-gl';
export default function App() {
  return (
    <div>
      <Map
        initialViewState={{
          latitude: 33.7580624,
          longitude: -84.3980817,
          zoom: 12
        }}
        style={{width: '100%', height: 400}}
        mapStyle="mapbox://styles/anonrose/clegajk2o000a01potmh7302u"
        mapboxAccessToken={'pk.eyJ1IjoiYW5vbnJvc2UiLCJhIjoiY2xlNjloc2doMDNydjNvcHA5aDZycWdldyJ9.uLp08yXVWfvGFVGQHjRIoQ'}>
      </Map>
    </div>
  );
}
