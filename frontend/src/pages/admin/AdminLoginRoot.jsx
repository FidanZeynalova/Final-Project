import React from 'react'
import { Outlet } from 'react-router'
import AdminLoginNavbar from '../../companents/admin/AdminLoginNavbar/AdminLoginNavbar'
import AdminLoginFooter from '../../companents/admin/AdminLoginFooter/AdminLoginFooter'

function AdminLoginRoot() {
  return (
    <>
      <AdminLoginNavbar/>
      <Outlet/>
      <AdminLoginFooter/>
    </>
  )
}

export default AdminLoginRoot
