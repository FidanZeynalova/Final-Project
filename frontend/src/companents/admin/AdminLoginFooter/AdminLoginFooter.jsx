import React from 'react'
import { NavLink } from 'react-router-dom'

function AdminLoginFooter() {
  return (
    <div className="PrivacyPolicy" style={{backgroundColor:"#f0f0f1",padding:"40px 0",display:'flex',alignItems:"center",justifyContent:"center"}}>
    <span><NavLink to={"/privacy"} style={{color:"#5f5e4a",textDecoration:"underline"}}>Privacy Policy and Official Sweepstakes Rules</NavLink></span>
</div>
  )
}

export default AdminLoginFooter
