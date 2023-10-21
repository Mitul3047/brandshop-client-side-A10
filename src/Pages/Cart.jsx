
import { useEffect, useState } from 'react';
import { useLoaderData } from 'react-router-dom';
import Swal from 'sweetalert2';

const Cart = () => {
    const loadedProductes = useLoaderData();
    const [cartData, setCartData] = useState([])
    useEffect(() => {
        fetch('http://localhost:3000/cart')
            .then(r => r.json())
            .then(data => setCartData(data))
    }, [])

    const handleDelete = (_id) => {
        console.log(_id);
        Swal.fire({
            title: 'Are you sure?',
            text: "You won't be able to revert this!",
            icon: 'warning',
            showCancelButton: true,
            confirmButtonColor: '#3085d6',
            cancelButtonColor: '#d33',
            confirmButtonText: 'Yes, delete it!'
        }).then((result) => {
            if (result.isConfirmed) {

                fetch(`http://localhost:3000/cart/${_id}`, {
                    method: 'DELETE'
                })
                    .then(res => res.json())
                    .then(data => {
                        console.log(data);
                        if (data.deletedCount > 0) {
                            Swal.fire(
                                'Deleted!',
                                'Your file has been deleted.',
                                'success'
                            )
                            const remaining = cartData.filter((item) => item._id !== _id);
                            setCartData(remaining)
                        }
                    })
            }
        })
    }

    return (
        <div className='grid gap-4 grid-cols-1 md:grid-cols-2 lg:grid-cols-3 py-28'>
            {loadedProductes.map(product => (
                <div key={product._id}>
                    <div className="card lg:card-side bg-base-100 shadow-xl">
                        <figure><img className='w-[200px] h-[200px]' src={product.photo} alt="Album" /></figure>
                        <div className="card-body">
                            <h2 className="card-title">{product.name}</h2>
                            <h3 className='font-semibold'>{product.brand_name}</h3>
                            <h3>${product.price}</h3>
                            <button onClick={() => handleDelete(product._id)} className='btn btn-warning'>Delete</button>
                        </div>
                    </div>
                </div>
            ))}
        </div>
    );
};

export default Cart;
