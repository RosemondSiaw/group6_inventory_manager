import React from 'react'
import { Outlet, Navigate } from 'react-router-dom'
import { useAuth } from '../../components/contexts/AuthContext'

const PrivateRoute = ({ children }) => {
    let { currentUser } = useAuth()
    
    if (currentUser) {
        return <Outlet />;
    } else {
        return <Navigate to="/login" />;
    }
}

export default PrivateRoute