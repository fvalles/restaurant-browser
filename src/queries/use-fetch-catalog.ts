import { UseQueryResult, useQuery } from "@tanstack/react-query";
import { CatalogDto } from "../types";
import { Endpoint, QueryKey } from "./constants";

/**
 * fetchCatalog helper
 */

const fetchCatalog = async (id: string): Promise<CatalogDto[]> => {
  const response = await fetch(`${Endpoint.RESTAURANTS}/${id}/catalog`);
  const result = await response.json();

  return result as CatalogDto[];
};

/**
 * useFetchCatalog query
 */

export const useFetchCatalog = (
  id?: string
): UseQueryResult<CatalogDto[], Error> =>
  useQuery({
    queryKey: [QueryKey.CATALOG, id],
    queryFn: id ? () => fetchCatalog(id) : undefined,
  });
