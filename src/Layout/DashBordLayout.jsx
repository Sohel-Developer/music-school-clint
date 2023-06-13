import React from 'react';
import { NavLink, Outlet } from 'react-router-dom';
import { FaShoppingCart, FaWallet, FaCalendarAlt, FaHome, FaUtensils, FaBook, FaUsers } from 'react-icons/fa';
import { Toaster } from 'react-hot-toast';
import useAdmin from '../pages/Hooks/useAdmin';
import useInstructor from '../pages/Hooks/useInstructor';


const DashBordLayout = () => {


    const [isAdmin] = useAdmin()

    const [isInstructor] = useInstructor()

    return (
        <div className='flex gap-5'>
            <div className='h-screen p-5 border-4 '>
                <ul className="menu p-4 w-80">
                    {
                        isAdmin ? <>
                            <li><NavLink to="/dashbord/adminhome" ><FaHome></FaHome> Admin Home</NavLink></li>
                            <li><NavLink to="/dashbord/manages">  Manege Classes</NavLink></li>
                            <li><NavLink to="/dashbord/users"><FaUsers></FaUsers> All Users</NavLink></li>

                        </> : isInstructor ? <>
                            <li><NavLink to="/dashboard"><FaHome></FaHome> instructor Home</NavLink></li>
                            <li><NavLink to="/dashbord/addclass"> Add a Class</NavLink></li>
                            <li><NavLink to="/dashbord/classes"> My Classes</NavLink></li>
                            <li>
                                <NavLink to="/dashboard/mycart"> Total Student
                                </NavLink>
                            </li>
                            <li>
                                <NavLink to="/dashboard/feedback"> Feedback
                                </NavLink>
                            </li>
                        </>
                            :
                            <>
                                <li><NavLink to="/dashboard"><FaHome></FaHome> Student Home</NavLink></li>
                                <li><NavLink to="/dashbord/class">Selected Classes</NavLink></li>
                                <li><NavLink to="/dashbord/enroled"> Enrolled Classes</NavLink></li>
                                <li>
                                    <NavLink to="/dashboard/payment"><FaWallet></FaWallet> Payment
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