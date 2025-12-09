import Image from "next/image";
import React from "react";
import foundImg1 from "/public/images/foundationimg1.jpg";
import foundImg2 from "/public/images/foundationimg2.jpg";
import foundImg3 from "/public/images/foundationimg3.jpg";

export default function TheFoundation() {
  const features = [
    {
      title: "ALGORITHM",
      description:
        "Our work process is a meticulous workflow of algorithm power",
      colorBox: true,
    },
    {
      title: "RESEARCH",
      img: foundImg1,
    },
    {
      title: "MATHEMATICS",
      img: foundImg2,
    },
    {
      title: "CAPITAL MARKET",
      img: foundImg3,
    },
  ];

  return (
    <>
      <section className="max-sm:mx-10 max-sm:pt-20 md:mx-28 xl:mx-40 pt-30">
        <div className="mb-12">
          <h1 className="max-sm:text-3xl md:text-5xl lg:text-6xl xl:text-7xl xl:mr-84 ">
            THE
            <span className="text-[#BA4B2F]"> FOUNDATION </span>
            AT QUANTBOX
          </h1>
        </div>

        <div className="max-sm:flex-wrap max-sm:gap-y-12 max-sm:justify-center md:flex-wrap md:gap-10 md:justify-center lg:gap-x-44 xl:gap-0 xl:px-28 xl:justify-around w-full flex flex-row py-30">
          {features.map((feature, index) => (
            <div
              key={index}
              className="flex flex-col justify-center items-center"
            >
              <div className="max-sm:mb-8 w-58 h-58 flex justify-center items-center rounded-full border-2 border-[#BA4B2F] bg-[#BA4B2F] mb-5 overflow-hidden">
                {feature.colorBox ? (
                  <p className="px-4 text-xl text-[#E6AB50] text-center rounded-full">
                    {feature.description}
                  </p>
                ) : (
                  <Image
                    src={feature.img}
                    alt={feature.title}
                    className="w-full h-full object-cover object-center"
                  />
                )}
              </div>
              <h2 className="text-xl text-[#BA4B2F]">{feature.title}</h2>
            </div>
          ))}
        </div>
      </section>
    </>
  );
}
