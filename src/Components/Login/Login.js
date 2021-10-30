import React from 'react';
import { useHistory, useLocation } from 'react-router';
import useAuth from '../../hooks/useAuth';

const Login = () => {
    const {signInUsingGoogle,user}=useAuth()
   const location=useLocation()
   const history=useHistory()
   const redirect=location.state?.from||'/service'
 const handleGoogleSign=()=>{
     signInUsingGoogle()
     .then(result=>{
         history.push(redirect)
     }
        )
 }
    return (
        <div>
            <button  className="mx-2 px-4 pb-2 py-2 my-3 bg-warning" onClick={handleGoogleSign}>Google sign in</button>

        </div>
    );
};

export default Login;