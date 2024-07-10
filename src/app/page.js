import AboutUs from "@/components/AboutUs";
import Banner from "@/components/Banner";
import Services from "@/components/Services";
import ServicesCategory from "@/components/ServicesCategory";
import WhatWeDo from "@/components/WhatWeDo";
import WorkProcess from "@/components/WorkProcess";

export default function Home() {
  return (
    <main>
      <div>
        <Banner />
        <Services />
        <AboutUs />
        <ServicesCategory />
        <WhatWeDo />
        <WorkProcess />
      </div>
    </main>
  );
}
