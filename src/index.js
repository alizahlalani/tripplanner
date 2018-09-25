const mapboxgl = require('mapbox-gl');
const buildMarker = require('./marker');

mapboxgl.accessToken =
  'pk.eyJ1IjoibGl6YXN3ZWV0MzczNyIsImEiOiJjam1pNWFrYWUwMWY0M3VvMWNmeXh5OXM4In0.9AOgV6rM0JIQkJY6NmMeZg';

const map = new mapboxgl.Map({
  container: 'map',
  center: [-74.009, 40.705], // FullStack NY coordinates; alternatively, use [-87.6354, 41.8885] for Chicago
  zoom: 12, // starting zoom
  style: 'mapbox://styles/mapbox/streets-v10', // mapbox has lots of different map styles available.
});

// let foo = document.createElement('div');
// foo.style.width = '32px';
// foo.style.height = '39px';
// foo.style.backgroundImage = 'url(http://i.imgur.com/WbMOfMl.png)';

//let marker = new mapboxgl.Marker(foo).setLngLat([-74.009, 40.705]).addTo(map);

let marker = buildMarker(40.705, -74.009, 'hotel');
marker.addTo(map);
