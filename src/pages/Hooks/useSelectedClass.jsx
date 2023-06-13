import React from 'react';
import useAxiosSecure from './useAxiosSecure';
import { useQuery } from '@tanstack/react-query';
import useAuth from './useAuth';

const useSelectedClass = () => {

    const { user } = useAuth()

    const [axiosSecure] = useAxiosSecure()

    const { isLoading, error, data, refetch } = useQuery({
        queryKey: ['users', [user?.email]],
        queryFn: async () => {
            const res = await axiosSecure(`/selected/classes/${user?.email}`)
            return res.data
        }
    })


    refetch()




    return [data, isLoading, refetch]
};

export default useSelectedClass;