"use client";
import React, { useState } from "react";
import Image from "next/image";
import bgImg from "../../../public/images/careersImg/careers_bg.png";
import { IoLocationSharp } from "react-icons/io5";
import { FaArrowRight } from "react-icons/fa6";
import { FaArrowRightLong } from "react-icons/fa6";
import Accordiare from "./Accordiare";
import { accordionData, accordionData2 } from "@/lib/QbChess";

export default function Careers() {
  const [isOpen, setIsOpen] = useState(false);
  const [showToggleSection, setShowToggleSection] = useState(false);

  const handleToggle = () => {
    setShowToggleSection((prev) => !prev);
  };

  return (
    <>
      {/* hero section */}
      <section>
        <main
          className={`relative bg-[url('/images/hero_bg.png')] bg-[30px_120px] md:bg-[10px_100px] xl:bg-[90px_200px] 2xl:bg-[50px_195px] bg-quant-orange bg-cover bg-no-repeat h-[45vh] md:h-[65vh] lg:h-[80vh] xl:h-[90vh] text-quant-white p-10 overflow-visible`}
        >
          {/* Headline Text */}
          <div className="text-3xl md:text-5xl md:mx-5 xl:text-7xl 2xl:text-8xl lg:mx-20 xl:mx-25 mt-5 lg:mt-15 uppercase font-hanken-grotesk">
            <h1>
              we see <span className="text-quant-yellow">careers</span> as
            </h1>
            <h1>callings built on</h1>
            <h1>curiosity & purpose</h1>
          </div>

          {/* image Section */}
          <div className="absolute w-full top-[90%] lg:top-[70vh] xl:bottom-[-30%] 2xl:top-[80%] flex justify-center items-center right-0 lg:right-[0%]">
            <div className="overflow-hidden xl:w-[60vw] xl:h-[70vh]">
              <Image
                src={bgImg}
                alt="Qb chess background"
                width={500}
                height={500}
                className="w-full h-full object-cover"
                priority
              />
            </div>
          </div>
        </main>
      </section>

      {/* about section */}
      <section className=" py-[5%] pt-[35vh] md:pt-[83vh] lg:pt-[65vh] xl:pt-[60vh] 2xl:pt-[50vh] bg-quant-gray">
        {/* Content */}
        <div className="flex flex-col flex-wrap md:px-12 max-2xl:gap-y-7 xl:flex-row justify-between px-10 xl:px-18 2xl:px-40 2xl:flex-nowrap text-lg tracking-wide">
          {/* Left Column */}
          <div className="max-w-xl xl:w-sm 2xl:w-2xl">
            <p className="custom-heading-para 2xl:mr-44 uppercase tracking-tight">
              Discover career opportunities across our global offices
            </p>
          </div>

          {/* Right Column */}
          <div className="max-w-3xl xl:w-xl 2xl:w-3xl">
            <p className="custom-para 2xl:mr-15 text-justify tracking-tight">
              Join a culture where maths shapes decisions, code fuels progress,
              and every breakthrough is built on shared insight, trust, and
              collective effort.
            </p>
          </div>
        </div>
      </section>

      {/* careers section */}
      <section className="px-10 pt-20 md:px-10 md:pt-28 lg:px-12 xl:px-20 2xl:px-40  ">
        {/* Heading */}
        <div className="xl:w-6xl uppercase">
          <div className="grid grid-cols-[60%_40%] max-sm:grid-cols-[70%_30%]">
            <div className=" custom-heading font-medium">
              <h1>
                view our <span className="text-quant-orange">open</span>
              </h1>
              <h1>positions.</h1>
            </div>
          </div>
        </div>
        <div className="py-15 md:pr-70">
          {/* software section */}
          <div>
            <h3 className="text-quant-orange custom-careers-title uppercase">
              software developer
            </h3>
            <p className="align-center uppercase">
              <IoLocationSharp className="inline-block text-quant-orange" />
              Bangalore, Karnataka, India - SD-01
            </p>
            <div className="custom-para my-6 font-medium">
              <p>
                Quantbox is a technology-driven Proprietary trading firm that
                specializes in systematic alpha research and electronic
                market-making on various exchanges. We trade across a multitude
                of asset classes and trading venues with significant market
                share.
              </p>
              <p>
                We are looking for a Software Developer for our Core Engineering
                group to help us in designing our in-house low latency software
                stack.
              </p>
              <p>Quantbox is an equal opportunity employer.</p>
            </div>
          </div>
          {/* requirement section */}
          <div>
            {/* <div className="flex items-center custom-heading-para uppercase gap-x-2 px-8 py-5">
              <h3>REQUIREMENTS</h3>
              <LiaPlusSolid className="text-2xl text-quant-orange" />
            </div>
            <div className="flex items-center text-quant-white bg-quant-orange custom-heading-para uppercase gap-x-2 px-8 py-3 border-y border-quant-black">
              <h3 className="px">BENEFITS</h3>
              <LiaPlusSolid className="text-2xl " />
            </div> */}
            <div>
              {accordionData.map((section, index) => (
                <Accordiare key={index} title={section.title}>
                  {section.content.map((block, i) => {
                    if (block.type === "paragraph") {
                      return (
                        <p key={i} className="mt-4">
                          {block.text}
                        </p>
                      );
                    } else if (block.type === "list") {
                      return (
                        <ul key={i} className="list-disc pl-6 mt-4">
                          {block.items.map((item, j) => (
                            <li key={j}>{item}</li>
                          ))}
                        </ul>
                      );
                    }
                    return null;
                  })}
                </Accordiare>
              ))}
            </div>
          </div>
          <button className="px-8 py-3 custom-unique-para bg-quant-blue uppercase text-quant-white mt-5 flex items-center gap-x-2">
            Apply Now
            <FaArrowRight />
          </button>

          {/* campus Hiring section */}

          <div className="py-15">
            <h3 className="text-quant-orange custom-careers-title uppercase">
              Campus Hiring- Junior Quantitative Research
            </h3>
            <p className="align-center uppercase">
              <IoLocationSharp className="inline-block text-quant-orange" />
              Bangalore, Karnataka, India - SD-01
            </p>
            <div className="custom-para mt-6">
              <p>
                Quantbox is a technology-driven Proprietary trading firm that
                specializes in systematic alpha research and electronic
                market-making on various exchanges. We trade across a multitude
                of asset classes and trading venues with significant market
                share. We are looking to appoint a Junior Quantitative
                Researcher/Trader. Quantbox is an equal opportunity employer.
              </p>
            </div>
          </div>
          <div className="md:w-[55vw]">
            <div>
              {accordionData2.map((section, index) => (
                <Accordiare key={index} title={section.title}>
                  {section.content.map((block, i) => {
                    if (block.type === "paragraph") {
                      return (
                        <p key={i} className="mt-4">
                          {block.text}
                        </p>
                      );
                    } else if (block.type === "list") {
                      return (
                        <ul key={i} className="list-disc pl-6 mt-4">
                          {block.items.map((item, j) => (
                            <li key={j}>{item}</li>
                          ))}
                        </ul>
                      );
                    }
                    return null;
                  })}
                </Accordiare>
              ))}
            </div>
            {/* <div className="flex items-center custom-heading-para uppercase gap-x-2 py-5 border-b border-quant-black">
              <h3>REQUIREMENTS</h3>
              <LiaPlusSolid className="text-2xl text-quant-orange" />
            </div>
            <div className="flex items-center custom-heading-para uppercase gap-x-2 py-3 border-b border-quant-black">
              <h3 className="px">BENEFITS</h3>
              <LiaPlusSolid className="text-2xl text-quant-orange" />
            </div>
            <div className="flex items-center custom-heading-para uppercase gap-x-2 py-3 border-b border-quant-black">
              <h3 className="px">RESPONSIBILITIES</h3>
              <LiaPlusSolid className="text-2xl text-quant-orange" />
            </div> */}
            <button className="px-8 py-3 custom-unique-para bg-quant-blue uppercase text-quant-white mt-5 flex items-center gap-x-2">
              Apply Now
              <FaArrowRight />
            </button>
          </div>
        </div>
      </section>

      {/* join our team */}
      <section
        className="w-full h-[40vh] md:h-[60vh] bg-quant-orange/50 my-8 bg-cover bg-no-repeat bg-center"
        style={{ backgroundImage: `url('/images/careersImg/banner.png')` }}
      >
        <div className="h-full w-full flex flex-col items-center justify-center gap-y-4">
          <div className="uppercase custom-heading md:mt-20">
            <h2 className="text-quant-white">
              Join <span className="text-quant-yellow">our</span> team
            </h2>
          </div>
          <button
            className="px-5 py-3 bg-quant-yellow uppercase text-[14px] cursor-pointer align-middle"
            onClick={handleToggle}
          >
            see open position <FaArrowRightLong className="inline-block" />
          </button>
        </div>
      </section>

      {/* toggle section */}
      {showToggleSection && (
        <section>
          <div className="w-full h-[50vh] bg-quant-yellow"></div>
        </section>
      )}
    </>
  );
}
