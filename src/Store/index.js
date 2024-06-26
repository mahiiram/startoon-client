import {configureStore, createSlice} from '@reduxjs/toolkit';

const userslice = createSlice({
    name:"user",
    initialState: { isLoggedIn: false},
    reducers:{
        login(state){
            state.isLoggedIn = true;
        },
        logout(state){
            localStorage.removeItem('token')
            localStorage.removeItem('emailorname')
            state.isLoggedIn = false;
        }
    }
})

const adminslice = createSlice({
    name:'admin',
    initialState:{isLoggedIn: false},
    reducers:{
        login(state){
            state.isLoggedIn = true;
        },
        logout(state){
            localStorage.removeItem('token')
            localStorage.removeItem('adminId')
            state.isLoggedIn = false;
        },
    }
})
export const userAction =userslice.actions;
export const adminAction =adminslice.actions; 

export const store  = configureStore({
    reducer:{
        user: userslice.reducer,
        admin:adminslice.reducer,
    }
})