import { createBrowserRouter } from "react-router-dom";
import { Home } from "../pages/home";
import { RestaurantDetail } from "../pages/restaurant-detail";

/**
 * Types
 */

export enum Route {
  HOME = "/",
  RESTAURANT_DETAIL = "restaurant-detail",
}

/**
 * Router
 */

export const router = createBrowserRouter([
  {
    path: Route.HOME,
    element: <Home />,
  },
  {
    path: `${Route.RESTAURANT_DETAIL}/:restaurantId`,
    element: <RestaurantDetail />,
  },
]);
