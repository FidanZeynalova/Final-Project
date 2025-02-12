import React from 'react'
import "../adminNavbar/AdminNavbar.css"
function AdminNavbar() {

  return (

    <>
      <div className="AdminNavbar">
        <div className="AdminNavbarContainer">
          <div className="logo">
            <h2>Welcome,User!</h2>
          </div>
          <div className="image">
            <img src="https://is.gd/XSIYNK" alt="" style={{ width: "60px", height: "60px", borderRadius: "50%" }} />
          </div>
        </div>
      </div>

    </>
  )
}

export default AdminNavbar

