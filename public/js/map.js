
mapboxgl.accessToken = mapToken;
const map = new mapboxgl.Map({
    container: 'map', 
    style: "mapbox://styles/mapbox/streets-v11", 
    center: listing.geometry.coordinates,
    zoom: 9 
});

const marker = new mapboxgl.Marker({ color: 'red' })
    .setLngLat(listing.geometry.coordinates) 
    .setPopup(new mapboxgl.Popup({offset: 25})
    .setHTML(`<h5>${listing.location}</h5><p>Exect Location will be provided after booking!</p>`))
    .addTo(map);

