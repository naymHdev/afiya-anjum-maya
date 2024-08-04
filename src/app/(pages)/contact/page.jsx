import { ChevronRight } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

const Contact = () => {
  return (
    <>
      <section className="bg-gradient-to-r from-[#33097F] to-[#623FBE] mt-20">
        <div className=" flex flex-col items-center text-center py-32">
          <h2 className=" md:text-2xl lg:text-6xl font-semibold lg:font-bold text-white">
            Contact Me
          </h2>
          <div className=" flex items-center justify-center gap-4 text-white text-xl font-semibold mt-8">
            <Link href="/">
              <p className=" hover:text-orange-500 hover:border-b hover:border-orange-500">
                Home
              </p>
            </Link>
            <ChevronRight size={26} />
            <Link href="/contact">
              <p className=" text-[#36DDF9]">Contact</p>
            </Link>
          </div>
        </div>
      </section>
      <div className=" max-w-7xl mx-auto px-4 md:px-6 lg:px-10 mt-40">
        <div className=" grid grid-cols-1 md:grid-cols-3 gap-10">
          <section className=" flex flex-col items-center rounded-md shadow-md border p-5 md:py-20">
            <Image
              src="/contact/gmail.png"
              alt="contact logo"
              width={60}
              height={60}
            />
            <h2 className=" text-xl md:text-2xl lg:text-4xl font-semibold mt-8">
              Official Email
            </h2>
            <p className=" md:text-xl font-medium text-gray-700 mt-4">
              mayarahman838@gmail.com
            </p>
            <p className=" md:text-xl font-medium text-gray-700 mt-2">
              mayarahman838@gmail.com
            </p>
          </section>
          <section className=" flex flex-col items-center rounded-md shadow-md border p-5 md:py-20">
            <Image
              src="/contact/phone.png"
              alt="contact logo"
              width={60}
              height={60}
            />
            <h2 className=" text-xl md:text-2xl lg:text-4xl font-semibold mt-8">
              Call Us Anytime
            </h2>
            <p className=" md:text-xl font-medium text-gray-700 mt-4">
              +880 01789493995
            </p>
            <p className=" md:text-xl font-medium text-gray-700 mt-2">
              +880 01789493995
            </p>
          </section>
          <section className=" flex flex-col items-center rounded-md shadow-md border p-5 md:py-20">
            <Image
              src="/contact/google-maps.png"
              alt="contact logo"
              width={60}
              height={60}
            />
            <h2 className=" text-xl md:text-2xl lg:text-4xl font-semibold mt-8">
              My Location
            </h2>
            <p className=" md:text-xl font-medium text-gray-700 mt-4">
              Dhaka, Bangladesh
            </p>
          </section>
        </div>
      </div>
    </>
  );
};

export default Contact;
