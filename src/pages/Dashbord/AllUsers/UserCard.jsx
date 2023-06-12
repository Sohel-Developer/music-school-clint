import React from 'react';
import { FaUsers } from 'react-icons/fa';

const UserCard = ({ title, users }) => {
    return (
        <div className="p-4 transition-shadow border rounded-lg shadow-sm hover:shadow-lg">
            <div className="flex items-start justify-between">
                <div className="flex flex-col space-y-2">
                    <span className="text-gray-400">Total {title}</span>
                    <span className="text-lg font-semibold">{users?.length}</span>
                </div>
                <div className="p-5 bg-gray-200 rounded-md">
                    <FaUsers />
                </div>
            </div>
        </div>
    );
};

export default UserCard;