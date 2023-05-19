import { useLoaderData } from "react-router-dom";
import ToyRow from "./ToyRow";

const AllToys = () => {
    const allToy = useLoaderData();
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
                            allToy.map((toy, index) => <ToyRow key={toy._id} index={index} toy={toy}></ToyRow>)
                        }
                    </tbody>
                </table>
            </div>
       
    );
};

export default AllToys;