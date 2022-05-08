import { async } from '@firebase/util';
import { Toast } from 'bootstrap';
import cogoToast from 'cogo-toast';
import React, { useState } from 'react';
import { Button, Form } from 'react-bootstrap';
import { useSendPasswordResetEmail, useSignInWithEmailAndPassword, useUpdatePassword } from 'react-firebase-hooks/auth';
import { Link, useNavigate, useLocation } from 'react-router-dom';
import Swal from 'sweetalert2';
import auth from '../../firebase.init';
import SocialLogin from '../SocialLogin/SocialLogin';

const Login = () => {
    const [email, setEmail] = useState('');
    const [token, setToken] = useState('');
    const navigate = useNavigate();
    const location = useLocation();
    const from = location.state?.from?.pathname || '/';

    const handleEmail = event => {
        setEmail(event.target.value)
    }
    const [
        signInWithEmailAndPassword,
        user,
        loading,
        error,
    ] = useSignInWithEmailAndPassword(auth);
    const [sendPasswordResetEmail, sending, resetError] = useSendPasswordResetEmail(auth);



    if (token) {
        cogoToast.success("Login Successful", { position: 'top-right', heading: 'Login' });
        navigate(from, { replace: true })
    }

    if (loading) {
        cogoToast.loading("Please wait")
    }
    if (error) {
        cogoToast.error(error.message)
    }

    const handleFromSubmit = async event => {
        event.preventDefault();
        const password = event.target.password.value;

        await signInWithEmailAndPassword(email, password)
        fetch('http://localhost:5000/login', {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify({email})
        })
        .then(res => res.json())
        .then(data => {
            localStorage.setItem('accessToken', data.accessToken);
            setToken(data.accessToken);
        })
    }

    const handleReset = async () => {
        if (email) {
            await sendPasswordResetEmail(email);
            cogoToast.success("Please check your inobox", { heading: "Email sent" });
        }
        else {
            Swal.fire({
                icon: 'error',
                title: 'Oops...',
                text: 'Please input your email first..',
            })
        }
    }

    return (
        <div className='w-50 mx-auto'>
            <h1 className='text-center my-3'>Login</h1>
            <Form onSubmit={handleFromSubmit}>
                <Form.Group className="mb-3" controlId="formBasicEmail">
                    <Form.Control onBlur={handleEmail} type="email" name='email' placeholder="Enter email" required/>
                </Form.Group>

                <Form.Group className="mb-3" controlId="formBasicPassword">
                    <Form.Control autoComplete='off' type="password" name='password' placeholder="Password" required/>
                </Form.Group>
                <p>Forgot your password?
                    <button className='btn btn-link' onClick={handleReset}> Reset password</button>
                </p>

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