"use client";
import Image from "next/image";
import React, { useEffect, useState } from "react";
import { FaArrowRightLong } from "react-icons/fa6";
import { motion, AnimatePresence } from "framer-motion";

const features = [
  {
    title: "Mathematical research",
    description:
      "We develop innovative quantitative models to uncover trading opportunities and drive our strategies.",
    image: "/images/mathematical.png",
  },
  {
    title: "coding",
    description:
      "We transform research insights into robust, high-performance code powering our trading systems.",
    image: "/images/coding.png",
  },
  {
    title: "simulation",
    description:
      "We rigorously test strategies in simulated environments to ensure resilience and effectiveness before going live.",
    image: "/images/simulation.png",
  },
  {
    title: "production/ deployment",
    description:
      "We seamlessly deploy and monitor our systems in real markets, ensuring reliability and speed at every step.",
    image: "/images/production.png",
  },
  {
    title: "P&L TRACKING",
    description:
      "We continuously track performance and risk, optimizing strategies to maximize returns and manage exposure.",
    image: "/images/p&l.png",
  },
];

export default function Milliseconds() {
  const [time, setTime] = useState(new Date());
  const [mounted, setMounted] = useState(false);
  const [activeIndex, setActiveIndex] = useState(0);

  useEffect(() => {
    setMounted(true);
    const t = setInterval(() => setTime(new Date()), 1000);
    const interval = setInterval(() => {
      setActiveIndex((prev) => (prev + 1) % features.length);
    }, 5000);
    return () => {
      clearInterval(t);
      clearInterval(interval);
    };
  }, []);

  const formatTime = (date) => {
    return date.toLocaleTimeString("en-IN", {
      hour12: false,
      hour: "2-digit",
      minute: "2-digit",
      second: "2-digit",
    });
  };

  return (
    <section className="px-10 pt-20 md:px-10 md:pt-28 lg:px-12 xl:px-20 2xl:px-40 xl:pt-40 ">
      {/* Heading */}
      <div className="mb-12 xl:w-6xl uppercase">
        <div className="grid grid-cols-[60%_40%] max-sm:grid-cols-[70%_30%]">
          <div className=" custom-heading font-medium">
            <h1 className="xl:whitespace-nowrap">WE operate where</h1>
            <h1 className="text-quant-orange">milliseconds</h1>
            <h1>move markets.</h1>
          </div>
          <div className="md:ml-3">
            {mounted && (
              <span className="text-quant-orange text-xl max-sm:w-[5%] xl:mt-[0.5%]">
                {formatTime(time)}
              </span>
            )}
          </div>
        </div>
      </div>

      <div className="grid grid-col-1 md:grid-cols-2 xl:flex-row justify-between gap-y-20 font-body pb-20">
        {/* Left Image Changes With Active Index */}
        <div className="flex justify-start xl:items-center ">
          <motion.div
            key={features[activeIndex].image}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            // exit={{ opacity: 0, y: -20 }}
            // transition={{ duration: 0.5 }}
            className="max-xl:max-h-[490px] max-xl:max-w-[490px] xl:min-h-[390px] xl:w-full xl:h-auto 2xl:h-[450px] 2xl:w-[450px] m-3 flex items-center justify-center "
          >
            <div className="max-xl:max-h-[490px] max-xl:max-w-[490px] xl:w-[90%] xl:h-auto 2xl:min-w-[600px] 2xl:mt-20 2xl:ml-32 m-3 flex items-center justify-center xl:p-2 border border-quant-orange">
              <Image
                src={features[activeIndex].image}
                alt="Feature Graphic"
                width={500}
                height={500}
                className="w-full h-full object-cover"
              />
            </div>
          </motion.div>
        </div>

        {/* Right: Titles + Descriptions */}
        <div className="h-full xl:my-8 space-y-6 grid grid-cols-1">
          <div>
            <p className="xl:mr-24 leading-6 mt-8 tracking-wider custom-para">
              In HFT, time doesn’t pass — it trades. Our systems are engineered
              for speed, built to decode global markets in real time.
            </p>
            <p className="xl:mr-24 leading-6 tracking-wider custom-para">
              We combine data, code, and execution to turn micro-movements into
              measurable performance.
            </p>
          </div>

          <motion.div
            layout
            className="space-y-6 max-sm:min-h-[600px] md:min-h-[560px] lg:min-h-[560px] xl:min-h-[460px] grid grid-cols-1 overflow-hidden"
          >
            {features.map((item, index) => {
              const isActive = index === activeIndex;

              return (
                <motion.div
                  layout
                  key={item.title}
                  transition={{ layout: { duration: 0.5, ease: "easeInOut" } }}
                  className="flex flex-col gap-1"
                >
                  {/* Title Row */}
                  <div
                    onClick={() => setActiveIndex(index)}
                    className="flex items-center gap-2 cursor-pointer min-h-[32px]"
                  >
                    <div className="w-5 flex justify-center items-center">
                      {isActive && (
                        <FaArrowRightLong className="text-quant-orange animate-fade-in" />
                      )}
                    </div>
                    <motion.h2
                      layout
                      className={`tracking-wide custom-heading-para transition-all duration-300 uppercase ${isActive
                        ? "text-quant-orange font-semibold"
                        : "text-quant-black"
                        }`}
                    >
                      {item.title}
                    </motion.h2>
                  </div>

                  {/* Accordion Content */}
                  <AnimatePresence initial={false}>
                    {isActive && (
                      <motion.div
                        key="content"
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: "auto", opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        transition={{ duration: 0.4, ease: "easeInOut" }}
                        className="overflow-hidden"
                      >
                        <div className="pt-2">
                          <p className="custom-para leading-[1.6]">
                            {item.description}
                          </p>
                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>

                  {/* Progress Underline (Always Mounted for Smoothness) */}
                  <div className="h-[2px] w-full bg-gray-300 rounded-full overflow-hidden relative mt-1">
                    {isActive && (
                      <motion.div
                        key="underline"
                        initial={{ width: 0 }}
                        animate={{ width: "100%" }}
                        transition={{ duration: 5, ease: "linear" }}
                        className="absolute top-0 left-0 h-full bg-quant-orange"
                      />
                    )}
                  </div>
                </motion.div>
              );
            })}
          </motion.div>
        </div>
      </div>
    </section>
  );
}
