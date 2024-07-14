"use client";
import { Bars3Icon } from "@heroicons/react/20/solid";
import { motion } from "framer-motion";

const Header = () => {
  return (
    <>
      <header className=" relative">
        <nav className=" px-4 md:px-6 lg:px-10 py-6">
          <div className=" flex items-center justify-between">
            <div>
              <h2 className=" text-2xl font-bold">Maya Rahaman</h2>
            </div>
            <motion.div
              whileHover={{
                scale: 1.2,
                transition: { duration: 1 },
              }}
              whileTap={{ scale: 0.9 }}
              whileInView={{ opacity: 1 }}
              className=" flex flex-col items-center justify-center bg-custom-gradient rounded-full p-2 hover:cursor-pointer"
            >
              <Bars3Icon className=" size-6 text-white" />
            </motion.div>
          </div>
        </nav>
      </header>
    </>
  );
};

export default Header;
