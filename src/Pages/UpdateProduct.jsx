import { useLoaderData } from "react-router-dom";
import Swal from "sweetalert2";


const UpdateProduct = () => {
    const product = useLoaderData();

    const { _id, name, brand_name, type, price, rating, photo } = product;

    const handleUpdateProduct = event => {
        event.preventDefault();

        const form = event.target;

        const name = form.name.value;
        const brand_name = form.brand_name.value;
        const type = form.type.value;
        const price = form.price.value;
        // const  = form..value;
        const rating = form.rating.value;
        const photo = form.photo.value;

        const updatedProduct = { name, brand_name, type, price, rating, photo }
        console.log(updatedProduct)
        // fetch('http://localhost:5000/product',
        // send data to the server
        fetch(`https://technology-and-electronic-server-fh0xgd40a.vercel.app/product/${_id}`, {
            method: 'PUT',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(updatedProduct)
        })
            .then(res => res.json())
            .then(data => {
                console.log(data);
                if (data.modifiedCount > 0) {
                    Swal.fire({
                        title: ' Success',
                        text: 'Product Updated successfully',
                        icon: 'success',
                        confirmButtonText: 'OKk'
                    })
                }
            })
    }
    return (
        <div>
            <div className="md:px-10 px-2 ">

                <div className="rounded-lg my-7 bg-gradient-to-r from-purple-500 to-pink-500 p-24">
                    <h2 className="text-3xl text-white justify-center text-center font-extrabold">Update a  Product</h2>
                    <form onSubmit={handleUpdateProduct} >
                        {/* form name and quantity row  */}
                        <div className="flex md:flex-row flex-col gap-5">
                            <div className="form-control md:w-1/2">
                                <label className="label">
                                    <span className="label-text text-xl text-white">Name</span>
                                </label>
                                <label className="input-group">

                                    <input type="text" name="name" defaultValue={name} placeholder="Enter products name" className="input input-bordered w-full" />
                                </label>
                            </div>
                            <div className="form-control w-full md:w-1/2">
                                <label className="label">
                                    <span className="label-text text-white text-xl">Brand Name</span>
                                </label>
                                <label className="input-group">

                                    <input type="text" name="brand_name" defaultValue={brand_name} placeholder="Brand Name" className="input input-bordered w-full" />
                                </label>
                            </div>
                        </div>

                        {/* form supplier row  */}
                        <div className="flex md:flex-row flex-col  gap-5">
                            <div className="form-control md:w-1/2">
                                <label className="label">
                                    <span className="label-text text-xl text-white">Type</span>
                                </label>
                                <label className="input-group">

                                    <input type="text" name="type" defaultValue={type} placeholder="Enter coffee Type" className="input input-bordered w-full" />
                                </label>
                            </div>
                            <div className="form-control w-full md:w-1/2">
                                <label className="label">
                                    <span className="label-text text-xl text-white">Rating</span>
                                </label>
                                <label className="input-group">

                                    <input type="text" name="rating" defaultValue={rating} placeholder="Enter rating" className="input input-bordered w-full" />
                                </label>
                            </div>

                        </div>

                        {/* form category and details  row */}
                        <div className="flex md:flex-row flex-col gap-5 ">

                            <div className="form-control w-full md:w-1/2">
                                <label className="label">
                                    <span className="label-text text-xl text-white">Price</span>
                                </label>
                                <label className="input-group">

                                    <input type="text" name="price" defaultValue={price} placeholder="Price" className="input input-bordered text-xl w-full " />
                                </label>
                            </div>
                            {/* photo  */}
                            <div className="form-control w-full md:w-1/2">

                                <label className="label">
                                    <span className="label-text  text-xl text-white">Photo</span>
                                </label>
                                <label className="input-group">

                                    <input type="text" name="photo" defaultValue={photo} placeholder="Photo URL" className="input input-bordered w-full" />
                                </label>


                            </div>
                        </div>


                        {/* <button className="btn btn-block">block</button>  */}
                        <input type="submit" value="Update products" className="mt-5 btn btn-block text-white bg-gradient-to-r  from-pink-500 to-purple-500" />
                    </form>
                </div>
            </div>
        </div>
    );
};

export default UpdateProduct;