
import useAuth from './useAuth';
import useAxiosSecure from './useAxiosSecure';
import { useQuery } from '@tanstack/react-query';

const useInstructor = () => {

    const { user, loading } = useAuth();
    const [axiosSecure] = useAxiosSecure();
    // use axios secure with react query
    const { data: isInstructor, isLoading: isInstructorLoading, refetch } = useQuery({
        queryKey: ['isInstructor', user?.email],
        enabled: !loading,
        queryFn: async () => {
            const res = await axiosSecure.get(`/users/instructor/${user?.email}`);
            return res.data.instructor;
        }

    })
    refetch()
    return [isInstructor, isInstructorLoading, refetch]

};

export default useInstructor;