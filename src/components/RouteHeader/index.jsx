"use client";
import { ChevronRight } from "lucide-react";
import Link from "next/link";

const RouteHeader = ({ routeName, title }) => {
  return (
    <>
      <section className="bg-gradient-to-r from-[#33097F] to-[#623FBE] mt-20">
        <div className=" flex flex-col items-center text-center py-32">
          <h2 className=" md:text-2xl lg:text-6xl font-semibold lg:font-bold text-white">
            {title}
          </h2>
          <div className=" flex items-center justify-center gap-4 text-white text-xl font-semibold mt-8">
            <Link href="/">
              <p className=" hover:text-orange-500 hover:border-b hover:border-orange-500">
                Home
              </p>
            </Link>
            <ChevronRight size={26} />
            <Link href="/contact">
              <p className=" text-[#36DDF9]">{routeName}</p>
            </Link>
          </div>
        </div>
      </section>
    </>
  );
};

export default RouteHeader;
