import React from "react";
import { Ingredient } from "../../sanity.types";

interface IngredientsProps {
  ingredients: Ingredient[];
}
const Ingredients = ({ ingredients }: IngredientsProps) => {
  return (
    <div className="flex space-x-1 text-sm text-gray-300 italic">
      {ingredients.map((ingredient, index) => (
        <span key={ingredient._id}>
          {ingredient.nom}
          {index < ingredients.length - 1 && ","}
        </span>
      ))}
    </div>
  );
};

export default Ingredients;
