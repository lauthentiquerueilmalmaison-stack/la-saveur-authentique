import { defineQuery } from "next-sanity";
import { sanityFetch } from "../live";
import { ALL_OPTIONS_QUERYResult } from "../../../../sanity.types";

export const getAllOptions = async () => {
  const ALL_OPTIONS_QUERY = defineQuery(`
            *[
                _type == "formule"
            ] | order(nom desc)
        `);

  try {
    const options =
      await sanityFetch<ALL_OPTIONS_QUERYResult>(ALL_OPTIONS_QUERY);
    return options;
  } catch (error) {
    console.error("Error fetching all options", error);
    return [];
  }
};
