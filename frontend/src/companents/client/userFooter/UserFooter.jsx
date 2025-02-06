import React, { useContext } from 'react'
import { FaAngleDoubleUp } from "react-icons/fa";
import "../userFooter/UserFooter.css"
import footerLogo1 from "../../../assets/footerLogo1.webp"
import footerLogo2 from "../../../assets/footerLogo2.webp"
import footerLogo3 from "../../../assets/footerLogo3.webp"
import footerLogo4 from "../../../assets/footerLogo4.webp"
import footerLogo5 from "../../../assets/footerLogo5.webp"
import footerLogo6 from "../../../assets/footerLogo6.webp"
import footerLogo7 from "../../../assets/footerLogo7.webp"
import footerLogo8 from "../../../assets/footerLogo8.webp"
import footerLogo9 from "../../../assets/footerLogo9.webp"
import footerLogo10 from "../../../assets/footerLogo10.webp"
import footerLogo11 from "../../../assets/footerLogo11.webp"
import footerLogo12 from "../../../assets/footerLogo12.webp"
import footerLogo13 from "../../../assets/footerLogo13.webp"
import footerLogo14 from "../../../assets/footerLogo14.webp"
import { ThemeContext } from '../../../context/ThemeContext';


function UserFooter() {
  let { light } = useContext(ThemeContext)

  function scrollToTop() {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  }

  const logos = [
    footerLogo1, footerLogo2, footerLogo3, footerLogo4, footerLogo5,
    footerLogo6, footerLogo7, footerLogo8, footerLogo9, footerLogo10,
    footerLogo11, footerLogo12, footerLogo13, footerLogo14
  ];

  return (
    <div className='Footer'>
      <div className="footerContainer">
        <div className="footerSeen">
          <h1 style={{
            display: "flex", alignItems: "center", justifyContent: "center"
          }}>As Seen In</h1>
          <div className="logos">

            {logos.map((logo, index) => (
              <div className="footer-logo" key={index}>
                <img src={logo} alt={`footer logo ${index + 1}`} />
              </div>
            ))}
          </div>
        </div>
        <div className="footerEnd">
          <div className="footer-end-container">
            <div className="footerDirection">
              <div className="direction">
                <h2>Company</h2>
                <div className="spans">
                  <span>Meet Tieghan</span>
                  <span>Contact</span>
                  <span>Partner With Us</span>
                  <span>Press</span>
                  <span>Official Sweepstakes Rules</span>
                </div>
              </div>
              <div className="direction">
                <h2>Explore</h2>
                <div className="spans">
                  <span>Recipe Index</span>
                  <span>Latest Recipes</span>
                  <span>Recipe Archives</span>
                  <span>Kitchen Favorites</span>
                  <span>Barns</span>
                </div>
              </div>
              <div className="direction">
                <h2>Cookbooks</h2>
                <div className="spans">
                  <span>HBH Quick & Cozy</span>
                  <span>HBH Every Day</span>
                  <span>Super Simple</span>
                  <span>Half Baked Harvest</span>
                  <span>Contact</span>
                </div>
              </div>
            </div>
            <div className="footerCenter">
              <img src="https://www.halfbakedharvest.com/wp-content/themes/half-baked-harvest-2020/assets/icons/logo/logo-boxed-dark.svg" alt="Footer Logo" />
            </div>


          </div>
          <div style={{
            marginTop: "20px", color: "white", borderTop: "1px solid white", paddingTop: "20px", display: "flex", alignItems: "center", justifyContent: "center"
          }}>
            © 2025 Delicious Recipes. All rights reserved.
          </div>
        </div>
      </div>
      <div className="Footer" style={{ position: "fixed", right: "20px", bottom: "30px",
        
         }}>
        <button
          style={{ fontSize: "30px", borderRadius: "50%", padding: "10px 15px",
            color: light ? "#5F5E4A" : "#FEFFF4",
            backgroundColor: light ? "#FEFFF4" : "#5F5E4A",
            border : light ? "#5F5E4A" : "#FEFFF4"
           }}
          onClick={scrollToTop}
        >
          <FaAngleDoubleUp />
        </button>
      </div>
    </div>
  )


}

export default UserFooter
