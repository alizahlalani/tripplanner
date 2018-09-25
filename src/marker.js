const mapboxgl = require('mapbox-gl');

// Activity: http://i.imgur.com/WbMOfMl.png
// Hotel: http://i.imgur.com/D9574Cu.png
// Restaurant: http://i.imgur.com/cqR6pUI.png

module.exports = (lat, long, type) => {
  let link = '';
  let foo = document.createElement('div');
  foo.style.width = '32px';
  foo.style.height = '39px';
  switch (type) {
    case 'activity':
      link = 'http://i.imgur.com/WbMOfMl.png';
      break;
    case 'hotel':
      link = 'http://i.imgur.com/D9574Cu.png';
      break;
    case 'restaurant':
      link = 'http://i.imgur.com/cqR6pUI.png';
      break;
    default:
      link = 'broken';
  }
  foo.style.backgroundImage = `url(${link})`;

  return new mapboxgl.Marker(foo).setLngLat([long, lat]);
};
