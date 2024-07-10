import AboutUs from "@/components/AboutUs";
import Banner from "@/components/Banner";
import Services from "@/components/Services";
import ServicesCategory from "@/components/ServicesCategory";
import WhatWeDo from "@/components/WhatWeDo";

export default function Home() {
  return (
    <main>
      <div>
        <Banner />
        <Services />
        <AboutUs />
        <ServicesCategory />
        <WhatWeDo />
      </div>
    </main>
  );
}
