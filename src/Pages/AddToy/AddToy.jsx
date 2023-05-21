import { useContext, useState } from "react";
import { useForm } from "react-hook-form";
import Select from 'react-select'
import { UserContext } from "../../Provider/AuthProvider";
import Swal from 'sweetalert2'
import useTitle from "../../Hooks/useTitle";
const AddToy = () => {
    useTitle("Add Toy")
    const { user } = useContext(UserContext);
    const [selectedOption, setSelectedOption] = useState(null);
    const { register, handleSubmit, formState: { errors } } = useForm();
    const onSubmit = data => {
        
        const intValuePrice=parseInt(data.price);
        data.price=intValuePrice
        data.subCategory = selectedOption.value;
        console.log(data)

        fetch("https://assignment-11-toy-market-server.vercel.app/addToy", {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify(data),
        })
            .then((res) => res.json())
            .then((data) => {
                console.log(data);
                if(data.insertedId)
                {
                    Swal.fire({
                        title: 'Success!',
                        text: 'Toy Added Successfully',
                        icon: 'success',
                        confirmButtonText: 'Cool'
                      })
                }
            });
    };

    const options = [
        { value: 'Marvel', label: 'Marvel' },
        { value: 'DC', label: 'DC' },
        { value: 'Transformers', label: 'Transformers' }
    ]
    return (
        <div className="w-3/4 mx-auto my-10">
            <form onSubmit={handleSubmit(onSubmit)}>
                <div className="grid grid-cols-2 gap-5">
                    <div className="mb-4">
                        <label htmlFor="name" className="block text-gray-700 text-sm font-bold mb-2">
                            Name
                        </label>
                        <input
                            type="text"
                            className={`shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline ${errors.name ? 'border-red-500' : ''}`}
                            placeholder="Toy name"
                            {...register('name', { required: 'Name is required' })}
                        />
                        {errors.name && <p className="text-red-500 text-xs mt-1">{errors.name.message}</p>}
                    </div>
                    <div className="mb-4">
                        <label htmlFor="seller" className="block text-gray-700 text-sm font-bold mb-2">
                            Seller Name
                        </label>
                        <input
                            type="text"
                            id="seller"
                            defaultValue={user?.displayName}
                            className={`shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline ${errors.name ? 'border-red-500' : ''}`}
                            placeholder="Seller name"
                            {...register('seller', { required: 'Seller name is required' })}
                        />
                        {errors.name && <p className="text-red-500 text-xs mt-1">{errors.name.message}</p>}
                    </div>
                </div>

                <div className="grid grid-cols-2 gap-5">
                    <div className="mb-4">
                        <label htmlFor="image" className="block text-gray-700 text-sm font-bold mb-2">
                            Photo
                        </label>
                        <input
                            type="text"
                            id="image"
                            className={`shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline ${errors.name ? 'border-red-500' : ''}`}
                            placeholder="image"
                            {...register('image')}
                        />
                        {errors.name && <p className="text-red-500 text-xs mt-1">{errors.name.message}</p>}
                    </div>

                    <div className="mb-4">
                        <label htmlFor="email" className="block text-gray-700 text-sm font-bold mb-2">
                            Email
                        </label>
                        <input
                            type="email"
                            id="email"
                            defaultValue={user?.email}
                            className={`shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline ${errors.email ? 'border-red-500' : ''}`}
                            placeholder="Enter your email"
                            {...register('email', { required: 'Email is required' })}
                        />
                        {errors.email && <p className="text-red-500 text-xs mt-1">{errors.email.message}</p>}
                    </div>
                </div>
                <div className="grid grid-cols-2 gap-5">
                    <div className="mb-4">
                        <label htmlFor="price" className="block text-gray-700 text-sm font-bold mb-2">
                            Price
                        </label>
                        <input
                            type="number"
                            id="price"
                            className={`shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline ${errors.name ? 'border-red-500' : ''}`}
                            placeholder="Price"
                            {...register('price', { required: 'Price is required' })}
                        />
                        {errors.name && <p className="text-red-500 text-xs mt-1">{errors.name.message}</p>}
                    </div>
                    <div className="mb-4">
                        <label htmlFor="rating" className="block text-gray-700 text-sm font-bold mb-2">
                            Ratings
                        </label>
                        <input
                            type="text"
                            id="
                            rating"
                            className={`shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline ${errors.name ? 'border-red-500' : ''}`}
                            placeholder="Ratings"
                            {...register('rating', { required: 'Ratings is required' })}
                        />
                        {errors.name && <p className="text-red-500 text-xs mt-1">{errors.name.message}</p>}
                    </div>
                </div>
                <div className="grid grid-cols-2 gap-5">
                    <div className="mb-4">
                        <label htmlFor="availableQuantity" className="block text-gray-700 text-sm font-bold mb-2">
                            Available quantity
                        </label>
                        <input
                            type="text"
                            id="availableQuantity"
                            className={`shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline ${errors.name ? 'border-red-500' : ''}`}
                            placeholder="quantity"
                            {...register('availableQuantity', { required: 'Quantity is required' })}
                        />
                        {errors.name && <p className="text-red-500 text-xs mt-1">{errors.name.message}</p>}
                    </div>
                    <div>
                        <label htmlFor="name" className="block text-gray-700 text-sm font-bold mb-2">
                            Sub-category
                        </label>
                        <Select defaultValue={selectedOption} required onChange={setSelectedOption} options={options} />
                    </div>
                </div>

                <div className="mb-4">
                    <label htmlFor="description" className="block text-gray-700 text-sm font-bold mb-2">
                        Description
                    </label>
                    <textarea
                        id="description"
                        className={`shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline ${errors.message ? 'border-red-500' : ''}`}
                        placeholder="Description"
                        {...register('description',)}
                    />
                    {errors.message && <p className="text-red-500 text-xs mt-1">{errors.message.message}</p>}
                </div>


                <div className="flex items-center justify-between">
                    <button
                        type="submit"
                        className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
                    >
                        Submit
                    </button>
                </div>
            </form>
        </div>
    );
}


export default AddToy;