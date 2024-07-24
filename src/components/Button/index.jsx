"use client";
import { motion } from "framer-motion";

const PrimaryButton = ({ title }) => {
  return (
    <div className="font-serif">
      <motion.button
        whileHover={{
          scale: 1,
          transition: { duration: 1 },
        }}
        whileTap={{ scale: 0.9 }}
        whileInView={{ opacity: 1 }}
        className=" bg-custom-gradient text-white rounded px-5 py-2 font-medium"
      >
        {title}
      </motion.button>
    </div>
  );
};

export default PrimaryButton;
