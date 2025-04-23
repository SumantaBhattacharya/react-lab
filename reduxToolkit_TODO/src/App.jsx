import { useState } from 'react'
// import reactLogo from './assets/react.svg'
// import viteLogo from '/vite.svg'
import './App.css'
import Todo from "./components/todo"
import { Provider } from 'react-redux'
import { store } from './app/store'

function App() {
  

  return (
    <>
      <Provider store={store}>
        <h1 style={{ fontFamily: 'Ethnocentric', fontSize: '3vw' }}>Learn about redux toolkit</h1>

        <Todo />
      </Provider>

    </>
  )
}

export default App

