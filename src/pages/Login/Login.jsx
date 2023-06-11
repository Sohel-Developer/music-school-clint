import React from 'react';
import { useForm } from 'react-hook-form';
import { Link } from 'react-router-dom';

const Login = () => {

    const { register, handleSubmit, watch, formState: { errors } } = useForm();

    const handleLogin = (data) => {
        // TODO: Login Implement In Firebase
        // e.preventDefault()
        console.log(data);



        console.log("Clicked");
    }


    return (
        <div>
            <div className="hero min-h-screen bg-base-200">
                <div className="hero-content w-full  ">

                    <div className="card  md:w-1/3 pb-5 shadow-2xl bg-base-100">
                        <form onSubmit={handleSubmit(handleLogin)} className="p-5">
                            <h2 className='text-center mb-4 font-bold text-xl'>Place Login Now</h2>


                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Email</span>
                                </label>
                                <input {...register("email")} type="email" placeholder="email" className="input input-bordered" />
                            </div>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Password</span>
                                </label>
                                <input {...register("password")} type="password" placeholder="password" className="input input-bordered" />
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


                    </div>
                </div>
            </div>
        </div>
    );
};

export default Login;