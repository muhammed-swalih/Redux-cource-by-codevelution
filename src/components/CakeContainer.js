import React from 'react'
import {cakeSlice} from '../Redux/cake/cakeConf'
import {connect} from 'react-redux'
import {useSelector , useDispatch} from 'react-redux'
function CakeContainer(props) {
    const {buyCake,giveCake} = cakeSlice.actions
    const numOfCakes = useSelector(state => state.cake.numOfCakes); 
    const dispatch = useDispatch()
  return (
    <div>
        <h1>number of cakes : {numOfCakes}</h1>
        <button onClick={()=> dispatch(buyCake())}>buy cake</button>
        <button onClick={()=> dispatch(giveCake())}>give cake</button>
    </div>
  )
}



export default CakeContainer