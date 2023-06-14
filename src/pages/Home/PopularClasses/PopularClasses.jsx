import React from 'react';
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";

// import "./styles.css";

// import required modules
import { Pagination } from "swiper";
import useAxiosSecure from '../../Hooks/useAxiosSecure';
import { useQuery } from '@tanstack/react-query';

const PopularClasses = () => {

    const [axiosSecure] = useAxiosSecure()
    // /classes/:${user?.email}

    const { isLoading, error, data: classes, refetch } = useQuery({
        queryKey: ['classes'],
        queryFn: async () => {
            const res = await axiosSecure(`/classes`)
            return res.data
        }

    })


    if (isLoading) return 'Loading...'

    const handleAdd = () => {

    }



    return (
        <div className='max-w-7xl mx-auto my-12'>
            <div className='text-center'>
                <h4 className='text-2xl font-semibold'>Our Classes</h4>
                <h2 className='text-5xl font-bold'>Most Popular Classes</h2>
                <p className='my-4 md:w-1/2 mx-auto'>Pellentesque mattis mauris ac tortor volutpat, eu fermentum sapien euismod. In id tempus metus. Donec eu volutpat nibh, in maximus ligula.</p>
            </div>
            <Swiper
                slidesPerView={3}
                spaceBetween={30}
                pagination={{
                    clickable: true,
                }}
                modules={[Pagination]}
                className="mySwiper"
            >


                {
                    classes.map(item => <SwiperSlide key={item._id} ><div key={item._id} className="card my-12  bg-base-200 shadow-xl">
                        <figure><img className='object-fill w-full ' src={item.image} alt="Shoes" /></figure>
                        <div className="card-body pb-5">
                            <h2 className="card-title">
                                {item?.name} Class
                                <div className="badge badge-secondary">$ {item?.price}</div>
                            </h2>
                            <p>{item?.description}</p>
                            <div className="">
                                <div className="">Instructor Name : {item.instructorName}</div>
                                <div className="">Instructor Email : {item?.instructorEmail}
                                </div>
                            </div>
                            <div className="card-actions ">
                                <div className="badge badge-outline">Seats-{item.seats}</div>
                                <div className="badge badge-outline">Student Enroled {item?.student || 0}</div>
                            </div>
                            <button onClick={() => handleAdd(item)} className='btn font-semibold mt-4 border-0 border-b-4 border-sky-600  '>Add Class</button>
                        </div>
                    </div></SwiperSlide>
                    )
                }



            </Swiper>
        </div>
    );
};

export default PopularClasses;