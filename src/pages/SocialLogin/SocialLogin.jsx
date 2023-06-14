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

                const savedUser = {
                    name: loginUser?.displayName,
                    email: loginUser?.email,
                    image: loginUser.photoURL,
                    role: "student"
                }

                console.log(savedUser);

                fetch('https://music-school-server-red.vercel.app/users', {
                    method: 'POST',
                    headers: {
                        'content-type': 'application/json'
                    },
                    body: JSON.stringify(savedUser)
                })
                    .then(res => res.json())
                    .then(data => {
                        if (data.insertedId) {
                            toast.success('Saved User Successfully🤟 !')
                        }
                    })

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