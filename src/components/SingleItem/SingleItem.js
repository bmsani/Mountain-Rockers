import React from 'react';

const SingleItem = ({product}) => {
    const {id, name, supplier, quantity, img, price, description} = product
    return (
        <div className='col-md-4 mb-3'>
            <div className='border p-2 rounded'>
            <img className='img-fluid' src={img} alt="" />
            <p>Product Name: {name}</p>
            <p>Supplier : {supplier}</p>
            <p>Quantity : {quantity} </p>
            <p>Price: ${price}</p>
            <p>Details: {description}</p>
            <button className='btn btn-info text-white fw-bold d-block mx-auto w-100 rounded-pill'>Update</button>
            </div>
        </div>
    );
};

export default SingleItem;