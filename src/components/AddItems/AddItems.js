import React from 'react';
import { useForm } from "react-hook-form";

const AddItems = () => {
    const { register, handleSubmit } = useForm();
    const onSubmit = data => {
        console.log(data)
        const url = 'http://localhost:5000/product';
        fetch(url, {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(data)
        })
        .then(res => res.json())
        .then(data => console.log(data))
    };
    return (
        <div>
            <h1 className='text-center'>Add items</h1>
            <div>
                <div>
                    <form className='d-flex flex-column w-25 mx-auto d-block gap-3' onSubmit={handleSubmit(onSubmit)}>
                        <input className='rounded border border-dark py-1 border-2' placeholder='Product name' type="text" {...register("name", { required: true, maxLength: 20 })} />
                        <input className='rounded border border-dark py-1 border-2' placeholder='Supplier name' type="text" {...register("supplier")} />
                        <input className='rounded border border-dark py-1 border-2' placeholder='Product Quantity' type="number" {...register("quantity")} />
                        <input className='rounded border border-dark py-1 border-2' placeholder='Image Link' type="text" {...register("img")} />
                        <input className='rounded border border-dark py-1 border-2' placeholder='Price' type="number" {...register("price")} />
                        <textarea className='rounded border border-dark py-1 border-2' placeholder='Description' {...register("description")} />
                        <input className='btn btn-primary' type="submit" value='Add Product' />
                    </form>
                </div>
            </div>
        </div>
    );
};

export default AddItems;