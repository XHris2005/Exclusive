import React from "react";
import { useContext } from "react";
import { Navigate } from "react-router-dom";
import { AuthContext } from "../Context/AuthContext";
const PrivateRoutes = ({children}) => {
    const {user} = useContext(AuthContext)
    return user ? children : <Navigate to='/Login'></Navigate>;
}

export default PrivateRoutes;