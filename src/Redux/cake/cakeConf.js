import {configureStore , createSlice} from '@reduxjs/toolkit'

export const cakeSlice = createSlice({
    name : 'cakes',
    initialState : {
        numOfCakes : 10
    },
    reducers : {
        buyCake : (state) => {
            state.numOfCakes -= 1 ;
        },
        giveCake : (state) => {
            state.numOfCakes += 1;
        }
    }
})

