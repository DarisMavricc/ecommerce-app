import { Navigate, useNavigate } from "react-router-dom"
import { AuthContext,currentUser } from "../Context/AuthContext";
import { useContext, useEffect } from "react";
import axios from "axios";

export const Logout = () => {

    const navigate = useNavigate();
    const {currentUser,setCurrentUser} = useContext(AuthContext);

    useEffect(() => {
        const deleteCookie = axios.get('http://localhost:7000/logout',{ withCredentials: true });
        if(deleteCookie) {
            localStorage.clear();
        }
        setCurrentUser(null)
        navigate('/Home');
    },[]);
    return (
        <div className="logout">
            <div className="p"><p>Deleted</p></div>
        </div>
    )
}