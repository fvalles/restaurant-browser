import { createBrowserRouter } from "react-router-dom";
import { Home } from "../pages/home";
import { RestaurantCatalog } from "../pages/restaurant-catalog";
import App from "../App";

/**
 * Types
 */

export enum Route {
  HOME = "/",
  RESTAURANT_CATALOG = "restaurant-catalog",
}

/**
 * Router
 */

export const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
        path: Route.HOME,
        element: <Home />,
      },
      {
        path: `${Route.RESTAURANT_CATALOG}/:restaurantId`,
        element: <RestaurantCatalog />,
      },
    ],
  },
]);
