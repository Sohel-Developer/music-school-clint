import React from 'react';

const ClassesRow = ({ classItem }) => {
    console.log("Class Row", classItem);
    const { image, name, price, seats, status, instructorName, instructorEmail } = classItem
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
                    <button> Apporve</button>
                </li>
                <li>
                    <button >Pendig</button>
                </li>
                <li>
                    <button>Feadback</button>
                </li>
            </ul>
            </td>
        </tr>
    );
};

export default ClassesRow;