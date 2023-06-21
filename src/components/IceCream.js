import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import {iceSlice} from '../Redux/iceCream/iceCreamConfig'

function IceCream() {
    const {buyIce}  = iceSlice.actions
    const [inp , setInp] = useState()
    const numOfIce = useSelector(state => state.iceCream.numOfIce)
    const dispatch = useDispatch()
    console.log(inp);
    
  return (
    <div>
        <h1>ice cream - {numOfIce}</h1>
        <button onClick={()=> dispatch(buyIce(inp))}>buy {inp} cakes</button>
        <input onChange={(e)=> setInp(e.target.value)} type="number" />
    </div>
  )
}

export default IceCream