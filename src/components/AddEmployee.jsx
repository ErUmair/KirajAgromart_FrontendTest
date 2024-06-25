
import React from 'react';
import { FiPlusCircle, FiUser } from 'react-icons/fi';
// import user from '../assets/user.webp'
import { FaUser } from "react-icons/fa";
const EmployeeForm = () => {
    return (
        // Use responsive padding classes. On large screens, remove extra padding to account for the sidebar.
        <div className="container mx-auto px-4 pl-10 py-16 lg:py-24 lg:pl-32 lg:pr-0 max-w-3xl">
            <form>
                <div className="mb-4">
                    <h2 className="text-2xl md:ml-28 ml-24 font-semibold mb-2">Add Employee</h2>

                    {/* Stacks on mobile, becomes horizontal on medium screens and above */}
                    <div className="flex flex-col md:flex-row items-center mb-4">
                        <div className="relative h-24 w-24 mb-4 md:mb-0 md:mr-4">
                            <div className="absolute inset-0 flex items-center justify-center text-4xl text-gray-400">
                                <div className='relative h-20 w-20'>
                                    {/* <img src={user}/> */}
                                    <FaUser/>
                                    <FiPlusCircle className='absolute right-1 bottom-4 h-5 w-5 font-bold  text-yellow-700 text-xl' />
                                </div>
                            </div>
                            <input type="file" accept="image/*" className="opacity-0 cursor-pointer absolute inset-0 z-10" />
                        </div>

                        {/* This will be a single column grid on mobile, and a three-column grid on small screens and above */}
                        <div className="flex-grow">
                            <label htmlFor="fullName" className="block text-md font-medium text-gray-600 ">Employee Full Name*</label>
                            <div className="mt-1 grid grid-cols-1 sm:grid-cols-3 gap-4">
                                <input type="text" id="firstName" name="firstName" placeholder="First Name" className="shadow-sm p-3  block w-full sm:text-sm  rounded-md" />
                                <input type="text" id="middleName" name="middleName" placeholder="Middle Name" className="shadow-sm  p-3 block w-full sm:text-sm  rounded-md" />
                                <input type="text" id="lastName" name="lastName" placeholder="Last Name" className="shadow-sm p-3   block w-full sm:text-sm  rounded-md" />
                            </div>
                        </div>
                    </div>

                    {/* Rest of your form elements */}

                    {/* Buttons will stack on mobile and align horizontally on medium screens and above */}
                    <div className='ml-20'>
                        <div>
                            <label className='text-md mr-5'>Employee Id</label>
                            <input className='p-3 shadow-sm' type='text' name='employeeid' placeholder='Employee Id'/>
                        </div>
                        <div className='pt-10'>Required*</div>
                    </div>
                    <div className="flex flex-col md:flex-row justify-center space-y-4 md:space-y-0 md:space-x-4 md:mt-10">
                        <button type="button" className="bg-gray-200 text-black px-4 py-2 ml-20  rounded-md w-1/2 md:w-auto">Cancel</button>
                        <button type="submit" className="bg-green-500 text-white px-4 py-2 ml-20 rounded-md w-1/2 md:w-auto">Save</button>
                    </div>
                </div>
            </form>
        </div>
    );
};

export default EmployeeForm;

