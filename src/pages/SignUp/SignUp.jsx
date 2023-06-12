import React, { useContext, useState } from 'react';
import { useForm } from 'react-hook-form';
import { Link, useNavigate } from 'react-router-dom';

import { FaEye, FaEyeSlash } from "react-icons/fa";
import { AuthContext } from '../Provider/AuthProvider';
import { toast } from 'react-hot-toast';



const SignUp = () => {


    const { register, handleSubmit, reset, formState: { errors } } = useForm();

    const [passwordVisible, setPasswordVisible] = useState(false);

    const { createUser, userUpdateProfile } = useContext(AuthContext)
    const navigate = useNavigate()

    const handlePasswordToggle = () => {
        setPasswordVisible(!passwordVisible);
    };

    const handleSignUp = (data) => {
        // TODO: Signup Implement In Firebase
        const { name, image, email, password } = data;

        const info = {
            displayName: name,
            photoURL: image
        }
        console.log(info);

        createUser(email, password)
            .then((userCredential) => {
                const user = userCredential.user;
                console.log(user)
                toast.success(' Account Created Successfully🤟 !')

                /* User Update  */
                userUpdateProfile(info)
                    .then(() => {
                        // Profile updated!
                        toast.success('Profile Update Successfully🤟 !')

                        navigate('/')
                        // ...
                    }).catch((error) => {
                        // An error occurred
                        console.log(error);
                    });

            })
            .catch((error) => {
                const errorMessage = error.message;
                console.log(errorMessage);
            });

        /* Form Reset */
        reset()






    }


    return (
        <div>
            <div className="hero">
                <div className="hero-content  w-full  ">

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
                                <div className='relative'>
                                    <input  {...register("password")} type={passwordVisible ? 'text' : 'password'} placeholder="password" className="input input-bordered w-full" />
                                    <button className='absolute right-4 top-3  ' onClick={handlePasswordToggle}>
                                        {passwordVisible ? <FaEye className='text-2xl'></FaEye> : <FaEyeSlash className='text-2xl'></FaEyeSlash>}
                                    </button>
                                </div>
                                <label className="label">
                                    {/* TODO: Forget Account Implement */}
                                    <Link to='/' className="label-text-alt link link-hover">Forgot password?</Link>
                                </label>
                            </div>
                            <div className="form-control mt-2">
                                <input type='submit' className="btn btn-primary" value="SignUp" />
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