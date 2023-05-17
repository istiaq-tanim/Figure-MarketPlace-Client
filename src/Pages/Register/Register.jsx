import { Link } from "react-router-dom";
import Lottie from "lottie-react";
import groovyWalkAnimation from "../../assets/134945-zpunet-icon.json";

const Register = () => {
    return (
        <div className="hero min-h-screen bg-base-200">
        <div className="hero-content flex-row w-full gap-20">
        
            <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
            <h1 className="text-3xl mt-2 text-center font-bold">Register now!</h1>
                <form className=" my-2 py-5 px-10">
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text">User</span>
                        </label>
                        <input type="text" name="username"  placeholder="Username" className="input input-bordered" />
                    </div>
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text">Photo Url</span>
                        </label>
                        <input type="text" name="photo"  placeholder="photo" className="input input-bordered" />
                    </div>
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text">Email</span>
                        </label>
                        <input type="email" name="email" required placeholder="email" className="input input-bordered" />
                    </div>
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text">Password</span>
                        </label>
                        <input type="password" name='password' required placeholder="password" className="input input-bordered" />
                    </div>
                    <p className='text-green-500'></p>
                    <p className='text-red-500'></p>

                    <div className="form-control mt-2">
                        <button className="btn btn-info">Register</button>
                    </div>
                    <p>Already Have an Account?<Link to="/login"><button className="btn btn-active btn-link px-1 py-0 ">Please Login</button></Link></p>
                </form>

            </div>
        </div>
    </div>

    );
};

export default Register;