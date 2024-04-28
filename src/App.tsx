import { RouterProvider } from "react-router-dom";
import { Header } from "./components/header";
import { router } from "./routes";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

/**
 * App Component
 */

function App() {
  return (
    <>
      <Header />
      <RouterProvider router={router} />
      <ToastContainer />
    </>
  );
}

export default App;
