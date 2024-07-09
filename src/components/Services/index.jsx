import { services } from "@/data/data";
import Image from "next/image";
import React from "react";

const Services = () => {
  return (
    <>
      <div className="px-4 md:px-6 lg:px-10 mt-28">
        <div className=" grid grid-cols-1 md:grid-cols-3 gap-4 md:gap-8">
          {services?.map((itm) => (
            <div
              key={itm.id}
              className=" text-center p-8 hover:rounded-xl hover:shadow-2xl hover:transition hover:transform"
            >
              <div>
                <Image
                  src={itm.image}
                  alt="Services"
                  height={300}
                  width={300}
                />
              </div>
              <h2 className=" text-primary-text font-bold text-2xl mt-5 mb-2">
                {itm.title}
              </h2>
              <p className=" font-medium text-secondary-text">
                {itm.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </>
  );
};

export default Services;
