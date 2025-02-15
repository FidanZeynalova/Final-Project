import React, { useState } from 'react'
import "../adminNavbar/AdminNavbar.css"
import { IoMdAdd } from 'react-icons/io'
import { useCreateRecipeMutation, useGetRecipesQuery } from '../../../redux/Slices/recipesSlices'
function AdminNavbar() {
  let [display, setDisplay] = useState(false)
  let [createRecipe] = useCreateRecipeMutation()
  let { refetch } = useGetRecipesQuery()


  function handleSubmit(e) {
    e.preventDefault();

    const formData = new FormData(e.target);
    const newRecipe = {
      dishImage: formData.get("dishImage"),
      dishName: formData.get("dishName"),
      dishAuthor: formData.get("dishAuthor"),
      cookTime: Number(formData.get("cookTime")),
      prepTime: Number(formData.get("prepTime")),
      totalTime: Number(formData.get("totalTime")),
      servings: Number(formData.get("servings")),
      calories: Number(formData.get("calories")),
    };

    createRecipe(newRecipe)
      .then(() => {
        refetch();
        setDisplay(false);
      })
      .catch((err) => console.error("Recipe creation failed:", err));
  }


  function handleDisplay() {
    if (display) {
      setDisplay(false)
    } else {
      setDisplay(true)
    }
  }

  return (
    <>
      <div className="AdminNavbar">
        <div className="AdminNavbarContainer">
          <div className="logo">
            <h2>Welcome,User!</h2>
          </div>
          <div className="wrap">
            <div className="addButton" onClick={() => handleDisplay()} >
              <button><IoMdAdd /></button>
            </div>
            <div className="image">
              <img src="https://is.gd/XSIYNK" alt="" style={{ width: "60px", height: "60px", borderRadius: "50%" }} />
            </div>
          </div>
          <div className="addModal" style={{
            display: display ? "flex" : "none",
            alignItems: "center",
            justifyContent: "center",
            margin: "0px auto",
            backgroundColor: "white",
            position: "fixed",
            top: "50%",
            left: "50%",
            transform: "translate(-50%,-50%)",
            zIndex: "6",
            padding: "5px",
            width: "70%"
          }}>
            <form style={{
              width: "100%", display: "flex", alignItems: "center", justifyContent: "center", flexDirection: "column",
              gap: "10px"
            }} onSubmit={(e) => handleSubmit(e)}>
              <h1>Add New Dish</h1>
              <div className="input">
                <input type="file" placeholder='Dish Image' />
              </div>
              <div className="input">
                <input type="text" placeholder='Dish Name' />
              </div>
              <div className="input">
                <input type="text" placeholder='Dish Author' />
              </div>
              <div className="input">
                <input type="number" placeholder='Cook Time' />
              </div>
              <div className="input">
                <input type="number" placeholder='Prep Time' />
              </div>
              <div className="input">
                <input type="number" placeholder='Total Time' />
              </div>
              <div className="input">
                <input type="number" placeholder='Servings' />
              </div>
              <div className="input">
                <input type="number" placeholder='Calories per serving' />
              </div>
              <button type='Submit'>Add</button>
            </form>
            <div className="exit" style={{
              position: "fixed", top: "10px", right: "10px", backgroundColor: "rgb(146, 7, 7)", color: 'white', padding: "5px 10px", cursor: "pointer", fontSize: "20px",
            }} onClick={handleDisplay}>X</div>
          </div>
          <div className="overlay" style={{
            display: display ? "block" : "none",
            backgroundColor: "black",
            position: "fixed",
            top: "0",
            left: "0",
            zIndex: "5",
            width: "100%",
            height: "100vh",
            opacity: ".7"
          }}></div>
        </div>
      </div>

    </>
  )
}

export default AdminNavbar

