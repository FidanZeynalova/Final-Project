import React from 'react'
import UserNavbar from '../../companents/client/userNavbar/UserNavbar'
import { Outlet } from "react-router"
import UserFooter from '../../companents/client/userFooter/userFooter'

function UserRoot() {
    return (
        <>
            <UserNavbar />
            <Outlet />
            <UserFooter />
        </>
    )
}

export default UserRoot
