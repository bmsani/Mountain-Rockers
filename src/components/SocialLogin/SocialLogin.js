import cogoToast from 'cogo-toast';
import React from 'react';
import { useSignInWithGoogle } from 'react-firebase-hooks/auth';
import { useLocation, useNavigate } from 'react-router-dom';
import auth from '../../firebase.init';
import GoogleIcon from '../../image/social-icons/search.png'

const SocialLogin = () => {
    const [signInWithGoogle, user, loading, error] = useSignInWithGoogle(auth);
    const navigate = useNavigate();
    const location = useLocation();
    const form = location.state?.from?.pathname || '/';
    
    if(loading){
        cogoToast.loading("Please wait")
    }
    if(user){
        navigate(form)
    }
    if(error){
        cogoToast.error(error.message)
    }
    return (
        <div>
            <button className='btn btn-dark w-50 d-block mx-auto' onClick={() => signInWithGoogle()}>
             <img className='pe-3' style={{height: '30px'}} src={GoogleIcon} alt="" />
              Sing in with Google</button>
        </div>
    );
};

export default SocialLogin;