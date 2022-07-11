import React from 'react';
import { Navigate } from 'react-router-dom';

const privateRoute = ({ children, redirectTo }) => {
    const isAuthenticated = localStorage.getItem('user') !== null;
    console.log('isAuth: ', isAuthenticated);
    return isAuthenticated ? children : <Navigate to={redirectTo} />
};

export default privateRoute;    