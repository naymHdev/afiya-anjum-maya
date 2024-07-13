import { HiOutlineCursorClick } from "react-icons/hi";
import React from "react";
import { RxArrowTopRight } from "react-icons/rx";

const NewsLatter = () => {
  return (
    <>
      <div className=" px-5 md:px-6 lg:px-10 mt-16 md:mt-24">
        <div className=" grid grid-cols-1 md:grid-cols-7 gap-5">
          <div className=" relative col-span-full md:col-span-2">
            <div className=" h-32 w-32 bg-custom-gradient absolute top-0 right-0 shadow-2xl shadow-orange-100 rounded-t-2xl rounded-bl-full"></div>
            <div className=" shadow-2xl rounded-2xl px-6 py-10">
              <div className=" px-5">
                <HiOutlineCursorClick className=" text-8xl text-orange-400" />
              </div>
              <h2 className=" mt-8 text-2xl font-semibold text-primary-text">
                Pay Per Click
              </h2>
              <p className=" mt-4 text-sm text-secondary-text font-medium">
                I help businesses bring ideas to life in the digital world by
                designing & implementing them...
              </p>
              <div className=" mt-10">
                <button className="flex items-center gap-1 text-sm font-medium">
                  READ MORE <RxArrowTopRight />
                </button>
              </div>
            </div>
          </div>
          <div className=" col-span-full md:col-span-5">
            <div className=" border rounded-2xl h-full shadow-md bg-newsletter-bg bg-cover bg-no-repeat">
              <div className=" md:mt-[150px] py-6 w-full mx-auto">
                <h2 className=" text-xl tmd:ext-3xl font-semibold md:font-bold text-white text-center">
                  Want to know your SEO Score?
                </h2>
                <div className="bg-white rounded-full grid md:flex items-center justify-center md:justify-between p-2 shadow-lg mx-auto md:w-10/12 mt-8">
                  <input
                    type="text"
                    placeholder="Your Website URL"
                    className="flex-grow p-4 text-gray-700 border md:border-none rounded-full md:rounded-l-full focus:outline-none"
                  />{" "}
                  |
                  <input
                    type="email"
                    placeholder="Enter your Email"
                    className="flex-grow border md:border-none rounded-full md:rounded-none p-4 text-gray-700 focus:outline-none"
                  />
                  <button className="bg-red-500 mt-2 md:mt-0 text-white py-2 px-6 rounded-full flex items-center justify-center hover:bg-red-600 transition-colors">
                    Start Now
                    <svg
                      className="w-6 h-6 ml-2"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        d="M5 12h14M12 5l7 7-7 7"
                      ></path>
                    </svg>
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default NewsLatter;
