import React from 'react';
import useAxiosSecure from '../../Hooks/useAxiosSecure';
import { useQuery } from '@tanstack/react-query';
import useAuth from '../../Hooks/useAuth';

const MyClasses = () => {
    const { user } = useAuth()

    const [axiosSecure] = useAxiosSecure()
    // /classes/:${user?.email}

    const { isLoading, error, data: classes, refetch } = useQuery({
        queryKey: ['classes', user.email],
        // queryFn: () =>
        //     fetch(`http://localhost:5000/classes/${user?.email}`).then(
        //         (res) => res.json(),
        //     ),

        // queryKey: ['users'],
        queryFn: async () => {
            const res = await axiosSecure(`/classes/${user?.email}`)
            return res.data
        }

    })


    if (isLoading) return 'Loading...'



    return (
        <div>
            My Classes {classes.length}

        </div>
    );
};

export default MyClasses;