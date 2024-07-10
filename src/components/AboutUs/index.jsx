"use client";
import Image from "next/image";
import React from "react";
import { FaCheckCircle } from "react-icons/fa";
import PrimaryButton from "../Button";
import Marquee from "react-fast-marquee";

const AboutUs = () => {
  return (
    <>
      <div className="mt-24 grid grid-cols-1 md:grid-cols-2 items-center p-4 md:p-6 lg:p-10">
        <section>
          <Image
            className=" rounded-full"
            src="/about-us-image.jpg"
            height={500}
            width={500}
            alt="about us"
            priority
          />
        </section>
        <section>
          <p className="text-[#FA8120] font-semibold text-sm">ABOUT US</p>
          <div>
            <h2 className=" text-primary-text text-3xl font-bold mt-2">
              Everything Starts With A Marketing Agency.
            </h2>
            <p className=" text-secondary-text mt-4 text-sm font-medium">
              Seoland agency makes it easy to create content that engages your
              audience by taking the guesswork out of research, strategy, and
              writing.
            </p>
          </div>
          <div className="mt-5 grid grid-cols-2 gap-4 text-primary-text font-medium">
            <button className=" text-center px-6 rounded-full shadow-sm py-4 flex items-center gap-2">
              <span>
                <FaCheckCircle className=" text-2xl text-[#FA8F29]" />
              </span>
              Amazing communication.{" "}
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
          <div className=" text-primary-text text-6xl font-extrabold flex items-center gap-8">
            <span>.Marketing</span> <span>.Digital</span>
            <span>.SEO</span> <span>.Data Analysis</span>
          </div>
        </Marquee>
      </section>
    </>
  );
};

export default AboutUs;
