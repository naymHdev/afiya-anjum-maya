import { coreServices } from "@/data/data";
import Image from "next/image";
import React from "react";

const ServicesCategory = () => {
  return (
    <>
      <div className=" p-4 md:p-6 lg:p-10 mt-24">
        <div className="gap-8 grid grid-cols-1 md:grid-cols-2">
          <section className=" relative">
            <p className="text-[#FA7012] font-medium text-sm py-2">SERVICES</p>
            <h1 className=" text-primary-text text-6xl font-semibold leading-[70px] mb-10">
              Features Loved Our Digital Marketing Services!
            </h1>
            <div className=" absolute right-0">
              <Image
                src="/services-section-image.png"
                width={400}
                height={400}
                alt="services"
              />
            </div>
          </section>
          <section>
            <div>
              {coreServices?.map((itm) => (
                <div key={itm.id}>
                  <div>
                    <Image src={itm.icon} width={50} height={50} alt="Icon" />
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
