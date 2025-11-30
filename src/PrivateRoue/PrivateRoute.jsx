import React, { useContext } from 'react';

import { Navigate, useLocation } from 'react-router';
import { AuthContext } from '../Authentication/AuthContext';

const PrivateRoute = ({children}) => {
    const location=useLocation()
    const {user}=useContext(AuthContext)
    if(!user){
        return <Navigate to='/signin' state={{location.pathname}}></Navigate>
    }
    return children
};

export default PrivateRoute;