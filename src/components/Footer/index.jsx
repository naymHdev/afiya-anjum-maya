import {
  FaFacebook,
  FaGoogle,
  FaTwitter,
  FaInstagram,
  FaPinterest,
} from "react-icons/fa";
import Wave from "react-wavify";

const Footer = () => {
  return (
    <footer className="relative bg-purple-800 text-white py-12 mt-28">
      <div className="absolute inset-x-0 -top-16">
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
      <div className=" px-4 md:px-6 lg:px-10 relative z-10">
        <div className="flex flex-wrap justify-between">
          <div className="w-full lg:w-1/3 mb-6 lg:mb-0">
            <h2 className="text-xl font-bold mb-2">DigiCove</h2>
            <address className="not-italic mb-4">
              123 Anywhere St., Any City,
              <br />
              12345 Any State
            </address>
            <p className="mb-4">123-456-7890</p>
            <a href="mailto:support@digicove.com" className="hover:underline">
              support@digicove.com
            </a>
          </div>
          <div className="w-full lg:w-1/3 mb-6 lg:mb-0">
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

          <div className="w-full lg:w-1/6 mb-6 lg:mb-0">
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
          <div className="w-full lg:w-1/6">
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
        <div className="mt-6 flex justify-between items-center">
          <div className="flex space-x-4">
            <a href="#" className="hover:opacity-75">
              <FaFacebook size={24} />
            </a>
            <a href="#" className="hover:opacity-75">
              <FaGoogle size={24} />
            </a>
            <a href="#" className="hover:opacity-75">
              <FaTwitter size={24} />
            </a>
            <a href="#" className="hover:opacity-75">
              <FaInstagram size={24} />
            </a>
            <a href="#" className="hover:opacity-75">
              <FaPinterest size={24} />
            </a>
          </div>
          <p className="text-sm">
            Copy@ 2023 DigiCove. All rights reserved by BrandCove Themes
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
