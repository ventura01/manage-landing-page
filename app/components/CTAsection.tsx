import React from "react";
import ActionBtn from "./ActionBtn";

type Props = {};

const CTAsection = (props: Props) => {
  return (
    <section className="bg-brightRed py-20">
      <div className="md:container md:max-w-screen-xl md:mx-auto flex flex-col md:flex-row md:justify-between">
        <h3 className="text-white text-2xl text-center md:text-left md:mb-0 mb-5 font-bold">Simplify how your team<br className="hidden md:flex"></br> works today.</h3>
        <ActionBtn text="Get Started" className="bg-white hover:bg-red-100 shadow-md font-semibold rounded-full text-brightRed self-center"/>
      </div>
    </section>
  );
};

export default CTAsection;
