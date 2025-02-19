import Link from "next/link";
import React from "react";
import { BsCheck2Circle } from "react-icons/bs";

const PricingCard = () => {
  return (
    <>
      <div className=" grid grid-cols-1 md:grid-cols-3 gap-5 md:gap-2">
        {/* Basic Plan card */}
        <div className=" rounded-3xl shadow-md px-5 py-8">
          <h1 className=" text-4xl font-bold text-primary-text">Basic</h1>
          <div className=" space-y-5 mt-8">
            <div className=" flex items-center gap-2">
              <BsCheck2Circle className=" text-2xl text-[#FB8A25]" />
              <p className=" text-primary-text text-sm">Increase Traffic 13%</p>
            </div>
            <div className=" flex items-center gap-2">
              <BsCheck2Circle className=" text-2xl text-[#FB8A25]" />
              <p className=" text-primary-text text-sm">SEO OptimiZation</p>
            </div>
            <div className=" flex items-center gap-2">
              <BsCheck2Circle className=" text-2xl text-[#FB8A25]" />
              <p className=" text-primary-text text-sm">
                Social Media Management
              </p>
            </div>
            <div className=" flex items-center gap-2">
              <BsCheck2Circle className=" text-2xl text-[#FB8A25]" />
              <p className=" text-primary-text text-sm">Content Marketing</p>
            </div>
            <div className=" flex items-center gap-2">
              <BsCheck2Circle className=" text-2xl text-[#FB8A25]" />
              <p className=" text-primary-text text-sm">24/7 Hours Support</p>
            </div>
          </div>
          <div className=" mt-8">
            <p className=" text-primary-text font-bold">
              $ <span className=" text-3xl font-extrabold">20</span>{" "}
              <span className=" text-secondary-text font-medium">/Month</span>
            </p>
          </div>
          <Link href="/contact">
            <div className=" flex items-center justify-center mt-8">
              <button className=" bg-custom-gradient w-full py-3 text-white font-medium rounded-full">
                Choose Plan
              </button>
            </div>
          </Link>
        </div>
        {/* Premium Plan Card */}
        <div className=" rounded-3xl shadow-md px-5 py-8 md:py-16 bg-custom-gradient relative md:-my-10">
          <h1 className=" text-4xl font-bold text-white">Premium</h1>
          <div className=" space-y-5 mt-8">
            <div className=" flex items-center gap-2">
              <BsCheck2Circle className=" text-2xl text-white" />
              <p className="text-sm text-white">Increase Traffic 130%</p>
            </div>
            <div className=" flex items-center gap-2">
              <BsCheck2Circle className=" text-2xl text-white" />
              <p className="text-sm text-white">SEO OptimiZation</p>
            </div>
            <div className=" flex items-center gap-2">
              <BsCheck2Circle className=" text-2xl text-white" />
              <p className="text-sm text-white">Social Media Management</p>
            </div>
            <div className=" flex items-center gap-2">
              <BsCheck2Circle className=" text-2xl text-white" />
              <p className="text-sm text-white">Content Marketing</p>
            </div>
            <div className=" flex items-center gap-2">
              <BsCheck2Circle className=" text-2xl text-white" />
              <p className="text-sm text-white">24/7 Hours Support</p>
            </div>
          </div>
          <div className=" mt-8">
            <p className=" text-white font-bold">
              $ <span className=" text-3xl font-extrabold">40</span>{" "}
              <span className="font-medium">/Month</span>
            </p>
          </div>
          <Link href="/contact">
            <div className=" flex items-center justify-center mt-12">
              <button className=" bg-gradient-to-r from-blue-600 to-blue-200 border-none w-full py-3 text-white font-medium rounded-full">
                Choose Plan
              </button>
            </div>
          </Link>
        </div>
        {/* Advanced card */}
        <div className=" rounded-3xl shadow-md px-5 py-8">
          <h1 className=" text-4xl font-bold text-primary-text">Advanced</h1>
          <div className=" space-y-5 mt-8">
            <div className=" flex items-center gap-2">
              <BsCheck2Circle className=" text-2xl text-[#FB8A25]" />
              <p className=" text-primary-text text-sm">
                Increase Traffic 130%
              </p>
            </div>
            <div className=" flex items-center gap-2">
              <BsCheck2Circle className=" text-2xl text-[#FB8A25]" />
              <p className=" text-primary-text text-sm">SEO OptimiZation</p>
            </div>
            <div className=" flex items-center gap-2">
              <BsCheck2Circle className=" text-2xl text-[#FB8A25]" />
              <p className=" text-primary-text text-sm">
                Social Media Management
              </p>
            </div>
            <div className=" flex items-center gap-2">
              <BsCheck2Circle className=" text-2xl text-[#FB8A25]" />
              <p className=" text-primary-text text-sm">Content Marketing</p>
            </div>
            <div className=" flex items-center gap-2">
              <BsCheck2Circle className=" text-2xl text-[#FB8A25]" />
              <p className=" text-primary-text text-sm">24/7 Hours Support</p>
            </div>
          </div>
          <div className=" mt-8">
            <p className=" text-primary-text font-bold">
              $ <span className=" text-2xl font-extrabold">70</span>{" "}
              <span className=" text-secondary-text font-medium">/Month</span>
            </p>
          </div>
          <Link href="/contact">
            <div className=" flex items-center justify-center mt-12">
              <button className=" bg-custom-gradient border-none w-full py-3 text-white font-medium rounded-full">
                Choose Plan
              </button>
            </div>
          </Link>
        </div>
      </div>
    </>
  );
};

export default PricingCard;
