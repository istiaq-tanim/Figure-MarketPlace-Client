import { FaTrash,FaPen } from 'react-icons/fa';
import { Link } from 'react-router-dom';
const MyToysRow = ({toy,index,handleDelete}) => {
    const {_id, name, seller, subCategory, price, availableQuantity } = toy;
    return (
        <tr className="text-center">
            <td>{index + 1}</td>
            <td>{seller && seller}</td>
            <td>{name}</td>
            <td>{subCategory}</td>
            <td>{price}</td>
            <td>{availableQuantity}</td>
            <td className='flex justify-center gap-5'><FaTrash onClick={()=>handleDelete(_id)} className='cursor-pointer text-sky-400'></FaTrash> <Link to={`/updateToy/${_id}`}><FaPen  className='cursor-pointer text-sky-400'></FaPen></Link></td>
        </tr>
    );
};

export default MyToysRow;