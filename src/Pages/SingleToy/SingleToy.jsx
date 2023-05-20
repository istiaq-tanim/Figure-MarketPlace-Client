import { useLoaderData } from "react-router-dom";
import useTitle from "../../Hooks/useTitle";

const SingleToy = () => {
    useTitle("SingleToy")
    const toy = useLoaderData();
    const { name, price, image, rating, availableQuantity, description} = toy
    return (

        <div className="max-w-sm rounded mx-auto bg-blue-100 py-5 my-10 overflow-hidden shadow-lg">
            <img className="w-full h-64 object-contain" src={image} alt="Card" />
            <div className="px-6 py-4">
                <div className="font-bold text-xl mb-2">{name}</div>
                <p className=" font-semibold text-base">
                   <span className="text-blue-500 pr-2">Rating: </span> {rating}
                </p>
                <p className=" font-semibold text-base">
                <span className="text-blue-500 pr-2"> Price: </span> {price}
                </p>
                <p className=" font-semibold text-base">
                <span className="text-blue-500 pr-2"> Available: </span>    {availableQuantity}
                </p>
                <p className="text-justify font-semibold text-base">
                <span className="text-blue-500 ">Description: </span>{description}
                </p>
            </div>
        </div>

    );
};

export default SingleToy;