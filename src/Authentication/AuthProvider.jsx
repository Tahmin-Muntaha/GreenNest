import React, { Children, useEffect, useState } from 'react';
import { onAuthStateChanged } from 'firebase/auth';
import {auth} from '../firebase.config'
import { AuthContext } from './AuthContext';
const AuthProvider = ({children}) => {
    const [user,setUser]=useState(null)
    
    const authInfo={
        user,
        setUser,
        
    }
    useEffect(()=>{
        const unsubscribe=onAuthStateChanged(auth,(curruser)=>{
        
        setUser(curruser)
        
    })
    return ()=>{
        unsubscribe()
    }
    },[])
    
    return (
        <AuthContext.Provider value={authInfo}>{children}</AuthContext.Provider>
    );
};

export default AuthProvider;