import { defineQuery } from "next-sanity";
import { sanityFetch } from "../live";

export const getAllSalades = async () => {
  const ALL_SALADES_QUERY = defineQuery(`
           *[_type == "salade"] {
             _id,
              nom,
              prix,
              ingredients[]->{
                _id,
              _type,
              _createdAt,
              _updatedAt,
              _rev,
              nom
              }
}`);

  try {
    const salades = await sanityFetch({ query: ALL_SALADES_QUERY });
    return salades.data || [];
  } catch (error) {
    console.error("Error fetching all salades", error);
    return [];
  }
};
