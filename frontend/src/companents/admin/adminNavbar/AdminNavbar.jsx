import React, { useState } from 'react';
import "../adminNavbar/AdminNavbar.css";
import { IoMdAdd } from 'react-icons/io';
import { useCreateRecipeMutation, useGetRecipesQuery } from '../../../redux/Slices/recipesSlices';

function AdminNavbar() {
  let [display, setDisplay] = useState(false);
  let [createRecipe] = useCreateRecipeMutation();
  let { refetch } = useGetRecipesQuery();

  function handleSubmit(e) {
    e.preventDefault();

    const token = localStorage.getItem('token');
    if (!token) {
      alert("Please log in first!");
      return;
    }

    const formData = new FormData();
    const form = e.target;

    formData.append('img', form.img.files[0]);
    formData.append('dish', form.dish.value);
    formData.append('category', form.category.value);
    formData.append('cookingTime', form.cookingTime.value);
    formData.append('prepTime', form.prepTime.value);
    formData.append('totalTime', form.totalTime.value);
    formData.append('servings', form.servings.value);
    formData.append('calories', form.calories.value);
    formData.append('instructions', form.instructions.value);
    formData.append('videoUrl', form.videoUrl?.value || '');

    const ingredients = form.ingredients.value
      .split(',')
      .map(item => item.trim())
      .filter(item => item.length > 0);

    formData.append('ingredients', JSON.stringify(ingredients));

    console.log('Submitted data:');
    for (let pair of formData.entries()) {
      console.log(pair[0] + ': ' + pair[1]);
    }

    createRecipe(formData)
      .then((response) => {
        refetch();
        setDisplay(false);
        e.target.reset();
      })
      .catch((err) => {
        if (err.data && err.data.message) {
          alert(`Error: ${err.data.message}`);
        } else {
          alert("Error");
        }
      });
  }

  function handleDisplay() {
    setDisplay(!display);
  }

  return (
    <>
      <div className="AdminNavbar">
        <div className="AdminNavbarContainer">
          <div className="logo">
            <h2>Welcome, Fidan!</h2>
          </div>
          <div className="wrap">
            <div className="addButton" onClick={handleDisplay}>
              <button><IoMdAdd /></button>
            </div>
            <div className="image">
              <img src="https://is.gd/XSIYNK" alt="" style={{ width: "60px", height: "60px", borderRadius: "50%" }} />
            </div>
          </div>
          <div className="addModal" style={{
            display: display ? "flex" : "none",

          }}>
            <form style={{
              width: "100%", display: "flex", alignItems: "center", justifyContent: "center", flexDirection: "column",
              gap: "10px"
            }} onSubmit={handleSubmit} encType="multipart/form-data">
              <div className="input">
                <input type="file" name="img" accept="image/*" required />
              </div>
              <div className="input">
                <input type="text" name="dish" placeholder='Dish Name' required />
              </div>
              <div className="input">
                <input type="text" name="category" placeholder='Category' required />
              </div>
              <div className="input">
                <input type="text" name="cookingTime" placeholder='Cook Time' required />
              </div>
              <div className="input">
                <input type="text" name="prepTime" placeholder='Prep Time' required />
              </div>
              <div className="input">
                <input type="text" name="totalTime" placeholder='Total Time' required />
              </div>
              <div className="input">
                <input type="number" name="servings" placeholder='Servings' required />
              </div>
              <div className="input">
                <input type="number" name="calories" placeholder='Calories per serving' required />
              </div>
              <div className="input">
                <textarea name="instructions" placeholder="Cooking Instructions" required style={{ width: '100%', height: '50px', padding: '10px', borderRadius: '8px' }}></textarea>
              </div>
              <div className="input">
                <input type="text" name="ingredients" placeholder="Ingredients (comma separated)" required />
              </div>
              <div className="input">
                <input
                  type="text"
                  id="videoUrl"
                  name="videoUrl"
                  placeholder="YouTube video URL (exp: https://www.youtube.com/watch?v=...)"
                />
              </div>
              <button type='submit'>Add</button>
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
  );
}

export default AdminNavbar;
