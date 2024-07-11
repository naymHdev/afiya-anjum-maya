import {
  FaFacebook,
  FaGoogle,
  FaTwitter,
  FaInstagram,
  FaPinterest,
} from "react-icons/fa";
import { MdCall, MdLocationPin, MdEmail } from "react-icons/md";
import Wave from "react-wavify";

const Footer = () => {
  const currentYear = new Date().getFullYear();
  return (
    <footer className="relative bg-purple-800 text-white py-10 mt-28">
      <div className="absolute inset-x-0 -top-20 hidden">
        <Wave
          fill="#6B21A8"
          paused={false}
          style={{ display: "flex" }}
          options={{
            height: 20,
            amplitude: 20,
            speed: 0.15,
            points: 3,
          }}
        />
      </div>

      <section className=" px-4 md:px-6 lg:px-10">
        <div className=" grid grid-cols-1 md:grid-cols-3 gap-5">
          {/* Fist section  || in address section */}
          <div>
            <div className="mb-6 lg:mb-0 space-y-4">
              <div className=" flex items-center gap-2">
                <MdLocationPin className=" text-xl text-[#FB972D]" />
                <address className="not-italic text-sm">
                  123 Anywhere St., Any City, 12345 Any State
                </address>
              </div>
              <div className=" flex items-center gap-2">
                <MdCall className=" text-xl text-[#FB972D]" />
                <p className=" text-sm">123-456-7890</p>
              </div>
              <div className=" flex items-center gap-2">
                <MdEmail className=" text-xl text-[#FB972D]" />
                <a
                  href="mailto:support@digicove.com"
                  className="hover:underline text-sm"
                >
                  support@digicove.com
                </a>
              </div>
            </div>
            {/* Social media's */}
            <div className="mt-24 flex items-center gap-5">
              <div>
                <h2 className=" text-xl font-semibold">Follow Us</h2>
              </div>
              <div className="flex space-x-2">
                <div className=" bg-[#9842dd] rounded-full p-3">
                  <a href="#" className="hover:opacity-75">
                    <FaFacebook size={15} />
                  </a>
                </div>
                <div className=" bg-[#9842dd] rounded-full p-3">
                  <a href="#" className="hover:opacity-75">
                    <FaGoogle size={15} />
                  </a>
                </div>
                <div className=" bg-[#9842dd] rounded-full p-3">
                  <a href="#" className="hover:opacity-75">
                    <FaTwitter size={15} />
                  </a>
                </div>
                <div className=" bg-[#9842dd] rounded-full p-3">
                  <a href="#" className="hover:opacity-75">
                    <FaInstagram size={15} />
                  </a>
                </div>
                <div className=" bg-[#9842dd] rounded-full p-3">
                  <a href="#" className="hover:opacity-75">
                    <FaPinterest size={15} />
                  </a>
                </div>
              </div>
            </div>
          </div>

          {/* Second section  || in menus section */}
          <div className=" flex justify-between">
            <div>
              <h2 className="text-xl font-bold mb-2">Menu</h2>
              <ul>
                <li>
                  <a href="#" className="hover:underline">
                    About Us
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:underline">
                    Services
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:underline">
                    Blog
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:underline">
                    Pricing
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:underline">
                    Contact Us
                  </a>
                </li>
              </ul>
            </div>
            <div>
              <h2 className="text-xl font-bold mb-2">Quick Links</h2>
              <ul>
                <li>
                  <a href="#" className="hover:underline">
                    Privacy Policy
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:underline">
                    Terms & Conditions
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:underline">
                    Cookie Policy
                  </a>
                </li>
              </ul>
            </div>
          </div>

          {/* Third section  || in subscription section */}
          <div>
            <h2 className="text-xl font-bold mb-2">
              Subscribe to Our Newsletter
            </h2>
            <p className="mb-4">
              Stay up-to-date with the latest trends in digital marketing and
              receive exclusive tips and insights by subscribing to our
              newsletter.
            </p>
            <form>
              <div className="flex">
                <input
                  type="email"
                  placeholder="Enter your email"
                  className="p-2 rounded-l-md focus:outline-none text-gray-700"
                />
                <button
                  type="submit"
                  className="bg-orange-400 text-white px-4 py-2 rounded-r-md hover:bg-orange-500 transition-colors"
                >
                  Subscribe
                </button>
              </div>
            </form>
          </div>
        </div>
      </section>

      <div className=" my-10 border border-b border-[#FB923C] w-full border-dashed" />

      {/* Copyrights section */}
      <div className=" flex items-center justify-center gap-1">
        <p className="text-sm">
          © {currentYear} Company. All rights reserved by
          <span>
            <a
              className=" px-1 text-[#FB923C]"
              href="https://naym-official.vercel.app"
            >
              naymHdev
            </a>
          </span>
          .
        </p>
      </div>
    </footer>
  );
};

export default Footer;
