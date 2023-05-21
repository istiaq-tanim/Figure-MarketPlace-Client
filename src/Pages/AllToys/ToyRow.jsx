import { Link } from "react-router-dom";

const ToyRow = ({toy,index}) => {
    const {_id, name, image , seller, subCategory, price, availableQuantity } = toy
    return (
        
            <tr className="text-center">
                <td>{index+1}</td>
                <td>{seller ? seller : ""}</td>
                <td className="flex items-center"><img className="rounded-full mx-auto w-14 h-14" src={image} alt="" /></td>
                <td>{name}</td>
                <td>{subCategory}</td>
                <td>{price}</td>
                <td>{availableQuantity}</td>
                <td><Link to={`/singleToy/${_id}`}><button className="btn border-0 bg-sky-300">View Details</button></Link></td>
            </tr>
        
    );
};

export default ToyRow;