import React from "react";
import './ErrorPage.css'
import { Link } from "react-router-dom";
const ErrorPage = () => {
    return (  
        <>
        <div className="ErrorPage_nav">
            <h3>Home / <span>404Error</span></h3>
        </div>
        <div className="Error_page">
            <h1>404 Not Found</h1>
            <p>Your visited page not found. You may go to home page </p>
            <Link to='/'> <button>Back To HomePage</button> </Link>
        </div>
        </>
    );
}

export default ErrorPage;