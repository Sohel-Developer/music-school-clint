import React from 'react';
import { FaTrashAlt, FaUserGraduate, FaUserShield } from 'react-icons/fa';

const User = ({ user, handleMakeAdmin, handleDelete, handleMakeInstructor }) => {
    return (
        <tr className="transition-all hover:bg-gray-100 hover:shadow-lg">
            <td className="px-6 py-4 whitespace-nowrap">
                <div className="flex items-center">
                    <div className="flex-shrink-0 w-10 h-10">
                        <img
                            className="w-10 h-10 rounded-full"
                            src={user.image}
                            alt="user"
                        />
                    </div>
                    <div className="ml-4">
                        <div className="text-sm font-medium text-gray-900">{user.name}</div>
                    </div>
                </div>
            </td>
            <td className="px-6 py-4 text-sm text-gray-500 whitespace-nowrap">{user.email}</td>
            <td className="px-6 py-4 whitespace-nowrap">
                <span
                    className="inline-flex px-2 text-xs font-semibold leading-5 text-green-800 bg-green-100 rounded-full"
                >
                    {user.role}
                </span>
            </td>

            <td className="px-6 py-4 text-sm font-medium text-right whitespace-nowrap"><ul className="menu menu-horizontal bg-base-200 rounded-box">
                <li>
                    <button onClick={() => handleMakeInstructor(user)}><FaUserGraduate className='text-2xl' /></button>
                </li>
                <li>
                    <button onClick={() => handleMakeAdmin(user)}><FaUserShield className='text-2xl' /></button>
                </li>
                <li>
                    <button onClick={() => { handleDelete(user) }}> <FaTrashAlt className='text-2xl' /></button>
                </li>
            </ul>
            </td>
        </tr>
    );
};

export default User;