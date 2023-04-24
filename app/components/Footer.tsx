import Image from "next/image";
import React from "react";
import {
  BsFacebook,
  BsInstagram,
  BsYoutube,
  BsPinterest,
  BsTwitter,
} from "react-icons/bs";
import Logo from "./Logo";
type Props = {};
const fecha = new Date().getFullYear()
const Footer = (props: Props) => {
  return (
    <footer className="bg-veryDarkBlue">
      <div className="md:container py-10 md:max-w-screen-xl md:mx-auto grid grid-cols-1 md:grid-cols-4">
        <div className="flex flex-col justify-between">
          {/* <div>
            <Image
              src="/images/logo.svg"
              width={120}
              height={120}
              alt="logo"
              className="w-28 h-auto"
              priority
            />
          </div> */}
          <Logo fill="#fff"/>
          <div className="flex gap-x-3">
            <BsFacebook
              color="#fff"
              size={"1.25rem"}
              className="hover:fill-brightRed"
            />
            <BsInstagram
              color="#fff"
              size={"1.25rem"}
              className="hover:fill-brightRed"
            />
            <BsYoutube
              color="#fff"
              size={"1.25rem"}
              className="hover:fill-brightRed"
            />
            <BsPinterest
              color="#fff"
              size={"1.25rem"}
              className="hover:fill-brightRed"
            />
            <BsTwitter
              color="#fff"
              size={"1.25rem"}
              className="hover:fill-brightRed"
            />
          </div>
        </div>
        <div className="flex justify-center">
          <ul className=" flex flex-col gap-y-3">
            <li className="hover:text-brightRed cursor-pointer text-sm text-white">Home</li>
            <li className="hover:text-brightRed cursor-pointer text-sm text-white">Pricing</li>
            <li className="hover:text-brightRed cursor-pointer text-sm text-white">
              Products
            </li>
            <li className="hover:text-brightRed cursor-pointer text-sm text-white">
              About Us
            </li>
          </ul>
        </div>
        <div className="flex justify-center">
          <ul className=" flex flex-col gap-y-3">
            <li className="hover:text-brightRed cursor-pointer text-sm text-white">Careers</li>
            <li className="hover:text-brightRed cursor-pointer text-sm text-white">
              Community
            </li>
            <li className="hover:text-brightRed cursor-pointer text-sm text-white">
              Privacy Policy
            </li>
          </ul>
        </div>
        <div className="flex flex-col justify-between">
          <form action="">
            <input
              type="email"
              name="correo"
              id="correo"
              placeholder="email@email.com"
              className="form-input px-4 py-3 rounded-full"
            />
            <input type="submit" value="Go" className="bg-brightRed hover:bg-red-300 cursor-pointer ml-2 px-4 py-3 rounded-full text-white" />
          </form>
          <p className="text-white text-xs font-light">Copyright {fecha} &copy;. All Rights Reserved</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
