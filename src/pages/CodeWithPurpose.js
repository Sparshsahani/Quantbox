"use client";
import React, { useState, useEffect } from "react";
export default function CodeWithPurpose() {
  const isMobile = typeof window !== "undefined" && window.innerWidth < 768;
  const getTransformValue = () => {
    if (isMobile) return `translateX(-${activeIndex * 50}vw)`;
    return `translateX(-${activeIndex * 22}vw)`;
  };

  const milestones = [
    { date: "Jun 2021", title: "First set of freshers" },
    { date: "Mar 2022", title: "Bangalore, Amsterdam & Singapore" },
    { date: "Jun 2023", title: "Delhi & Chicago Expansion" },
    { date: "oct 2023", title: "London & Cambridge" },
    { date: "Jan 2024", title: "Hongkong" },
  ];

  // ✅ Center se start karne ke liye
  const [activeIndex, setActiveIndex] = useState(
    Math.floor(milestones.length / 2)
  );

  const prevSlide = () => {
    setActiveIndex((prev) =>
      prev === 0 ? milestones.length - 1 : prev - 1
    );
  };

  const nextSlide = () => {
    setActiveIndex((prev) =>
      prev === milestones.length - 1 ? 0 : prev + 1
    );
  };
  useEffect(() => {
    const interval = setInterval(() => {
      nextSlide();
    }, 3500); // 3.5 seconds auto slide

    return () => clearInterval(interval);
  }, [activeIndex]);

  return (

    <>
      <section className="relative 2xl:max-w-[1920px] mx-auto h-[70vh] md:h-[80vh] lg:h-[100vh] overflow-hidden">
        {/* 🔥 BACKGROUND VIDEO */}
        <video
          className="absolute top-0 left-0 w-full h-[300px] md:h-[45vh] lg:h-[65vh] xl:h-[65vh] 2xl:h-[65vh] object-cover"
          src="/videos/hero_banner_bg.mp4"
          autoPlay
          muted
          loop
          playsInline
          preload="auto" // Optional, helps loading
        />
        <div className=" z-10 w-full h-[300px] md:h-[45vh] lg:h-[65vh] xl:h-[65vh] 2xl:h-[65vh] font-bricolage_Grotesque-sans">
          <div className="flex flex-col justify-center items-start h-full ml-10 md:ml-10 lg:ml-25 xl:ml-20 2xl:ml-35">
            <div className="main_sub_heading uppercase xl:leading-13 2xl:leading-20 text-quant-white z-10">
              <h1>
                our <span className="text-quant-orange">milestones</span>
              </h1>
              <h1>marked by code</h1>
              <h1>and curiosity</h1>
            </div>
            <p className="text-quant-white font-work-Sans-sans custom-para">Charting a timeline of relentless growth</p>
          </div>
          <div className=" absolute bottom-[33%] lg:bottom-[26%] xl:bottom-[23%] left-[40%] flex flex-row gap-x-8 ">
            <div
              className="flex flex-row gap-x-8 transition-transform duration-500"
              style={{
                transform: getTransformValue(),
              }}
            >
              {milestones.map((item, index) => {
                // const isActive = index === activeIndex;
                return <div key={index} className="xl:h-[24vh] w-[40vw] md:w-[20vw] 2xl:w-[22vw] bg-quant-gray border rounded-3xl border-quant-orange p-5 md:pl-5.5 md:pt-10.5">
                  <h3 className="custom-milestone-text font-medium text-quant-orange capitalize">{item.date}</h3>
                  <p className="custom-careers-title font-medium">{item.title}</p>
                </div>
              })}
            </div>
          </div>
          <div>
            <div className="absolute bottom-[10%] w-full flex justify-center">
              <div className="w-[90%] relative flex items-center justify-center gap-6">

                {/* ✅ LEFT ARROW */}
                <button
                  onClick={prevSlide}
                  className="w-12 h-12 rounded-full border border-black bg-white hover:bg-black group transition flex items-center justify-center"
                >
                  <span className="text-black group-hover:text-white text-xl">
                    ←
                  </span>
                </button>

                {/* ✅ DOTS (ARROWS KE BEECH) */}
                <div className="flex gap-3">
                  {milestones.map((_, index) => (
                    <button
                      key={index}
                      onClick={() => setActiveIndex(index)}
                      className={`w-2.5 h-2.5 rounded-full transition
          ${activeIndex === index ? "bg-black scale-125" : "bg-gray-400"}`}
                    />
                  ))}
                </div>

                {/* ✅ RIGHT ARROW */}
                <button
                  onClick={nextSlide}
                  className="w-12 h-12 rounded-full border border-black bg-white hover:bg-black group transition flex items-center justify-center"
                >
                  <span className="text-black group-hover:text-white text-xl">
                    →
                  </span>
                </button>

              </div>
            </div>

          </div>
        </div>
      </section>
    </>
  );
}
