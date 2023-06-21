import { createSlice } from "@reduxjs/toolkit";

export const iceSlice = createSlice({
    name : 'ice cream',
    initialState : {
        numOfIce : 20,
    },
    reducers : {
        buyIce : (state,action) => {
            state.numOfIce -= action.payload;
        }
    }
})