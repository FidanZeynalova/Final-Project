import React, { useContext } from 'react'
import { Helmet } from 'react-helmet'
import "../UserCookBook/UserCookBook.css"
import CookBook1 from "../../../assets/CookBook1.webp"
import { ThemeContext } from '../../../context/ThemeContext'

function UserCookBook() {
  let { light } = useContext(ThemeContext)
  return (
    <>
      <Helmet>
        <title>CookBooks - Half Baked Harvest</title>
      </Helmet>
      <div className="UserCookBook" style={{ backgroundColor: light ? "#0f1620" : "#5F5E4A" }}>
        <h1
          style={{
            backgroundColor: light ? "#0f1620" : "#DDD6C5",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            margin: "100px auto",
            padding: "50px 0",
            fontSize: "50px",
            color: light ? "#DDD6C5" : "#0f1620",
            boxShadow: light ? "rgba(0, 0, 0, 0.35) 0px 5px 15px" : ""

          }}
        >
          CookBooks
        </h1>
        <div className="UserCookBookContainer">
          <div className="left">
            <img src={CookBook1} alt="" />
          </div>
          <div className="right">
            <h1>Half Baked Harvest Quick & Cozy</h1>
            <p>On Sale Now!</p>
            <p style={{ fontWeight: "bold" }}>120+ recipes for delicious, soul-warming comfort food…and getting it ready in a hurry—from the #1 New York Times bestselling author of Half Baked Harvest Every Day. <br /> <br />Comforting. Colorful. Convenient.</p>
            <p>Mega-bestselling author Tieghan Gerard is busier than ever—always creating recipes, taking photographs, and collaborating with friends. In her fourth cookbook, she returns with a collection of more than 120 recipes that reflect the way she cooks now: simple ingredients, easy to get on the table, short on time yet big on flavor. <br /> <br />Having cooked for her large family from a young age, Tieghan loves the feeling of sharing great food—and now she wants to share that feeling with you. This collection leans into the comfort food she’s known for, but with an eye toward getting it ready in a hurry. With many recipes doable in one pot or pan, most in under forty-five minutes, and a more-is-more focus on flavor (but not ingredients), you’ll be feasting fast. Start your day with <span style={{ fontWeight: "bold" }}>Maple Bacon Pancakes with Bourbon Maple Syrup, snack on Cheesy Roasted Shallot Bread, and make Garlic Butter Steak Bites with Bang Bang Sauce</span> your family’s new favorite. Enjoy delicious twists like <span style={{ fontWeight: "bold" }}>Sheet Pan Mac & Cheese with All the Crispy Edges</span> , and, of course, finish it all off with something sweet, like a  <span style={{ fontWeight: "bold" }}>Dark Chocolate Pistachio Cake with Cream Cheese Icing.</span></p>
          </div>
        </div>
      </div>
    </>
  )
}

export default UserCookBook
