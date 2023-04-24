import Image from "next/image";
import Link from "next/link";
import React from "react";
import ActionBtn from "./ActionBtn";

type Props = {};

const Navbar = (props: Props) => {
  return (
    <nav className="container md:max-w-screen-xl mx-auto flex pt-16 items-center justify-between">
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
      <div className="flex gap-x-10">
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
    </nav>
  );
};

export default Navbar;
