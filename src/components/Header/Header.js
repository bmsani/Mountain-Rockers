import { signOut } from 'firebase/auth';
import React from 'react';
import { Container, Nav, Navbar } from 'react-bootstrap';
import { useAuthState } from 'react-firebase-hooks/auth';
import { Link } from 'react-router-dom';
import auth from '../../firebase.init';

const Header = () => {
    const [user] = useAuthState(auth);
    return (
        <div>
            <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
                <Container>
                    <Navbar.Brand as={Link} to='/'>Mountain Rockers</Navbar.Brand>
                    <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                    <Navbar.Collapse id="responsive-navbar-nav">
                        <Nav className="me-auto">
                            <Nav.Link as={Link} to='/blog'>Blog</Nav.Link>
                            
                        </Nav>
                        <Nav>
                            {
                                user ?
                                <div className='d-flex'>
                                <Nav.Link as={Link} to='/myitem'>My Item</Nav.Link>
                                <Nav.Link as={Link} to='/manageInventory'>Manage Items</Nav.Link>
                                <Nav.Link as={Link} to='/addItem'>Add item</Nav.Link>
                                <button className='btn btn-info fw-bold text-white' onClick={() => signOut(auth)}>Sign Out</button>
                                </div>
                                :
                                <Nav.Link as={Link} to='/login'>Login</Nav.Link>
                            }
                        </Nav>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
        </div>
    );
};

export default Header;