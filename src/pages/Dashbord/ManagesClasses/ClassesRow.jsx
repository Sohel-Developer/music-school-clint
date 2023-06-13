
import React from 'react';
import { toast } from 'react-hot-toast';
import swal from 'sweetalert';
import useAxiosSecure from '../../Hooks/useAxiosSecure';
import { useQuery } from '@tanstack/react-query';

const ClassesRow = ({ classItem, refetch }) => {
    console.log("Class Row", classItem);
    const { _id, image, name, price, seats, status, instructorName, instructorEmail } = classItem;


    const desabld = status === "pending"


    const handelApproved = (id) => {


        swal({
            title: "Are you sure?",
            text: ` Instructor Class Approved `,
            icon: "warning",
            buttons: true,
            dangerMode: true,
        })
            .then((willDelete) => {
                if (willDelete) {

                    fetch(`http://localhost:5000/class/${id}`, {
                        method: 'PATCH'
                    })
                        .then(res => res.json())
                        .then(data => {
                            refetch()

                            console.log(data)
                            if (data.deletedCount > 0) {
                                toast.success('User Class Approved Succesfully!')
                            }
                        })
                } else {
                    toast.success("User Class Not Approved!")
                }
            });




    }








    return (
        <tr className="transition-all hover:bg-gray-100 hover:shadow-lg">
            <td className="px-6 py-4 whitespace-nowrap">
                <div className="flex items-center">
                    <div className="flex-shrink-0 w-10 h-10">
                        <img
                            className="w-10 h-10 rounded-full"
                            src={image}
                            alt="user"
                        />
                    </div>
                    <div className="ml-4">
                        <div className="text-sm font-medium text-gray-900">{name} Class</div>
                    </div>
                </div>
            </td>
            <td className="px-6 py-4 text-center text-sm text-gray-500 whitespace-nowrap">
                <span
                    className="inline-flex px-2 text-xs font-semibold leading-5  rounded-full"
                >
                    {instructorName}

                </span>
                <div className=" py-2 text-xs font-semibold leading-5 ">
                    {instructorEmail}
                </div>
            </td>
            <td className="px-6 py-4 whitespace-nowrap">
                <span
                    className="inline-flex px-2 text-xs font-semibold leading-5"
                >
                    $ {price}
                </span>
            </td>
            <td className="px-6 py-4 whitespace-nowrap">
                <span
                    className="inline-flex px-2 text-xs font-semibold leading-5 "
                >
                    {seats}
                </span>
            </td>
            <td className="px-6 py-4 whitespace-nowrap">
                <span
                    className=" px-2 text-xs font-semibold leading-5 text-green-800 bg-green-100 rounded-full"
                >
                    {status}
                </span>
            </td>

            <td className="px-6 py-4 text-sm font-medium text-right whitespace-nowrap"><ul className="menu menu-vertical bg-base-200 rounded-box">
                <li>
                    <button disabled={status === "approve" && true} onClick={() => { handelApproved(_id) }} > Apporve</button>
                </li>
                <li>
                    <button disabled={status === "approve" && true} >Denied</button>
                </li>
                <li>
                    <button disabled={status === "approve" && true}>Feadback</button>
                </li>
            </ul>
            </td>
        </tr >
    );
};

export default ClassesRow;