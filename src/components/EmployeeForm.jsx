import React from 'react';
import { Link } from 'react-router-dom';
import { FaUser } from "react-icons/fa";
const EmployeeForm = () => {
    return (
        <div className="flex h-[79vh] bg-gray-100">
            <div className="bg-white w-60 md:ml-32 p-8">
                <div className="mb-8">
                    <FaUser className="rounded-full w-24 h-24 mx-auto mb-2"/>
                    <h2 className="text-center text-xl font-semibold">John User</h2>
                </div>

                <nav className="space-y-2">
                    <Link to="/pim/user" className="block px-4 py-0 rounded hover:bg-gray-100">Personal Details</Link>
                    <Link to="/pim/contact" className="block px-4 py-0 rounded hover:bg-gray-100">Contact Details</Link>
                    <Link className="block px-4 py-0 rounded hover:bg-gray-100">Emergency Contacts</Link>
                    <Link className="block px-4 py-0 rounded hover:bg-gray-100">Dependent</Link>
                    <Link className="block px-4 py-0 rounded hover:bg-gray-100">Immigration</Link>
                    <Link to="/pim/job" className="block px-4 py-0 rounded hover:bg-gray-100">Job</Link>
                    <Link className="block px-4 py-0 rounded hover:bg-gray-100">Salary</Link>
                    <Link className="block px-4 py-0 rounded hover:bg-gray-100">Report-to</Link>
                    <Link className="block px-4 py-0 rounded hover:bg-gray-100">Qualifications</Link>
                    <Link className="block px-4 py-0 rounded hover:bg-gray-100">Memberships</Link>
                </nav>
            </div>
        </div>
    );
};

export default EmployeeForm;
