import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import hikingGear from '../../hook/hikingGear';
import SingleItem from '../SingleItem/SingleItem';
// import React, { useState } from 'react';
import './Home.css';

const Home = () => {
    const navigate = useNavigate();
    const [gears, setGears] = useState([]);
    const products = gears.slice(0,6)

    useEffect(() => {
        fetch('http://localhost:5000/product')
        .then(res => res.json())
        .then(data => setGears(data))
    },[])

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
            <div className='container p-0 mb-5'>
            <div className='row m-0'>
            {
                products.map(product => <SingleItem product={product} key={product._id}></SingleItem> )
            }
            </div>
            <div className='d-flex'>
            <button onClick={navigateToManageItem} className='btn btn-dark fw-bold text-white w-25 mx-auto my-5'>Show all items</button>
            </div>
        </div>
        </div>
    );
};

export default Home;