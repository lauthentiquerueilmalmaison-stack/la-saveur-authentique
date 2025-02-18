import { defineQuery } from "next-sanity";
import { sanityFetch } from "../live";

export const getAllIcecreams = async () => {
  const ALL_ICECREAMS_QUERY = defineQuery(`
            *[
                _type == "dessert"
            ] | order(name asc)
        `);

  try {
    const icecreams = await sanityFetch({ query: ALL_ICECREAMS_QUERY });
    return icecreams.data || [];
  } catch (error) {
    console.error("Error fetching all ice creams", error);
    return [];
  }
};
