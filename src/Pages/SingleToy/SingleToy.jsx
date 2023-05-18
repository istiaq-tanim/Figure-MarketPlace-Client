import { useLoaderData } from "react-router-dom";

const SingleToy = () => {
    const toy = useLoaderData();
    const { _id, name, price, image, rating } = toy
    return (

        <div className="max-w-sm rounded mx-auto my-10 overflow-hidden shadow-lg">
            <img className="w-full h-96"  src={image} alt="Card" />
            <div className="px-6 py-4 text-center">
                <div className="font-bold text-xl mb-2">{name}</div>
                <p className="text-gray-700 text-base">
                    {rating}
                </p>
            </div>
        </div>

    );
};

export default SingleToy;