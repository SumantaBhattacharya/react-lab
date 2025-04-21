const socket = io(); // io will be registered as a global variable

// this will log the socket object to the console
// console.log(socket); 

if (navigator.geolocation) {// navigator is installed in windows by default
    navigator.geolocation.watchPosition((position)=>{
        // console.log(position); // this will log the position object to the console
        
        const { latitude, longitude } = position.coords; // destructuring the position object to get latitude and longitude

        // console.log(latitude, longitude); // this will log the latitude and longitude to the console

        // send the latitude and longitude to the server
        socket.emit("send-location", {
            latitude,
            longitude,
        });

    },(err) =>{
        console.log(err); // this will log the error object to the console
        alert("Please allow location access"); // this will show an alert to the user
    },{
        enableHighAccuracy: true, // this will enable high accuracy mode
        maximumAge: 0, // this will set the maximum age of the location to 0 seconds means no caching
        timeout: 1000, // this will set the timeout to 5 seconds
    })
}else {
    alert("Geolocation is not supported by this browser."); // this will show an alert to the user
}

var map = L.map('map').setView([22.9074872, 79.07306671], 5);// center of the earth [0, 0], 10

L.tileLayer('https://tile.openstreetmap.org/{z}/{x}/{y}.png', {
    attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
}).addTo(map);

const customMarker = {
    iconUrl: 'https://cdn-icons-png.flaticon.com/512/3800/3800793.png',
    iconSize: [50, 50], // size of the icon
    iconAnchor: [25, 50], // point of the icon which will correspond to marker's location
    popupAnchor: [0, -40], // point from which the popup should open relative to the iconAnchor
    className: 'blinking', // class name for the icon
}

const marker = L.marker([22.9074872, 79.07306671], {
    icon: L.icon(customMarker), 
    title: 'This is a marker', // title of the marker
    alt: 'This is a marker', // alt text for the marker
    opacity: 0.8, // opacity of the marker
    draggable: true, // make the marker draggable
})

// now we have display the data on the map. client-side
socket.on("receive-location", function (data) { // we can direcltly access due to spread instead of data.id, data.latitude and data.longitude
    const { id, latitude, longitude } = data; // destructuring the data object to get id, latitude and longitude

    map.setView([latitude, longitude], 16); // set the view of the map to the latitude and longitude of the marker

    if(marker[id]){// marker is just a single marker, not 
        marker[id].setLatLng([latitude, longitude]); // set the latitude and longitude of the marker
    }else{// if not exists always then create a marker
        marker[id] = L.marker([latitude, longitude],{
            icon: L.icon(customMarker), 
            opacity: 0.8, 
            draggable: true, // make the marker draggable
        }).addTo(map); 
    }

})


socket.on("user-disconnected", function (id) { // we can direcltly access due to spread instead of data.id, data.latitude and data.longitude
    if (marker[id]) {
        map.removeLayer(marker[id]); // remove the marker from the map
        marker[id].remove(); // remove the marker from the map
        delete marker[id]; 
        // delete the marker from the marker object - key value
    }
})
  