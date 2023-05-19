import { useContext, useEffect, useState } from "react";
import { UserContext } from "../../Provider/AuthProvider";
import MyToysRow from "./MYToysRow";
import Swal from 'sweetalert2'


const MyToys = () => {
    const { user } = useContext(UserContext);

    const url = `http://localhost:5000/myToys/?email=${user.email}`
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

                fetch(`http://localhost:5000/myToys/${_id}`, {
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
                        toys.map((toy, index) => <MyToysRow key={toy._id} handleDelete={handleDelete} index={index} toy={toy}></MyToysRow>)
                    }
                </tbody>
            </table>
        </div>

    );
};

export default MyToys;