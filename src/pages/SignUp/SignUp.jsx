import React, { useContext, useState } from 'react';
import { useForm } from 'react-hook-form';
import { Link, useNavigate } from 'react-router-dom';

import { FaEye, FaEyeSlash } from "react-icons/fa";
import { AuthContext } from '../Provider/AuthProvider';
import { toast } from 'react-hot-toast';
import SocialLogin from '../SocialLogin/SocialLogin';



const SignUp = () => {
    const { register, handleSubmit, reset, formState: { errors } } = useForm();
    const [passwordVisible, setPasswordVisible] = useState(false);
    const { createUser, userUpdateProfile } = useContext(AuthContext)
    const [error, setError] = useState("")
    const navigate = useNavigate()

    const handlePasswordToggle = (e) => {
        e.preventDefault()
        setPasswordVisible(!passwordVisible);
    };


    const handleSignUp = (data) => {
        const { name, image, email, password } = data;

        const info = {
            displayName: name,
            photoURL: image
        }

        createUser(email, password)
            .then((userCredential) => {
                setError("")
                const user = userCredential.user;
                console.log(user)
                toast.success(' Account Created Successfully🤟 !')
                /* User Update  */
                userUpdateProfile(info)
                    .then(() => {
                        setError("")
                        // Profile updated!
                        toast.success('Profile Update Successfully🤟 !')

                        const savedUser = {
                            name,
                            email,
                            image,
                            role: "Student"
                        }

                        fetch('http://localhost:5000/users', {
                            method: 'POST',
                            headers: {
                                'content-type': 'application/json'
                            },
                            body: JSON.stringify(savedUser)
                        })
                            .then(res => res.json())
                            .then(data => {
                                /* Form Reset */
                                reset()
                                toast.success('Saved User Successfully🤟 !')
                            })


                        // Navigate Home Page
                        navigate('/')

                    }).catch((error) => {
                        // Error Handeling
                        setError(error)
                    });


            })
            .catch((error) => {
                const errorMessage = error.message;
                setError(errorMessage)
                console.log(errorMessage);
            });


    }


    return (
        <div>
            <div className="hero">
                <div className="hero-content w-full">
                    <div className="card mt-32 md:w-1/3 pb-5 shadow-2xl bg-base-100">
                        <form onSubmit={handleSubmit(handleSignUp)} className="p-5">
                            <h2 className='text-center mb-4 font-bold text-xl'>Place SignUp Now</h2>


                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Name</span>
                                </label>
                                <input {...register("name", { required: true })} type="text" placeholder="Your Name" className="input input-bordered" />
                                {errors.name && <span className="label-text-alt mt-2 text-red-500 ">please Provide Your Name</span>}
                            </div>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Email</span>
                                </label>
                                <input {...register("email", { required: true })} type="email" placeholder="Your email" className="input input-bordered" />
                                {errors.email && <span className="label-text-alt mt-2 text-red-500 ">please Provide Your Email</span>}
                            </div>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Photo URL</span>
                                </label>
                                <input {...register("image", { required: true })} type="text" placeholder="Your Photo URL" className="input input-bordered" />
                                {errors.image && <span className="label-text-alt mt-2 text-red-500 ">please Your Valid Profile Image Link</span>}
                            </div>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Password</span>
                                </label>
                                <div className='relative'>
                                    <input   {...register("password", {
                                        required: true,
                                        minLength: 6,
                                        maxLength: 20,
                                        pattern: /(?=.*[A-Z])(?=.*[!@#$&*])(?=.*[0-9])(?=.*[a-z])/
                                    })} type={passwordVisible ? 'text' : 'password'} placeholder="password" className="input input-bordered w-full" />
                                    <button className='absolute right-4 top-3  ' onClick={handlePasswordToggle}>
                                        {passwordVisible ? <FaEye className='text-2xl'></FaEye> : <FaEyeSlash className='text-2xl'></FaEyeSlash>}
                                    </button>
                                </div>
                                <label className="label">
                                    {/* All Error Show */}
                                    {errors.password?.type === 'required' && <span className="label-text-alt text-red-500 ">Password is required</span>}
                                    {errors.password?.type === 'minLength' && <span className="label-text-alt text-red-500 ">Password must be 6 creacters</span>}
                                    {errors.password?.type === 'maxLength' && <span className="label-text-alt text-red-500 ">Password must be less then 20 creacters</span>}
                                    {errors.password?.type === 'pattern' && <span className="label-text-alt text-red-500 ">Password must be one number,one capital letter,one special creacter & one lower case</span>}

                                    {/* Firebase Error Controls */}
                                    {
                                        error && <span className="label-text-alt text-red-500 ">{error}</span>
                                    }

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

                        <div>
                            <SocialLogin />
                        </div>


                    </div>
                </div>
            </div>
        </div>
    );
};

export default SignUp;