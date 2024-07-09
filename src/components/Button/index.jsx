import React from "react";
import { GoArrowRight } from "react-icons/go";
import "./PrimaryButton.css";

const PrimaryButton = ({ title }) => {
  return (
    <>
      <div className="">
        <button className="btn-31 rounded-full">
          <div className="text-container flex gap-2 items-center px-5 py-3">
            <p className="text text-white">{title}</p>
            <div className="w-10 h-10 mx-auto rounded-full bg-white hover:z-10">
              <GoArrowRight className=" w-10 h-10 text-black p-2" />
            </div>
          </div>
        </button>
      </div>
    </>
  );
};

export default PrimaryButton;
