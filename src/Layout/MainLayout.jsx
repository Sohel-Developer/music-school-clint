import React from 'react';
import { Outlet } from 'react-router-dom';

const mainLayout = () => {
    return (
        <div>
            <Outlet />
        </div>
    );
};

export default mainLayout;