import { allServicesData } from "@/data/data";
import { Tab, TabGroup, TabList, TabPanel, TabPanels } from "@headlessui/react";
import Image from "next/image";

export default function ServicesTabs() {
  return (
    <div className="mt-16 md:mt-28 max-w-7xl mx-auto px-4 md:px-6 lg:px-10">
      <div className="">
        <TabGroup>
          <TabList className="flex flex-wrap items-center justify-center gap-3 border-none py-4 md:rounded-full bg-[#FDFDFD] md:shadow-sm w-full md:w-1/2 mx-auto">
            {allServicesData?.map(({ category }) => (
              <Tab
                key={category}
                className="shadow-sm text-primary-text border-none font-semibold rounded-full px-4 py-1 bg-[#F5F7FC] data-[selected]:text-white data-[selected]:bg-custom-gradient focus:outline-none"
              >
                {category}
              </Tab>
            ))}
          </TabList>
          <TabPanels className=" mt-8 md:mt-16">
            {allServicesData?.map(({ category, content }) => (
              <TabPanel key={category} className="">
                <div className=" grid grid-cols-1 md:grid-cols-3 gap-5">
                  {content?.map((post) => (
                    <div
                      key={post.id}
                      className=" border rounded-3xl p-5 shadow-md hover:shadow-2xl"
                    >
                      <div>
                        <Image
                          className=" rounded-3xl"
                          src={post.image}
                          width={400}
                          height={400}
                          alt="content image"
                        />
                        <div className=" mt-7 space-y-3">
                          <p className=" text-sm font-semibold text-secondary-text">
                            {post.category}
                          </p>
                          <h2 className=" text-2xl font-semibold text-primary-text">
                            {post.title}
                          </h2>
                          <p className=" text-sm font-medium text-secondary-text">
                            {post.description.slice(0, 200)}
                          </p>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </TabPanel>
            ))}
          </TabPanels>
        </TabGroup>
      </div>
    </div>
  );
}
