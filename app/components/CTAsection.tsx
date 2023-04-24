import React from "react";
import ActionBtn from "./ActionBtn";

type Props = {};

const CTAsection = (props: Props) => {
  return (
    <section className="bg-brightRed py-20">
      <div className="md:container md:max-w-screen-xl md:mx-auto flex justify-between">
        <h3 className="text-white text-2xl font-bold">Simplify how your team<br className="hidden md:flex"></br> works today.</h3>
        <ActionBtn text="Get Started" className="bg-white hover:bg-red-100 shadow-md shadow-red-300 rounded-full text-brightRed self-center"/>
      </div>
    </section>
  );
};

export default CTAsection;
