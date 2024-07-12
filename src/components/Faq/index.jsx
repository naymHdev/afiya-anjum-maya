"use client";
import React from "react";
import dynamic from "next/dynamic";
import { ChevronDownIcon } from "@heroicons/react/20/solid";
import { faqData } from "@/data/data";

const Disclosure = dynamic(() =>
  import("@headlessui/react").then((mod) => mod.Disclosure)
);
const DisclosureButton = dynamic(() =>
  import("@headlessui/react").then((mod) => mod.DisclosureButton)
);
const DisclosurePanel = dynamic(() =>
  import("@headlessui/react").then((mod) => mod.DisclosurePanel)
);

const Faq = () => {
  return (
    <div className="px-4 md:px-6 lg:px-8 mt-28 md:mt-44">
      <div>
        <h2 className="text-sm font-bold text-orange-400">
          @WHAT MY CLIENTS SAYS
        </h2>
        <div>
          <div className="mx-auto w-11/12 md:w-9/12 divide-y divide-white/5 rounded-xl bg-white/5">
            {faqData?.map((faq, index) => (
              <Disclosure
                as="div"
                className="p-6"
                key={index}
                defaultOpen={index === 0}
              >
                <DisclosureButton className="group flex w-full items-center justify-between">
                  <div className=" flex items-center gap-4">
                    <span>({index + 1})</span>
                    <span className="font-medium text-start text-sm md:text-xl text-primary-text group-hover:text-black/80">
                      {faq.question}
                    </span>
                  </div>
                  <ChevronDownIcon className="size-5 fill-black group-data-[hover]:fill-black group-data-[open]:rotate-180" />
                </DisclosureButton>
                <DisclosurePanel className="mt-2 text-sm/5 text-secondary-text">
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
