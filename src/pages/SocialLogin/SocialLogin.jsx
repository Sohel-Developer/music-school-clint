import React, { useContext } from 'react';
import { FaGoogle } from "react-icons/fa";
import { AuthContext } from '../Provider/AuthProvider';
import { useLocation, useNavigate } from 'react-router-dom';
import { toast } from 'react-hot-toast';

const SocialLogin = () => {

    const { googleSignIn } = useContext(AuthContext)

    const navigate = useNavigate();
    const location = useLocation();

    const from = location.state?.from?.pathname || "/";


    const handleLogin = () => {
        googleSignIn()
            .then((data) => {
                const loginUser = data.user;
                toast.success('Successfully🤟 Google Login !')

                /* Navigate */
                navigate(from, { replace: true });
            })
    }



    return (
        <div className=' flex justify-center mt-2' >
            <span className='tooltip' data-tip="Google">
                <button onClick={handleLogin}><FaGoogle className='text-4xl hover:ring-4   rounded-full'></FaGoogle></button>
            </span>
        </div>
    );
};

export default SocialLogin;