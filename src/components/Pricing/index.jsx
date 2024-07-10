"use client";
import React from "react";
import PricingCard from "./PricingCard";

const Pricing = () => {
  return (
    <>
      <div className=" mt-24 px-4 md:px-6 lg:px-8">
        <section className=" grid grid-cols-1 md:grid-cols-6 gap-8 items-center">
          <div className=" col-span-full md:col-span-4">
            <PricingCard />
          </div>
          <div className=" col-span-full md:col-span-2">
            <p className=" text-[#FB8221] text-sm font-bold my-5">
              @ PRICING PLAN
            </p>
            <h2 className=" text-6xl font-semibold text-primary-text">
              Unbeatable Pricing Find Your Perfect Plan Now
            </h2>
          </div>
        </section>
      </div>
    </>
  );
};

export default Pricing;
