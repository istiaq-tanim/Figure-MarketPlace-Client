import { Link } from "react-router-dom";
import { Rating } from '@smastrom/react-rating'
import Swal from 'sweetalert2'
import '@smastrom/react-rating/style.css'
import { useContext } from "react";
import { UserContext } from "../../../Provider/AuthProvider";
const MarvelCategory = ({ toy }) => {
    const { _id,name, price, image, rating } = toy
    const {user}=useContext(UserContext)
    const isChecked = () =>{
        if(!user)
        {
            Swal.fire({
                title: 'Warning',
                text: 'You have to log in first to view details',
                icon: 'warning',
                confirmButtonText: 'Go It'
              })
        }
    }
    return (
        <div>
            <div className="card card-compact mt-10 w-96 bg-base-100 shadow-xl">
                <p>{toy.length}</p>
                <figure><img className="h-96 w-full" src={image}  /></figure>
                <div className="card-body">
                    <h2 className="card-title">{name}</h2>
                    <p className="text-blue-500 font-bold">Price: {price}</p>
                    <p className="flex gap-2 items-center"><span className="text-blue-500 font-bold">Ratings:</span><Rating style={{ maxWidth: 100 }} value={Math.round(rating) || 0} readOnly /></p>
                    <div className="card-actions justify-end">
                    <Link to={`/singleToy/${_id}`}><button onClick={isChecked} className="btn bg-sky-400 border-0">View Details</button></Link>
                    </div>
                </div>
            </div>
        </div>

    );
};

export default MarvelCategory;