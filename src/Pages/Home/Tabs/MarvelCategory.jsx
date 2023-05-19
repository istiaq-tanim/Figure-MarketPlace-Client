import { Link } from "react-router-dom";
const MarvelCategory = ({ toy }) => {
    const { _id,name, price, image, rating } = toy
    return (
        <div>
            <div className="card card-compact mt-10 w-96 bg-base-100 shadow-xl">
                <p>{toy.length}</p>
                <figure><img className="h-96" src={image} alt="Shoes" /></figure>
                <div className="card-body">
                    <h2 className="card-title">{name}</h2>
                    <p className="text-blue-500">Price: {price}</p>
                    <p>Ratings {
                        rating}</p>
                    <div className="card-actions justify-end">
                    <Link to={`/toy/${_id}`}><button className="btn bg-sky-400 border-0">View Details</button></Link>
                    </div>
                </div>
            </div>
        </div>

    );
};

export default MarvelCategory;