import AboutUs from "@/components/AboutUs";
import Banner from "@/components/Banner";
import Services from "@/components/Services";
import ServicesCategory from "@/components/ServicesCategory";
import WhatWeDo from "@/components/WhatWeDo";
import WorkProcess from "@/components/WorkProcess";
import Pricing from "@/components/Pricing";
import WhyChooseUs from "@/components/WhyChooseUs";
import NewsLatter from "@/components/NewsLatter";
import ServicesTabs from "@/components/ServicesTabs";

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
        <Pricing />
        <WhyChooseUs />
        <ServicesTabs />
        <NewsLatter />
      </div>
    </main>
  );
}
