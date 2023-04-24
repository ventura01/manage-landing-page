"use client";

import Image from "next/image";
import Link from "next/link";
import React, { useState } from "react";
import ActionBtn from "./ActionBtn";
import { HiBars3, HiXMark } from "react-icons/hi2";

type Props = {};

const Navbar = (props: Props) => {
  const [open, setOpen] = useState(false);
  return (
    <nav className="md:container relative md:max-w-screen-xl md:mx-auto mx-6 pt-10 flex md:pt-16 md:items-center justify-between">
      <div className="flex self-center">
        <Image
          src="/images/logo.svg"
          width={120}
          height={120}
          alt="logo"
          className="w-28 h-auto"
          priority
        />
      </div>
      <div
        className={`${
          open
            ? "bg-white shadow-md absolute right-0 top-24 w-full z-50 md:hidden rounded-lg"
            : " hidden md:flex"
        }`}
      >
        <div
          className={`${
            open
              ? "flex flex-col gap-y-10 items-center pt-16 pb-7"
              : "md:flex gap-x-10 mr-24"
          }`}
        >
          <Link
            href="#"
            className="hover:text-darkGrayishBlue text-darkBlue text-sm "
            onClick={()=> setOpen(false)}
          >
            Pricing
          </Link>
          <Link
            href="#"
            className="hover:text-darkGrayishBlue text-darkBlue text-sm "
            onClick={()=> setOpen(false)}
          >
            Product
          </Link>
          <Link
            href="#"
            className="hover:text-darkGrayishBlue text-darkBlue text-sm "
            onClick={()=> setOpen(false)}
          >
            About Us
          </Link>
          <Link
            href="#"
            className="hover:text-darkGrayishBlue text-darkBlue text-sm "
            onClick={()=> setOpen(false)}
          >
            Careers
          </Link>
          <Link
            href="#"
            className="hover:text-darkGrayishBlue text-darkBlue text-sm "
            onClick={()=> setOpen(false)}
          >
            Community
          </Link>
        </div>
        <div className={`${open && "flex justify-center mb-10"}`}>
          <ActionBtn
            className="bg-brightRed hover:bg-red-400 shadow-md shadow-red-300 rounded-full text-white"
            text="Get Started"
          />
        </div>
      </div>
      <div
        className={`${
          open &&
          "md:hidden w-screen h-screen bg-opacity-25 right-0 top-0 z-0 fixed backdrop-blur-sm bg-gray-500"
        }`}
      ></div>
      <button
        onClick={() => setOpen(!open)}
        className="md:hidden flex z-50 bg-white py-3 px-3 rounded-full"
      >
        {open ? <HiXMark size={"1.25rem"} /> : <HiBars3 size={"1.25rem"} />}
      </button>
    </nav>
  );
};

export default Navbar;
