import React from 'react';
import useAxiosSecure from './useAxiosSecure';
import { useQuery } from '@tanstack/react-query';

const useSelectedClass = () => {

    const [axiosSecure] = useAxiosSecure()

    const { isLoading, error, data, refetch } = useQuery({
        queryKey: ['users'],
        queryFn: async () => {
            const res = await axiosSecure('/selected/classes')
            return res.data
        }
    })





    return [data, isLoading, refetch]
};

export default useSelectedClass;