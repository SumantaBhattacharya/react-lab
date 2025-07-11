import React from 'react'
import {useDispatch} from 'react-redux'
import authService from '../../appwrite/auth'
// import {logout} from '../../store/authSlice'
// import {logout} from '../../appwrite/config'
import { logout } from '../../features/auth/authSlice'

function LogoutBtn() {
    const dispatch = useDispatch()
    const logoutHandler = () => {
        authService.logout().then(() => {
            dispatch(logout()) // updated info in store
            // console.log("Logout successful")
        }).catch((error) => {
            console.error("Logout failed", error)
        })
    }
  return (
    <button
    className='inline-bock px-6 py-2 duration-200 hover:bg-blue-100 rounded-full'
    onClick={logoutHandler}
    >Logout</button>
  )
}

export default LogoutBtn