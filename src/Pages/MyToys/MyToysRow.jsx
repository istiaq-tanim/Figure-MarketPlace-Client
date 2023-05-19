const MyToysRow = ({toy,index}) => {
    const {_id, name, seller, subCategory, price, availableQuantity } = toy
    return (
        <tr className="text-center">
            <td>{index + 1}</td>
            <td>{seller && seller}</td>
            <td>{name}</td>
            <td>{subCategory}</td>
            <td>{price}</td>
            <td>{availableQuantity}</td>
        </tr>
    );
};

export default MyToysRow;