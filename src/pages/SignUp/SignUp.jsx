import React from 'react';
import { useForm } from 'react-hook-form';
import { Link } from 'react-router-dom';



const SignUp = () => {


    const { register, handleSubmit, watch, formState: { errors } } = useForm();


    const handleSignUp = (data) => {
        // TODO: Signup Implement In Firebase
        console.log(data);
    }

    return (
        <div>
            <div className="hero  bg-base-200">
                <div className="hero-content h-screen w-full  ">

                    <div className="card mt-32 md:w-1/3 pb-5 shadow-2xl bg-base-100">
                        <form onSubmit={handleSubmit(handleSignUp)} className="p-5">
                            <h2 className='text-center mb-4 font-bold text-xl'>Place Login Now</h2>


                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Name</span>
                                </label>
                                <input {...register("name")} type="text" placeholder="Your Name" className="input input-bordered" />
                            </div>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Email</span>
                                </label>
                                <input {...register("email")} type="email" placeholder="Your email" className="input input-bordered" />
                            </div>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Photo URL</span>
                                </label>
                                <input {...register("image")} type="text" placeholder="Your Photo URL" className="input input-bordered" />
                            </div>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Password</span>
                                </label>
                                <input {...register("password")} type="password" placeholder="password" className="input input-bordered" />
                                <label className="label">
                                    {/* TODO: Forget Account Implement */}
                                    <Link to='/' className="label-text-alt link link-hover">Forgot password?</Link>
                                </label>
                            </div>
                            <div className="form-control mt-2">
                                <input type='submit' className="btn btn-primary" value="Login" />
                            </div>
                        </form>
                        <div className="divider m-0">OR</div>

                        <label className="label flex justify-center">
                            <Link to='/login'><span className="label-text hover:text-blue-500">Already have an account Login Now</span></Link>

                        </label>


                    </div>
                </div>
            </div>
        </div>
    );
};

export default SignUp;