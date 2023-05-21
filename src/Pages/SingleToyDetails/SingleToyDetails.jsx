//picture, toy name, seller name, seller email, price, rating, available quantity, and detail description

import { useLoaderData } from "react-router-dom";
import useTitle from "../../Hooks/useTitle";
import { Rating } from '@smastrom/react-rating'
import '@smastrom/react-rating/style.css'

const SingleToyDetails = () => {
    useTitle("Single Toy Details")
    const toyDetails = useLoaderData();
    const { name, price, image, rating, availableQuantity,
        description, seller, email } = toyDetails
    return (
        <div className="flex justify-center m-10">
            <div className="card w-96 bg-base-100 shadow-xl">
                <figure><img className="h-64 object-fill w-full" src={image} alt="Shoes" /></figure>
                <div className="card-body">
                    <h2 className="card-title text-blue-500">{name}</h2>
                    <p><span className="text-blue-500 font-bold pr-2">Email:</span> {email}</p>
                    <p><span className="text-blue-500 font-bold pr-2">Seller Name:</span> {seller}</p>
                    <p><span className="text-blue-500 font-bold pr-2">Price:</span> ${price}</p>
                    <p><p className="flex gap-1 items-center"><span className="text-blue-500 font-bold pr-1">Ratings:</span><Rating style={{ maxWidth: 100 }} value={Math.round(rating) || 0} readOnly /></p></p>
                    <p><span className="text-blue-500 font-bold pr-2">Quantity:</span> {availableQuantity}</p>
                    <p className="text-justify"> <span className="text-blue-500 font-bold pr-2">Description:</span>
                     {description.slice(0,100)}...</p>
                </div>
            </div>
        </div>

    );
};

export default SingleToyDetails;