import React, { useState } from 'react';
import {
    FaTh,
    FaBars,
    FaRegCreditCard,
    FaFileUpload,
    FaCheckSquare,
    FaCogs,
    FaQuestionCircle,
    FaAlignRight,
    FaAngleRight
} from "react-icons/fa";
import { NavLink } from 'react-router-dom';
import "./Sidebar.css"
import Logo from '../assets/images/logo.PNG'

const Sidebar = ({ children }) => {
    const [isOpen, setIsOpen] = useState(true);
    const toggle = () => setIsOpen(!isOpen);
    const menuItem = [
        {
            path: "/",
            name: "Overview",
            icon: <FaTh />
        },
        {
            path: "/transaction",
            name: "Transactions",
            icon: <FaRegCreditCard />
        },
        {
            path: "/payments",
            name: "Payments",
            icon: <FaRegCreditCard />
        },
        {
            path: "/approvals",
            name: "Approvals",
            icon: <FaCheckSquare />
        },
        {
            path: "/upload",
            name: "Upload",
            icon: <FaFileUpload />
        },
        {
            path: "/settings",
            name: "Setting",
            icon: <FaCogs />
        },
        {
            path: "/support",
            name: "Support",
            icon: <FaQuestionCircle />
        }
    ];

    return (
        <div className="container-main">
            <div style={{ width: isOpen ? "270px" : "50px" }} className="sidebar">
            <div style={{ marginLeft:  "10px",marginTop:"20px" }} className="bars">
                        <FaBars onClick={toggle} />
                    </div>
                <div className="top_section">
                    <h1 style={{ display: isOpen ? "block" : "none",textAlign:"center" }} className="logo">
                        <img src={Logo} alt="" />
                    </h1>
                   
                </div>
                <div className="menu_items">
                {menuItem.map((item, index) => (
                        <NavLink to={item.path} key={index} className="link" activeClassName="active">
                            <div className="link_content">
                                <div className="left_content">
                                    <div className="icon">{item.icon}</div>
                                    <div className="link_text">{item.name}</div>
                                </div>
                                <div className="right_icon">
                                 <FaAngleRight/>
                                </div>
                            </div>
                        </NavLink>
                    ))}
                    </div>
            </div>
            <main>{children}</main>
        </div>
    );
};

export default Sidebar;
