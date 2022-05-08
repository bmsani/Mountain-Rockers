import React from 'react';
import { useForm } from "react-hook-form";
import { useAuthState } from 'react-firebase-hooks/auth';
import auth from '../../firebase.init';

const AddItems = () => {
    const [user] = useAuthState(auth);
    const { register, handleSubmit } = useForm();
    const onSubmit = (data, event) => {
        console.log(data)
        const url = 'https://stormy-lake-73756.herokuapp.com/product';
        fetch(url, {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(data)
        })
            .then(res => res.json())
            .then(data => {
                console.log(data)
                event.target.reset();
            })
    };
    return (
        <div>
            <h1 className='text-center text-primary'>Add Items</h1>
            <div>
                <div>
                    <form className='d-flex flex-column w-25 mx-auto d-block gap-3' onSubmit={handleSubmit(onSubmit)}>
                        <input className='rounded border border-dark py-1 border-2' type="email" value={user.email} {...register("email")} required readOnly />
                        <input className='rounded border border-dark py-1 border-2' placeholder='Product name' type="text" {...register("name", { required: true, maxLength: 20 })} required />
                        <input className='rounded border border-dark py-1 border-2' placeholder='Supplier name' type="text" {...register("supplier")} required />
                        <input className='rounded border border-dark py-1 border-2' placeholder='Product Quantity' type="number" {...register("quantity")} required />
                        <input className='rounded border border-dark py-1 border-2' placeholder='Image Link' type="text" {...register("img")} required />
                        <input className='rounded border border-dark py-1 border-2' placeholder='Price' type="number" {...register("price")} required />
                        <textarea className='rounded border border-dark py-1 border-2' placeholder='Description' {...register("description")} required />
                        <input className='btn btn-primary' type="submit" value='Add Product' />
                    </form>
                </div>
            </div>
        </div>
    );
};

export default AddItems;