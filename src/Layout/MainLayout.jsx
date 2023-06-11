import React from 'react';
import { Outlet } from 'react-router-dom';
import Manubar from '../Shared/ManuBar/Manubar';
import Footer from '../Shared/Footer/Footer';
import { Toaster } from 'react-hot-toast';

const mainLayout = () => {
    return (
        <div>
            <Manubar />
            <Outlet />
            <Footer />
            <Toaster />
        </div>
    );
};

export default mainLayout;