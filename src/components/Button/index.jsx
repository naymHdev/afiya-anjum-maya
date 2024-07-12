"use client";
import React, { useState } from "react";
import ReactiveButton from "reactive-button";

const PrimaryButton = ({ title }) => {
  const [state, setState] = useState("idle");

  const onClickHandler = () => {
    setState("loading");

    // Simulating an HTTP request
    setTimeout(() => {
      setState("success");
    }, 2000);
  };

  return (
    <div className="font-serif">
      <ReactiveButton
        shadow={true}
        rounded={true}
        buttonState={state}
        animation={true}
        outline={false}
        idleText={title}
        loadingText="Loading"
        successText="Done"
        onClick={onClickHandler}
        style={{
          paddingLeft: "25px",
          paddingRight: "25px",
          paddingTop: "15px",
          paddingBottom: "15px",
          background: "linear-gradient(to right, #FA660A, #FB982E)",
          border: "none",
        }}
      />
    </div>
  );
};

export default PrimaryButton;
