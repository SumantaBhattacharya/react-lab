# ***[Leaflet.js crash course with practical project | Open-source interactive maps 🔥 in Hindi](https://youtu.be/LWML4HkOAi0?si=uIIvQ6c_Q4uMcQS6)***

[![Leaflet.js crash course with practical project](https://img.youtube.com/vi/LWML4HkOAi0/0.jpg)](https://youtu.be/LWML4HkOAi0?si=uIIvQ6c_Q4uMcQS6)

```
Intro  
Mini project  
```

- ***Project***
  - *LEAFLET*
  - *STORELOCATOR*

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