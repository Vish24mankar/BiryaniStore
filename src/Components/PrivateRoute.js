import React, { useEffect } from 'react'
import { useNavigate } from 'react-router-dom'

const PrivateRoute = ({children,component}) => {
    const navigate = useNavigate();
    const isuser = !!sessionStorage.getItem("isLogin") || false;

    useEffect(() => {
        if(!isuser){
            navigate("/login")
        }
    },[isuser,navigate])
  return (
    <div>
        {component}
    </div>
  )
}

export default PrivateRoute