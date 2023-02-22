import React, { useRef, useEffect, LegacyRef } from 'react';
import maplibregl from 'maplibre-gl';


export default function MapboxMap() {

  const mapContainerRef = useRef<HTMLElement>(window?.document?.createElement('div'));

  useEffect(() => {
    // eslint-disable-next-line @typescript-eslint/no-unsafe-assignment, @typescript-eslint/no-unsafe-call, @typescript-eslint/no-unsafe-member-access
    const map = new maplibregl.Map({
      container: mapContainerRef.current,
      style: 'https://api.maptiler.com/maps/streets/style.json?key=BEPD3dKrYKPpIjMmbxes',
      center: [-121.315308, 44.0582],
      zoom: 12
    });

    // eslint-disable-next-line @typescript-eslint/no-unsafe-call, @typescript-eslint/no-unsafe-member-access
    map.addControl(new maplibregl.NavigationControl({}), 'top-right');

    // eslint-disable-next-line @typescript-eslint/no-unsafe-member-access, @typescript-eslint/no-unsafe-call
    new maplibregl.Marker({ color: "#FF0000" })
      .setLngLat([139.7525, 35.6846])
      .addTo(map);

    return () => {
      // eslint-disable-next-line @typescript-eslint/no-unsafe-member-access, @typescript-eslint/no-unsafe-call
      map.remove();
    }
  }, []);

  return (
    <div>
      <div style={
        { height: 450, width: '100%' }
      } ref={mapContainerRef as LegacyRef<HTMLDivElement> } className="map-container" />
    </div>
  )
}
