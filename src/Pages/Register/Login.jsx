import { useContext, useState } from "react";
import { FaGoogle } from 'react-icons/fa';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import Lottie from "lottie-react";
import groovyWalkAnimation from "../../assets/134945-zpunet-icon.json";
import { UserContext } from "../../Provider/AuthProvider";

const Login = () => {
    const {login,goggleLogin}=useContext(UserContext)
    const [error, setError] = useState("");
    const [success, setSuccess] = useState("");
    const location=useLocation();
    const navigate=useNavigate();


    let from = location.state?.from?.pathname || "/";

    const handleLogin =event =>
    {
        event.preventDefault();
        setSuccess('');
        setError('');
        const form=event.target;
        const email=form.email.value;
        const password=form.password.value;
        login(email,password)
        .then(result => {
            const user=result.user;
            navigate(from, { replace: true });
            setSuccess("Logged in Successfully");
            form.reset();
            console.log(user)
        })
        .catch(error => setError(error.message))
    }

     
    const handleGoggle = () =>
    {
         goggleLogin()
         .then(result => {
            const user=result.user;
            navigate(from, { replace: true });
            setSuccess("Logged in Successfully");
            console.log(user);
    })
         .catch(error => setError(error.message))
    }
    return (
        <div>
            <div className="hero bg-base-200">
                <div className="hero-content flex w-full gap-20">
                <Lottie animationData={groovyWalkAnimation} loop={true} />
                    <div className="card flex-shrink-0 w-full h-auto max-w-sm shadow-2xl bg-base-100">
                    <h1 className="text-3xl text-center font-bold mt-3">Login now!</h1>
                        <form onSubmit={handleLogin} className="card-body pb-2">
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

                            <p className='text-green-500'>{success}</p>
                            <p className='text-red-500'>{error}</p>
                            <div className="form-control mt-2">
                                <button className="btn btn-info text-white">Login</button>
                            </div>

                        </form>

                        <button onClick={handleGoggle}  className="btn btn-outline w-80  mx-auto my-2"><FaGoogle className='inline-block mr-2'></FaGoogle>Sign in With Google</button>
                        <p className='text-center'>New Member?<Link to="/register"><button className="btn btn-active px-1 py-0 btn-link">Please Register</button></Link></p>

                    </div>
                </div>
            </div>
        </div>
    );
};

export default Login;