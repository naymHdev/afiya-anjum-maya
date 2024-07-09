import Image from "next/image";
import React from "react";
import PrimaryButton from "../Button";

const Banner = () => {
  return (
    <>
      <div className="md:flex items-center justify-between px-4 md:px-6 lg:px-10 relative py-20">
        <section>
          <div className="-rotate-12 absolute top-[100px]">
            <button className=" font-medium border px-5 py-2 border-[#1740E8] rounded-md">
              Welcome To
            </button>
          </div>
          <div className=" space-y-3 mt-2">
            <h1 className=" text-primary-text text-6xl font-bold leading-[70px] w-1/3">
              Digital Marketing
            </h1>
            <h1 className=" text-8xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-[#FA6709] to-[#FB972B]">
              AGENCY
            </h1>
            <p className=" text-secondary-text w-2/3">
              We help ambitious businesses like yours generate more profits by
              building awareness, driving web traffic, connecting with customers
              growing.
            </p>
          </div>
          <div className=" flex items-center mt-8">
            <div>
              <PrimaryButton title="Get Started" />
            </div>
          </div>
        </section>
        <section>
          <Image
            className=" mx-auto"
            src="/banner-seo-img.png"
            alt="Banner Image"
            width={800}
            objectFit="cover"
            height={800}
            priority
            placeholder="blur"
            blurDataURL="/banner-seo-img-blur.png"
          />
        </section>
      </div>
    </>
  );
};

export default Banner;
