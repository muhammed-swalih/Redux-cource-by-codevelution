import {configureStore,applyMiddleware} from '@reduxjs/toolkit'
import {combineReducers} from 'redux'
import {cakeSlice} from './cake/cakeConf.js'
import {userSlice} from './user/userConfig.js'
import {iceSlice} from './iceCream/iceCreamConfig.js'
import thunkMiddleware from 'redux-thunk'
import {composeWithDevTools} from 'redux-devtools-extension'

const middleware = [thunkMiddleware]


const rootReducer = combineReducers({
    user : userSlice.reducer,
    cake : cakeSlice.reducer,
    iceCream : iceSlice.reducer
})

const store = configureStore({
    reducer : rootReducer,
    middleware : middleware,
    
})

export default store