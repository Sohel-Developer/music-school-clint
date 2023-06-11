import React from 'react';
import { Outlet } from 'react-router-dom';
import Manubar from '../Shared/ManuBar/Manubar';

const mainLayout = () => {
    return (
        <div>
            <Manubar />
            <Outlet />
        </div>
    );
};

export default mainLayout;