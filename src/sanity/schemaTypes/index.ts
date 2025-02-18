import { type SchemaTypeDefinition } from "sanity";
import { entreeType } from "./entreeType";
import { platType } from "./platType";
import { dessertType } from "./dessertType";
import { saladeType } from "./saladeType";
import { ingredientType } from "./ingredientType";
import { formuleType } from "./formuleType";
import { informationType } from "./informationType";
import { glaceType } from "./glaceType";

export const schema: { types: SchemaTypeDefinition[] } = {
  types: [
    entreeType,
    platType,
    dessertType,
    saladeType,
    ingredientType,
    formuleType,
    informationType,
    glaceType
  ],
};
