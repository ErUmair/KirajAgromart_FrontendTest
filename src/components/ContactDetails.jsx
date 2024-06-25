import React,{useState} from 'react'

const ContactDetails = () => {
    const [formData, setFormData] = useState({
        street1: '',
        street2: '',
        city: '',
        state: '',
        postalcode: '',
        country: '',
        mobile: '',
        phone: '',
        email: ''
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
                            <label htmlFor="name" className="block text-sm font-medium text-gray-700">Street1</label>
                            <input type="text" name="name" id="name" required
                                className="mt-1 block w-full px-3 py-2 bg-white border border-gray-300 rounded-md text-sm shadow-sm
                        placeholder-gray-400 focus:outline-none focus:border-indigo-500"
                                onChange={handleChange} value={formData.street1} />
                        </div>
                        <div>
                            <label htmlFor="employeeId" className="block text-sm font-medium text-gray-700">Street2</label>
                            <input type="text" name="employeeId" id="employeeId" required
                                className="mt-1 block w-full px-3 py-2 bg-white border border-gray-300 rounded-md text-sm shadow-sm
                        placeholder-gray-400 focus:outline-none focus:border-indigo-500"
                                onChange={handleChange} value={formData.street2} />
                        </div>
                    </div>
                    <div className="grid grid-cols-1 md:grid-cols-2 md:gap-6">
                        <div className="mb-4 md:mb-0">
                            <label htmlFor="name" className="block text-sm font-medium text-gray-700">City</label>
                            <input type="text" name="name" id="name" required
                                className="mt-1 block w-full px-3 py-2 bg-white border border-gray-300 rounded-md text-sm shadow-sm
                        placeholder-gray-400 focus:outline-none focus:border-indigo-500"
                                onChange={handleChange} value={formData.city} />
                        </div>
                        <div>
                            <label htmlFor="employeeId" className="block text-sm font-medium text-gray-700">State</label>
                            <input type="text" name="employeeId" id="employeeId" required
                                className="mt-1 block w-full px-3 py-2 bg-white border border-gray-300 rounded-md text-sm shadow-sm
                        placeholder-gray-400 focus:outline-none focus:border-indigo-500"
                                onChange={handleChange} value={formData.state} />
                        </div>
                    </div>
                    <div className="grid grid-cols-1 md:grid-cols-2 md:gap-6">
                        <div className="mb-4 md:mb-0">
                            <label htmlFor="name" className="block text-sm font-medium text-gray-700">Postal Code</label>
                            <input type="date" name="name" id="name" required
                                className="mt-1 block w-full px-3 py-2 bg-white border border-gray-300 rounded-md text-sm shadow-sm
                        placeholder-gray-400 focus:outline-none focus:border-indigo-500"
                                onChange={handleChange} value={formData.postalcode} />
                        </div>
                        <div>
                            <label htmlFor="employeeId" className="block text-sm font-medium text-gray-700">Country</label>
                            <input type="text" name="employeeId" id="employeeId" required
                                className="mt-1 block w-full px-3 py-2 bg-white border border-gray-300 rounded-md text-sm shadow-sm
                        placeholder-gray-400 focus:outline-none focus:border-indigo-500"
                                onChange={handleChange} value={formData.country} />
                        </div>
                    </div>
                    <div className="grid grid-cols-1 md:grid-cols-2 md:gap-6">
                        <div className="mb-4 md:mb-0">
                            <label htmlFor="name" className="block text-sm font-medium text-gray-700">Mobile No.</label>
                            <input type="text" name="name" id="name" required
                                className="mt-1 block w-full px-3 py-2 bg-white border border-gray-300 rounded-md text-sm shadow-sm
                        placeholder-gray-400 focus:outline-none focus:border-indigo-500"
                                onChange={handleChange} value={formData.mobile} />
                        </div>
                        <div>
                            <label htmlFor="employeeId" className="block text-sm font-medium text-gray-700">Phone No.</label>
                            <input type="text" name="employeeId" id="employeeId" required
                                className="mt-1 block w-full px-3 py-2 bg-white border border-gray-300 rounded-md text-sm shadow-sm
                        placeholder-gray-400 focus:outline-none focus:border-indigo-500"
                                onChange={handleChange} value={formData.phone} />
                        </div>
                        <div>
                            <label htmlFor="employeeId" className="block text-sm font-medium text-gray-700">Email</label>
                            <input type="email" name="employeeId" id="employeeId" required
                                className="mt-1 block w-full px-3 py-2 bg-white border border-gray-300 rounded-md text-sm shadow-sm
                        placeholder-gray-400 focus:outline-none focus:border-indigo-500"
                                onChange={handleChange} value={formData.email} />
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
    )
}

export default ContactDetails