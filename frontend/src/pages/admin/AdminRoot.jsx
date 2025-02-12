import React from 'react'
import { Outlet } from "react-router"
import AdminNavbar from '../../companents/admin/adminNavbar/adminNavbar'
import AdminSidebar from './adminSidebar/AdminSidebar'

function AdminRoot() {
    return (
        <>
            <AdminNavbar />
            <AdminSidebar/>
            <Outlet />
        </>
    )
}

export default AdminRoot
