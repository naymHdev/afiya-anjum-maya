import { allServicesData } from "@/data/data";
import { Tab, TabGroup, TabList, TabPanel, TabPanels } from "@headlessui/react";

export default function ServicesTabs() {
  return (
    <div className="flex h-screen w-full justify-center pt-24 px-4">
      <div className="w-full max-w-md">
        <TabGroup>
          <TabList className="flex gap-4">
            {allServicesData?.map(({ category }) => (
              <Tab
                key={category}
                className="rounded-full py-1 px-3 text-sm/6 font-semibold text-black focus:outline-none data-[selected]:bg-white/10 data-[hover]:bg-white/5 data-[selected]:data-[hover]:bg-white/10 data-[focus]:outline-1 data-[focus]:outline-white"
              >
                {category}
              </Tab>
            ))}
          </TabList>
          <TabPanels className="mt-3">
            {allServicesData?.map(({ category, content }) => (
              <TabPanel key={category} className="rounded-xl bg-white/5 p-3">
                <ul>
                  {content?.map((post) => (
                    <li
                      key={post.id}
                      className="relative rounded-md p-3 text-sm/6 transition hover:bg-white/5"
                    >
                      <a href="#" className="font-semibold text-black">
                        <span className="absolute inset-0" />
                        {post.title}
                      </a>
                    </li>
                  ))}
                </ul>
              </TabPanel>
            ))}
          </TabPanels>
        </TabGroup>
      </div>
    </div>
  );
}
