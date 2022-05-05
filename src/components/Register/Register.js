import React from 'react';
import { Button, Form } from 'react-bootstrap';
import { Link, useNavigate } from 'react-router-dom';
import auth from '../../firebase.init';
import { useCreateUserWithEmailAndPassword } from 'react-firebase-hooks/auth';
import SocialLogin from '../SocialLogin/SocialLogin';
import Swal from 'sweetalert2'


const Register = () => {
    const navigate = useNavigate();
    const [
        createUserWithEmailAndPassword,
        user,
        loading,
        error,
      ] = useCreateUserWithEmailAndPassword(auth, {sendEmailVerification: true});

      if(user){
          navigate('/')
      }
    const handleFormSubmit = event => {
        event.preventDefault();
        const email = event.target.email.value;
        const password = event.target.password.value;
        const confirmPassword = event.target.confirmPassword.value;

        if(password === confirmPassword){
            createUserWithEmailAndPassword(email, password)
        }
        else{
            Swal.fire(
                "Password didn't match",
                'Please type same password in confirm password',
                'error'
              )
        }
    }
    return (
        <div className='w-50 mx-auto'>
            <h1 className='text-center my-3'>Register</h1>
            <Form onSubmit={handleFormSubmit}>
                <Form.Group className="mb-3" controlId="formBasicEmail">
                    <Form.Control type="email" name='email' placeholder="Enter email" />
                </Form.Group>

                <Form.Group className="mb-3" controlId="formBasicPassword">
                    <Form.Control type="password" name='password' placeholder="Password" />
                </Form.Group>
                <Form.Group className="mb-3" controlId="formBasicConfirmPassword">
                    <Form.Control type="password" name='confirmPassword' placeholder="Confirm Password" />
                </Form.Group>
                <Form.Group className="mb-3" controlId="formBasicCheckbox">
                    <Form.Check type="checkbox" label="Check me out" />
                </Form.Group>
                <p>Already Registered <Link to='/login'>Please Login</Link> </p>
                <Button variant="primary" type="submit">
                    Submit
                </Button>
                <SocialLogin></SocialLogin>
            </Form>
        </div>
    );
};

export default Register;