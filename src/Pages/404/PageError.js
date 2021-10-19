import React from 'react';
import { NavLink } from 'react-router-dom';
import './PageError.css'

const PageError = () => {
    return (
        <div className="pageError p-5">
            <div className="py-5 "></div>
            <h1 className="text-danger">404</h1>
            <h2 className="text-white">Page not Found</h2>
            <h6 className="w-50 m-auto mb-5 mt-3 text-white">we are sorry The page you requested is not found. Plase go back to the Home page or contact ust @gmail.com</h6>
            <NavLink to="/home"><button className="btn-info">Back to Home</button></NavLink>
        </div>
    );
};

export default PageError;