"use client";
import { coreServices } from "@/data/data";
import Image from "next/image";
import React from "react";
import { RxArrowTopRight } from "react-icons/rx";
import "./servicesCategory.css";

const ServicesCategory = () => {
  return (
    <>
      <div className="max-w-7xl mx-auto px-4 md:px-6 lg:px-10 mt-24">
        <div className="gap-8 grid grid-cols-1 md:grid-cols-2">
          <section className=" relative">
            <p className="text-[#FA7012] font-medium text-sm py-2">
              @ SERVICES
            </p>
            <h1 className=" text-primary-text text-3xl lg:text-6xl font-semibold lg:leading-[70px]">
              WHAT CAN I DO FOR YOU?
            </h1>
            <p className=" text-xl font-semibold mb-16">
              (we can always alter our services according to your needs.)
            </p>
            <div className=" absolute right-0">
              <Image
                src="/services-section-image.png"
                width={500}
                height={500}
                alt="services"
              />
            </div>
          </section>
          <section>
            <div className=" grid grid-cols-1 md:grid-cols-2 gap-6 mt-[300px] md:mt-0">
              {coreServices?.map((itm) => (
                <div
                  key={itm.id}
                  className="shadow-xl relative rounded-2xl p-5 mt-20 hover:text-white group  hover:cursor-pointer hover:bg-black hover:scale-100"
                >
                  <div className="border-none shadow-sm rounded-full p-8 bg-gradient-to-r from-[#FBEDE7] to-[#FEF3EA] absolute -top-14 group-hover:bg-gradient-to-r group-hover:from-[#FA6B10] group-hover:to-[#FB952C]">
                    <Image src={itm.icon} width={50} height={50} alt="Icon" />
                  </div>
                  <div className="space-y-6 mt-16">
                    <h2 className="text-primary-text text-xl font-bold group-hover:text-white">
                      {itm.title}
                    </h2>
                    <p className="text-secondary-text font-medium group-hover:text-gray-200">
                      {itm.description.slice(0, 120)}...
                    </p>
                  </div>
                  <div className="py-7">
                    <button className="bg-gradient-to-r from-[#2661ED] hover:from-[#FA6B10] hover:to-[#FB952C] to-[#53C3FB] rounded-full p-3">
                      <RxArrowTopRight className="text-white text-3xl" />
                    </button>
                  </div>
                </div>
              ))}
            </div>
          </section>
        </div>
      </div>
    </>
  );
};

export default ServicesCategory;
