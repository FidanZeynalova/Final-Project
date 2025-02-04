import React from 'react'
import AdminNavbar from '../../companents/admin/adminNavbar/adminNavbar'
import { Outlet } from "react-router"
import AdminFooter from '../../companents/admin/adminFooter/adminFooter'

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
