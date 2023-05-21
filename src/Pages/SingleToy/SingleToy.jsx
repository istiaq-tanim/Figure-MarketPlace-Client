import { useLoaderData } from "react-router-dom";
import useTitle from "../../Hooks/useTitle";
import { Rating } from '@smastrom/react-rating'
import '@smastrom/react-rating/style.css'

const SingleToy = () => {
    useTitle("SingleToy")
    const toy = useLoaderData();
    const { name, price, image, rating, availableQuantity, description} = toy
    return (

        <div className="max-w-md rounded mx-auto bg-blue-100 my-10 overflow-hidden shadow-lg">
            <img className="w-full h-64 object-center" src={image} alt="Card" />
            <div className="px-6 py-4">
                <div className="font-bold text-xl mb-2">{name}</div>
                <p className=" font-semibold text-base">
                <p className="flex gap-1 items-center"><span className="text-blue-500 pr-1">Ratings:</span><Rating style={{ maxWidth: 100 }} value={Math.round(rating) || 0} readOnly /></p>
                </p>
                <p className=" font-semibold text-base">
                <span className="text-blue-500 pr-1"> Price: </span> ${price}
                </p>
                <p className=" font-semibold text-base">
                <span className="text-blue-500 pr-1">Available:</span>{availableQuantity}
                </p>
                <p className="text-justify font-semibold text-base">
                <span className="text-blue-500 text-justify">Description: </span>{description}
                </p>
            </div>
        </div>

    );
};

export default SingleToy;