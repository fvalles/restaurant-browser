import { useUserStore } from "../../stores";

/**
 * useGetUserCoordinates hook
 */

export const useUserCoordinates = () => {
  const {
    latitude: userLatitude,
    longitude: userLongitude,
    setCoordinates,
  } = useUserStore();

  if ("geolocation" in navigator) {
    navigator.geolocation.getCurrentPosition(
      ({ coords: { latitude, longitude } }) => {
        if (userLatitude !== latitude && userLongitude !== longitude) {
          setCoordinates({ latitude, longitude });
        }
      }
    );
  }
};
