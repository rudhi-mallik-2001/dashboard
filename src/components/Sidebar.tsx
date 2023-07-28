import React, { useState } from 'react';
import {
    FaTh,
    FaBars,
    FaUserAlt,
    FaUserPlus,
    FaRegChartBar,
    FaCommentAlt,
    FaShoppingBag,
    FaThList,
    FaArrowLeft
} from "react-icons/fa";
import { NavLink } from 'react-router-dom';
import Nav from './Nav';


const Sidebar = ({ children }: any) => {
    const [isOpen, setIsOpen] = useState<boolean>(false);
    const toggle = () => setIsOpen(!isOpen);
    const menuItem = [
        {
            path: "/",
            name: "Dashboard",
            icon: <FaTh />
        },
        {
            path: "/add-contact",
            name: "Add Contact",
            icon: <FaUserPlus />
        },
        {
            path: "/contacts",
            name: "Contact Details",
            icon: <FaThList />
        }
    ]
    return (
        <div className="w-full flex flex-row h-[100vh] overflow-scroll">

            <div style={{ width: isOpen ? "300px" : "50px" }} className="bg-[#000] text-[#fff] h-[100vh] w-[300px]transition ease-in-out duration-75 fixed">
                <div className="flex flex-row justify-evenly items-center h-[70px]">
                    <h1 style={{ display: isOpen ? "block" : "none" }} className="logo cursor-pointer" >Logo</h1>
                    <div style={{ display: isOpen ? "none" : "block", marginLeft: isOpen ? "50px" : "0" }} className="bars">
                        <FaBars onClick={toggle} />
                    </div>
                    <div style={{ display: isOpen ? "block" : "none", }} className="bars " onClick={toggle}>
                        <FaArrowLeft />
                    </div>
                </div>
                {
                    menuItem.map((item, index) => (
                        <NavLink to={item.path} key={index} className="link" >
                            <div className="icon">{item.icon}</div>
                            <div style={{ display: isOpen ? "block" : "none" }} className="link_text">{item.name}</div>
                        </NavLink>
                    ))
                }
            </div>
            <div className='w-full flex flex-col justify-start items-start'>
                <Nav />
                <main className='w-full flex flex-col justify-center items-center'> {children}</main>
            </div>

        </div>
    );
};

export default Sidebar;