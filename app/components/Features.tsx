import React from "react";

type Props = {};

const Features = (props: Props) => {
  return (
    <section className="md:container md:max-w-screen-xl md:mx-auto grid grid-cols-1 md:grid-cols-2 py-20">
      <article>
        <h2 className="text-3xl font-bold text-darkBlue mb-10">
          What’s different about<br className="md:flex hidden"></br> Manage?
        </h2>
        <p className="text-darkGrayishBlue text-sm font-light">
          Manage provides all the functionality your{" "}
          <br className="md:flex hidden"></br>team needs, without the
          complexity. Our <br className="md:flex hidden"></br>software is
          tailor-made for modern digital<br className="md:flex hidden"></br>{" "}
          product teams.
        </p>
      </article>
      <div>
        <div className="flex mb-10">
          <span className="text-white font-semibold bg-brightRed rounded-full px-4 py-1 self-start mr-5">
            01
          </span>
          <div>
            <h3 className="text-darkBlue text-base font-bold mb-5">
              Track company-wide progress
            </h3>
            <p className="text-darkGrayishBlue text-sm font-light">
              See how your day-to-day tasks fit into the wider vision. Go from
              tracking progress at the milestone level all the way done to the
              smallest of details. Never lose sight of the bigger picture again.
            </p>
          </div>
        </div>
        <div className="flex mb-10">
          <span className="text-white font-semibold bg-brightRed rounded-full px-4 py-1 self-start mr-5">
            02
          </span>
          <div>
            <h3 className="text-darkBlue text-base font-bold mb-5">
              Advanced built-in reports
            </h3>
            <p className="text-darkGrayishBlue text-sm font-light">
              Set internal delivery estimates and track progress toward company
              goals. Our customisable dashboard helps you build out the reports
              you need to keep key stakeholders informed.
            </p>
          </div>
        </div>
        <div className="flex">
          <span className="text-white font-semibold bg-brightRed rounded-full px-4 py-1 self-start mr-5">
            03
          </span>
          <div>
            <h3 className="text-darkBlue text-base font-bold mb-5">
              Everything you need in one place
            </h3>
            <p className="text-darkGrayishBlue text-sm font-light">
              Stop jumping from one service to another to communicate, store
              files, track tasks and share documents. Manage offers an
              all-in-one team productivity solution.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Features;
