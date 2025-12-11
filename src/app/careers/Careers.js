"use client";
import React, { useState } from "react";
import Image from "next/image";
import bgImg from "../../../public/images/careersImg/careers_bg_1.png";


export default function Careers() {

  return (
    <>
      {/* hero section */}
      <section className="2xl:max-w-[1920px] mx-auto">
        <main
          className={`relative bg-[url('/images/hero_bg.png')] bg-[30px_120px] md:bg-[10px_100px] xl:bg-[90px_200px] 2xl:bg-[50px_195px] bg-quant-orange bg-cover bg-no-repeat h-[45vh] md:h-[45vh] lg:h-[80vh] xl:h-[90vh] text-quant-text p-10 overflow-visible`}
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
          <div className="absolute w-full top-[90%] lg:top-[50vh] xl:bottom-[-30%] 2xl:top-[80%] flex justify-center items-center right-0 lg:right-[0%]">
            <div className="overflow-hidden xl:w-[60vw] xl:h-[70vh]">
              <Image
                src={bgImg}
                alt="Qb chess background"
                width={8000}
                height={500}
                className="w-full h-full object-cover"
                priority
              />
            </div>
          </div>
        </main>
      </section>

      {/* about section */}
      <section className=" py-[5%] pt-[35vh] md:pt-[43vh] lg:pt-[40vh] xl:pt-[50vh] 2xl:pt-[50vh] bg-quant-gray 2xl:max-w-[1920px] mx-auto">
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

      {/* video section */}
      <section className="2xl:max-w-[1920px] mx-auto">
        <div className="flex flex-col justify-center items-center xl:gap-y-35 mt-25">
          <div className="m-5">
            <video
              src="/videos/hero_section_video_qb.mp4"
              type="video/mp4"
              loop
              muted
              controls
              className="w-full xl:w-[60vw]"

            />
            <div className="font-bricolage_Grotesque-sans main_video_title mt-5">
              <h2 className="font-semibold">ARIHANT SAMAR</h2>
              <h3>Software engineer</h3>
            </div>
          </div>
          <div className="m-5">
            <video
              src="/videos/hero_section_video_qb.mp4"
              type="video/mp4"
              loop
              muted
              controls
              className="w-full xl:w-[60vw]"

            />
            <div className="font-bricolage_Grotesque-sans main_video_title mt-5">
              <h2 className="font-semibold">KARAN AGARWAL</h2>
              <h3>Quant Researcher</h3>
            </div>
          </div>

        </div>
      </section>

      {/* vier our open positions */}
      <section className="px-10 pt-20 md:px-10 md:pt-28 lg:px-12 xl:px-20 2xl:px-35 2xl:max-w-[1920px] mx-auto">
        {/* Heading */}
        <div className="xl:w-6xl 2xl:w-full uppercase ">
          <div className=" custom-heading font-medium py-21">
            <h1>
              view our <span className="text-quant-orange">open</span>
            </h1>
            <h1>positions</h1>
          </div>
          <div className="bg-quant-blue h-[100vh] w-full my-8">

          </div>
        </div>
      </section>

    </>
  );
}
