import React from 'react';

import logo from '../../Images/musci-school.png'
import { Link } from 'react-router-dom';

const NotFound = () => {
    return (
        <div>
            <div className="flex flex-col items-center justify-center h-screen bg-gray-100">
                <div className="text-center">
                    <h1 className="text-6xl font-bold text-gray-800">404</h1>
                    <h2 className="text-2xl font-semibold text-gray-600">Page Not Found</h2>
                    <p className="mt-4 text-lg text-gray-600">Oops! The page you are looking for does not exist.</p>
                </div>
                <img
                    className="w-64 h-64 mt-8"
                    src={logo}
                    alt="404"
                />
                <Link
                    to="/"
                    className="mt-8 px-4 py-2 text-lg font-medium text-white bg-indigo-500 rounded hover:bg-indigo-600 focus:bg-indigo-600"
                >
                    Back to Home
                </Link>
            </div>
        </div>
    );
};

export default NotFound;