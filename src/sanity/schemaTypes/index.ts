import { type SchemaTypeDefinition } from "sanity";
import { entreeType } from "./entreeType";
import { platType } from "./platType";
import { dessertType } from "./dessertType";
import { saladeType } from "./saladeType";
import { ingredientType } from "./ingredientType";
import { formuleType } from "./formuleType";

export const schema: { types: SchemaTypeDefinition[] } = {
  types: [
    entreeType,
    platType,
    dessertType,
    saladeType,
    ingredientType,
    formuleType,
  ],
};
