import React from 'react'
import "../userFutureSection/UserFutureSection.css"
import Baking from "../../../assets/Baking.webp"
import onePan from "../../../assets/onePan.png"
import HealthierPage from "../../../assets/HealthierPage.webp"
import FreezerFriendly from "../../../assets/FreezerFriendly.webp"
import { NavLink } from 'react-router'

function UserFutureSection() {
  return (
    <div className='UserFutureSection'>
        <div className="UserFutureSectionContainer">
            <div className="CategoryCards">
                <div className="CategoryCard">
                  <NavLink>  <img src={Baking} alt="" /></NavLink>
                </div>
                <div className="CategoryCard">
                   <NavLink> <img src={onePan} alt="" /></NavLink>
                </div>
                <div className="CategoryCard">
                  <NavLink>  <img src={HealthierPage} alt="" /></NavLink>
                </div>
                <div className="CategoryCard">
                   <NavLink> <img src={FreezerFriendly} alt="" /></NavLink>
                </div>
            </div>
        </div>
      
    </div>
  )
}

export default UserFutureSection
