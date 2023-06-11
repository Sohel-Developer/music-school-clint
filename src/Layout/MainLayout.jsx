import React from 'react';
import { Outlet } from 'react-router-dom';
import Manubar from '../Shared/ManuBar/Manubar';
import Footer from '../Shared/Footer/Footer';

const mainLayout = () => {
    return (
        <div>
            <Manubar />
            <Outlet />
            <Footer />
        </div>
    );
};

export default mainLayout;