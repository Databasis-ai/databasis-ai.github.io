import * as React from 'react';
import mapboxgl from '!mapbox-gl'; // eslint-disable-line import/no-webpack-loader-syntax
import { useRef, useState, useEffect } from 'react';
mapboxgl.accessToken = 'pk.eyJ1IjoiYW5vbnJvc2UiLCJhIjoiY2xlNjloc2doMDNydjNvcHA5aDZycWdldyJ9.uLp08yXVWfvGFVGQHjRIoQ';

export default function Mapbox() {
  const mapContainer = useRef(null);
  const map = useRef(null) as any;
  const [lng, setLng] = useState(-70.9);
  const [lat, setLat] = useState(42.35);
  const [zoom, setZoom] = useState(9);

  useEffect(() => {
    if (map.current) return; // initialize map only once
    map.current = new mapboxgl.Map({
      container: mapContainer.current,
      style: 'mapbox://styles/anonrose/cle89tby2000401p973lnrnei',
      center: [lng, lat],
      zoom: zoom
    });
    map.current.on('load', () => {
      map.current.addSource('counties', {
        'type': 'tile',
        'url': 'anonrose.03pn9osn'
        });
    });

  });

  return (
    <div>
      <div style={{width: '100%', height: 400}} ref={mapContainer} className="map-container" />
    </div>
  );
}