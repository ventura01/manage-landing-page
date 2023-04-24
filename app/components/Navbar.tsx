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
    <nav className="md:container md:max-w-screen-xl md:mx-auto mx-6 pt-10 flex md:pt-16 items-center justify-between">
      <div>
        <Image
          src="/images/logo.svg"
          width={120}
          height={120}
          alt="logo"
          className="w-28 h-auto"
          priority
        />
      </div>
      <div className="hidden md:flex">
        <div className="flex gap-x-10 mr-24">
          <Link
            href="#"
            className="hover:text-darkGrayishBlue text-darkBlue text-sm "
          >
            Pricing
          </Link>
          <Link
            href="#"
            className="hover:text-darkGrayishBlue text-darkBlue text-sm "
          >
            Product
          </Link>
          <Link
            href="#"
            className="hover:text-darkGrayishBlue text-darkBlue text-sm "
          >
            About Us
          </Link>
          <Link
            href="#"
            className="hover:text-darkGrayishBlue text-darkBlue text-sm "
          >
            Careers
          </Link>
          <Link
            href="#"
            className="hover:text-darkGrayishBlue text-darkBlue text-sm "
          >
            Community
          </Link>
        </div>
        <div>
          <ActionBtn
            className="bg-brightRed hover:bg-red-400 shadow-md shadow-red-300 rounded-full text-white"
            text="Get Started"
          />
        </div>
      </div>
      <button onClick={() => setOpen(!open)} className="md:hidden flex">
        {open ? <HiXMark size={"1.25rem"}/> : <HiBars3 size={"1.25rem"}/>}
      </button>
    </nav>
  );
};

export default Navbar;
