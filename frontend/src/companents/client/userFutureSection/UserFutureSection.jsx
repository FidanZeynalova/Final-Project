import React from 'react'
import "../userFutureSection/UserFutureSection.css"
import Baking from "../../../assets/Baking.jpg"
import BakingFront from "../../../assets/BakingFront.jpg"
import onePanFront from "../../../assets/onePanFront.jpg"
import FreezerFriendlyFront from "../../../assets/FreezerFriendlyFront.jpg"
import HealthierPageFront from "../../../assets/HealthierPageFront.jpg"
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
            <NavLink>
              <div className="card">
                <div className="front-img">
                  <img src={BakingFront} alt="" />
                 
                  </div>
                <div className="back-img">
                  <img src={Baking} alt="" />
                  <div className="text">
                    <span style={{display:"flex",alignItems:"center",justifyContent:"center",margin:"0px auto"}}> Baking</span>
                  </div>
                  </div>
              </div>
            </NavLink>
          </div>
          <div className="CategoryCard">
            <NavLink>
              <div className="card">
                <div className="front-img"> 
                  <img src={onePanFront} alt="" />
                 
                  </div>
                <div className="back-img"> 
                  <img src={onePan} alt="" />
                  <div className="text">
                    <span style={{display:"flex",alignItems:"center",justifyContent:"center",margin:"0px auto"}}> One Pan</span>
                  </div>
                  </div>
              </div>
            </NavLink>
          </div>
          <div className="CategoryCard">
            <NavLink to={"/healthierRecipes"}>
              <div className="card">
                <div className="front-img"> <img src={HealthierPageFront} alt="" /></div>
                <div className="back-img">
                   <img src={HealthierPage} alt="" />
                   <div className="text">
                    <span style={{display:"flex",alignItems:"center",justifyContent:"center",margin:"0px auto"}}> Healthier</span>
                  </div>
                   </div>
              </div>
            </NavLink>
          </div>
          <div className="CategoryCard">
            <NavLink  >
              <div className="card">
                <div className="front-img">  <img src={FreezerFriendlyFront} alt="" /> </div>
                <div className="back-img"> 
                   <img src={FreezerFriendly} alt="" />
                   <div className="text">
                    <span style={{display:"flex",alignItems:"center",justifyContent:"center",margin:"0px auto"}}> Freezer Friendly</span>
                  </div>
                    </div>
              </div>
            </NavLink>
          </div>
        </div>
      </div>

    </div>
  )
}

export default UserFutureSection
