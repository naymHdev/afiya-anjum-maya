import AboutUs from "@/components/AboutUs";
import Banner from "@/components/Banner";
import Services from "@/components/Services";

export default function Home() {
  return (
    <main>
      <div>
        <Banner />
        <Services />
        <AboutUs />
      </div>
    </main>
  );
}
