"use client";
import { useState } from "react";
import { motion } from "framer-motion";
import Link from "next/link";
import { FaBars, FaTimes, FaUser, FaCog } from "react-icons/fa";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  const menuVariants = {
    hidden: {
      opacity: 0,
      x: "100%",
      transition: {
        duration: 0.5,
      },
    },
    visible: {
      opacity: 1,
      x: 0,
      transition: {
        duration: 0.5,
      },
    },
  };

  const iconVariants = {
    hidden: {
      opacity: 0,
      scale: 0,
    },
    visible: {
      opacity: 1,
      scale: 1,
      transition: {
        type: "spring",
        stiffness: 100,
        damping: 10,
      },
    },
  };

  return (
    <nav className="bg-gray-800 p-4 fixed top-0 left-0 right-0 z-50">
      <div className="container mx-auto flex justify-between items-center">
        <div className="text-white text-xl">Brand</div>
        <div className="md:hidden">
          <motion.button
            onClick={toggleMenu}
            className="text-white relative"
            whileTap={{ scale: 0.9 }}
          >
            {isOpen ? <FaTimes size={24} /> : <FaBars size={24} />}
            <motion.div
              className="bg-white h-1 w-6 absolute top-0 right-0 bottom-0"
              initial={{ scaleX: 0 }}
              animate={isOpen ? { scaleX: 1 } : { scaleX: 0 }}
              transition={{ duration: 0.5 }}
            />
          </motion.button>
        </div>
        <div className="hidden md:flex space-x-6 items-center">
          <Link href="/" legacyBehavior>
            <a className="text-white">Home</a>
          </Link>
          <Link href="/about" legacyBehavior>
            <a className="text-white">About</a>
          </Link>
          <Link href="/services" legacyBehavior>
            <a className="text-white">Services</a>
          </Link>
          <Link href="/contact" legacyBehavior>
            <a className="text-white">Contact</a>
          </Link>
          <button className="bg-white text-gray-800 py-2 px-4 rounded-full">
            Lets Talk
          </button>
        </div>
      </div>
      {isOpen && (
        <motion.div
          className="md:hidden fixed top-16 left-0 w-full h-full bg-gray-800 text-white flex flex-col items-center space-y-4 py-6"
          initial="hidden"
          animate="visible"
          variants={menuVariants}
        >
          <Link href="/" legacyBehavior>
            <a onClick={toggleMenu} className="py-2 text-center w-full">
              Home
            </a>
          </Link>
          <Link href="/about" legacyBehavior>
            <a onClick={toggleMenu} className="py-2 text-center w-full">
              About
            </a>
          </Link>
          <Link href="/services" legacyBehavior>
            <a onClick={toggleMenu} className="py-2 text-center w-full">
              Services
            </a>
          </Link>
          <Link href="/contact" legacyBehavior>
            <a onClick={toggleMenu} className="py-2 text-center w-full">
              Contact
            </a>
          </Link>
          <motion.div
            className="flex space-x-4"
            initial="hidden"
            animate="visible"
            variants={iconVariants}
          >
            <FaUser size={24} />
            <FaCog size={24} />
          </motion.div>
        </motion.div>
      )}
    </nav>
  );
};

export default Navbar;
