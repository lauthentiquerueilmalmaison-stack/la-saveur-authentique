import { defineQuery } from "next-sanity";
import { sanityFetch } from "../live";
import { ALL_DESSERTS_QUERYResult } from "../../../../sanity.types";

export const getAllDesserts = async () => {
  const ALL_DESSERTS_QUERY = defineQuery(`
            *[
                _type == "dessert"
            ] | order(name asc)
        `);

  try {
    const desserts =
      await sanityFetch<ALL_DESSERTS_QUERYResult>(ALL_DESSERTS_QUERY);
    return desserts;
  } catch (error) {
    console.error("Error fetching all desserts", error);
    return [];
  }
};
