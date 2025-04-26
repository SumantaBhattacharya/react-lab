# ***[Leaflet.js crash course with practical project | Open-source interactive maps 🔥 in Hindi](https://youtu.be/LWML4HkOAi0?si=uIIvQ6c_Q4uMcQS6)***

[![Leaflet.js crash course with practical project](https://img.youtube.com/vi/LWML4HkOAi0/0.jpg)](https://youtu.be/LWML4HkOAi0?si=uIIvQ6c_Q4uMcQS6)

```
Intro  
Mini project  
```

- ***Project***
  - *LEAFLET*
  - *STORELOCATOR*


# [Backend Project 🚀] Realtime Device Track | Map with Node.js, Express and Socket.io | Maps | Leaflet

[![Realtime Device Track | Map with Node.js, Express & Socket.io](https://img.youtube.com/vi/JmpDGMgRFfo/maxresdefault.jpg)](https://youtu.be/JmpDGMgRFfo?si=JX2LW7rEf9Q8caA-)

Check if the browser supports geolocation.

Set options for high accuracy, a 5-second timeout, and no caching. Use `watchPosition` to track the user's location continuously. 

Emit the latitude and longitude via a socket with `"send-location"`. Log any errors to the console.

Initialize a map centered at coordinates `(0, 0)` with a zoom level of `15` using Leaflet. Add OpenStreetMap tiles to the map.

Create an empty object `markers`.

When receiving location data via the socket, extract `id`, `latitude`, and `longitude`, and center the map on the new coordinates.

If a marker for the `id` exists, update its position. Otherwise, create a new marker at the given coordinates and add it to the map. When a user disconnects, remove their marker from the map and delete it from `markers`.

# ***Redux***

- State Management Library for JS Apps
- Redux(indipendent state management library) is build for larger, more complex applictaions.
- `Redux Tookit(rtk)` is the official recommandation of writting Redux code

<!-- - State
  - Central Store(It(Object) is a central library that stores the state.) -->

`react-redux` is a library with the help of this library we can use reduxin react UI library.

![Redux-A JS library for predictable and maintainable global state management](<WhatsApp Image 2025-04-15 at 11.33.59_974cea5e.jpg>)

- `Reducers`(*Pure functions use to update(mutating the state)*)

<span style="color: rgb(0, 189, 228); font-weight: 700; font-size: 6vw; border-bottom: 2px solid white;">Understanding Terms</span>

`Store:` **A centralized store holds the whole state tree of your application.**

`Reducers:` **Functions that take the current state and an action as arguments, and return a new state result. In other words, (state, action) => newState.**
 
 - `useSelector`
 - `useDispatch`

`Action:` **It is a plain JavaScript object that has a type field, (like events)**

`Slice:` **Collection of Redux reducer logic and actions for a single together in a single file**

> *The Flex architecture, designed by Facebook, is a modular and scalable architecture used primarily for building React applications used for state management, data flow*.

* *You should never mutate your state directly in Redux.*

> *Redux Thunk and Redux Saga These are both middleware libraries for handling side effects (like async API calls) in Redux.*

>  *Redux Toolkit (RTK) brings a lot more abstraction*