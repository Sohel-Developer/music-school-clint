import React from 'react';
import { NavLink, Outlet } from 'react-router-dom';
import { FaShoppingCart, FaWallet, FaCalendarAlt, FaHome, FaUtensils, FaBook, FaUsers } from 'react-icons/fa';
import { Toaster } from 'react-hot-toast';
import useAdmin from '../pages/Hooks/useAdmin';


const DashBordLayout = () => {


    const { isAdmin } = useAdmin()
    console.log(isAdmin);


    // const isAdmin = true
    // const isInstactor = false
    return (
        <div className='flex gap-5'>
            <div className='h-screen p-5 border-4 '>
                <ul className="menu p-4 w-80">
                    {
                        isAdmin ? <>
                            <li><NavLink to="/dashbord/adminhome" ><FaHome></FaHome> Admin Home</NavLink></li>
                            <li><NavLink to="/dashboard/addItem"> <FaUtensils></FaUtensils> Manege Classes</NavLink></li>
                            <li><NavLink to="/dashbord/users"><FaUsers></FaUsers> All Users</NavLink></li>

                        </> : <>
                            <li><NavLink to="/dashboard"><FaHome></FaHome> Instactor Home</NavLink></li>
                            <li><NavLink to="/"><FaCalendarAlt></FaCalendarAlt> Add a Class</NavLink></li>
                            <li><NavLink to="/"><FaWallet></FaWallet> My Classes</NavLink></li>
                            <li>
                                <NavLink to="/dashboard/mycart"><FaShoppingCart></FaShoppingCart> Total Student
                                </NavLink>
                            </li>
                            <li>
                                <NavLink to="/dashboard/mycart"><FaShoppingCart></FaShoppingCart> Feedback
                                </NavLink>
                            </li>
                        </>
                    }



                    <div className="divider"></div>
                    <li><NavLink to="/"><FaHome></FaHome> Home</NavLink> </li>
                    <li><NavLink to="/classes"> Classes</NavLink></li>
                    <li><NavLink to="/instractor">Instractor</NavLink></li>
                </ul>
            </div>
            <div className=' border-4 p-5 flex-1'>
                <Outlet />
                <Toaster
                    position="top-right"
                    reverseOrder={false}
                />
            </div>

        </div>
    );
};

export default DashBordLayout;