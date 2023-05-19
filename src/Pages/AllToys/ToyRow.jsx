import { Link } from "react-router-dom";

const ToyRow = ({toy,index}) => {
    const {_id, name, seller, subCategory, price, availableQuantity } = toy
    return (
        
            <tr className="text-center">
                <td>{index+1}</td>
                <td>{seller && seller}</td>
                <td>{name}</td>
                <td>{subCategory}</td>
                <td>{price}</td>
                <td>{availableQuantity}</td>
                <td><Link to={`/singleToy/${_id}`}><button className="btn border-0 bg-sky-300">View Details</button></Link></td>
            </tr>
        
    );
};

export default ToyRow;