import { RouterProvider } from "react-router-dom";
import { Header } from "./components/header";
import { router } from "./routes";

/**
 * App Component
 */

function App() {
  return (
    <>
      <Header />
      <RouterProvider router={router} />
    </>
  );
}

export default App;
