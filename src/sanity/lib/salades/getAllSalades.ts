import { defineQuery } from "next-sanity";
import { sanityFetch } from "../live";

export const getAllSalades = async () => {
  const ALL_SALADES_QUERY = defineQuery(`
            *[
                _type == "salade"
            ] | order(name asc)
        `);

  try {
    const salades = await sanityFetch({ query: ALL_SALADES_QUERY });
    return salades.data || [];
  } catch (error) {
    console.error("Error fetching all salades", error);
    return [];
  }
};
