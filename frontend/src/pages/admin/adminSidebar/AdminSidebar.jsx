import React from 'react'
import "../adminSidebar/AdminSidebar.css"
import { MdOutlineDashboard } from "react-icons/md";
import { FcStatistics } from "react-icons/fc";
import { BiDish } from "react-icons/bi";
import { IoIosLogOut, IoIosSettings } from "react-icons/io";
import { FaBars, FaUsers } from 'react-icons/fa';
import { BsFillMenuButtonWideFill } from "react-icons/bs";
import { NavLink } from 'react-router-dom';

function AdminSidebar() {
    return (
        <div className="AdminSidebar">
            <aside>
                <div className="sidebarContainer">
                    <div className="head">
                        <h1>./ Half Baked Harvest</h1>
                    </div>
                    <div className="lists">
                        <ul>
                            <NavLink to={""}><li><MdOutlineDashboard /> Dashboard</li></NavLink>
                            <li><FcStatistics /> <NavLink>Statistics</NavLink></li>
                            <NavLink to={"recipes"}><li><BiDish /> Dishes</li></NavLink>
                            <li><BsFillMenuButtonWideFill /><NavLink>Recipes Management</NavLink></li>
                            <li><FaUsers /> <NavLink to={"users"}>Users</NavLink></li>
                            <li><IoIosSettings /> <NavLink>Settings</NavLink></li>
                            <li><IoIosLogOut /> Log Out</li>
                        </ul>
                    </div>
                    <div className="footer">
                        <span style={{ fontSize: "22px" }}>Fidan Zeynalova</span>
                        <span style={{ fontSize: "18px" }}>fidanzeynalova2005@gmail.com</span>
                    </div>
                </div>
            </aside>
        </div>
    )
}

export default AdminSidebar
