// import { useState } from "react";
import { FaGoogle, FaGithub } from 'react-icons/fa';
import { Link } from 'react-router-dom';
import Lottie from "lottie-react";
import groovyWalkAnimation from "../../assets/134945-zpunet-icon.json";

const Login = () => {
    // const [error, setError] = useState("");
    // const [success, setSuccess] = useState("");
    return (
        <div>
            <div className="hero bg-base-200">
                <div className="hero-content flex w-full gap-20">
                <Lottie animationData={groovyWalkAnimation} loop={true} />
                    <div className="card flex-shrink-0 w-full h-auto max-w-sm shadow-2xl bg-base-100">
                    <h1 className="text-3xl text-center font-bold mt-3">Login now!</h1>
                        <form className="card-body pb-2">
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Email</span>
                                </label>
                                <input type="email" name='email' required placeholder="email" className="input input-bordered" />
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
                                <button className="btn btn-info text-white">Login</button>
                            </div>

                        </form>

                        <button  className="btn btn-outline w-80  mx-auto my-2"><FaGoogle className='inline-block mr-2'></FaGoogle>Sign in With Google</button>
                        <button  className="btn btn-outline w-80  mx-auto my-2"><FaGithub className='inline-block mr-2'></FaGithub>Sign in With Github</button>
                        <p className='text-center'>New Member?<Link to="/register"><button className="btn btn-active px-1 py-0 btn-link">Please Register</button></Link></p>

                    </div>
                </div>
            </div>
        </div>
    );
};

export default Login;