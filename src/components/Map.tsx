import type { LegacyRef } from 'react';
import React, { useRef, useEffect } from 'react';
import maplibregl from 'maplibre-gl';
import { CogIcon } from './icons/CogIcon';

export default function MapboxMap() {

  const mapContainerRef = useRef<HTMLElement>(window?.document?.createElement('div'));

  useEffect(() => {
    const map = new maplibregl.Map({
      container: mapContainerRef.current,
      style: 'https://api.maptiler.com/maps/streets/style.json?key=BEPD3dKrYKPpIjMmbxes',
      center: [-121.315308, 44.0582],
      zoom: 12
    });

    map.addControl(new maplibregl.NavigationControl({}), 'top-right');

    new maplibregl.Marker({ color: "#FF0000" })
      .setLngLat([139.7525, 35.6846])
      .addTo(map);

    return () => {
      map.remove();
    }
  }, []);

  return (
    <div>
      <div style={
        { height: 450, width: '100%' }
      }
      ref={mapContainerRef as LegacyRef<HTMLDivElement> } className="map-container" />
    </div>
  )
}
