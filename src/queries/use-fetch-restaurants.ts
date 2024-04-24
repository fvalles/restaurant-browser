import { UseQueryResult, useQuery } from "@tanstack/react-query";
import { RestaurantsDto } from "../types";
import { Endpoint, QueryKey } from "./constants";

/**
 * fetchRestaurants helper
 */

const fetchRestaurants = async (): Promise<RestaurantsDto[]> => {
  const response = await fetch(Endpoint.RESTAURANTS);
  const result = await response.json();

  return result as RestaurantsDto[];
};

/**
 * useFetchRestaurants query
 */

export const useFetchRestaurants = (): UseQueryResult<
  RestaurantsDto[],
  Error
> =>
  useQuery({
    queryKey: [QueryKey.RESTAURANTS],
    queryFn: fetchRestaurants,
  });
