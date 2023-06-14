import React from 'react';
import { FaFacebook, FaInstagram, FaLinkedin, FaTwitter } from 'react-icons/fa';
import useAxiosSecure from '../../Hooks/useAxiosSecure';
import { useQuery } from '@tanstack/react-query';

const OurInstactor = () => {


    const [axiosSecure] = useAxiosSecure()

    const { isLoading, error, data: users = [], refetch } = useQuery({
        queryKey: ['users'],
        queryFn: async () => {
            const res = await axiosSecure('/users/instructor')
            return res.data
        }
    })


    if (isLoading) return 'Loading...'

    console.log(users);



    return (
        <div className='max-w-7xl  my-12 mx-auto'>
            <div className='text-center'>
                <h4 className='text-2xl font-semibold'>Our Team</h4>
                <h2 className='text-5xl font-bold'>Meet Our Teachers</h2>
                <p className='my-4 md:w-1/2 mx-auto'>Pellentesque mattis mauris ac tortor volutpat, eu fermentum sapien euismod. In id tempus metus. Donec eu volutpat nibh, in maximus ligula.</p>
            </div>
            {/* TODO:Dynamic  */}
            <div className='my-10 grid md:grid-cols-3 gap-5 items-center '>

                {
                    users.map(user => <div key={user._id} className='w-80 py-10 shadow-xl rounded-lg mx-auto p-5'>
                        <img src={user.image} className='rounded-full w-40 mx-auto mb-4' alt="" />
                        <div className='text-center space-y-2'>
                            <h3 className='text-3xl font-bold'>{user.name}</h3>
                            <h4 className='text-xl font-semibold'>{user.role}</h4>
                            <div className='flex gap-4 justify-center'>
                                <FaFacebook /> <FaTwitter /> <FaLinkedin /> <FaInstagram />
                            </div>
                        </div>
                    </div>)
                }




            </div>
        </div>
    );
};

export default OurInstactor;