import React from 'react'
import { userSlice,fetchUser } from '../Redux/user/userConfig'
import {connect, useDispatch, useSelector} from 'react-redux'
function UserDetails() {
    const usernames  = useSelector(state => state.user.data)
    const dispatch = useDispatch()
    console.log(usernames);
  return (
    <div>
        <button onClick={()=> dispatch(fetchUser())}>generate usernames</button>
        <p>{usernames}</p>
        
    </div>
  )
}



export default UserDetails