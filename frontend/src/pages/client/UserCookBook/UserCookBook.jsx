import React, { useContext } from 'react'
import { Helmet } from 'react-helmet'
import "../UserCookBook/UserCookBook.css"
import CookBook1 from "../../../assets/CookBook1.webp"
import CookBook2 from "../../../assets/CookBook2.webp"
import CookBook3 from "../../../assets/CookBook3.jpg"
import CookBook4 from "../../../assets/CookBook4.webp"
import CookBookSalat from "../../../assets/CookBookSalat.jpeg"
import CookBookDrink from "../../../assets/CookBookDrink.webp"
import CookBookCake from "../../../assets/CookBookCake.webp"
import CookBookSandwich from "../../../assets/CookBookSandwich.jpeg"
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
            backgroundColor: light ? "" : "#DDD6C5",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            margin: "100px 0 0 0",
            padding: "50px 0",
            fontSize: "50px",
            color: light ? "#DDD6C5" : "#0f1620",
            boxShadow: light ? "rgba(0, 0, 0, 0.35) 0px 5px 15px" : ""

          }}
        >
          CookBooks
        </h1>
        <div className="UserCookBookContainer">
          <div className="CookBookContainerHead">
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
          <div className="CookBookWrapper">
            <div className="CookBook">
              <a href="#" > <img src={CookBookSalat} alt="CookBookSalat" /></a>
            </div>
            <div className="CookBook">
              <a href='#'> <img src={CookBookDrink} alt="CookBookDrink" /></a>
            </div>
            <div className="CookBook">
              <a href='#'> <img src={CookBookCake} alt="CookBookCake" /></a>
            </div>
            <div className="CookBook">
              <a href='#'> <img src={CookBookSandwich} alt="CookBookSandwich" /></a>
            </div>
          </div>
          <div className="MoreCookBook" style={{ backgroundColor: light ? "#0f1620" : "#DDD6C5", width: "100%", margin: "20px auto" }}>
            <h1
              style={{

                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                padding: "15px 0",
                fontSize: "50px",
                color: light ? "#DDD6C5" : "#0f1620",
                boxShadow: light ? "rgba(0, 0, 0, 0.35) 0px 5px 15px" : ""

              }}
            >
              More Cookbooks from Half Baked Harvest
            </h1>
          </div>
          <div className="CookBookContainerHead" style={{ gap: "40px" }}>
            <div className="left">
              <img src={CookBook2} alt="" />
            </div>
            <div className="right">
              <h1 >Half Baked Harvest Every Day</h1>
              <p style={{ fontWeight: "bold" }} >More than 120 all-new, soul-satisfying recipes with a focus on feeling good from the New York Times bestselling author of Half Baked Harvest Super Simple. <br /><br /> Balanced. Bold. Beautiful.</p>
              <p>The millions of fans of the Half Baked Harvest blog and bestselling books have fallen in love with Tieghan Gerard’s recipes for their wholesome decadence, non-fussy approach, and smart twists on comforting favorites. Written and photographed in the stunning mountains of Colorado, inspired by her big, unique family, and focused on what you’ll want to eat day-in-day-out, Half Baked Harvest Every Day delivers all-new recipes that will feed your body and soul. <br /> <br /> For Tieghan, feel-good-food isn’t about restrictive eating. It’s about enjoying real food with lots of flavor and the satisfaction of sharing it with those you love. Finding balance is about giving your body and your cravings what they need . . . whether that’s a light, vegetable-packed dish, or a big ole’ plate of something comforting. <br /><br /> In this collection, there are plenty of plant-forward dishes like Chipotle Cheddar Corn Chowder and Spinach and Pesto-Stuffed Butternut Squash. Tieghan also shares flavor-packed family favorites like Pizza Pasta with Crispy Pepperoni Breadcrumbs, Crispy Carnitas Taquitos, and Spicy Pretzel Chicken Fingers. And to keep a smile on everyone’s face, you’ll find luscious desserts like Chocolate Olive Oil Cake and a Candied Lemon Tart, made with a focus on wholesome, less refined ingredients.</p>
            </div>
          </div>
          <div className="CookBookContainerHead" style={{ gap: "40px" }}>
            <div className="right">
              <h1>Half Baked Harvest Super Simple</h1>
              <p>Tieghan Gerard is known, both on her blog and in her debut cookbook, <span style={{ fontStyle: "italic" }}>Half Baked Harvest Cookbook</span>,for her stunningly beautiful meals and thoughtful recipes that taste even better than they look. <span style={{ fontStyle: "italic" }}>Half Baked Harvest Super Simple</span> takes what fans loved most about her debut, and promises all of those comfort-food forward, freshly-sourced recipes distilled into quicker, more manageable dishes using trending techniques that sell – from the almighty Instant Pot, to night-before meal prep. Super Simple is the compendium for home cooks who are just starting out or pressed for time. It teaches the most important cooking basics and delivers sometimes good-for-you, always hassle-free meals without sacrificing taste. Whip up everyday dishes like Cardamom Apple Fritters, Spinach, and Artichoke Mac and Cheese, and Lobster Tacos to share with your family, or plan stress-free dinner parties with options like Slow Roasted Moroccan Salmon and Fresh Corn and Zucchini Summer Lasagna.</p>
            </div>
            <div className="left">
              <img src={CookBook3} alt="" />
            </div>
          </div>
          <div className="CookBookContainerHead"  style={{ gap: "40px" }}>
            <div className="left">
              <img src={CookBook4} alt="" />
            </div>
            <div className="right">
              <h1>Half Baked Harvest Cookbook</h1>
              <p>What I love most about this cookbook is that there is a little something for everyone. Everything from the super healthy to the super indulgent, to everyday easy dinners, to weekend pastas that are worth the extra time! Count on finding plenty of easy crockpot recipes along with recipes that take just thirty minutes start to finish! There are plenty of breakfast options, appetizers to please a crowd, pasta and pizza galore, and even some veggie heavy recipes. And yes, there’s an entire chapter on desserts. Some are a chocolate lovers dream, some are super fruity and a handful are even healthy…ish. <br /><br /> The Half Baked Harvest cookbook is truly a reflection of what you see on the blog. The recipes in the cookbook are the best of the BEST, my most favorite creations. Recipes I have saved on my computer over the last four years for when the time came to put them into a cookbook. These recipes are what I am calling the HBH creme de la crumb recipes, they are my most treasured recipes. With each recipe there is also a photo, and for some recipes there even two. As you guys know, I LOVE photos and one of the most important things to me was that each recipe have at least one beautiful photo to accompany it!</p>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default UserCookBook
