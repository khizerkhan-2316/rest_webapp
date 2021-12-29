import './Map.css';
import React, { useRef, useEffect } from 'react';
import mapboxgl from '!mapbox-gl'; // eslint-disable-line import/no-webpack-loader-syntax
mapboxgl.accessToken =
  'pk.eyJ1Ijoia2hpemVyMjMxNiIsImEiOiJja2Zxa2V2MjgwbG9uMnZwNnFybXVjY3kxIn0.xvvNOWTvXe8Sk_4XPrYZhA';
const Map = (props) => {
  const mapContainer = useRef(null);
  const map = useRef(null);
  const zoom = 6.1;
  useEffect(() => {
    if (map.current) return; // initialize map only once
    map.current = new mapboxgl.Map({
      container: mapContainer.current,
      style: 'mapbox://styles/mapbox/streets-v11',
      center: [
        localStorage.getItem('longitude'),
        localStorage.getItem('latitude'),
      ],
      zoom: zoom,
    });
  });

  return <div ref={mapContainer} className="map-container" />;
};

export default Map;
