
// Create map
const createMap = {
    myApiKey: mapboxgl.accessToken = 'pk.eyJ1IjoicG9tcyIsImEiOiJjanNhdDFjMzcwMjc1NDNteWhvZnB3b2NhIn0.zHc9oXa6MDaYoaJgp4r2wA',
    map: new mapboxgl.Map({
        container: 'map-container',
        style: 'mapbox://styles/mapbox/streets-v11',
        center: [4.85, 45.75],
        zoom: 13 
    }),
}

// Add zoom and rotation controls to the map.
createMap.map.addControl(new mapboxgl.NavigationControl());

