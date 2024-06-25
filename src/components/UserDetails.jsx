import React, { useState } from 'react';


const UserDetail = () => {
    const [formData, setFormData] = useState({
        name: '',
        employeeId: '',
        otherId: '',
        driverLicenseNo: '',
        licenseExpiryDate: '',
        nationality: '',
        maritalStatus: '',
        dateOfBirth: '',
        gender: ''
    });

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({ ...formData, [name]: value });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log(formData);
    };

    return (
        <div className="flex flex-col justify-center items-center bg-gray-100 px-0">
            <div className="max-w-4xl w-full p-10 bg-white shadow-lg rounded-lg">
                <form className="space-y-0" onSubmit={handleSubmit}>
                    <div className="grid grid-cols-1 md:grid-cols-2 md:gap-6">
                        <div className="mb-4 md:mb-0">
                            <label htmlFor="name" className="block text-sm font-medium text-gray-700">Name</label>
                            <input type="text" name="name" id="name" required
                                className="mt-1 block w-full px-3 py-2 bg-white border border-gray-300 rounded-md text-sm shadow-sm
                                placeholder-gray-400 focus:outline-none focus:border-indigo-500"
                                onChange={handleChange} value={formData.name} />
                        </div>
                        <div>
                            <label htmlFor="employeeId" className="block text-sm font-medium text-gray-700">Employee ID</label>
                            <input type="text" name="employeeId" id="employeeId" required
                                className="mt-1 block w-full px-3 py-2 bg-white border border-gray-300 rounded-md text-sm shadow-sm
                                placeholder-gray-400 focus:outline-none focus:border-indigo-500"
                                onChange={handleChange} value={formData.employeeId} />
                        </div>
                    </div>
                    <div className="grid grid-cols-1 md:grid-cols-2 md:gap-6">
                        <div className="mb-4 md:mb-0">
                            <label htmlFor="name" className="block text-sm font-medium text-gray-700">Other ID</label>
                            <input type="text" name="name" id="name" required
                                className="mt-1 block w-full px-3 py-2 bg-white border border-gray-300 rounded-md text-sm shadow-sm
                                placeholder-gray-400 focus:outline-none focus:border-indigo-500"
                                onChange={handleChange} value={formData.otherId} />
                        </div>
                        <div>
                            <label htmlFor="employeeId" className="block text-sm font-medium text-gray-700">Nationality</label>
                            <input type="text" name="employeeId" id="employeeId" required
                                className="mt-1 block w-full px-3 py-2 bg-white border border-gray-300 rounded-md text-sm shadow-sm
                                placeholder-gray-400 focus:outline-none focus:border-indigo-500"
                                onChange={handleChange} value={formData.driverLicenseNo} />
                        </div>
                    </div>
                    <div className="grid grid-cols-1 md:grid-cols-2 md:gap-6">
                        <div className="mb-4 md:mb-0">
                            <label htmlFor="name" className="block text-sm font-medium text-gray-700">License Expiry Date</label>
                            <input type="date" name="name" id="name" required
                                className="mt-1 block w-full px-3 py-2 bg-white border border-gray-300 rounded-md text-sm shadow-sm
                                placeholder-gray-400 focus:outline-none focus:border-indigo-500"
                                onChange={handleChange} value={formData.licenseExpiryDate} />
                        </div>
                        <div>
                            <label htmlFor="employeeId" className="block text-sm font-medium text-gray-700">Nationality</label>
                            <input type="text" name="employeeId" id="employeeId" required
                                className="mt-1 block w-full px-3 py-2 bg-white border border-gray-300 rounded-md text-sm shadow-sm
                                placeholder-gray-400 focus:outline-none focus:border-indigo-500"
                                onChange={handleChange} value={formData.nationality} />
                        </div>
                    </div>
                    <div className="grid grid-cols-1 md:grid-cols-2 md:gap-6">
                        <div className="mb-4 md:mb-0">
                            <label htmlFor="name" className="block text-sm font-medium text-gray-700">Marital Status</label>
                            <input type="text" name="name" id="name" required
                                className="mt-1 block w-full px-3 py-2 bg-white border border-gray-300 rounded-md text-sm shadow-sm
                                placeholder-gray-400 focus:outline-none focus:border-indigo-500"
                                onChange={handleChange} value={formData.maritalStatus} />
                        </div>
                        <div>
                            <label htmlFor="employeeId" className="block text-sm font-medium text-gray-700">Date Of Birth</label>
                            <input type="date" name="employeeId" id="employeeId" required
                                className="mt-1 block w-full px-3 py-2 bg-white border border-gray-300 rounded-md text-sm shadow-sm
                                placeholder-gray-400 focus:outline-none focus:border-indigo-500"
                                onChange={handleChange} value={formData.dateOfBirth} />
                        </div>
                    </div>
                    <div className="grid grid-cols-1 md:grid-cols-2 md:gap-6">
                        <div className="mb-4 md:mb-0">
                            <label htmlFor="gender" className="block text-sm font-medium text-gray-700">Gender</label>
                            <select
                                id="gender"
                                name="gender"
                                required
                                className="mt-1 block w-full px-3 py-2 bg-white border border-gray-300 rounded-md text-sm shadow-sm placeholder-gray-400 focus:outline-none focus:border-indigo-500"
                                onChange={handleChange}
                                value={formData.gender}
                            >
                                <option value="">Select...</option>
                                <option value="male">Male</option>
                                <option value="female">Female</option>
                                <option value="other">Other</option>
                            </select>
                        </div>
                    </div>

                    <div className="flex justify-center mt-5">
                        <button type="submit"
                            className="w-full mt-5 md:w-auto px-10 py-2 border border-transparent rounded-md shadow-sm
                               text-sm font-medium text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none
                               focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500" style={{backgroundColor:'#76bc21'}}>
                            Submit
                        </button>
                    </div>
                </form>
            </div>
        </div>
    );
};

export default UserDetail;

