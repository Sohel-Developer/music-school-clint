import React from 'react';
import useAxiosSecure from '../Hooks/useAxiosSecure';
import { useQuery } from '@tanstack/react-query';

const AllClass = () => {

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





    return (
        <div className='pt-24'>

            <h1>All Classes {classes.length}</h1>

            <div className='grid grid-cols-3'>

                {
                    classes.map(item => <div key={item._id} className="card w-96 bg-base-100 shadow-xl">
                        <figure><img src={item.image} alt="Shoes" /></figure>
                        <div className="card-body">
                            <h2 className="card-title">
                                {item?.name} Class
                                <div className="badge badge-secondary">$ {item?.price}</div>
                            </h2>
                            <p>{item?.description}</p>
                            <div className="card-actions">
                                <div className="">Instructor Name : {item.instructorName}</div>
                                <div className="">Instructor Email : {item?.instructorEmail}
                                </div>
                            </div>
                            <div className="card-actions ">
                                <div className="badge badge-outline">Seats-{item.seats}</div>
                                <div className="badge badge-outline">Student Enroled {item?.student || 0}</div>
                            </div>
                        </div>
                    </div>)
                }

            </div>
            All Class
        </div>
    );
};

export default AllClass;