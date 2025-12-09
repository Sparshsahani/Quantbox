"use client";
import React, { useEffect, useState } from "react";
import Image from "next/image";
import { FaArrowRightLong } from "react-icons/fa6";
import { motion } from "framer-motion";

export default function GlobalPresence() {
  const [time, setTime] = useState(new Date());

  useEffect(() => {
    const timer = setInterval(() => {
      setTime(new Date());
    }, 1000);
    return () => clearInterval(timer);
  }, []);

  const feature = [
    {
      title: "CAMBRIDGE",
      timeZone: "Europe/London",
      flag: "/images/flags/aust.png",
    },
    {
      title: "AMSTERDAM",
      timeZone: "Europe/Amsterdam",
      flag: "/images/flags/amst.png",
    },
    {
      title: "CHICAGO",
      timeZone: "America/Chicago",
      flag: "/images/flags/chigo.png",
    },
    {
      title: "SINGAPORE",
      timeZone: "Asia/Singapore",
      flag: "/images/flags/singa.png",
    },
    {
      title: "HONGKONG",
      timeZone: "Asia/Hong_Kong",
      flag: "/images/flags/hong.png",
    },
    {
      title: "BANGALORE",
      timeZone: "Asia/Kolkata",
      flag: "/images/flags/bangalore.png",
    },
    {
      title: "DELHI",
      timeZone: "Asia/Kolkata",
      flag: "/images/flags/delhi.png",
    },
  ];

  const getTimeForZone = (timeZone) => {
    return new Intl.DateTimeFormat("en-GB", {
      hour: "2-digit",
      minute: "2-digit",
      second: "2-digit",
      hour12: false,
      timeZone,
    }).format(time);
  };

  const getHoursInZone = (timeZone) => {
    const formatter = new Intl.DateTimeFormat("en-US", {
      timeZone,
      hour: "numeric",
      hour12: false,
    });
    const hour = parseInt(formatter.format(time));
    return hour % 12;
  };

  return (
    <section className="py-10 md:py-20 flex max-sm:flex-col md:flex-col lg:flex-col xl:flex-row px-10 md:px-10 lg:px-13 xl:px-20 2xl:px-38 bg-quant-gray gap-y-8">
      {/* LEFT CONTENT */}
      <div className="space-y-10">
        <div className="xl:mr-50 custom-heading uppercase">
          <h1>Global presence.</h1>
          <h1>Local precision.</h1>
          <h1 className="text-quant-orange">Constant</h1>
          <h1>momentum</h1>
        </div>

        <div>
          <p className="tracking-wider custom-para">
            Around the clock. Across continents
          </p>
          <p className="tracking-wider custom-para">We keep markets alive.</p>
        </div>

        <div>
          <button className="bg-quant-blue px-7 py-2 text-quant-white tracking-wide flex items-center gap-3">
            SEE OUR OFFICES
            <FaArrowRightLong />
          </button>
        </div>
      </div>

      {/* CLOCK GRID */}
      <div className="w-[40vw] max-2xl:w-full grid grid-cols-2 md:grid-cols-2 justify-self-center text-quant-orange max-sm:mx-auto">
        {feature.map((item, index) => {
          const hours = getHoursInZone(item.timeZone);
          const rotation = hours * 30;

          return (
            <motion.div
              key={index}
              className="flex flex-wrap flex-col justify-items-center items-center my-6 md:m-5"
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: index * 0.1, duration: 0.4, type: "spring" }}
            >
              {/* Clock Circle */}
              <div className="h-[130px] w-[130px] max-sm:h-[100px] max-sm:w-[100px] rounded-full bg-quant-orange flex justify-center items-center rotate-[270deg]">
                <div
                  className="h-[90px] w-[90px] max-sm:h-[70px] max-sm:w-[70px] rounded-full flex justify-center items-center relative bg-quant-gray"
                  style={{
                    transform: `rotate(${rotation}deg)`,
                    transition: "transform 0.5s ease-in-out",
                  }}
                >
                  <div
                    className="absolute h-[25px] w-[70px] max-sm:h-[20px] max-sm:w-[50px] bg-quant-orange translate-x-[40px] md:translate-[50px] md:translate-y-[0px]"
                    // style={{ transform: "translate(50px, 0px)" }}
                  ></div>
                </div>
              </div>

              {/* City Name */}
              <motion.h3
                className="pt-3 max-sm:pt-5 custom-heading-para"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: index * 0.2 }}
              >
                {item.title}
              </motion.h3>

              {/* Flag + Time */}
              <div className="flex flex-wrap items-center gap-5 mt-1">
                {item.flag && (
                  <Image
                    src={item.flag}
                    alt={`${item.title} Flag`}
                    width={50}
                    height={15}
                    className="object-contain"
                  />
                )}
                <motion.span
                  className="text-md md:text-lg"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ duration: 0.3 }}
                >
                  {getTimeForZone(item.timeZone)}
                </motion.span>
              </div>
            </motion.div>
          );
        })}
      </div>
    </section>
  );
}
