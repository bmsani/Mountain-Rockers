import cogoToast from 'cogo-toast';
import React from 'react';
import { Button, Form } from 'react-bootstrap';
import { useSignInWithEmailAndPassword } from 'react-firebase-hooks/auth';
import { Link, useNavigate, useLocation } from 'react-router-dom';
import auth from '../../firebase.init';
import SocialLogin from '../SocialLogin/SocialLogin';

const Login = () => {
    const navigate = useNavigate();
    const location = useLocation();
    const from = location.state?.from?.pathname || '/';
    const [
        signInWithEmailAndPassword,
        user,
        loading,
        error,
      ] = useSignInWithEmailAndPassword(auth);

      

      if(user){
        cogoToast.success("Login Successful", {position: 'top-right', heading: 'Login'});
        navigate(from, {replace: true})
      }

      if(loading){
          cogoToast.loading("Please wait")
      }
      if(error){
          cogoToast.error(error.message)
          console.log(error.message);
      }

      const handleFromSubmit = event => {
        event.preventDefault();
        const email = event.target.email.value;
        const password = event.target.password.value;

        signInWithEmailAndPassword(email, password)

    
      } 

    return (
        <div className='w-50 mx-auto'>
            <h1 className='text-center my-3'>Login</h1>
            <Form onSubmit={handleFromSubmit}>
                <Form.Group className="mb-3" controlId="formBasicEmail">
                    <Form.Control type="email" name='email' placeholder="Enter email" />
                </Form.Group>

                <Form.Group className="mb-3" controlId="formBasicPassword">
                    <Form.Control type="password" name='password' placeholder="Password" />
                </Form.Group>
                <p className=''>Forgot your password? <button></button> </p>
                <p>New to Mountain Rockers? <Link to='/register'>Register Here</Link></p>
                <Button variant="primary" type="submit">
                    Submit
                </Button>
            </Form>
            <SocialLogin></SocialLogin>
        </div>
    );
};

export default Login;