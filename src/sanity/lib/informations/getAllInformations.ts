import { defineQuery } from "next-sanity";
import { sanityFetch } from "../live";

export const getAllInformations = async () => {
  const ALL_INFORMATIONS_QUERY = defineQuery(`
            *[
                _type == "information"
            ]
        `);

  try {
    const informations = await sanityFetch({ query: ALL_INFORMATIONS_QUERY });

    return informations.data;
  } catch (error) {
    console.error("Error fetching all informations", error);
    return [];
  }
};
