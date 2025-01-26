import { defineQuery } from "next-sanity";
import { sanityFetch } from "../live";

export const getAllOptions = async () => {
  const ALL_OPTIONS_QUERY = defineQuery(`
            *[
                _type == "formule"
            ] | order(name desc)
        `);

  try {
    const options = await sanityFetch({ query: ALL_OPTIONS_QUERY });
    return options.data || [];
  } catch (error) {
    console.error("Error fetching all options", error);
    return [];
  }
};
