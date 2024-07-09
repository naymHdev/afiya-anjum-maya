import Image from "next/image";
import React from "react";

const Banner = () => {
  return (
    <>
      <div className="md:flex items-center justify-between px-4 md:px-6 lg:px-8">
        <section>
          <div>
            <button className=" font-medium border px-5 py-2">
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
            <p className=" text-secondary-text">
              We help ambitious businesses like yours generate more profits by
              building awareness, driving web traffic, connecting with customers
              growing.
            </p>
          </div>
        </section>
        <section>
          <Image
            src="/banner-seo-img.png"
            alt="Banner Image"
            width={500}
            objectFit="cover"
            height={400}
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
