import React, { useEffect, useState } from 'react';
import { Table } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';

const ManageInventory = () => {
    const [products, setProducts] = useState([]);
    const navigate = useNavigate();

    const navigateNewItem = () => {
        navigate('/addItem')
    }

    useEffect(() => {
        fetch('http://localhost:5000/product')
        .then(res => res.json())
        .then(data => setProducts(data))
    },[])

    const handleDeleteItem = id => {
        
    }
    return (
        <div>
            <div style={{marginBottom: "100px"}} className='container'>
            <Table responsive='sm' striped bordered hover>
                <thead>
                    <tr>
                        
                        <th>Product Image</th>
                        <th>Product Name</th>
                        <th>Supplier</th>
                        <th>Quantity</th>
                        <th>Price</th>
                        <th>Details</th> 
                        <th>Manage</th> 
                    </tr>
                </thead>
                
            {
                products.map(product => 
                    <tbody key={product._id}>
                    <tr>
                        
                        <td><img style={{ height: '60px' }} src={product.img} alt="" /></td>
                        <td>{product.name}</td>
                        <td>{product.supplier}</td>
                        <td>{product.quantity}</td>
                        <td>${product.price}</td>
                        <td>{product.description}</td>
                        <td>
                        <button onClick={navigateNewItem} className='btn btn-success me-1'>Add new item</button>
                        <button onClick={() => handleDeleteItem(product._id)} className='btn btn-danger'>Delete</button>
                        </td>
                    </tr>
                </tbody> )
            }
            </Table>
            </div>
        </div>
    );
};

export default ManageInventory;