import React from 'react';
import swal from 'sweetalert';
import {
    useQuery,
} from '@tanstack/react-query'
import User from './User';
import UserCard from './UserCard';
import { toast } from 'react-hot-toast';
import useAxiosSecure from '../../Hooks/useAxiosSecure';
const AllUsers = () => {

    const [axiosSecure] = useAxiosSecure()

    const { isLoading, error, data: users = [], refetch } = useQuery({
        queryKey: ['users'],
        // queryFn: () =>
        //     fetch('http://localhost:5000/users')
        //     .then((res) => res.json(),
        //     ),
        queryFn: async () => {
            const res = await axiosSecure('/users')
            return res.data
        }
    })




    if (isLoading) return 'Loading...'


    const student = users.filter(user => user.role === "student")
    const Instructor = users.filter(user => user.role === "instructor")
    const Admin = users.filter(user => user.role === "admin")


    const handleMakeAdmin = user => {
        fetch(`http://localhost:5000/users/admin/${user._id}`, {
            method: 'PATCH'
        })
            .then(res => res.json())
            .then(data => {
                console.log(data)
                if (data.modifiedCount) {
                    refetch();

                }
            })
    }
    const handleDelete = user => {

        swal({
            title: "Are you sure?",
            text: `If Users Deleted ${user.name}`,
            icon: "warning",
            buttons: true,
            dangerMode: true,
        })
            .then((willDelete) => {
                if (willDelete) {

                    fetch(`http://localhost:5000/users/admin/${user._id}`, {
                        method: 'DELETE'
                    })
                        .then(res => res.json())
                        .then(data => {
                            console.log(data)
                            refetch();
                            if (data.deletedCount > 0) {
                                toast.success('User Deleted Succesfully!')
                            }
                        })
                } else {
                    toast.success("User is No Deleted !! it's safe!")
                }
            });





    }


    return (
        <div>
            {/* // <!-- Start Content --> */}
            <div className="grid grid-cols-1 gap-5 mt-6 sm:grid-cols-2 lg:grid-cols-4">

                <UserCard title='Users' users={users} />
                <UserCard title='Admin' users={Admin} />
                <UserCard title='Instructor' users={Instructor} />
                <UserCard title='student' users={student} />


            </div>

            {/* // <!-- Table see (https://tailwindui.com/components/application-ui/lists/tables) --> */}
            <h3 className="mt-6 text-xl">Users</h3>
            <div className="flex flex-col mt-6">
                <div className="-my-2 overflow-x-auto sm:-mx-6 lg:-mx-8">
                    <div className="inline-block min-w-full py-2 align-middle sm:px-6 lg:px-8">
                        <div className="overflow-hidden border-b border-gray-200 rounded-md shadow-md">
                            <table className="min-w-full overflow-x-scroll divide-y divide-gray-200">
                                <thead className="bg-gray-50">
                                    <tr>
                                        <th
                                            scope="col"
                                            className="px-6 py-3 text-xs font-medium tracking-wider text-left text-gray-500 uppercase"
                                        >
                                            Name
                                        </th>

                                        <th
                                            scope="col"
                                            className="px-6 py-3 text-xs font-medium tracking-wider text-left text-gray-500 uppercase"
                                        >
                                            Status
                                        </th>
                                        <th
                                            scope="col"
                                            className="px-6 py-3 text-xs font-medium tracking-wider text-left text-gray-500 uppercase"
                                        >
                                            Role
                                        </th>
                                        <th
                                            scope="col"
                                            className="px-6 py-3 text-xs font-medium tracking-wider text-gray-500 uppercase"
                                        >
                                            Action
                                        </th>

                                    </tr>
                                </thead>
                                <tbody className="bg-white divide-y divide-gray-200">

                                    {
                                        users.map((user) => <User
                                            handleDelete={handleDelete}
                                            handleMakeAdmin={handleMakeAdmin}
                                            key={user._id}
                                            user={user} ></User>
                                        )
                                    }

                                </tbody>
                            </table>
                        </div>
                    </div>
                </div>
            </div >
        </div>
    );
};

export default AllUsers;