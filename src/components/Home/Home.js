import React, { useEffect, useState } from 'react';
import { Form } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';
import hikingGear from '../../hook/hikingGear';
import SingleItem from '../SingleItem/SingleItem';
// import React, { useState } from 'react';
import './Home.css';

const Home = () => {
    const navigate = useNavigate();
    const [gears, setGears] = useState([]);
    const products = gears.slice(0, 6)

    useEffect(() => {
        fetch('https://stormy-lake-73756.herokuapp.com/product')
            .then(res => res.json())
            .then(data => setGears(data))
    }, [])

    const navigateToManageItem = () => {
        navigate('/manageInventory');
    }

    return (
        <div>
            <div className='banner'>
                <div className='container banner-text'>
                    <h1>Welcome to Mountain Rokers </h1>
                    <h5>Manage all you necessary hiking gear </h5>
                </div>
            </div>
            <div className="container">
                <h1 className='text-center text-info my-5'>Plan a Free climb</h1>
                <div className="row align-items-center">
                    <div className="col-md-6">
                        <h3 className='mb-3'>Free Solo climbing</h3>
                        <p>The greatest rock climber in the world is climbing the greatest rock in the world. Alex Honnold is on El Capitan, free-soloing it – meaning no rope, no one else, just a man alone on a wall. He is at the crux, the most difficult section, known as the boulder problem, the main problem being that it is really, really hard. But he moves gracefully, balletically even: drive up off the left foot into the thumb press, roll two fingers over the thumb, switch feet, left foot out to a bad sloping foothold, switch thumbs, reach out left to a grainy rounded hold before launching into the karate kick … And that is where he slips and falls.</p>
                    </div>
                    <div className="col-md-6">
                    <img className='img-fluid' src="https://i.ibb.co/nzZbXJy/abtsectionthree-1-img.webp" alt="" />
                    </div>
                </div>
            </div>
            <div className='container p-0 mb-5'>
                <h1 className='text-center text-info py-5'>Pick your necessary Gears</h1>
                <div className='row m-0'>
                    {
                        products.map(product => <SingleItem product={product} key={product._id}></SingleItem>)
                    }
                </div>
                <div className='d-flex'>
                    <button onClick={navigateToManageItem} className='btn btn-dark fw-bold text-white w-25 mx-auto my-5'>Show all items</button>
                </div>
            </div>
            <div style={{ paddingBottom: "120px" }} className="container">
                <h1 className='text-center'>Connect to Us</h1>
                <Form>
                    <Form.Group className="mb-3" controlId="formGroupEmail">
                        <Form.Label>Email address</Form.Label>
                        <Form.Control type="text" placeholder="Your Name" />
                    </Form.Group>
                    <Form.Group className="mb-3" controlId="formGroupEmail">
                        <Form.Label>Email address</Form.Label>
                        <Form.Control type="email" placeholder="Enter email" />
                    </Form.Group>
                    <Form.Group className="mb-3" controlId="formGroupPassword">
                        <Form.Label>Password</Form.Label>
                        <Form.Control type="text" placeholder="Password" />
                    </Form.Group>
                    <textarea style={{ height: "80px" }} className='w-100' name="" id="" cols="30" rows="10"></textarea>
                    <button className='btn btn-info fw-bold text-white rounded-pill mt-2 px-5' disabled>Submit</button>
                </Form>
            </div>
        </div>
    );
};

export default Home;