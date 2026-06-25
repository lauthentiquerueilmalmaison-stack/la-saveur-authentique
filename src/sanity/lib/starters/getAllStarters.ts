import { defineQuery } from "next-sanity";
import { sanityFetch } from "../live";
import { ALL_STARTERS_QUERYResult } from "../../../../sanity.types";

export const getAllStarters = async () => {
  const ALL_STARTERS_QUERY = defineQuery(`
            *[
                _type == "entree"
            ] | order(name asc)
        `);

  try {
    const starters =
      await sanityFetch<ALL_STARTERS_QUERYResult>(ALL_STARTERS_QUERY);
    return starters;
  } catch (error) {
    console.error("Error fetching all starters", error);
    return [];
  }
};
