import cogoToast from 'cogo-toast';
import React from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { Navigate, useLocation } from 'react-router-dom';
import auth from '../../firebase.init';

const RequireAuth = ({children}) => {
    const [user, loading] = useAuthState(auth);
    const location = useLocation();

    if(loading){
    //    cogoToast.loading("Please Wait")
        return <p>Loadign</p>
    }
    if(!user){
        return <Navigate to='/login' state={{from:location}} replace></Navigate>
    }
    return children;
};

export default RequireAuth;