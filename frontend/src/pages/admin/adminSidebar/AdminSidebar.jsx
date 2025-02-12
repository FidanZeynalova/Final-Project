import React from 'react'
import "../adminSidebar/AdminSidebar.css"
import { MdOutlineDashboard } from "react-icons/md";
import { FcStatistics } from "react-icons/fc";
import { BiDish } from "react-icons/bi";
import { IoIosLogOut, IoIosSettings } from "react-icons/io";
import { FaUsers } from 'react-icons/fa';
import { BsFillMenuButtonWideFill } from "react-icons/bs";
import { TbReportSearch } from "react-icons/tb";

function AdminSidebar() {
    return (
        <>
            <div className="AdminSidebar">
                <aside>
                    <div className="sidebarContainer">
                        <div className="head">
                            <h1>.// Half Baked Harvest</h1>
                        </div>
                        <div className="lists">
                            <ul>
                                <li><MdOutlineDashboard /> Dashboard</li>
                                <li><FcStatistics /> Statistics</li>
                                <li><BiDish /> Dishes</li>
                                <li><BsFillMenuButtonWideFill /> Recipes Management</li>
                                <li><FaUsers /> Users</li>
                                <li><TbReportSearch /> Reports</li>
                                <li><IoIosSettings /> Settings</li>
                                <li><IoIosLogOut /> Log Out</li>
                            </ul>
                        </div>
                        <div className="footer">
                                <span style={{fontSize:"22px"}}>Fidan Zeynalova</span>
                                <span style={{fontSize:"18px"}}>fidanzeynalova2005@gmail.com</span>
                        </div>
                    </div>
                </aside>
            </div>
        </>
    )
}

export default AdminSidebar
