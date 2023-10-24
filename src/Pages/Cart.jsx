import { useState } from 'react';
import { BsFillStarFill } from 'react-icons/Bs';
import { useLoaderData } from 'react-router-dom';
import Swal from 'sweetalert2';
// import Swal from 'sweetalert2';

const Cart = () => {
   
    const loadedProducts = useLoaderData()

    // console.log(loadedProducts);
    const [products, setProducts] = useState(loadedProducts);
  
   
    const handleDelete = id => {
      console.log(id);

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

      fetch(`https://technology-and-electronic-server-fh0xgd40a.vercel.app/cart/${id}`, {
        method: 'DELETE'
      })
      .then(res => res.json())
      .then(data => {
         console.log(data);
        
         
            
          if(data.deletedCount > 0 ){
                      Swal.fire(
                          'Deleted!',
                          'Your cart has been deleted.',
                          'success'
                        )

          const remainingProducts = products.filter(product => product._id !== id);
          setProducts(remainingProducts);
                      }
                    })
                  }
                })
    }

    


    return (
        <div className='grid p-10 gap-4 grid-cols-1 md:grid-cols-2 lg:grid-cols-3'>
        {
          products.length > 0 ?
          products.map(product => (
            <div key={product._id}>
              <div className="card lg:card-side bg-base-100 shadow-xl">
                <figure><img className='h-[200px] w-[200px]' src={product.photo} alt="Album" /></figure>
                <div className="card-body">
                  <h2 className="card-title">{product.name}</h2>
                  <p>Price: {product.price}$</p>
                  <p className='flex items-center gap-2'><span className='text-yellow-400'><BsFillStarFill></BsFillStarFill></span> {product.rating}</p>
                  <div className="card-actions justify-end">
                    <button
                      onClick={() => handleDelete(product._id)}
                      className="btn text-red-600 ">X
                    </button>
                  </div>
                </div>
              </div>
            </div>
          )) :
          <div className='h-[63.2vh] w-full col-span-3 text-center text-2xl text-red-600'>No Product Add</div>
        }
      </div>
      
    );
};

export default Cart;