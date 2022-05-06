import React from 'react';
import hikingGear from '../../hook/hikingGear';
import SingleItem from '../SingleItem/SingleItem';
import './Home.css';

const Home = () => {
    const gears = hikingGear;
    const products = gears.slice(0,6)

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
                products.map(product => <SingleItem product={product} key={product.id}></SingleItem> )
            }
            </div>
            <div className='d-flex'>
            <button className='btn btn-dark fw-bold text-white w-25 mx-auto my-5'>Show all items</button>
            </div>
        </div>
        </div>
    );
};

export default Home;