import React from 'react';
import { FaMapMarkerAlt, FaPhoneAlt, FaRegEnvelope } from 'react-icons/fa';
import logo from '../../Images/musci-school.png'
import { Link } from 'react-router-dom';

const Footer = () => {
    return (
        <div className='mt-20'>
            <footer className="footer  footer_bg footer-center p-10 pb-6  text-base-content rounded">
                <div className="grid grid-flow-col gap-4">
                    <Link to='/' className="link link-hover">Home</Link>
                    <Link to='/instactor' className="link link-hover">Instactor</Link>
                    <Link to='/allclass' className="link link-hover">Class</Link>
                    <Link to='login' className="link link-hover">Login</Link>
                </div>
                <div className='mb-12'>
                    <div className="flex items-center">
                        <div>
                            <img className='w-40' src='https://i.ibb.co/BNZ2Dzj/musci-school.png' alt="Logo" />
                        </div>
                        <div className='  space-y-3'>
                            <h3 className='text-2xl mb-2 text-left font-bold'>Contuct Us</h3>

                            <p className='flex items-center  '> <span className='mr-2'><FaMapMarkerAlt /></span> Dhaka,Bangladesh </p>
                            <p className='flex items-center  '> <span className='mr-2'><FaPhoneAlt /></span> +880 1900-000000 </p>
                            <p className='flex items-center '> <span className='mr-2'><FaRegEnvelope /></span> muscicschool@gmail.com </p>
                        </div>
                    </div>
                </div>
                <div>
                    <p className='text-white  font-semibold' >Copyright © 2023 - All right reserved by <span className="tooltip" data-tip="sohel.webdevoloper@gmail.com"> Sohel-Developer</span></p>
                </div>
            </footer>
        </div>
    );
};

export default Footer;