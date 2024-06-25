import React from 'react'
import { Link,Outlet } from "react-router-dom";
const Pim = () => {
  return (
    <div className='h-[84vh]'>
      <div className=' pl-20 bg-blue-500 text black text-3xl w-full'>
        <div className="bg-white shadow w-full">
          <nav className="flex justify-center items-center px-5 py-1">
            <div className="flex items-center space-x-6">
              <Link>
                <div to='/add' className="text-black rounded-full px-3 py-1 bg-gray-200 hover:text-blue-800 font-semibold text-sm transition duration-150 ease-in-out">Configuration</div>

              </Link>
              <Link className="text-black rounded-full px-3 py-1 bg-gray-200 hover:text-blue-800 font-semibold text-sm transition duration-150 ease-in-out">Employee List</Link>
              <Link to='/pim/addemployee' className="text-black rounded-full px-3 py-1 bg-gray-200 hover:text-blue-800 font-semibold text-sm transition duration-150 ease-in-out">Add Employee</Link>
              <Link className="text-black rounded-full px-3 py-1 bg-gray-200 hover:text-blue-800 font-semibold text-sm transition duration-150 ease-in-out">Reports</Link>
            </div>
          </nav>
        </div>
      </div>
      <Outlet />
    </div>
  )
}

export default Pim