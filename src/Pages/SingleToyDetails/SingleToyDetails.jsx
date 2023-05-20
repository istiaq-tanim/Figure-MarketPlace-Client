//picture, toy name, seller name, seller email, price, rating, available quantity, and detail description

import { useLoaderData } from "react-router-dom";
import useTitle from "../../Hooks/useTitle";

const SingleToyDetails = () => {
    useTitle("Single Toy Details")
    const toyDetails = useLoaderData();
    const { name, price, image, rating, availableQuantity,
        description, seller, email } = toyDetails
    return (
        <div className="flex justify-center m-10">
            <div className="card w-96 bg-base-100 shadow-xl">
                <figure><img className="h-64 w-full" src={image} alt="Shoes" /></figure>
                <div className="card-body">
                    <h2 className="card-title">{name}</h2>
                    <p>Name:{seller}</p>
                    <p>Email: {email}</p>
                    <p>Price: ${price}</p>
                    <p>Ratings: {rating}</p>
                    <p>Quantity: {availableQuantity}</p>
                    <p>Description: {description}</p>
                </div>
            </div>
        </div>

    );
};

export default SingleToyDetails;