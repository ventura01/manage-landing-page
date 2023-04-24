import React from "react";
import ActionBtn from "./ActionBtn";
import Image from "next/image";

type Props = {};

const HeroSection = (props: Props) => {
  return (
    <section id="hero" className="py-20 md:container md:max-w-screen-xl md:mx-auto grid grid-cols-1 md:grid-cols-2">
      <article className="flex flex-col justify-center mx-5 md:mx-0 gap-y-10 md:pr-28 row-start-2 row-end-3 md:row-start-1 md:row-end-2">
        <h1 className="md:text-5xl md:text-left font-bold text-darkBlue text-4xl text-center">
          Bring everyone together to build better products.
        </h1>
        <p className="text-sm text-darkGrayishBlue text-center md:text-left font-light">
          Manage makes it simple for software teams
          <br className="md:flex hidden"></br> to plan day-to-day tasks while
          keeping the<br className="md:flex hidden"></br> larger team goals in
          view.
        </p>
        <div className="flex md:justify-start justify-center">
          <ActionBtn className="bg-brightRed hover:bg-red-400 shadow-md shadow-red-300 rounded-full text-white" text="Get Started" />
        </div>
      </article>
      <div className="mb-10 md:mb-0 row-start-1 row-end-2 md:col-start-2 md:col-end-3">
        <Image
          src="/images/illustration-intro.svg"
          width={600}
          height={600}
          alt="hero"
          className="w-full h-auto"
        />
      </div>
    </section>
  );
};

export default HeroSection;
