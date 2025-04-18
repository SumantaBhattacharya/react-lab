const map = L.map("map").setView([22.9074872, 79.07306671], 5); // id of the div where the map will be rendered
// co-ordinates by default london - latitude and longitude, zoom level

const tileUrl = "https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"; // dynamic values
// 'https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png'; // URL of the tile server. "s" is sub-domain, {zoom level}/{x-coordinate}/{y-coordinate} are placeholders for the tile coordinates

const attribution =
  '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors, Coded by coder\'s gyan with ♥'; // for no copy right issue

const tiles = L.tileLayer(tileUrl, { attribution }); // second option is an object
// L.tileLayer(tileUrl, { attribution }); it is method

tiles.addTo(map); // add the tile layer to the map

// population
const CircleL = L.circle([22.9074872, 79.07306671], {
  stroke: false, // by default true, if false then only fill color will be visible
  // fillColor: '#f03',
  color: "red", // color of the circle
  fillOpacity: 0.5, // 0 to 1, 0 is transparent and 1 is opaque/ means not transparent at all
  radius: 500000, // radius in meters
});
// .addTo(map); // add the circle to the map

CircleL.addTo(map); // add the circle to the map

/*
CircleL.bindPopup('This is a circle'); // bind popup to the circle

CircleL.bindTooltip('This is a circle'); // bind tooltip to the circle
CircleL.openTooltip(); // open the tooltip by default

CircleL.closeTooltip(); // close the tooltip by default
CircleL.openPopup(); // open the popup by default
CircleL.closePopup(); // close the popup by default

CircleL.setStyle({ color: 'blue' }); // set the style of the circle
CircleL.setRadius(1000000); // set the radius of the circle
CircleL.setLatLng([22.9074872, 79.07306671]); // set the latlng of the circle

*/

const reactangle = L.rectangle(
  [
    [54.559322, -5.767822],
    [56.1210604, -3.02124],
  ],
  {
    color: "yellow",
    weight: 1,
    stroke: true,
    fillColor: "#ff7800",
    fill: true,
    fillOpacity: 0.2,
  }
).addTo(map); // create a rectangle with the given bounds and options

/*
reactangle.bindPopup('This is a rectangle'); // bind popup to the rectangle
reactangle.bindTooltip('This is a rectangle'); // bind tooltip to the rectangle
reactangle.openTooltip(); // open the tooltip by default
reactangle.openPopup(); // open the popup by default
reactangle.closeTooltip(); // close the tooltip by default
reactangle.closePopup(); // close the popup by default
reactangle.setStyle({ color: 'blue' }); // set the style of the rectangle
*/

// You can also pass an array of arrays of latlngs, with the first array representing the outer shape and the other arrays representing holes in the outer shape:
// Additionally, you can pass a multi-dimensional array to represent a MultiPolygon shape.
const barmudaTriangleCoordinates = [
  [
    [25.774, -80.19],
    [18.466, -66.118],
    [32.321, -64.757],
  ],
];

var polygon = L.polygon([barmudaTriangleCoordinates]).addTo(map);

polygon.setStyle({ color: "blue" });
polygon.bindPopup("This is a polygon"); // bind popup to the polygon
/*
polygon.bindTooltip('This is a polygon'); // bind tooltip to the polygon
polygon.openTooltip(); // open the tooltip by default
polygon.openPopup(); // open the popup by default
polygon.closeTooltip(); // close the tooltip by default
polygon.closePopup(); // close the popup by default
*/

const polyline = L.polyline(
  [
    [
      [45.51, -122.68],
      [37.77, -122.43],
      [34.04, -118.2],
    ],
    [
      [40.78, -73.91],
      [41.83, -87.62],
      [32.76, -96.72],
    ],
  ],
  {
    color: "red",
    weight: 5,
    opacity: 0.7,
    smoothFactor: 1,
  }
).addTo(map); // create a polyline with the given coordinates

// zoom the map to the polyline
map.fitBounds(polyline.getBounds());

// raduis of the circle marker is in pixels, not meters
// circle marker is used to mark a point on the map
const circle_Marker = L.circleMarker([18.920675417289807, 72.82952788802635], {
  // styling is done in object
  stroke: false,
  // fillColor: '#f03',
  color: "corol",
  fillOpacity: 0.5,
  radius: 10,
}).addTo(map);

const customIcon = {
  iconUrl: "https://cdn-icons-png.flaticon.com/512/4055/4055187.png",
  iconSize: [50, 50], // size of the icon, weight and height of the icon in pixels
  iconAnchor: [25, 50], // point of the icon which will correspond to marker's location
  popupAnchor: [0, -50], // point from which the popup should open relative to the iconAnchor
};

/*
const customIcon = L.icon({
  iconUrl: "https://cdn-icons-png.flaticon.com/512/4055/4055187.png",
  iconSize: [50, 50], // size of the icon
  iconAnchor: [25, 50], // point of the icon which will correspond to marker's location
  popupAnchor: [0, -50], // point from which the popup should open relative to the iconAnchor
});
*/

const marker = L.marker([22.5726, 88.3639], {
  icon: L.icon(customIcon), // custom icon for the marker
  title: "This is a marker", // title of the marker
  alt: "This is a marker", // alt text for the marker
  opacity: 0.8, // opacity of the marker
  draggable: true, // make the marker draggable
})
  .on("click", function (e) {
    // add click event to the marker
    alert("Marker clicked!"); // alert on click
  })
  .on("dragend", function (e) {
    // add dragend event to the marker
    alert("Marker dragged!"); // alert on drag end
  });

marker.bindPopup("<h2 class='Marker' >Hey this is a marker</h2>"); // bind popup to the marker
marker
  .on("mouseover", function (e) {
    // add mouseover event to the marker

    this.openPopup(); // open the popup on mouseover
  })
  .on("mouseout", function (e) {
    // add mouseout event to the marker
    this.closePopup(); // close the popup on mouseout
  });



marker.addTo(map);

L.marker([28.539914829877652, 77.27116736919079], {
  icon: L.icon(customIcon), // custom icon for the marker
  title: "This is a marker", // title of the marker
  alt: "This is a marker", // alt text for the marker
  opacity: 0.8, // opacity of the marker
  draggable: true, // make the marker draggable
})
  .on("click", function (e) {
    // add click event to the marker
    alert("Marker clicked!"); // alert on click
  })
  .on("dragend", function (e) {
    // add dragend event to the marker
    alert("Marker dragged!"); // alert on drag end
  }).bindPopup('<p>Hello world!<br />This is a nice popup.</p>').addTo(map); // add the marker to the map
  

/*
marker.bindTooltip('This is a marker'); // bind tooltip to the marker
marker.openTooltip(); // open the tooltip by default
marker.openPopup(); // open the popup by default
marker.closeTooltip(); // close the tooltip by default
marker.closePopup(); // close the popup by default
*/
