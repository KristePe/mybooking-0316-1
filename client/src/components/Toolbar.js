import React from 'react';
import {useNavigate} from "react-router-dom";

const Toolbar = () => {
    const  nav = useNavigate();

    return (
        <div className="column toolbar">
            <div className="d-flex center">
                <h1>.MyBooking</h1>
            </div>

            <div className="d-flex sp-around">
                <button onClick={() => nav("/")}>All post</button>
                <button onClick={()=> nav("/register")}>Register</button>
                <button onClick={() => nav("/login")}>Login</button>
                <button onClick={() => nav("/singlepost" )}>Single post</button>
                <button onClick={() => nav("/reservations")}>My reservations</button>
                <button onClick={() => nav("/upload")}>Upload</button>
            </div>
        </div>
    );
};

export default Toolbar;