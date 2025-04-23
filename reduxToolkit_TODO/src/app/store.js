import { configureStore } from '@reduxjs/toolkit'
import todoReducer from "../features/todo/todoSlice"

// we pass object inside store method
export const store = configureStore({
    reducer: todoReducer, // it is already an object
})

// https://redux.js.org/tutorials/quick-start#add-slice-reducers-to-the-store