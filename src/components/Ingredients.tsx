import React from "react";
import { Ingredient } from "../../sanity.types";

interface IngredientsProps {
  ingredients: Ingredient[];
}
const Ingredients = ({ ingredients }: IngredientsProps) => {
  return (
    <div className="text-sm text-gray-300 italic lowercase ">
      {ingredients.map((ingredient, index) => (
        <span key={ingredient._id} className="mr-1">
          {ingredient.nom?.trim()}
          {index < ingredients.length - 1 && ","}
        </span>
      ))}
    </div>
  );
};

export default Ingredients;
