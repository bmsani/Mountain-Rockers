import React from 'react';
import hikingGear from '../../hook/hikingGear';
import SingleItem from '../SingleItem/SingleItem';

const Home = () => {
    const gears = hikingGear;
    const products = gears.slice(0,6)

    return (
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
    );
};

export default Home;