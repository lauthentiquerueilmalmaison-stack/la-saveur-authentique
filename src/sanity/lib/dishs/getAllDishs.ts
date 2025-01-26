import { defineQuery } from "next-sanity";
import { sanityFetch } from "../live";

export const getAllDishs = async () => {
  const ALL_DISHES_QUERY = defineQuery(`
            *[
                _type == "plat"
            ] | order(name asc)
        `);

  try {
    const dishes = await sanityFetch({ query: ALL_DISHES_QUERY });
    return dishes.data || [];
  } catch (error) {
    console.error("Error fetching all dishes", error);
    return [];
  }
};
