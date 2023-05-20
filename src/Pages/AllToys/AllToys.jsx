import ToyRow from "./ToyRow";
import { useEffect, useState } from "react";

const AllToys = () => {
    const [searchItem, setSearchItem] = useState("")
    const [allToy, setAllToy] = useState([])

    useEffect(() => {
        fetch("http://localhost:5000/allToys")
            .then(res => res.json())
            .then(data => setAllToy(data))

    }, [])

    const handleSearch = () => {
        fetch(`http://localhost:5000/searchItem/${searchItem}`)
            .then(res => res.json())
            .then(data => setAllToy(data))
    }
    return (

        <div className="overflow-x-auto my-10">
            <h3 className="text-3xl text-center font-bold">All Toys</h3>
            <div className="flex justify-center gap-2 my-3">
                <input type="text" onChange={(event) => setSearchItem(event.target.value)} className="input input-bordered input-info w-full max-w-xs" id="" />
                <button onClick={handleSearch} className="btn btn-info">Search</button>
            </div>
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
                        allToy.map((toy, index) => <ToyRow key={toy._id} index={index} toy={toy}></ToyRow>)
                    }
                </tbody>
            </table>
        </div>

    );
};

export default AllToys;