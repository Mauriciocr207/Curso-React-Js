import { useContext } from "react";
import AuthContext from "../auth/context/AuthContext";
import { Navigate } from "react-router-dom";

export default function PublicRoutes({ children }) {
    const { logged } = useContext(AuthContext);

    return (logged) 
        ? <Navigate to="/marvel"/>
        : children
}