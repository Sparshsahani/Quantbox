"use client";
import React, { useEffect, useState } from "react";
import { FaArrowRightLong } from "react-icons/fa6";

export default function TheTrading() {
  const [time, setTime] = useState(new Date());
  useEffect(() => {
    // Update the time every second
    const timer = setInterval(() => {
      setTime(new Date());
    }, 1000);

    // Clean up the interval on unmount
    return () => clearInterval(timer);
  }, []);
  const feature = [
    {
      title: "CAMBRIDGE",
      timeNow: time.toLocaleTimeString(),
    },
    {
      title: "SINGAPORE",
      timeNow: time.toLocaleTimeString(),
    },
    {
      title: "LONDON",
      timeNow: time.toLocaleTimeString(),
    },
    {
      title: "NEW DELHI",
      timeNow: time.toLocaleTimeString(),
    },
  ];

  return (
    <>
      <section className="py-20 max-sm:px-10 flex max-sm:flex-col md:flex-col lg:flex-col xl:flex-row md:px-30">
        <div className="flex flex-col gap-y-10 xl:gap-y-30">
          <h1 className="text-3xl lg:text-7xl xl:mr-30">
            OUR GLOBAL OFFICES ARE
            <span className="text-[#BA4B2F]">TRADING</span> ALL AROUND THE WORLD
          </h1>

          <p className="tracking-wider">
            We work across 7 different time zones to help keep financial markets
            ticking.
          </p>

          <button className="bg-[#38618C] max-sm:text-base mx-auto rounded px-7 py-2 text-white mt-6 text-lg md:text-xl tracking-wide flex items-center gap-3">
            SEE OUR OFFICES
            <FaArrowRightLong />
          </button>
        </div>
        <div className="w-full space-y-8 lg:space-x-10 mt-8 flex flex-wrap space-x-5">
          {feature.map((items, id) => {
            return (
              <div key={id} className="flex flex-col text-[#BA4B2F] items-center">
                <div className="h-[200px] w-[200px] rounded-full border-2 border-[#BA4B2F]"></div>
                <h3 className="pt-3 max-sm:text-md md:text-xl">
                  {items.title}
                </h3>
                <span className="max-sm:text-md md:text-lg ">{items.timeNow}</span>
              </div>
            );
          })}
        </div>
      </section>
    </>
  );
}
