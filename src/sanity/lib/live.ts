import "server-only";
import { client } from "./client";

/**
 * Fetch compatible Next 16 + Sanity 6
 */
export async function sanityFetch<T>(
  query: string,
  params = {}
): Promise<T> {
  return client.fetch<T>(query, params);
}

export const sanityClient = client;