import Image from "next/image";
import React from "react";
import { testimonials } from "@/data";
import { TestimonialsProps } from "@/data";
import ActionBtn from "./ActionBtn";

const Testimonials = (props: TestimonialsProps) => {
  return (
    <section className="md:container md:max-w-screen-xl md:mx-auto py-20">
        <h3 className="text-3xl text-darkBlue text-center font-bold mb-20">What they’ve said</h3>
      <div className="grid grid-cols-1 md:grid-cols-4 md:gap-x-5 mb-10">
        {testimonials.map((testimonial) => (
          <div
            key={testimonial.name}
            className="bg-veryLightGray relative pt-12 pb-5"
          >
            <Image
              src={testimonial.image}
              width={75}
              height={75}
              alt="testimonial"
              className="w-12 h-auto absolute top-0 transform right-1/2 translate-x-1/2 -translate-y-1/2 "
            />
            <div className="px-5">
                <span className="text-sm font-semibold text-center text-darkBlue block mb-3">
                  {testimonial.name}
                </span>
                <p className="text-darkGrayishBlue text-xs text-center font-light">
                  {testimonial.text}
                </p>
            </div>
          </div>
        ))}
      </div>
        <div className="flex justify-center">
            <ActionBtn className="bg-brightRed hover:bg-red-400 shadow-md shadow-red-300 rounded-full text-white" text="Get Started"/>
        </div>
    </section>
  );
};

export default Testimonials;
