"use client";
import Image from "next/image";
import React from "react";
import PrimaryButton from "../Button";

const Banner = () => {
  return (
    <>
      <div className="lg:flex items-center justify-between px-4 md:px-6 lg:px-10 relative py-20">
        <section className=" md:order-last flex-1 mt-10">
          <Image
            className=" mx-auto"
            src="/banner-seo-img.png"
            alt="Banner Image"
            width={800}
            objectFit="cover"
            height={800}
            priority
          />
        </section>
        <section className=" flex-1">
          <div className="">
            <h1 className=" text-primary-text text-2xl md:text-3xl font-semibold ">
              <span className=" text-sm font-semibold mb-3">Hello, I’m</span>{" "}
              <br /> Maya Rahman,
            </h1>
            <h1 className="mt-6 text-6xl md:text-6xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-[#FA6709] to-[#FB972B]">
              Digital Marketing Expert
            </h1>
            <p className=" text-secondary-text md:w-2/3 mt-5">
              I help business succeed online. I create engaging content, run
              ads, & analyze data to reach the right people. With my skills, I
              make sure business stand out in the digital world and connect with
              their audience effectively.
            </p>
          </div>
          <div className=" flex items-center mt-8 md:mt-12">
            <div>
              <PrimaryButton title="Get Started" />
            </div>
          </div>
        </section>
      </div>
    </>
  );
};

export default Banner;
