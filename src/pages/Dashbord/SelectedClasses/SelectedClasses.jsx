import React from 'react';
import useAxiosSecure from '../../Hooks/useAxiosSecure';
import { useQuery } from '@tanstack/react-query';
import { toast } from 'react-hot-toast';
import swal from 'sweetalert';

const SelectedClasses = () => {


    const [axiosSecure] = useAxiosSecure()

    const { isLoading, error, data, refetch } = useQuery({
        queryKey: ['users'],
        queryFn: async () => {
            const res = await axiosSecure('/selected/classes')
            return res.data
        }
    })

    if (isLoading) return 'Loading...'


    const handelDeleteClass = (item) => {

        console.log(item);

        swal({
            title: "Are you sure?",
            text: `If Users Deleted `,
            icon: "warning",
            buttons: true,
            dangerMode: true,
        })
            .then((willDelete) => {
                if (willDelete) {

                    fetch(`http://localhost:5000/class/delete/${item._id}`, {
                        method: 'DELETE'
                    })
                        .then(res => res.json())
                        .then(data => {
                            refetch();
                            if (data.deletedCount > 0) {
                                toast.success('Class Deleted Succesfully!')
                            }
                        })
                } else {
                    toast.success("Selected Class No Deleted !! it's safe!")
                }
            });
    }

    return (
        <div className='bg-base-200 h-screen'>
            <h1 className=''>Selected Class {data?.length}</h1>
            <div >
                {
                    data.map(item => <div key={item._id} className="transition-all w-1/2 mx-auto justify-between flex items-center mt-5 rounded-lg bg-gray-200 hover:shadow-lg">
                        <div className="px-6 py-4 whitespace-nowrap">
                            <div className="flex items-center">
                                <div className="flex-shrink-0 w-10 h-10">
                                    <img
                                        className="w-10 h-10 rounded-full"
                                        src={item.image}
                                        alt="user"
                                    />
                                </div>
                                <div className="ml-4">
                                    <div className="text-sm font-medium text-gray-900">{item.name} class</div>
                                </div>
                            </div>
                        </div>
                        <div className="px-6 py-4 text-sm text-gray-500 whitespace-nowrap">{item.instructorName} <br /> {item.instructorEmail}</div>
                        <div className="px-6 py-4 whitespace-nowrap">
                            <span
                                className="inline-flex px-2 text-xs font-semibold leading-5 text-green-800 bg-green-100 rounded-full"
                            >
                                $ {item.price}
                            </span>
                        </div>

                        <div className="px-6 py-4 text-sm font-medium text-right whitespace-nowrap"><ul className="menu menu-horizontal bg-base-200 rounded-box">

                            <li>
                                <button onClick={() => handelDeleteClass(item)} >Delete</button>
                            </li>
                            <li>
                                <button>Pay</button>
                            </li>
                        </ul>
                        </div>
                    </div>)
                }
            </div>
        </div>
    );
};

export default SelectedClasses;