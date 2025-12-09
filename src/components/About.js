"use client";
import React from "react";
export default function about() {
  return (
    <>
      <section id="about" className=" pt-[80vh] md:pt-[83vh] xl:pt-[55vh] 2xl:pt-[45vh] bg-quant-gray">
        {/* Heading */}
        <div className="mb-10 md:text-left md:mx-12 lg:mx-13 xl:mx-18 2xl:ml-40">
          <h1 className=" max-sm:mx-10 md:mx-0 custom-heading">ABOUT</h1>
        </div>

        {/* Content */}
        <div className="flex flex-col flex-wrap md:px-12 max-2xl:gap-y-7 xl:flex-row justify-between px-10 xl:px-18 2xl:px-40 2xl:flex-nowrap text-lg tracking-wide">
          {/* Left Column */}
          <div className="max-w-xl xl:w-sm 2xl:w-2xl">
            <p className="custom-heading-para 2xl:mr-44 uppercase tracking-tight">
              Global by Design. Powered by Math. Defined by Speed.
            </p>
          </div>

          {/* Right Column */}
          <div className="max-w-3xl xl:w-xl 2xl:w-3xl">
            <p className="custom-para 2xl:mr-15 text-justify tracking-tight">
              Quantbox is a global high-frequency trading firm powered by
              research, algorithms, and code. From signal discovery to real-time
              execution, we turn complexity into clarity — with collaboration at
              the core of everything we do.
            </p>
          </div>
        </div>
      </section>
    </>
  );
}
