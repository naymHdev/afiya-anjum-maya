"use client";
import { ArrowUpRight } from "lucide-react";
import { useForm } from "react-hook-form";

const GetInTouch = () => {
  const { register, handleSubmit, reset } = useForm();

  // Handle form submission
  const onSubmit = (data) => {
    console.log("Form data submitted:", data);
    reset();
  };

  return (
    <>
      <div
        className=" bg-center bg-no-repeat bg-cover mt-20 max-w-7xl mx-auto px-4 md:px-6 lg:px-10 py-20"
        style={{ backgroundImage: "url(/contact/getin-bg.jpg)" }}
      >
        <div className=" space-y-5 text-center">
          <button className=" px-8 py-3 rounded-full bg-[#7155B7] text-white text-xl font-semibold">
            GET IN TOUCH
          </button>
          <h1 className=" text-6xl font-bold">Fill the form to contact us</h1>
        </div>
        <form
          onSubmit={handleSubmit(onSubmit)}
          className=" space-y-4 md:space-y-8 md:w-7/12 mx-auto"
        >
          <div>
            <label htmlFor="name" className="block font-medium text-gray-700">
              Name
            </label>
            <input
              type="text"
              id="name"
              {...register("name", { required: "Name is required" })}
              className="mt-1 block w-full px-3 py-3 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-1 focus:ring-blue-500 sm:text-sm"
            />
          </div>

          <div>
            <label htmlFor="email" className="block font-medium text-gray-700">
              Email
            </label>
            <input
              type="email"
              id="email"
              {...register("email", { required: "Email is required" })}
              className="mt-1 block w-full px-3 py-3 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-1 focus:ring-blue-500 sm:text-sm"
            />
          </div>

          <div>
            <label htmlFor="mobile" className="block font-medium text-gray-700">
              Mobile
            </label>
            <input
              type="tel"
              id="mobile"
              {...register("mobile", { required: "Mobile number is required" })}
              className="mt-1 block w-full px-3 py-3 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-1 focus:ring-blue-500 sm:text-sm"
            />
          </div>

          <div>
            <label
              htmlFor="website"
              className="block font-medium text-gray-700"
            >
              Website
            </label>
            <input
              type="url"
              id="website"
              {...register("website")}
              className="mt-1 block w-full px-3 py-3 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-1 focus:ring-blue-500 sm:text-sm"
            />
          </div>

          <div>
            <label
              htmlFor="message"
              className="block font-medium text-gray-700"
            >
              Message
            </label>
            <textarea
              id="message"
              {...register("message", { required: "Message is required" })}
              rows={4}
              className="mt-1 block w-full px-3 py-3 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-1 focus:ring-blue-500 sm:text-sm"
            ></textarea>
          </div>

          <button
            type="submit"
            className="w-full bg-[#38E3F7] text-white text-xl py-2 px-4 rounded-md hover:bg-[#05b5c8] border-none flex items-center gap-3 justify-center text-center"
          >
            Submit
            <ArrowUpRight />
          </button>
        </form>
      </div>
    </>
  );
};

export default GetInTouch;
