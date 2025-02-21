import React, { useState } from 'react';
import "../adminSidebar/AdminSidebar.css";
import { MdOutlineDashboard } from "react-icons/md";
import { FcStatistics } from "react-icons/fc";
import { BiDish } from "react-icons/bi";
import { IoIosLogOut } from "react-icons/io";
import { FaUsers } from 'react-icons/fa';
import { NavLink, useNavigate } from 'react-router-dom';

function AdminSidebar() {
    const [isSidebarOpen, setIsSidebarOpen] = useState(false);
    const navigate = useNavigate();

    const handleLogout = () => {
        localStorage.removeItem('userToken'); 
        navigate('login');
    };

    const toggleSidebar = () => {
        setIsSidebarOpen(!isSidebarOpen);
    };

    const handleNavigation = (path) => {
        navigate(path);
        setIsSidebarOpen(false);
    };

    return (
        <>
            <button className="sidebar-toggle" onClick={toggleSidebar}>
                ☰
            </button>
            <div className={`admin-sidebar ${isSidebarOpen ? 'open' : ''}`}>
                <aside className="sidebar-container">
                    <div className="head">
                        <h1>./ Half Baked Harvest</h1>
                    </div>
                    <nav className="nav-list">
                        <ul>
                            <NavLink to="/admin" className="nav-item" onClick={() => handleNavigation('/admin')}>
                                <li><MdOutlineDashboard /> Dashboard</li>
                            </NavLink>
                            <NavLink to="/admin/statistics" className="nav-item" onClick={() => handleNavigation('/admin/statistics')}>
                                <li><FcStatistics /> Statistics</li>
                            </NavLink>
                            <NavLink to="/admin/recipes" className="nav-item" onClick={() => handleNavigation('/admin/recipes')}>
                                <li><BiDish /> Dishes</li>
                            </NavLink>
                            <NavLink to="/admin/users" className="nav-item" onClick={() => handleNavigation('/admin/users')}>
                                <li><FaUsers /> Users</li>
                            </NavLink>
                            <li className="nav-item logout" onClick={handleLogout}>
                                <IoIosLogOut /> Log Out
                            </li>
                        </ul>
                    </nav>
                    <div className="footer">
                        <span className="user-name">Fidan Zeynalova</span>
                        <span className="user-email">fidanzeynalova2005@gmail.com</span>
                    </div>
                </aside>
            </div>
        </>
    );
}

export default AdminSidebar;
