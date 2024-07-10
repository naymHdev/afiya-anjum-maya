import { workingProcess } from "@/data/data";
import Image from "next/image";
import React from "react";

const WorkProcess = () => {
  return (
    <>
      <div className=" mt-28 p-4 md:p-6 lg:p-10">
        <div className=" grid grid-cols-1 md:grid-cols-4 gap-8">
          {workingProcess?.map((itm) => (
            <div key={Math.random()}>
              <div className=" flex flex-col items-center justify-center">
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
              </div>
              <div className=" text-center mt-6">
                <h2 className=" text-3xl font-semibold text-primary-text">
                  {itm.title}
                </h2>
                <p className=" text-secondary-text font-medium mt-3">
                  {itm.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </>
  );
};

export default WorkProcess;
