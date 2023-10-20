import { useLoaderData } from "react-router-dom";
import Swal from "sweetalert2";

const BrandDetails = () => {
    const product = useLoaderData();
    console.log(product);
    const { brand_name, description, name, photo, price, rating, type, _id } = product;

    const addToCart = async () => {
        // Create the data to send to the server
        const dataToSend = {
            name,
            brand_name,
            price,
            photo,
            // Add other relevant data here
        };

        fetch("http://localhost:3000/cart", {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify(dataToSend),
        })
        .then((response) => {
            if (response.ok) {
                return response.json();
            } else {
                throw new Error("Failed to add product to the cart.");
            }
        })
        .then((data) => {
            if (data.insertedId) {
                // Product added successfully
                console.log("Product added to the cart.");
                if(data.insertedId){
                    Swal.fire({
                        title: ' Success',
                        text: 'User addedd successfully',
                        icon: 'success',
                        confirmButtonText: 'OKk'
                    })
                }
                // You can perform additional actions here, like showing a success message
            }
        })
        .catch((error) => {
            console.error("An error occurred while adding the product to the cart:", error);
        });
    };

    return (
        <div className="py-28">
            <div className="card lg:card-side bg-base-100 w-10/12 mx-auto shadow-xl">
                <img className="h-[70vh]" src={photo} alt={name} />
                <div className="card-body">
                    <h2 className="card-title text-2xl">{name}</h2>
                    <h3 className="text-lg font-semibold">{brand_name}</h3>
                    <h3 className="font-semibold">{type}</h3>
                    <h3 className="font-semibold">$ {price}</h3>
                    <p>{rating}</p>
                    <p className="font-semibold">{description}</p>
                    <div className="card-actions">
                        <button className="btn btn-accent text-white" onClick={addToCart}>
                            Cart
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default BrandDetails;
