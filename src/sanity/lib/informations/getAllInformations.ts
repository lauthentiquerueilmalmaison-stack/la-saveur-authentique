import { defineQuery } from "next-sanity";
import { sanityFetch } from "../live";
import { ALL_INFORMATIONS_QUERYResult } from "../../../../sanity.types";

export const getAllInformations = async () => {
  const ALL_INFORMATIONS_QUERY = defineQuery(`
    *[_type == "information"]
  `);

  try {
    const informations = await sanityFetch<ALL_INFORMATIONS_QUERYResult>(
      ALL_INFORMATIONS_QUERY,
    );

    return informations;
  } catch (error) {
    console.error("Error fetching all informations", error);
    return [];
  }
};
