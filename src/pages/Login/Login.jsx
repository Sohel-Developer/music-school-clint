import React, { useState } from 'react';
import { useForm } from 'react-hook-form';
import { Link } from 'react-router-dom';

import { FaEye, FaEyeSlash } from "react-icons/fa";
import SocialLogin from '../SocialLogin/SocialLogin';

const Login = () => {

    const { register, handleSubmit, formState: { errors } } = useForm();

    const [passwordVisible, setPasswordVisible] = useState(false);

    const handlePasswordToggle = () => {
        setPasswordVisible(!passwordVisible);
    };

    const handleLogin = (data) => {
        // TODO: Login Implement In Firebase
        console.log(data);

    }


    return (
        <div>
            <div className="hero min-h-screen bg-base-200">
                <div className="hero-content w-full  ">

                    <div className="card  md:w-1/3 pb-5 mt-5 shadow-2xl bg-base-100">
                        <form onSubmit={handleSubmit(handleLogin)} className="p-5">
                            <h2 className='text-center mb-4 font-bold text-xl'>Place Login Now</h2>


                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Email</span>
                                </label>
                                <input {...register("email")} type="email" placeholder="email" className="input input-bordered" />
                            </div>
                            <div className="form-control mt-5">
                                <div className='relative'>
                                    <input  {...register("password")} type={passwordVisible ? 'text' : 'password'} placeholder="password" className="input input-bordered w-full" />
                                    <button className='absolute right-4 top-3  ' onClick={handlePasswordToggle}>
                                        {passwordVisible ? <FaEye className='text-2xl'></FaEye> : <FaEyeSlash className='text-2xl'></FaEyeSlash>}
                                    </button>
                                </div>
                                <label className="label">
                                    <a href="#" className="label-text-alt link link-hover">Forgot password?</a>
                                </label>
                            </div>
                            <div className="form-control mt-2">
                                <input type='submit' className="btn btn-primary" value="Login" />
                            </div>
                        </form>
                        <div className="divider m-0">OR</div>

                        <label className="label flex justify-center">
                            <Link to='/signup'><span className="label-text hover:text-blue-500">Create A New Account</span></Link>

                        </label>

                        <div>
                            <SocialLogin />
                        </div>


                    </div>
                </div>
            </div>
        </div>
    );
};

export default Login;