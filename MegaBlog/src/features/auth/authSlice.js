// https://redux.js.org/tutorials/quick-start#create-a-redux-state-slice

import { createSlice } from '@reduxjs/toolkit'

// is user is authenticacated or not
const initialState = {
    status: false, // byDefault the user is not authenticated
    userData: null, // no user data initially

}

const authSlice = createSlice({
    name: 'auth',
    initialState,
    reducers:{
        login: (state, action)=>{
            state.status = true;

            state.userData = action.payload.userData; // payload is the user data
        },

        logout: (state, action)=>{
            state.status = false;
            state.userData = null; // remove user data
        }

    }
})

export const { login, logout} = authSlice.actions

export default authSlice.reducer;