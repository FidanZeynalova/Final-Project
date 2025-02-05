import React from 'react'
import { Outlet } from "react-router"
import AdminNavbar from '../../companents/admin/adminNavbar/adminNavbar'
import AdminFooter from '../../companents/admin/adminFooter/AdminFooter'

function AdminRoot() {
    return (
        <>
            <AdminNavbar />
            <Outlet />
            <AdminFooter />
        </>
    )
}

export default AdminRoot
