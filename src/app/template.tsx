"use client";
import { motion } from "framer-motion";

const pageTransitionVariants = {
  initial: { opacity: 0, y: 30 },
  animate: { opacity: 1, y: 0 },
  exit: { opacity: 0, y: 30 },
};
export default function Template({ children }: { children: React.ReactNode }) {
  return (
    <>
      <motion.div
        variants={pageTransitionVariants}
        initial="initial"
        animate="animate"
        exit="exit"
        transition={{ duration: 0.2 }}
      >
        {children}
      </motion.div>
    </>
  );
}
