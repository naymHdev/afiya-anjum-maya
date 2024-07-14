"use client";
import { motion } from "framer-motion";
import Link from "next/link";
import { FaHome } from "react-icons/fa";

const error = () => {
  return (
    <div className="flex flex-col items-center justify-center h-screen bg-gray-100">
      <motion.img
        src="/search-not-found.webp"
        alt="404 Error"
        className="mt-8 w-64 h-auto mx-auto"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5, delay: 0.3 }}
      />
      <motion.div
        initial={{ opacity: 0, y: -50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="text-center"
      >
        <h1 className="text-6xl font-bold mb-4 text-orange-500">Oops!</h1>
        <p className="text-xl mb-8 text-secondary-text">
          We can not seem to find the page you are looking for.
        </p>
        <motion.div
          initial={{ scale: 0.9 }}
          animate={{ scale: 1 }}
          transition={{
            repeat: Infinity,
            repeatType: "reverse",
            duration: 1,
          }}
        >
          <Link href="/" legacyBehavior>
            <a className="inline-flex items-center px-6 py-3 bg-custom-gradient text-white text-lg font-semibold rounded-md shadow-md hover:bg-orange-700 transition duration-300">
              <FaHome className="mr-2" /> Go Back Home
            </a>
          </Link>
        </motion.div>
      </motion.div>
    </div>
  );
};

export default error;
