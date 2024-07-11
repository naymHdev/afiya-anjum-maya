"use client";
import { useState } from "react";
import { Dialog, DialogPanel, PopoverGroup } from "@headlessui/react";
import { HiMiniBars3BottomRight, HiMiniBars3BottomLeft } from "react-icons/hi2";
import { BsArrowRightCircle } from "react-icons/bs";
import "./header.css";

export default function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <header className="bg-white shadow-sm fixed w-full mx-auto">
      <nav
        aria-label="Global"
        className="mx-auto flex max-w-7xl items-center justify-between p-6 lg:px-8"
      >
        <div className="flex lg:flex-1">
          <a href="#" className="-m-1.5 p-1.5">
            <span className="sr-only">Your Company</span>
            <h2>Maya</h2>
          </a>
        </div>
        <div className="flex lg:hidden">
          <button
            type="button"
            onClick={() => setMobileMenuOpen(true)}
            className="-m-2.5 inline-flex items-center justify-center rounded-md p-2.5 text-gray-700"
          >
            <span className="sr-only">Open main menu</span>
            <HiMiniBars3BottomRight aria-hidden="true" className="h-6 w-6" />
          </button>
        </div>
        <PopoverGroup className="hidden lg:flex lg:gap-x-12">
          <a
            href="/"
            className="text-sm menu-item font-semibold leading-6 text-gray-900"
          >
            Home
          </a>
          <a
            href="#"
            className="text-sm menu-item font-semibold leading-6 text-gray-900"
          >
            Services
          </a>
          <a
            href="#"
            className="text-sm menu-item font-semibold leading-6 text-gray-900"
          >
            Trending
          </a>
          <a
            href="#"
            className="text-sm menu-item font-semibold leading-6 text-gray-900"
          >
            About Us
          </a>
          <a
            href="#"
            className="text-sm menu-item font-semibold leading-6 text-gray-900"
          >
            Contact Us
          </a>
        </PopoverGroup>
        <div className="hidden lg:flex lg:flex-1 lg:justify-end">
          <a
            href="#"
            className="text-sm font-semibold leading-6 text-gray-900 flex items-center gap-3"
          >
            Let's Chat
            <span>
              <BsArrowRightCircle className=" text-3xl text-orange-400" />
            </span>
          </a>
        </div>
      </nav>
      <Dialog
        open={mobileMenuOpen}
        onClose={setMobileMenuOpen}
        className="lg:hidden"
      >
        <div className="fixed inset-0 z-10" />
        <DialogPanel className="fixed inset-y-0 right-0 z-10 w-full overflow-y-auto bg-white px-6 py-6 sm:max-w-sm sm:ring-1 sm:ring-gray-900/10">
          <div className="flex items-center justify-between">
            <a href="#" className="-m-1.5 p-1.5">
              <span className="sr-only">Your Company</span>
             <h2>Maya</h2>
            </a>
            <button
              type="button"
              onClick={() => setMobileMenuOpen(false)}
              className="-m-2.5 rounded-md p-2.5 text-gray-700"
            >
              <span className="sr-only">Close menu</span>
              <HiMiniBars3BottomLeft aria-hidden="true" className="h-6 w-6" />
            </button>
          </div>
          <div className="mt-6 flow-root">
            <div className="-my-6 divide-y divide-gray-500/10">
              <div className="space-y-2 py-6">
                <a
                  href="/"
                  className="text-sm menu-item font-semibold leading-6 text-gray-900"
                >
                  Home
                </a>
                <a
                  href="#"
                  className="text-sm menu-item font-semibold leading-6 text-gray-900"
                >
                  Services
                </a>
                <a
                  href="#"
                  className="text-sm menu-item font-semibold leading-6 text-gray-900"
                >
                  Trending
                </a>
                <a
                  href="#"
                  className="text-sm menu-item font-semibold leading-6 text-gray-900"
                >
                  About Us
                </a>
                <a
                  href="#"
                  className="text-sm menu-item font-semibold leading-6 text-gray-900"
                >
                  Contact Us
                </a>
              </div>
              <div className="py-6">
                <a
                  href="#"
                  className="-mx-3 block rounded-lg px-3 py-2.5 text-base font-semibold leading-7 text-gray-900 hover:bg-gray-50"
                >
                  Let's Chat
                </a>
              </div>
            </div>
          </div>
        </DialogPanel>
      </Dialog>
    </header>
  );
}
