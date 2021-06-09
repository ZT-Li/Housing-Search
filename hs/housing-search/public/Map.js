function initMap() {
    let mapOption = {
        center: { lat: 37.335480, lng: -121.893028 },
        zoom: 8,
    };

    map = new google.maps.Map(document.getElementById("root"), mapOption);

    //marker img
    let img = {
        url: "https://cdn2.iconfinder.com/data/icons/fashion-store-color/30/high_heels-512.png",
        scaledSize: new google.maps.Size(22, 32)
    }

    //markers
    function addMarkers(properties) {
        let markerOption = {
            position: properties.coordinates,
            map: map,
            icon: img
        }
        let marker = new google.maps.Marker(markerOption);
        //check and add info window
        if (properties.content) {
            let infoWindow = new google.maps.InfoWindow({
                content: properties.content
            })
            marker.addListener('click', function () {
                infoWindow.open(map, marker)
            })
        }
    }

    //add the markers with their properties
    addMarkers({
        coordinates: { lat: 37.71365, lng: -122.40439 },
        content: "<h3 style='color: purple'>fat's night club</h3>"
    });
    addMarkers({
        coordinates: { lat: 37.72612, lng: -122.17113 },
        content: "<h3 style='color: purple'>lance's night club</h3>"
    });
    addMarkers({
        coordinates: { lat: 37.76760, lng: -122.42953 },
        content: "<h3 style='color: purple'>fish's night club</h3>"
    });
}