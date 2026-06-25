import { defineQuery } from "next-sanity";
import { sanityFetch } from "../live";
import { ALL_DISHES_QUERYResult } from "../../../../sanity.types";

export const getAllDishs = async () => {
  const ALL_DISHES_QUERY = defineQuery(`
            *[
                _type == "plat"
            ] | order(name asc)
        `);

  try {
    const dishes = await sanityFetch<ALL_DISHES_QUERYResult>(ALL_DISHES_QUERY);
    return dishes;
  } catch (error) {
    console.error("Error fetching all dishes", error);
    return [];
  }
};
