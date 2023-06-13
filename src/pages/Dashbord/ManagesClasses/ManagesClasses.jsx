import React from 'react';
import ClassesRow from './ClassesRow';
import useAxiosSecure from '../../Hooks/useAxiosSecure';
import { useQuery } from '@tanstack/react-query';

const ManagesClasses = () => {

    const [axiosSecure] = useAxiosSecure()
    // /classes/:${user?.email}

    const { isLoading, error, data: classes, refetch } = useQuery({
        queryKey: ['classes'],
        // queryFn: () =>
        //     fetch(`http://localhost:5000/classes/${user?.email}`).then(
        //         (res) => res.json(),
        //     ),

        // queryKey: ['users'],
        queryFn: async () => {
            const res = await axiosSecure(`/classes`)
            return res.data
        }

    })


    if (isLoading) return 'Loading...'

    console.log(classes);



    return (
        <div>
            <h3 className="mt-6 text-xl">All Classes {classes?.length}</h3>
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
                                            Image
                                        </th>
                                        <th
                                            scope="col"
                                            className="px-6 py-3 text-xs font-medium tracking-wider text-left text-gray-500 uppercase"
                                        >
                                            Name & Email
                                        </th>

                                        <th
                                            scope="col"
                                            className="px-6 py-3 text-xs font-medium tracking-wider text-left text-gray-500 uppercase"
                                        >
                                            Price
                                        </th>
                                        <th
                                            scope="col"
                                            className="px-6 py-3 text-xs font-medium tracking-wider text-left text-gray-500 uppercase"
                                        >
                                            Avalible Seates
                                        </th>
                                        <th
                                            scope="col"
                                            className="px-6 py-3 text-xs font-medium tracking-wider text-left text-gray-500 uppercase"
                                        >
                                            Status
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
                                        classes.map((user) => <ClassesRow
                                            key={user._id}
                                            classItem={user} ></ClassesRow>
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

export default ManagesClasses;