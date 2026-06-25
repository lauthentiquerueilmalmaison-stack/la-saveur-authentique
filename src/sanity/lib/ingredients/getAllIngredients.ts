import { defineQuery } from "next-sanity";
import { sanityFetch } from "../live";
import {
  ALL_INGREDIENTS_QUERYResult,
  Ingredient,
} from "../../../../sanity.types";

export const getAllIngredients = async () => {
  const ALL_INGREDIENTS_QUERY = defineQuery(`
            *[
                _type == "ingredient"
            ] | order(nom asc)
        `);

  try {
    const ingredients = await sanityFetch<ALL_INGREDIENTS_QUERYResult[]>(
      ALL_INGREDIENTS_QUERY,
    );

    return ingredients;
  } catch (error) {
    console.error("Error fetching all ingredients", error);
    return [];
  }
};
