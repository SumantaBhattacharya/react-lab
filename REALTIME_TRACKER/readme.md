`npm i express ejs`
`npm i socket.io`
`npm install -g nodemon`

<!--  auth dark-mode tracker -->

https://socket.io/docs/v4/client-installation/
https://socket.io/docs/v4/client-installation/#installation
https://socket.io/docs/v4/client-socket-instance/#socketid

---

# [Backend Project 🚀] Realtime Device Track | Map with Node.js, Express and Socket.io | Maps | Leaflet

[![Realtime Device Track | Map with Node.js, Express & Socket.io](https://img.youtube.com/vi/JmpDGMgRFfo/maxresdefault.jpg)](https://youtu.be/JmpDGMgRFfo?si=JX2LW7rEf9Q8caA-)

Check if the browser supports geolocation.

Set options for high accuracy, a 5-second timeout, and no caching. Use `watchPosition` to track the user's location continuously. 

Emit the latitude and longitude via a socket with `"send-location"`. Log any errors to the console.

Initialize a map centered at coordinates `(0, 0)` with a zoom level of `15` using Leaflet. Add OpenStreetMap tiles to the map.

Create an empty object `markers`.

When receiving location data via the socket, extract `id`, `latitude`, and `longitude`, and center the map on the new coordinates.

If a marker for the `id` exists, update its position. Otherwise, create a new marker at the given coordinates and add it to the map. When a user disconnects, remove their marker from the map and delete it from `markers`.
```js
res.send(
    `
    <style>
      @font-face {
        font-family: 'CrassRoots';
        src: url('/fonts/!crass roots ofl.ttf') format('truetype');
      }
    </style>
    <h1 style="font-family: 'CrassRoots', sans-serif; background-color: blue; color: white; text-align: center; padding: 20px;">
      Realtime Tracker
    </h1>
  `
)
```