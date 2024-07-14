"use client";
import Image from "next/image";
import React from "react";
import CountUp from "react-countup";
import { Progress } from "antd";

const WhatWeDo = () => {
  return (
    <>
      <div className="max-w-7xl mx-auto px-4 md:px-6 lg:px-10 mt-28">
        <div className="grid md:flex items-center justify-between gap-10">
          <section className=" flex-1">
            <p className="py-3 text-sm font-semibold text-[#F68124]">
              @ WHAT WE DO
            </p>{" "}
            <h2 className=" text-primary-text text-3xl md:text-6xl font-semibold">
              SEO Analytics & Strategy Skill
            </h2>
            <p className=" mt-5 text-secondary-text font-medium">
              Scale your software operations through a custom engineering team.
              Meet the demand of your company’s operations with a
              high-performing nearshore team skilled in the technologies you
              need.
            </p>
            <div className=" grid mt-8 space-y-5">
              <div className=" flex items-center gap-6">
                <div className=" bg-custom-gradient text-white px-3 py-4 rounded-xl shadow-md font-bold">
                  <CountUp delay={1} end={92} />%
                </div>
                <div className=" w-full">
                  <p className=" font-semibold text-primary-text">
                    SEO Optimization
                  </p>
                  <Progress
                    percent={92}
                    status="active"
                    strokeColor="#FA7D1C"
                    showInfo={false}
                  />
                </div>
              </div>
              <div className=" flex items-center gap-6">
                <div className=" bg-custom-gradient text-white px-3 py-4 rounded-xl shadow-md font-bold">
                  <CountUp delay={1} end={74} />%
                </div>
                <div className=" w-full">
                  <p className=" font-semibold text-primary-text">
                    Data Integration
                  </p>
                  <Progress
                    percent={74}
                    status="active"
                    strokeColor="#FA7D1C"
                    showInfo={false}
                  />
                </div>
              </div>
              <div className=" flex items-center gap-6">
                <div className=" bg-custom-gradient text-white px-3 py-4 rounded-xl shadow-md font-bold">
                  <CountUp delay={1} end={86} />%
                </div>
                <div className=" w-full">
                  <p className=" font-semibold text-primary-text">
                    Analytics Success
                  </p>
                  <Progress
                    percent={86}
                    status="active"
                    strokeColor="#FA7D1C"
                    showInfo={false}
                  />
                </div>
              </div>
            </div>
          </section>
          <section className=" flex-1">
            <div>
              <Image
                className=" mx-auto"
                src="/what-we-do.png"
                height={900}
                width={900}
                alt="what we do"
                priority
                blurDataURL="data...."
                placeholder="blur"
              />
            </div>
          </section>
        </div>
      </div>
    </>
  );
};

export default WhatWeDo;
