import React from "react";
import { BsCheck2Circle } from "react-icons/bs";
import PrimaryButton from "../Button";

const PricingCard = () => {
  return (
    <>
      <div className=" grid grid-cols-1 md:grid-cols-3 gap-2">
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
              $ <span className=" text-3xl font-extrabold">24</span>{" "}
              <span className=" text-secondary-text font-medium">/Month</span>
            </p>
          </div>
          <div className=" flex items-center justify-center mt-8">
            <PrimaryButton title="Choose Plan" />
          </div>
        </div>
        {/* Premium Plan Card */}
        <div className=" rounded-3xl shadow-md px-5 py-8 md:py-16 bg-custom-gradient relative md:-my-10">
          {/* <div className="absolute top-0 right-0 bg-blue-500 text-white text-sm font-bold px-2 py-2 rounded-bl-full">
            Popular
          </div> */}
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
              $ <span className=" text-3xl font-extrabold">48</span>{" "}
              <span className="font-medium">/Month</span>
            </p>
          </div>
          <div className=" flex items-center justify-center mt-12">
            <PrimaryButton title="Choose Plan" />
          </div>
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
              $ <span className=" text-2xl font-extrabold">72</span>{" "}
              <span className=" text-secondary-text font-medium">/Month</span>
            </p>
          </div>
          <div className=" flex items-center justify-center mt-12">
            <PrimaryButton title="Choose Plan" />
          </div>
        </div>
      </div>
    </>
  );
};

export default PricingCard;
