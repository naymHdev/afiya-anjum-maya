"use client";
import React from "react";
import dynamic from "next/dynamic";
import { ChevronDownIcon } from "@heroicons/react/20/solid";

const Disclosure = dynamic(() =>
  import("@headlessui/react").then((mod) => mod.Disclosure)
);
const DisclosureButton = dynamic(() =>
  import("@headlessui/react").then((mod) => mod.DisclosureButton)
);
const DisclosurePanel = dynamic(() =>
  import("@headlessui/react").then((mod) => mod.DisclosurePanel)
);

const faqData = [
  {
    question: "What is your refund policy?",
    answer: "If you're unhappy with your purchase, we'll refund you in full.",
  },
  {
    question: "Do you offer technical support?",
    answer: "No.",
  },
  // Add more FAQ items here
];

const Faq = () => {
  return (
    <div className="px-4 md:px-6 lg:px-8 mt-28 md:mt-44">
      <div>
        <h2 className="text-sm font-bold text-orange-400">
          @WHAT MY CLIENTS SAYS
        </h2>
        <div>
          <div className="mx-auto w-11/12 md:w-7/12 divide-y divide-white/5 rounded-xl bg-white/5">
            {faqData.map((faq, index) => (
              <Disclosure
                as="div"
                className="p-6"
                key={index}
                defaultOpen={index === 0}
              >
                <DisclosureButton className="group flex w-full items-center justify-between">
                  <span className="text-sm/6 font-medium text-black group-hover:text-black/80">
                    {faq.question}
                  </span>
                  <ChevronDownIcon className="size-5 fill-black group-data-[hover]:fill-black group-data-[open]:rotate-180" />
                </DisclosureButton>
                <DisclosurePanel className="mt-2 text-sm/5 text-black/50">
                  {faq.answer}
                </DisclosurePanel>
              </Disclosure>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Faq;
