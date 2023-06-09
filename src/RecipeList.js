import React from "react";
import RecipeData from './RecipeData'
import RecipePost from './RecipePost'
function RecipeList({ recipes, deleteRecipe}) {
  return (
    <div className="recipe-list">
      <table>
        <thead>
          <tr>
            <th>Name</th>
            <th>Cuisine</th>
            <th>Photo</th>
            <th>Ingredients</th>
            <th>Preparation</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
      {recipes.map((recipe, index) => (
        <RecipePost deleteRecipe={() => deleteRecipe(index)} index={index} key={index} recipe={recipe}/>
      ))}
        </tbody>
      </table>
    </div>
  );
}

export default RecipeList;
