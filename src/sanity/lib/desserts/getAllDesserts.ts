import { defineQuery } from "next-sanity";
import { sanityFetch } from "../live";

export const getAllDesserts = async () => {
  const ALL_DESSERTS_QUERY = defineQuery(`
            *[
                _type == "dessert"
            ] | order(name asc)
        `);

  try {
    const desserts = await sanityFetch({ query: ALL_DESSERTS_QUERY });
    return desserts.data || [];
  } catch (error) {
    console.error("Error fetching all desserts", error);
    return [];
  }
};
