class CreateStations {
    constructor() {
        this.getDataOnJcDecauxSite()
    }

    getDataOnJcDecauxSite() {
        // Get data on Jc Decaux's site
        fetch('https://api.jcdecaux.com/vls/v1/stations?contract=Lyon&apiKey=a1be99af7c7f1692021f6fb548f02407049d3e7a')
            .then(function (response) {
                return response.json();
            })
            .then(function (data) {

                for (let i = 0; i < data.length; i++) {
                    // create a DOM element for each stations
                    const station = document.createElement('div');

                    // Selected icon for the station with class name
                    if (data[i].status === 'CLOSED') {
                        station.className = 'closed not-available';
                    } else if (data[i].available_bike_stands === 0) {
                        station.className = 'empty not-available';
                    } else station.className = 'open';

                    // Add position
                    station.geometry = [data[i].position.lng, data[i].position.lat];

                    // Properties of the station
                    station.properties = {};
                    station.properties.name = data[i].name;
                    station.properties.address = data[i].address;
                    station.properties.bike_stands = data[i].bike_stands;
                    station.properties.available_bike_stands = data[i].available_bike_stands;

                    // Add event listener on click to view station info     
                    station.addEventListener('click', () => {
                        $('#name').html('').append(`${station.properties.name.substring(7)}`)
                        $('#places').html('').append(`${station.properties.bike_stands}`);
                        $('#available').html('').append(`${station.properties.available_bike_stands}`)
                        $('#address').html('').append(`${station.properties.address}`);

                        // Center map and zoom on station
                        createMap.map.easeTo({
                            center: station.geometry,
                            zoom: 15
                        });
                    })

                    // add markers to map
                    new mapboxgl.Marker(station)
                        .setLngLat(station.geometry)
                        .addTo(createMap.map);
                }
            })
            .catch(function (error) {
                console.log('Il y a eu un problème avec le chargement des données' + error);
            });
    }
}