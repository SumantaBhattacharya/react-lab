import React, { useState, useEffect } from 'react'
import { useSelector } from 'react-redux'
import { useNavigate } from 'react-router-dom'

export default function Protected_Auth(
    {
        children,
        authentication = true,
    }

) {

    const navigate = useNavigate()
    const [loader, setLoading] = useState(true)

    const authStatus = useSelector((state) => {
        return state.auth.status
    })

    useEffect(() => {

        //TODO: make it more easy to understand

        // if (authStatus ===true){
        //     navigate("/")
        // } else if (authStatus === false) {
        //     navigate("/login")
        // }

        //let authValue = authStatus === true ? true : false

        //     true        &&  false !== true => true 
        if (authentication && authStatus !== true) {
            navigate('/login')
            //     false          &&   true !== true => false
        } else if (!authentication && authStatus !== authentication) {
            navigate('/')
        }
        setLoading(false)
    }, [authStatus, navigate, authentication])

    // could have created a animation here on loading
    return loader ? <h1>Loading...</h1> : <>{children}</>
}

// export default AuthLayout
