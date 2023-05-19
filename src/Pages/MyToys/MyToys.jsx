import { useContext, useEffect, useState } from "react";
import { UserContext } from "../../Provider/AuthProvider";
import MyToysRow from "./MYToysRow";


const MyToys = () => {
    const { user } = useContext(UserContext);

    const url = `http://localhost:5000/myToys/?email=${user.email}`
    const [toys, setToys] = useState([]);
    useEffect(() => {
        fetch(url)
            .then(res => res.json())
            .then(data => setToys(data))
    }, [url])

    return (

        <div className="overflow-x-auto my-10">
            <table className="table w-full">
                <thead>
                    <tr className="text-center">
                        <th>Serial</th>
                        <th>Seller</th>
                        <th>Toy Name</th>
                        <th>Sub-category</th>
                        <th>Price</th>
                        <th>Available Quantity</th>
                        <th>Action</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        toys.map((toy, index) => <MyToysRow key={toy._id} index={index} toy={toy}></MyToysRow>)
                    }
                </tbody>
            </table>
        </div>

    );
};

export default MyToys;