import {
  FaFacebook,
  FaGoogle,
  FaTwitter,
  FaInstagram,
  FaPinterest,
} from "react-icons/fa";
import { MdCall, MdLocationPin, MdEmail } from "react-icons/md";
import { TfiArrowTopRight } from "react-icons/tfi";
import Wave from "react-wavify";
import "./footer.css";

const Footer = () => {
  const currentYear = new Date().getFullYear();
  return (
    <footer className="font-serif relative bg-gradient-to-b from-[#31077D] to-[#6340C0] text-white py-10 mt-56">
      <div className="absolute inset-x-0 -top-[150px]">
        <Wave
          fill="#33097E"
          paused={false}
          style={{ display: "flex" }}
          options={{
            height: 20,
            amplitude: 30,
            speed: 0.15,
            points: 4,
          }}
        />
      </div>

      <section className=" px-4 md:px-6 lg:px-10">
        <div className=" grid grid-cols-1 md:grid-cols-3 gap-8">
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
                <p className=" text-sm menu-item">123-456-7890</p>
              </div>
              <div className=" flex items-center gap-2">
                <MdEmail className=" text-xl text-[#FB972D]" />
                <a
                  href="mailto:support@digicove.com"
                  className="menu-item text-sm"
                >
                  support@digicove.com
                </a>
              </div>
            </div>
            {/* Social media's */}
            <div className="mt-24 grid md:flex items-center md:justify-center gap-5">
              <div>
                <h2 className=" text-xl font-semibold">Follow Us</h2>
              </div>
              <div className="flex md:justify-center items-center space-x-2">
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
          <div className=" flex justify-between lg:justify-evenly">
            <div>
              {/* <h2 className="text-xl font-bold mb-2">Menu</h2> */}
              <ul className="space-y-3 font-medium">
                <li>
                  <a href="#" className="menu-item">
                    About Us
                  </a>
                </li>
                <li>
                  <a href="#" className="menu-item">
                    Services
                  </a>
                </li>
                <li>
                  <a href="#" className="menu-item">
                    Blog
                  </a>
                </li>
                <li>
                  <a href="#" className="menu-item">
                    Pricing
                  </a>
                </li>
                <li>
                  <a href="#" className="menu-item">
                    Contact Us
                  </a>
                </li>
              </ul>
            </div>
            <div>
              {/* <h2 className="text-xl font-bold mb-2">Quick Links</h2> */}
              <ul className=" space-y-3 font-medium">
                <li>
                  <a href="#" className="menu-item">
                    Privacy Policy
                  </a>
                </li>
                <li>
                  <a href="#" className="menu-item">
                    Terms & Conditions
                  </a>
                </li>
                <li>
                  <a href="#" className="menu-item">
                    Cookie Policy
                  </a>
                </li>
              </ul>
            </div>
          </div>

          {/* Third section  || in subscription section */}
          <div>
            <h2 className="text-4xl font-medium mb-8">
              Subscribe to Our Newsletter
            </h2>
            <p className="mb-4 text-sm font-medium text-gray-200">
              Stay up-to-date with the latest trends in digital marketing and
              receive exclusive tips and insights by subscribing to our
              newsletter.
            </p>

            {/* Newsletter form */}
            <form>
              <div className="flex relative border rounded-xl mt-10">
                <div>
                  <input
                    className=" px-5 py-7 focus:outline-none border-none bg-transparent text-white"
                    type="email"
                    name=""
                    id=""
                    placeholder="Enter your email"
                  />
                </div>
                <div className=" absolute top-4 right-2">
                  <button className=" text-white bg-custom-gradient flex items-center gap-3 font-medium rounded-xl px-4 py-3">
                    Subscribe <TfiArrowTopRight size={19} />
                  </button>
                </div>
              </div>
            </form>
          </div>
        </div>
      </section>

      <div className=" my-10 border border-b border-[#FB923C] w-full border-dashed" />

      {/* Copyrights section */}
      <div className=" flex items-center text-center px-5 justify-center gap-1">
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
