import React from "react";
import { BsCheck2Circle } from "react-icons/bs";
import PrimaryButton from "../Button";
import Image from "next/image";

const WhyChooseUs = () => {
  return (
    <>
      <div className="max-w-7xl mx-auto px-4 md:px-6 lg:px-10 mt-28">
        <section className=" grid md:flex items-center justify-between">
          <div className=" flex-1">
            <Image
              src="/why1 .png"
              height={500}
              width={500}
              alt="Why Choose us"
              priority
            />
          </div>
          <div className=" flex-1">
            <h4 className=" my-5 text-sm font-semibold text-[#FB8B25]">
              @ WHY CHOOSE US
            </h4>
            <h2 className=" text-3xl md:text-5xl font-semibold text-primary-text">
              We Follow <span className=" text-[#FB8B25]">Best Practice</span>{" "}
              In Our Company
            </h2>
            <p className=" font-medium text-secondary-text my-5">
              I help businesses bring ideas to life in the digital world by
              designing & implementing the technology tools that they need to
              win. I help businesses bring ideas to life in the digital world.
            </p>
            <div className=" mt-10">
              <div className=" flex justify-between gap-10">
                <div>
                  <BsCheck2Circle className=" text-4xl text-[#FB8B25]" />
                </div>
                <div>
                  <h3 className=" text-primary-text text-3xl font-semibold">
                    Latest Technology
                  </h3>
                  <p className=" text-secondary-text font-medium my-4">
                    I help businesses bring ideas to life in the digital world
                    designing & implementing them.
                  </p>
                </div>
              </div>
              <div className=" flex justify-between gap-10">
                <div>
                  <BsCheck2Circle className=" text-4xl text-[#FB8B25]" />
                </div>
                <div>
                  <h3 className=" text-primary-text text-3xl font-semibold">
                    Latest Marketing tools
                  </h3>
                  <p className=" text-secondary-text font-medium my-4">
                    I help businesses bring ideas to life in the digital world
                    designing & implementing
                  </p>
                </div>
              </div>
            </div>
            <div className=" mt-8">
              <PrimaryButton title="GET STARTED" />
            </div>
          </div>
        </section>
      </div>
    </>
  );
};

export default WhyChooseUs;
