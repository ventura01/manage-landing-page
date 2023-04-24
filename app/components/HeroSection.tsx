import React from "react";
import ActionBtn from "./ActionBtn";
import Image from "next/image";

type Props = {};

const HeroSection = (props: Props) => {
  return (
    <section className="py-20 md:container md:max-w-screen-xl md:mx-auto grid grid-cols-1 md:grid-cols-2">
      <article className="flex flex-col justify-center gap-y-10 md:pr-28">
        <h1 className="text-5xl font-bold text-darkBlue">
          Bring everyone together to build better products.
        </h1>
        <p className="text-sm text-darkGrayishBlue font-light">
          Manage makes it simple for software teams
          <br className="md:flex hidden"></br> to plan day-to-day tasks while
          keeping the<br className="md:flex hidden"></br> larger team goals in
          view.
        </p>
        <div>
          <ActionBtn className="bg-brightRed hover:bg-red-400 shadow-md shadow-red-300 rounded-full text-white" text="Get Started" />
        </div>
      </article>
      <div>
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
