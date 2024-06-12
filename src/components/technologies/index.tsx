import React from "react";
import Techgrid from "../techgrid";
import TechPercent from "../techpercent";

type Props = {};

const Technologies = (props: Props) => {
  return (
    <section>
      <div>
      <div className="border-4 border-green-500 p-4 rounded-xl bg-green-100">
        <div className="xl:text-6xl lg:text-5xl md:text-4xl sm:text-3xl text-2xl font-bold flex justify-center items-center text-black lg:pt-10 md:pt-8 sm:pt-6 pt-4 pb-4">
          Core Technologies
        </div>
        <div className="xl:text-xl lg:text-xl md:text-xl sm:text-lg text-lg text-center lg:pb-10 md:pb-8 sm:pb-6 pb-4 mx-auto max-w-lg text-black">
          I've implemented various technologies in projects, leveraging their
          capabilities to create robust solutions. This hands-on experience has
          enhanced my proficiency and understanding of these tools.
        </div>
        </div>
        <div className="pt-6">
      <TechPercent/>
    </div>
        <div className="pt-6">
          <Techgrid />
        </div>
      </div>
    </section>
  );
};

export default Technologies;
