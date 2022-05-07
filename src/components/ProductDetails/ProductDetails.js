import React, { useEffect, useState } from 'react';
import { Table } from 'react-bootstrap';
import { useParams } from 'react-router-dom';
import { useForm } from "react-hook-form";

const ProductDetails = () => {
    const { id } = useParams();
    const [product, setProduct] = useState({});
    const [acknowledged, setAcknowledged] = useState(false);
    console.log(acknowledged);
    let newQuantity

    // Load single product data
    useEffect(() => {
        const url = `http://localhost:5000/product/${id}`;
        fetch(url)
            .then(res => res.json())
            .then(data => setProduct(data));
    }, [id, acknowledged])

    const { name, supplier, quantity, img, price, description } = product;
    console.log(id);


    // Reduce Quantity by one 
    const handleDelivered = quantity => {
        console.log(quantity);
        console.log(newQuantity);
        if (quantity > 0) {
            newQuantity = { quantity: quantity - 1 }
            const url = `http://localhost:5000/product/${id}`;
            fetch(url, {
                method: "PUT",
                headers: {
                    'content-type': 'application/json'
                },
                body: JSON.stringify(newQuantity)
            })
                .then(res => res.json())
                .then(data => {
                    if (acknowledged === !true) {
                        setAcknowledged(true);
                    }
                    else {
                        setAcknowledged(false);
                    }
                })
        }
    }

    // update quantity as input value
    const { register, handleSubmit } = useForm();
    const onSubmit = (data,event) => {
        console.log(data.quantity)
        const newQuantity = {quantity: quantity + parseInt(data.quantity)}
        console.log(newQuantity);
        
        const url = `http://localhost:5000/product/${id}`;
            fetch(url, {
                method: "PUT",
                headers: {
                    'content-type': 'application/json'
                },
                body: JSON.stringify(newQuantity)
            })
                .then(res => res.json())
                .then(data => {
                    if (acknowledged === !true) {
                        setAcknowledged(true);
                    }
                    else {
                        setAcknowledged(false);
                    }
                    event.target.reset();
                })

    };

    return (
        <div className='container'>
            <Table responsive='sm' striped bordered hover>
                <thead>
                    <tr>
                        <th>#</th>
                        <th>Product Image</th>
                        <th>Product Name</th>
                        <th>Supplier</th>
                        <th>Quantity</th>
                        <th>Price</th>
                        <th>Details</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td>1</td>
                        <td><img style={{ height: '60px' }} src={img} alt="" /></td>
                        <td>{name}</td>
                        <td>{supplier}</td>
                        <td>{quantity}</td>
                        <td>${price}</td>
                        <td>{description}</td>
                    </tr>
                </tbody>
            </Table>
            <div className='d-flex align-items-center justify-content-evenly'>
            <button onClick={() => handleDelivered(quantity)} className='btn btn-info fw-bold text-white w-25 py-3'>Delivered</button>
            <form className='py-3 d-flex align-items-center' onSubmit={handleSubmit(onSubmit)}>
                <input className='py-2 border border-dark rounded me-2' type="number" {...register("quantity")} />
                <input className='btn btn-info fw-bold py-2' type="submit" value='Add Quantity' />
            </form> 
            </div>

        </div>
    );
};

export default ProductDetails;