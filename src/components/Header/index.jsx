"use client";
import { useState } from "react";
import { motion } from "framer-motion";
import Link from "next/link";
import { FaBars, FaTimes } from "react-icons/fa";
import { ArrowRightIcon, ArrowUpRightIcon } from "@heroicons/react/20/solid";
import "./nav.css";
import Image from "next/image";

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

  return (
    <nav className=" font-serif py-6 fixed top-0 left-0 right-0 z-50 shadow-sm bg-slate-50">
      <div className="max-w-7xl mx-auto px-4 md:px-6 lg:px-10 relative flex justify-between items-center">
        <div className="">
          <Image
            className=" mx-auto absolute -top-[33px] left-0"
            src="/maya-logo.png"
            height={100}
            width={100}
            alt="maya rahaman logo"
          />
        </div>
        <div className="md:hidden">
          <motion.button
            onClick={toggleMenu}
            className="text-black relative"
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
            <a className="text-black menu-item">Home</a>
          </Link>
          <Link href="/about" legacyBehavior>
            <a className="text-black menu-item">About</a>
          </Link>
          <Link href="/services" legacyBehavior>
            <a className="text-black menu-item">Services</a>
          </Link>
          <Link href="/contact" legacyBehavior>
            <a className="text-black menu-item">Contact</a>
          </Link>
          <Link href="/blog" legacyBehavior>
            <a className="text-black menu-item">Blog</a>
          </Link>
          <div className=" flex items-center gap-3 hover:cursor-pointer">
            <button className=" text-primary-text border-b hover:transition border-orange-500 rounded-none font-extrabold hover:text-slate-800 hover:border-none">
              Lets Talk
            </button>
            <div className=" border rounded-full border-orange-500 p-1">
              <ArrowRightIcon className=" size-5" />
            </div>
          </div>
        </div>
      </div>
      {isOpen && (
        <motion.div
          className="md:hidden px-5 fixed top-16 left-0 w-full h-full bg-slate-50 text-primary-text flex flex-col space-y-6"
          initial="hidden"
          animate="visible"
          variants={menuVariants}
        >
          <div>
            <Link href="/" legacyBehavior>
              <div
                onClick={toggleMenu}
                className=" flex items-center justify-between hover:cursor-pointer mt-10"
              >
                <p>Home</p>
                <p>
                  <ArrowUpRightIcon className=" text-black size-6" />
                </p>
              </div>
            </Link>
          </div>
          <hr />
          <div>
            <Link href="/about" legacyBehavior>
              <div
                onClick={toggleMenu}
                className=" flex items-center justify-between hover:cursor-pointer"
              >
                <p>About</p>
                <p>
                  <ArrowUpRightIcon className=" text-black size-6" />
                </p>
              </div>
            </Link>
          </div>
          <hr />
          <div>
            <Link href="/services" legacyBehavior>
              <div
                onClick={toggleMenu}
                className=" flex items-center justify-between hover:cursor-pointer"
              >
                <p>Services</p>
                <p>
                  <ArrowUpRightIcon className=" text-black size-6" />
                </p>
              </div>
            </Link>
          </div>
          <hr />
          <div>
            <Link href="/contact" legacyBehavior>
              <div
                onClick={toggleMenu}
                className=" flex items-center justify-between hover:cursor-pointer"
              >
                <p>Contact</p>
                <p>
                  <ArrowUpRightIcon className=" text-black size-6" />
                </p>
              </div>
            </Link>
          </div>
          <hr />
          <div>
            <Link href="/blog" legacyBehavior>
              <div
                onClick={toggleMenu}
                className=" flex items-center justify-between hover:cursor-pointer"
              >
                <p>Blog</p>
                <p>
                  <ArrowUpRightIcon className=" text-black size-6" />
                </p>
              </div>
            </Link>
          </div>
          <hr />
        </motion.div>
      )}
    </nav>
  );
};

export default Navbar;
