import { useState } from "react";
import { FaChartArea, FaBullhorn, FaCircle, FaRegCircle, FaFolderOpen, FaEnvelope, FaUser, FaCalendarAlt, FaSearch, FaChartBar, FaFolder, FaCog } from "react-icons/fa";
import { FaBuildingUser,FaHandHoldingDollar } from "react-icons/fa6";
import { LiaSearchSolid } from "react-icons/lia";
import { IconContext } from "react-icons";
import { IoIosArrowBack } from "react-icons/io";
import { FaUsers, FaUserClock,FaUserEdit,FaAddressBook } from "react-icons/fa";
import { GiTeapotLeaves,GiMightySpanner } from "react-icons/gi";
import { MdPersonSearch,MdHome } from "react-icons/md";
import { TbPasswordUser } from "react-icons/tb";
import { HiMiniChatBubbleLeftRight } from "react-icons/hi2";
import LogoOrangeHRM from '../assets/orangehrm-logo-Full.png';
import LogoOrange from '../assets/orangehrmLogo.png';
import { Link } from "react-router-dom";


const Sidebar = () => {
    const [open, setOpen] = useState(true);

    return (
        <div className="flex z-20">
            <div
                className={`${open ? "w-60" : "w-20"} bg-white h-screen p-4 pt-8 z-30 absolute rounded-br-lg rounded-tr-lg duration-300 border-r`}
            >
                <IconContext.Provider value={{ className: "react-icons text-black" }}>
                    <IoIosArrowBack className={`absolute arrow text-white cursor-pointer -right-3 top-9 w-7 border-2 rounded-full h-6 w-6 ${!open && "rotate-[180deg]"}`}
                        onClick={() => setOpen(!open)} />
                    <div className="flex gap-x-4 items-center">
                        {open ? (<img src={LogoOrangeHRM}
                            className={`cursor-pointer text-orange-400 duration-500`}
                        />) :
                            (<img src={LogoOrange}
                                className={`cursor-pointer text-orange-400 duration-500`}
                            />)}
                    </div>
                    <div className="aside-parentDiv">
                        <div className="searchbar-parentDiv pt-10">
                            <div className="searchbarDiv">
                                <LiaSearchSolid className={`searchIcon ${!open && "w-10 h-10"}`} />
                                <input type='search' placeholder="Serach" className="searchBox" />
                                <button></button>
                            </div>
                            <hr />
                        </div>
                        <ul className="pt-1">
                            {/* Dashboard */}
                            <Link >
                                <li className="flex items-center p-2 cursor-pointer text-black text-sm gap-x-4 mt-2 
              transition duration-200 ease-in-out transform hover:scale-105 
              bg-light-white hover:bg-gradient-to-r from-orange-500 to-orange-100 active:bg-gradient-to-r
              rounded-r-full">
                                    <FaBuildingUser className="w-5 h-5  text-xs" />
                                    <span className={`${!open && "hidden"} origin-left duration-200`}>
                                        Admin
                                    </span>
                                </li>
                            </Link>

                            {/* Inbox */}
                            <Link to="/pim">

                                <li className="flex items-center p-2 cursor-pointer text-black text-sm gap-x-4 mt-2 
              transition duration-200 ease-in-out transform hover:scale-105 
              bg-light-white hover:bg-gradient-to-r from-orange-500 to-orange-100 active:bg-gradient-to-r
              rounded-r-full">
                                    <FaUsers className="w-5 h-5" />
                                    <span className={`${!open && "hidden"} origin-left duration-200`}>
                                        PIM
                                    </span>
                                </li>
                            </Link>
                            {/* Accounts */}
                            <li className="flex items-center p-2 cursor-pointer text-black text-sm gap-x-4 mt-2 
              transition duration-200 ease-in-out transform hover:scale-105 
              bg-light-white hover:bg-gradient-to-r from-orange-500 to-orange-100 active:bg-gradient-to-r
              rounded-r-full">
                                <GiTeapotLeaves className="w-5 h-5" />
                                <span className={`${!open && "hidden"} origin-left duration-200`}>
                                    Leave
                                </span>
                            </li>
                            {/* Schedule */}
                            <li className="flex items-center p-2 cursor-pointer text-black text-sm gap-x-4 mt-2 
              transition duration-200 ease-in-out transform hover:scale-105 
              bg-light-white hover:bg-gradient-to-r from-orange-500 to-orange-100 active:bg-gradient-to-r
              rounded-r-full">
                                <FaUserClock className="w-5 h-5" />
                                <span className={`${!open && "hidden"} origin-left duration-200`}>
                                    Time
                                </span>
                            </li>
                            {/* Search */}
                            <li className="flex items-center p-2 cursor-pointer text-black text-sm gap-x-4 mt-2 
              transition duration-200 ease-in-out transform hover:scale-105 
              bg-light-white hover:bg-gradient-to-r from-orange-500 to-orange-100 active:bg-gradient-to-r
              rounded-r-full">
                                <MdPersonSearch className="w-5 h-5" />
                                <span className={`${!open && "hidden"} origin-left duration-200`}>
                                Recruitment
                                </span>
                            </li>
                            {/* Analytics */}
                            <li className="flex items-center p-2 cursor-pointer text-black text-sm gap-x-4 mt-2 
              transition duration-200 ease-in-out transform hover:scale-105 
              bg-light-white hover:bg-gradient-to-r from-orange-500 to-orange-100 active:bg-gradient-to-r
              rounded-r-full">
                                <FaUserEdit className="w-5 h-5" />
                                <span className={`${!open && "hidden"} origin-left duration-200`}>
                                    My Info
                                </span>
                            </li>
                            {/* Files */}
                            <li className="flex items-center p-2 cursor-pointer text-black text-sm gap-x-4 mt-2 
              transition duration-200 ease-in-out transform hover:scale-105 
              bg-light-white hover:bg-gradient-to-r from-orange-500 to-orange-100 active:bg-gradient-to-r
              rounded-r-full">
                                <TbPasswordUser className="w-5 h-5" />
                                <span className={`${!open && "hidden"} origin-left duration-200`}>
                                    Performence
                                </span>
                            </li>
                            {/* Settings */}
                            <li className="flex items-center p-2 cursor-pointer text-black text-sm gap-x-4 mt-2 
              transition duration-200 ease-in-out transform hover:scale-105 
              bg-light-white hover:bg-gradient-to-r from-orange-500 to-orange-100 active:bg-gradient-to-r
              rounded-r-full">
                                <MdHome className="w-5 h-5" />
                                <span className={`${!open && "hidden"} origin-left duration-200`}>
                                    Dashboard
                                </span>
                            </li>
                            <li className="flex items-center p-2 cursor-pointer text-black text-sm gap-x-4 mt-2 
              transition duration-200 ease-in-out transform hover:scale-105 
              bg-light-white hover:bg-gradient-to-r from-orange-500 to-orange-100 active:bg-gradient-to-r
              rounded-r-full">
                                <FaAddressBook className="w-5 h-5" />
                                <span className={`${!open && "hidden"} origin-left duration-200`}>
                                    Directory
                                </span>
                            </li>
                            <li className="flex items-center p-2 cursor-pointer text-black text-sm gap-x-4 mt-2 
              transition duration-200 ease-in-out transform hover:scale-105 
              bg-light-white hover:bg-gradient-to-r from-orange-500 to-orange-100 active:bg-gradient-to-r
              rounded-r-full">
                                <GiMightySpanner className="w-5 h-5" />
                                <span className={`${!open && "hidden"} origin-left duration-200`}>
                                    Maintenance
                                </span>
                            </li>
                            <li className="flex items-center p-2 cursor-pointer text-black text-sm gap-x-4 mt-2 
              transition duration-200 ease-in-out transform hover:scale-105 
              bg-light-white hover:bg-gradient-to-r from-orange-500 to-orange-100 active:bg-gradient-to-r
              rounded-r-full">
                                <FaHandHoldingDollar className="w-5 h-5" />
                                <span className={`${!open && "hidden"} origin-left duration-200`}>
                                    Claim
                                </span>
                            </li>
                            <li className="flex items-center p-2 cursor-pointer text-black text-sm gap-x-4 mt-2 
              transition duration-200 ease-in-out transform hover:scale-105 
              bg-light-white hover:bg-gradient-to-r from-orange-500 to-orange-100 active:bg-gradient-to-r
              rounded-r-full">
                                <HiMiniChatBubbleLeftRight className="w-5 h-5" />
                                <span className={`${!open && "hidden"} origin-left duration-200`}>
                                    Buzz
                                </span>
                            </li>
                        </ul>
                    </div>
                </IconContext.Provider>
            </div>
        </div>
    );
};

export default Sidebar;
