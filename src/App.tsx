import { Header } from "./components/header";
import { useLocation, useOutlet } from "react-router-dom";
import { AnimatePresence } from "framer-motion";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import React from "react";

/**
 * AnimatedOutlet Component
 */

 const AnimatedOutlet = () => {
  const location = useLocation();
  const element = useOutlet();

  return (
    <AnimatePresence mode="wait" initial={true}>
      {element && React.cloneElement(element, { key: location.pathname })}
    </AnimatePresence>
  );
};

/**
 * App Component
 */

function App() {
  return (
    <>
      <Header />
      <AnimatedOutlet />
      <ToastContainer />
    </>
  );
}

export default App;
