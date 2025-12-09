import React from "react";
import { VscPercentage } from "react-icons/vsc";
import { IoAddOutline } from "react-icons/io5";


export default function NumberSection() {
  const features = [
    {
      title: 45,
      Icon: VscPercentage,
      para: "Of the QBites come from the top ranks of IIT",
    },
    {
      title: 100,
      Icon: IoAddOutline,
      para: "Curated talents over the years whole have stayed with the company from the time of inception",
    },
    {
      title: 6,
      Icon: IoAddOutline,
      para: "Global offices spread across all 7 continents",
    },
  ];

  return (
    <>
      <section className="bg-[#EDE9E5]">
        <div className="max-sm:mx-10 max-sm:pt-20 md:mx-28 xl:mx-40 py-30">
          <div className="mb-12">
            <h1 className="max-sm:text-3xl md:text-5xl lg:text-6xl xl:text-7xl xl:mr-84 ">
              WE GO BY THE
              <span className="text-[#BA4B2F]"> NUMBERS </span>
              ALWAYS
            </h1>
          </div>

          <div className="max-sm:flex-wrap max-sm:gap-y-12 max-sm:justify-center md:w-full md:flex-wrap md:gap-10 md:j lg:gap-x-44 xl:gap-0 xl:justify-between w-full flex flex-row ">
            {features.map((feature, index) => {
              const Icon = feature.Icon;
              return (
                <div
                  key={index}
                  className="flex flex-col justify-center items-center"
                >
                  <div className="max-sm:mb-8 max-sm:w-full md-44 w-sm h-80 bg-[#E6E0DB]">
                    <div className="mx-5 my-4 h-74 flex flex-col justify-between">
                      <div className="flex flex-row py-3">
                        <h2 className="text-8xl text-[#BA4B2F]">
                          {feature?.title}
                        </h2>
                        <span className="mt-2 font-semibold text-5xl">
                          <Icon />
                        </span>
                      </div>
                      <p className=" tracking-wider">{feature?.para}</p>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>
    </>
  );
}
