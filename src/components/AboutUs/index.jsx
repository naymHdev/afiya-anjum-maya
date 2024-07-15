"use client";
import Image from "next/image";
import React from "react";
import { FaCheckCircle } from "react-icons/fa";
import PrimaryButton from "../Button";
import Marquee from "react-fast-marquee";
import "./about.css";

const AboutUs = () => {
  return (
    <>
      <div className="mt-24 relative max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 items-center px-4 md:px-6 lg:px-10">
        <section>
          <div className="about-blob mx-auto" />
        </section>
        <section>
          <p className="text-[#FA8120] font-semibold text-sm">@ ABOUT US</p>
          <div>
            <h2 className=" text-primary-text text-3xl font-bold mt-2">
              What are my strongest sides and skills?
            </h2>
            <p className=" text-secondary-text mt-4 text-sm font-medium">
              I’m passionate about uncovering my strongest sides and skills,
              constantly striving for growth and improvements. With a mindset
              geared towards and learning, I navigate through challenges with
              resilience and determination. My journey is guide by the belief
              that every experience enriches my abilities and hones my
              expertise.
            </p>
          </div>
          <div className="mt-5 grid grid-cols-1 lg:grid-cols-2 gap-4 text-start text-primary-text font-medium">
            <button className=" text-center px-6 rounded-full shadow-sm py-4 flex items-center gap-2">
              <span>
                <FaCheckCircle className=" text-2xl text-[#FA8F29]" />
              </span>
              Batter communication.{" "}
            </button>
            <button className=" text-center px-6 rounded-full shadow-sm py-4 flex items-center gap-2">
              <span>
                <FaCheckCircle className=" text-2xl text-[#FA8F29]" />{" "}
              </span>
              Get quality Lead click.{" "}
            </button>
            <button className=" text-center px-6 rounded-full shadow-sm py-4 flex items-center gap-2">
              <span>
                <FaCheckCircle className=" text-2xl text-[#FA8F29]" />{" "}
              </span>
              Best trending designing.{" "}
            </button>
            <button className=" text-center px-6 rounded-full shadow-sm py-4 flex items-center gap-2">
              <span>
                <FaCheckCircle className=" text-2xl text-[#FA8F29]" />{" "}
              </span>
              Mitigate Business Policy.{" "}
            </button>
          </div>
          <div className=" mt-10">
            <PrimaryButton title="Discover More" />
          </div>
        </section>
      </div>

      {/* Marque  */}
      <section className=" mt-20">
        <Marquee>
          <div className=" text-primary-text text-4xl md:text-6xl font-extrabold flex items-center gap-8">
            <span>.Marketing</span> <span>.Digital</span>
            <span>.SEO</span> <span>.Data Analysis</span>
            <span>.YouTube Video Promotion</span>
          </div>
        </Marquee>
      </section>
    </>
  );
};

export default AboutUs;
