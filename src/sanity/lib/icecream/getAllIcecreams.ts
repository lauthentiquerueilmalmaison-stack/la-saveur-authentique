import { defineQuery } from "next-sanity";
import { sanityFetch } from "../live";
import { ALL_ICECREAMS_QUERYResult } from "../../../../sanity.types";

export const getAllIcecreams = async () => {
  const ALL_ICECREAMS_QUERY = defineQuery(`
            *[
                _type == "dessert"
            ] | order(name asc)
        `);

  try {
    const icecreams =
      await sanityFetch<ALL_ICECREAMS_QUERYResult[]>(ALL_ICECREAMS_QUERY);
    return icecreams;
  } catch (error) {
    console.error("Error fetching all ice creams", error);
    return [];
  }
};
