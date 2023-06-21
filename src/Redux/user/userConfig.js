import { createSlice } from "@reduxjs/toolkit"
import axios from 'axios'

export const userSlice = createSlice ({
    name : 'user details',
    initialState : {
        loading : false,
        data : [],
        error : ''
    },
    reducers : {
        fetchUserRequest : (state)=> {
            state.loading = true;
        },

        fetchUserSuccess : (state,action)=> {
            state.loading = false;
            state.data = action.payload;
            state.error = '';
        },

        fetchUserFailure : (state,action) => {
            state.loading = false;
            state.data = [];
            state.error = action.payload;
            
        }
    }
})

const {fetchUserRequest , fetchUserSuccess , fetchUserFailure}  = userSlice.actions

export const fetchUser = () => {
    return async (dispatch) => {
        dispatch(fetchUserRequest())
        try {
            const response = await axios.get('https://jsonplaceholder.typicode.com/users')
            const data = await response.data;
            const username = data.map((uname) => uname.name)
            dispatch(fetchUserSuccess(username))
            console.log(username);
        } catch (error) {
            console.log(error.message);
            dispatch(fetchUserFailure(error.message))
        }
    }
}