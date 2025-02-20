import React, { useState } from 'react';
import "../adminSidebar/AdminSidebar.css";
import { MdOutlineDashboard } from "react-icons/md";
import { FcStatistics } from "react-icons/fc";
import { BiDish } from "react-icons/bi";
import { IoIosLogOut, IoIosSettings } from "react-icons/io";
import { FaUsers } from 'react-icons/fa';
import { NavLink } from 'react-router-dom';

function AdminSidebar() {
    return (
        <div className="admin-sidebar">
            <aside className="sidebar-container">
                <div className="head">
                    <h1> ./ Half Baked Harvest</h1>
                </div>
                <nav className="nav-list">
                    <ul>
                        <NavLink to={"/admin"} className="nav-item"><li><MdOutlineDashboard /> Dashboard</li></NavLink>
                        <NavLink to={"/statistics"} className="nav-item"><li><FcStatistics /> Statistics</li></NavLink>
                        <NavLink to={"recipes"} className="nav-item"><li><BiDish /> Dishes</li></NavLink>
                        <NavLink to={"users"} className="nav-item"><li><FaUsers /> Users</li></NavLink>
                        <NavLink to={"/logout"} className="nav-item logout"><li><IoIosLogOut /> Log Out</li></NavLink>
                    </ul>
                </nav>
                <div className="footer" style={{display:"flex",flexDirection:"column"}}>
                    <span className="user-name">Fidan Zeynalova</span>
                    <span className="user-email">fidanzeynalova2005@gmail.com</span>
                </div>
            </aside>
        </div>
    );
}

export default AdminSidebar;