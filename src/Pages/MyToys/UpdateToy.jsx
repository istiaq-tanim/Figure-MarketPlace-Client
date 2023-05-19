import { useLoaderData } from "react-router-dom";
import Swal from 'sweetalert2'

const UpdateToy = () => {
    const loadToy = useLoaderData();
    const { _id , price, availableQuantity, description } = loadToy;
    const handleUpdate = event =>
    {
        event.preventDefault();
        const form=event.target;
        const price=parseInt(form.price.value);
        const quantity=form.quantity.value;
        const description=form.description.value;
        
        const updateUser={price,quantity,description}
        console.log(updateUser)
        fetch(`http://localhost:5000/update/${_id}`,
        {
            method:"PUT",
            headers:{"content-type":"application/json"},
            body:JSON.stringify(updateUser)
        }
        )
        .then(res =>res.json())
        .then(data => {console.log(data)
            if(data.modifiedCount === 1)
            {
                Swal.fire({
                    title: 'Success!',
                    text: 'Toy Updated Successfully',
                    icon: 'success',
                    confirmButtonText: 'Cool'
                  })
            }
        })
    }
    return (

        <div className="w-[90%] mx-auto">
        <h5 className="text-center text-xl mt-3 font-medium">Update Toy</h5>
        <form onSubmit={handleUpdate} className="mx-auto my-10">
            <div className="grid grid-cols-2 gap-5 px-2">
            <div className="mb-4">
                <label htmlFor="name" className="block font-medium mb-2 text-gray-700"> Price:</label>
                <input type="number" name="price" defaultValue={price} required className="input input-bordered input-primary w-full" />
            </div>

            <div className="mb-4">
                <label htmlFor="name" className="block font-medium mb-2 text-gray-700"> Quantity:</label>
                <input type="text" name="quantity" defaultValue={availableQuantity} required className="input input-bordered input-primary w-full" />
            </div>
            </div>

            <div className="mb-4 px-2">
                <label htmlFor="email" className="block font-medium text-gray-700"> Description</label>
                <textarea name="description" defaultValue={description} className="textarea w-full textarea-primary" placeholder="Bio"></textarea>
            </div>


            <input type="submit" className="btn btn-block btn-primary border-0" value="Update User" />
        </form>
    </div>
    );
};

export default UpdateToy;