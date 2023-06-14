import React from 'react';
import { FaFacebook, FaInstagram, FaLinkedin, FaTwitter } from 'react-icons/fa';

const OurInstactor = () => {
    return (
        <div className='max-w-7xl my-12 mx-auto'>
            <div className='text-center'>
                <h4 className='text-2xl font-semibold'>Our Team</h4>
                <h2 className='text-5xl font-bold'>Meet Our Teachers</h2>
                <p className='my-4 md:w-1/2 mx-auto'>Pellentesque mattis mauris ac tortor volutpat, eu fermentum sapien euismod. In id tempus metus. Donec eu volutpat nibh, in maximus ligula.</p>
            </div>
            {/* TODO:Dynamic  */}
            <div className='my-10 grid md:grid-cols-3 gap-5 '>
                <div className='w-60 mx-auto p-5'>
                    <img src="https://i.ibb.co/Ky8DQzt/person-4.png" className='rounded-full w-40 mx-auto mb-4' alt="" />
                    <div className='text-center space-y-2'>
                        <h3 className='text-3xl font-bold'>Courtney Lee</h3>
                        <h4 className='text-xl font-semibold'>Violin Teacher</h4>
                        <div className='flex gap-4 justify-center'>
                            <FaFacebook /> <FaTwitter /> <FaLinkedin /> <FaInstagram />
                        </div>
                    </div>
                </div>
                <div className='w-60  mx-auto p-5'>
                    <img src="https://i.ibb.co/Ky8DQzt/person-4.png" className='rounded-full w-40 mx-auto mb-4' alt="" />
                    <div className='text-center space-y-2'>
                        <h3 className='text-3xl font-bold'>Courtney Lee</h3>
                        <h4 className='text-xl font-semibold'>Violin Teacher</h4>
                        <div className='flex gap-4 justify-center'>
                            <FaFacebook /> <FaTwitter /> <FaLinkedin /> <FaInstagram />
                        </div>
                    </div>
                </div>
                <div className='w-60  mx-auto p-5'>
                    <img src="https://i.ibb.co/Ky8DQzt/person-4.png" className='rounded-full w-40 mx-auto mb-4' alt="" />
                    <div className='text-center space-y-2'>
                        <h3 className='text-3xl font-bold'>Courtney Lee</h3>
                        <h4 className='text-xl font-semibold'>Violin Teacher</h4>
                        <div className='flex gap-4 justify-center'>
                            <FaFacebook /> <FaTwitter /> <FaLinkedin /> <FaInstagram />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default OurInstactor;