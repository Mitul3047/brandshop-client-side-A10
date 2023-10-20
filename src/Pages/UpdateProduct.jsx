import { useLoaderData } from "react-router-dom";
import Swal from "sweetalert2";


const UpdateProduct = () => {

    const product = useLoaderData()
    const { _id } = product
    const handleUpdateProducts = event => {
        event.preventDefault();

        const form = event.target;

        const name = form.name.value;
        const brand_name = form.brand_name.value;
        const type = form.type.value;
        const price = form.price.value;
        const description = form.description.value;
        const rating = form.rating.value;
        const photo = form.photo.value;


        const updatedProducts = { name, brand_name, type, price, description, rating, photo }
        console.log(updatedProducts)
        // fetch('http://localhost:5000/product',
        // send data to the server
        fetch(`http://localhost:3000/product/${_id}`, {
            method: 'PUT',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(updatedProducts)
        })
            .then(res => res.json())
            .then(data => {
                console.log(data);
                if (data.modifiedCount > 0) {
                    Swal.fire({
                        title: ' Success',
                        text: 'Updated successfully',
                        icon: 'success',
                        confirmButtonText: 'OKk'
                    })
                }
            })
    }

    return (
        <div className="px-10">

            <div className="rounded-lg my-7 bg-gradient-to-r from-purple-500 to-pink-500 p-24">
                <h2 className="text-3xl text-white justify-center text-center font-extrabold">Update Product: {product.name}</h2>
                <form onSubmit={handleUpdateProducts} >
                    {/* form name and quantity row  */}
                    <div className="md:flex gap-5">
                        <div className="form-control md:w-1/2">
                            <label className="label">
                                <span className="label-text text-xl text-white">Name</span>
                            </label>
                            <label className="input-group">

                                <input type="text" name="name" defaultValue={product.name} placeholder="Enter products name" className="input input-bordered w-full" />
                            </label>
                        </div>
                        <div className="form-control w-1/2">
                            <label className="label">
                                <span className="label-text text-white text-xl">Brand Name</span>
                            </label>
                            <label className="input-group">

                                <input type="text" name="brand_name" defaultValue={product.brand_name} placeholder="Brand Name" className="input input-bordered w-full" />
                            </label>
                        </div>
                    </div>

                    {/* form supplier row  */}
                    <div className="flex   gap-5">
                        <div className="form-control md:w-1/2">
                            <label className="label">
                                <span className="label-text text-xl text-white">Type</span>
                            </label>
                            <label className="input-group">

                                <input type="text" name="type" defaultValue={product.type} placeholder="Enter coffee Type" className="input input-bordered w-full" />
                            </label>
                        </div>
                        <div className="form-control w-1/2">
                            <label className="label">
                                <span className="label-text text-xl text-white">Description</span>
                            </label>
                            <label className="input-group">

                                <input type="text" name="description" defaultValue={product.description} placeholder="description" className="input input-bordered w-full" />
                            </label>
                        </div>
                    </div>

                    {/* form category and details  row */}
                    <div className="md:flex gap-5">
                        <div className="form-control md:w-1/2">
                            <label className="label">
                                <span className="label-text text-xl text-white">Rating</span>
                            </label>
                            <label className="input-group">

                                <input type="text" name="rating" defaultValue={product.rating} placeholder="Enter rating" className="input input-bordered w-full" />
                            </label>
                        </div>
                        <div className="form-control w-1/2">
                            <label className="label">
                                <span className="label-text text-xl text-white">Price</span>
                            </label>
                            <label className="input-group">

                                <input type="text" name="price" defaultValue={product.price} placeholder="Price" className="input input-bordered text-xl w-full " />
                            </label>
                        </div>
                    </div>
                    {/* photo  */}
                    <div className="mb-2">
                        <div className="form-control w-full">
                            <label className="label">
                                <span className="label-text">Photo</span>
                            </label>
                            <label className="input-group">

                                <input type="text" name="photo" defaultValue={product.photo} placeholder="Photo URL" className="input input-bordered w-full" />
                            </label>
                        </div>

                    </div>
                    {/* <button className="btn btn-block">block</button>  */}
                    <input type="submit" value="Update products" className="btn btn-block text-white bg-gradient-to-r  from-pink-500 to-purple-500" />
                </form>
            </div>
        </div>

    );
};

export default UpdateProduct;