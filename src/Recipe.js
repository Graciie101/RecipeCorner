import React, { useState } from 'react';
import style from './recipe.module.css';

const Recipe = ({ title, calories, image, ingredients }) => {
  // let ing = {ingredients}
  //console.log("This is ", ingredients)
  return (
    <div className =  {style.recipe}>
      <h1>{title}</h1> 
      <ol>{ingredients && ingredients.map(ingredient => <li> {ingredient.text}</li>)}</ol>
      <p>This recipe contains {calories} calories.</p>
      <img src={image} alt='' />
    </div>
  );
};
export default Recipe;
// useState is a funcion that receives an array of 2 elements, the first being the value and the second one being a function to set that value