import React from 'react'
import { Outlet } from "react-router"
import AdminNavbar from '../../companents/admin/adminNavbar/adminNavbar'

function AdminRoot() {
    return (
        <>
            <AdminNavbar />
            <Outlet />
        </>
    )
}

export default AdminRoot
