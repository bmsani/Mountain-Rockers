import React, { useEffect, useState } from 'react';
import { Table } from 'react-bootstrap';
import { useAuthState } from 'react-firebase-hooks/auth';
import { useNavigate } from 'react-router-dom';
import auth from '../../firebase.init';

const MyItem = () => {
    const [user] = useAuthState(auth);
    const [products, setProducts] = useState([]);
    const navigate = useNavigate();

    useEffect(() => {
        const email = user.email
        const url = `http://localhost:5000/userProduct?email=${email}`; 
        fetch(url)
        .then(res => res.json())
        .then(data => setProducts(data));
    },[])

    const handleDeleteItem = id => {
        const proceed = window.confirm("Are you sure you want to delete this item?")

        if(proceed){
            console.log('Deleting id ', id);
            const url = `http://localhost:5000/product/${id}`
            fetch(url,{
                method: "DELETE",
            })
            .then(res => res.json())
            .then(data => {
                if(data.deletedCount > 0){
                    const remainingProduct = products.filter(product => product._id !== id)
                    setProducts(remainingProduct);
                }
            })
        }

    }

    const navigateNewItem = () => {
        navigate('/addItem')
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

export default MyItem;