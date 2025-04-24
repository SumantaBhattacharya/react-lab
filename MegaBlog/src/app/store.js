// https://redux.js.org/tutorials/quick-start#add-slice-reducers-to-the-store

import { configureStore } from '@reduxjs/toolkit'
import authReducer from '../features/auth/authSlice';

const store = configureStore({
    reducer: {
        auth: authReducer,
    }
})

export default store; // exporting the store object, so we can use it in the app