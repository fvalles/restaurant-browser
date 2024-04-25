import { useParams } from "react-router-dom";

/**
 * RestaurantDetail Page
 */

export const RestaurantDetail = () => {
  const { restaurantId } = useParams();

  return <div>Restaurant Detail {restaurantId}</div>;
};
