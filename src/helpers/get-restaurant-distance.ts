/**
 * Types
 */

interface GetRestaurantDistanceParams {
  userLatitude: number | null;
  userLongitude: number | null;
  restaurantLatitude: number;
  restaurantLongitude: number;
}

/**
 * Constants
 */

const EARTH_RADIUS = 6371; // Radius of the earth in km

/**
 * getRestaurantDistance helper
 */

export const getRestaurantDistance = ({
  userLatitude,
  userLongitude,
  restaurantLatitude,
  restaurantLongitude,
}: GetRestaurantDistanceParams): number | null => {
  if (!userLatitude || !userLongitude) {
    return null;
  }

  const dLat = deg2rad(restaurantLatitude - userLatitude);
  const dLon = deg2rad(restaurantLongitude - userLongitude);
  const a =
    Math.sin(dLat / 2) * Math.sin(dLat / 2) +
    Math.cos(deg2rad(userLatitude)) *
      Math.cos(deg2rad(restaurantLatitude)) *
      Math.sin(dLon / 2) *
      Math.sin(dLon / 2);
  const c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1 - a));
  const distance = EARTH_RADIUS * c; // Distance in km

  return Number(distance.toFixed(1));
};

/**
 * deg2rad helper
 */

const deg2rad = (deg: number): number => {
  return deg * (Math.PI / 180);
};
