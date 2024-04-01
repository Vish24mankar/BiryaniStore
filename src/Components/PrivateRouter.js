import React, { useEffect } from 'react'
import { useNavigate } from 'react-router-dom'

const PrivateRouter = ({children, component}) => {
    const navigate = useNavigate();
    const isUser = !!sessionStorage.getItem("isLogin") || false;

    useEffect(() =>{
        if(isUser){
            navigate("/login")
        }
    }, [isUser,navigate])
  return (
    <>{component}</>
  )
}

export default PrivateRouter