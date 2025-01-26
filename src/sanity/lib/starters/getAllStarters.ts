import { defineQuery } from "next-sanity";
import { sanityFetch } from "../live";

export const getAllStarters = async () => {
  const ALL_STARTERS_QUERY = defineQuery(`
            *[
                _type == "entree"
            ] | order(name asc)
        `);

  try {
    const starters = await sanityFetch({ query: ALL_STARTERS_QUERY });
    return starters.data || [];
  } catch (error) {
    console.error("Error fetching all starters", error);
    return [];
  }
};
