import { ReactNode } from "react";
import { motion } from "framer-motion";

/**
 * Types
 */

interface AnimatedLayoutProps {
  children: ReactNode;
}

/**
 * Constants
 */

const variants = {
  hidden: { opacity: 0, x: 0, y: 20 },
  enter: { opacity: 1, x: 0, y: 0 },
  exit: { opacity: 0, x: 0, y: 20 },
};

/**
 * AnimatedLayout Component
 */

export const AnimatedLayout = ({ children }: AnimatedLayoutProps) => (
  <motion.div
    initial="hidden"
    animate="enter"
    exit="exit"
    variants={variants}
    transition={{ duration: 0.5, type: "easeInOut" }}
    className="relative"
  >
    {children}
  </motion.div>
);
