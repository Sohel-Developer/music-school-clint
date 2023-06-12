import React, { useEffect, useState } from 'react';
import { FaUsers } from "react-icons/fa";
import User from './User';
import UserCard from './UserCard';
const AllUsers = () => {


    const [users, setUsers] = useState([])

    useEffect(() => {
        fetch('http://localhost:5000/users')
            .then(res => res.json())
            .then(data => {
                console.log(data);
                setUsers(data)

            })
    }, [])

    const student = users.filter(user => user.role === "student")
    const Instructor = users.filter(user => user.role === "instructor ")
    const Admin = users.filter(user => user.role === "admin")


    return (
        <div>
            {/* // <!-- Start Content --> */}
            <div className="grid grid-cols-1 gap-5 mt-6 sm:grid-cols-2 lg:grid-cols-4">

                <UserCard title='Users' users={users} />
                <UserCard title='Admin' users={Admin} />
                <UserCard title='Instructor' users={Instructor} />
                <UserCard title='student' users={student} />

                {/* <div className="p-4 transition-shadow border rounded-lg shadow-sm hover:shadow-lg">
                    <div className="flex items-start justify-between">
                        <div className="flex flex-col space-y-2">
                            <span className="text-gray-400">Total Users</span>
                            <span className="text-lg font-semibold">{users.length}</span>
                        </div>
                        <div className="p-5 bg-gray-200 rounded-md">
                            <FaUsers />
                        </div>
                    </div>
                </div>
                <div className="p-4 transition-shadow border rounded-lg shadow-sm hover:shadow-lg">
                    <div className="flex items-start justify-between">
                        <div className="flex flex-col space-y-2">
                            <span className="text-gray-400">Total Student</span>
                            <span className="text-lg font-semibold">{student.length}</span>
                        </div>
                        <div className="p-5 bg-gray-200 rounded-md">
                            <FaUsers />
                        </div>
                    </div>
                </div>
                <div className="p-4 transition-shadow border rounded-lg shadow-sm hover:shadow-lg">
                    <div className="flex items-start justify-between">
                        <div className="flex flex-col space-y-2">
                            <span className="text-gray-400">Total Instructor </span>
                            <span className="text-lg font-semibold">{Instructor.length}</span>
                        </div>
                        <div className="p-5 bg-gray-200 rounded-md">
                            <FaUsers />
                        </div>
                    </div>
                </div>
                <div className="p-4 transition-shadow border rounded-lg shadow-sm hover:shadow-lg">
                    <div className="flex items-start justify-between">
                        <div className="flex flex-col space-y-2">
                            <span className="text-gray-400">Total Admin </span>
                            <span className="text-lg font-semibold">{Admin.length}</span>
                        </div>
                        <div className="p-5 bg-gray-200 rounded-md">
                            <FaUsers />
                        </div>
                    </div>
                </div> */}


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
                                        users.map((user) => <User key={user._id} user={user} ></User>
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