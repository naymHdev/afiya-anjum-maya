import React from "react";
import Image from "next/image";
import { workingProcess } from "@/data/data";
import "./workProcess.css";

const WorkProcess = () => {
  return (
    <>
      <div className="bg-[#000229] mt-28 py-10 lg:py-0">
        <div className="lg:h-screen flex items-center justify-center  px-4 md:px-6 lg:px-10 max-w-7xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            {workingProcess?.map((itm) => (
              <div key={Math.random()}>
                <div className=" relative flex flex-col items-center justify-center">
                  <div
                    className=" border-none rounded-full p-8 shadow-md"
                    style={{
                      backgroundImage: itm.color,
                      backgroundSize: "cover",
                      backgroundRepeat: "no-repeat",
                    }}
                  >
                    <Image src={itm.icon} height={70} width={70} alt="Icon" />
                  </div>
                  <div
                    className="absolute top-1/2 left-1/2 transform translate-x-[-50%] translate-y-[-50%] bg-white w-4 h-4 rounded-full border border-orange-500 shadow-md shadow-current"
                    style={{ animation: "rotate-around 5s linear infinite" }}
                  ></div>
                </div>
                <div className=" text-center mt-6">
                  <h2 className=" text-3xl font-semibold text-white">
                    {itm.title}
                  </h2>
                  <p className=" text-gray-200 font-medium mt-3">
                    {itm.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </>
  );
};

export default WorkProcess;
