import { useContext, useEffect, useState } from "react";
import { UserContext } from "../../Provider/AuthProvider";
import MyToysRow from "./MYToysRow";
import Swal from 'sweetalert2'
import useTitle from "../../Hooks/useTitle";


const MyToys = () => {
    useTitle("My Toys")
    const { user } = useContext(UserContext);
    const [selectedOption, setSelectedOption] = useState("low");
    const handleHigh = text => setSelectedOption(text)
    const handleLow = text => setSelectedOption(text)
    const url = `https://assignment-11-toy-market-server.vercel.app/myToys/${selectedOption}?email=${user.email}`
    const [toys, setToys] = useState([]);
    useEffect(() => {
        fetch(url)
            .then(res => res.json())
            .then(data => setToys(data))
    }, [url])

    const handleDelete = _id => {
        Swal.fire({
            title: 'Are you sure?',
            text: "You won't be able to revert this!",
            icon: 'warning',
            showCancelButton: true,
            confirmButtonColor: '#3085d6',
            cancelButtonColor: '#d33',
            confirmButtonText: 'Yes, delete it!'
        }).then((result) => {
            if (result.isConfirmed) {

                fetch(`https://assignment-11-toy-market-server.vercel.app/myToys/${_id}`, {
                    method: "DELETE"
                })
                    .then(res => res.json())
                    .then(data => {
                        console.log(data)
                        if (data.deletedCount === 1) {
                            Swal.fire(
                                'Deleted!',
                                'Your file has been deleted.',
                                'success'
                            )
                            const remaining = toys.filter(toy => toy._id !== _id)
                            setToys(remaining);
                        }
                    });

            }
        })

    }
    

    return (

        <div className="overflow-x-auto my-10">
             <div className="flex gap-3 justify-center">
             <button onClick={()=>handleLow("low")} className="btn btn-info">Low To High</button>
             <button onClick={()=>handleHigh("high")} className="btn btn-info">High to Low</button>
             </div>
            <table className="table mt-10 w-full">
                <thead>
                    <tr className="text-center">
                        <th>Serial</th>
                        <th>Seller</th>
                        <th>Image</th>
                        <th>Toy Name</th>
                        <th>Sub-category</th>
                        <th>Price</th>
                        <th>Available Quantity</th>
                        <th>Action</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        toys.map((toy, index) => <MyToysRow key={toy._id} handleDelete={handleDelete} index={index} toy={toy}></MyToysRow>)
                    }
                </tbody>
            </table>
        </div>

    );
};

export default MyToys;