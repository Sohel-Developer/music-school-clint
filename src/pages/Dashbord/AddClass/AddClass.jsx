import React from 'react';
import { useForm } from 'react-hook-form';
import useAuth from '../../Hooks/useAuth';
import axios from 'axios';
import { toast } from 'react-hot-toast';


const AddClass = () => {

    const { user } = useAuth()

    const { register, handleSubmit, formState: { errors } } = useForm();

    const handleAddClass = (data) => {
        const { image, name, price, seats, description } = data;

        const classSave = {
            name,
            price,
            seats,
            image,
            description,
            student: 0,
            status: "pending",
            instructorName: user?.displayName,
            instructorEmail: user?.email
        }

        axios.post('https://music-school-server-red.vercel.app/class', classSave)
            .then(data => {
                toast.success(`Successfully Classes Added!`)
            })

    }


    return (
        <div className="hero min-h-screen bg-base-200">
            <div className="hero-content w-full  ">

                <div className="card  w-full  pb-5 mt-5 shadow-2xl bg-base-100">
                    <form onSubmit={handleSubmit(handleAddClass)} className="p-5">
                        <div className='flex gap-5'>
                            <div className="form-control w-full">
                                <label className="label">
                                    <span className="label-text">Class Name</span>
                                </label>
                                <input {...register("name")} type="text" placeholder="Class Name" className="input input-bordered" />
                            </div>
                            <div className="form-control w-full">
                                <label className="label">
                                    <span className="label-text">Class Image URL</span>
                                </label>
                                <input {...register("image")} type="text" placeholder="Image URL" className="input input-bordered" />
                            </div>
                        </div>
                        <div className='flex gap-5'>
                            <div className="form-control w-full">
                                <label className="label">
                                    <span className="label-text">Instructor name</span>
                                </label>
                                <input {...register("instructorName")} type="text" defaultValue={user?.displayName} className="input input-bordered" />
                            </div>
                            <div className="form-control w-full">
                                <label className="label">
                                    <span className="label-text">Instructor email</span>
                                </label>
                                <input {...register("instructorEmail")} type="email" defaultValue={user?.email} className="input input-bordered" />
                            </div>
                        </div>
                        <div className='flex gap-5'>
                            <div className="form-control w-full">
                                <label className="label">
                                    <span className="label-text">Available seats</span>
                                </label>
                                <input {...register("seats")} type="number" placeholder="Available seats Numbers" className="input input-bordered" />
                            </div>
                            <div className="form-control w-full">
                                <label className="label">
                                    <span className="label-text">Price</span>
                                </label>
                                <input {...register("price")} type="number" placeholder="Price" className="input input-bordered" />
                            </div>
                        </div>
                        <div className="form-control w-full">
                            <label className="label">
                                <span className="label-text">description</span>
                            </label>
                            <textarea {...register("description")} type="text" placeholder="description" className="input input-bordered" />
                        </div>

                        <div className="form-control mt-2">
                            <input type='submit' className="btn btn-primary" value="Add class" />
                        </div>
                    </form>



                </div>
            </div>
        </div>
    );
};

export default AddClass;