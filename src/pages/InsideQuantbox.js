"use client";
import Image from "next/image";
import React, { useEffect, useState } from "react";

export default function InsideQuantbox() {
  const isMobile = typeof window !== "undefined" && window.innerWidth < 768;
  const getTransformValue = () => {
    if (isMobile) return `translateX(-${index * 50}vw)`;
    return `translateX(-${index * 22}vw)`;
  };

  const images = [
    "/images/insidequantboxImg/quant_banner.png",
    "/images/insidequantboxImg/playing_chess.png",
    "/images/insidequantboxImg/quant_banner.png",
    "/images/insidequantboxImg/playing_chess.png",
  ];

  const [index, setIndex] = useState(0);


  const nextSlide = () => {
    setIndex((prev) => (prev + 1) % images.length);
  };

  const prevSlide = () => {
    setIndex((prev) => (prev - 1 + images.length) % images.length);
  };

  // ⭐ AUTOPLAY EVERY 2 SECONDS
  useEffect(() => {
    const timer = setInterval(() => {
      nextSlide();
    }, 2000); // 2000 ms = 2 seconds

    return () => clearInterval(timer);
  }, [index]);
  // index added to restart autoplay smoothly

  return (
    <>
      <section className="font-bricolage_Grotesque-sans 2xl:max-w-[1920px] mx-auto my-10 xl:my-15 2xl:my-25">

        <div className="main_sub_heading uppercase my-10 xl:my-15 2xl:my-19">
          <h1 className="mx-10 lg:mx-25 xl:mx-20 2xl:mx-35">
            inside <span className="text-quant-orange"> quantbox </span>
          </h1>
        </div>

        {/* ⭐ FIXED AREA — 2 IMAGES VISIBLE */}
        <div className="flex justify-center gap-x-8">
          <div
            style={{
              width: "40vw",
              overflow: "hidden",
            }}
          >
            <div
              className="flex transition-all duration-700 gap-x-8"
              style={{
                transform: getTransformValue(),
              }}
            >
              {images.map((img, i) => (
                <Image
                  key={i}
                  alt="QuantBox"
                  src={img}
                  width={1000}
                  height={1000}
                  className="h-full  md:w-[20vw] 2xl:w-[20vw]"
                />
              ))}
            </div>
          </div>
        </div>

        {/* ⭐ ARROWS + DOTS */}
        <div className="w-full flex justify-center py-10">
          <div className="w-[90%] relative flex items-center justify-center gap-6">

            {/* LEFT ARROW */}
            <button
              onClick={prevSlide}
              className="w-12 h-12 rounded-full border border-black bg-white hover:bg-black group transition flex items-center justify-center"
            >
              <span className="text-black group-hover:text-white text-xl">←</span>
            </button>

            {/* DOTS */}
            <div className="flex items-center gap-3">
              {images.map((_, i) => (
                <button
                  key={i}
                  onClick={() => setIndex(i)}
                  className={`w-3 h-3 rounded-full transition ${index === i ? "bg-black" : "bg-gray-400"
                    }`}
                ></button>
              ))}
            </div>

            {/* RIGHT ARROW */}
            <button
              onClick={nextSlide}
              className="w-12 h-12 rounded-full border border-black bg-white hover:bg-black group transition flex items-center justify-center"
            >
              <span className="text-black group-hover:text-white text-xl">→</span>
            </button>

          </div>
        </div>

        {/* TEXT SECTION */}
        <div className="w-[70vw] lg:w-[50vw] xl:w-[30vw] mx-auto">
          <p className="text-center">
            The sponsorship of the Chennai Grand Masters 2025 by Quantbox underscores our unwavering commitment to the game of chess, built on the shared values of strategy, precision, and forward thinking. Quantbox is proud to support this prestigious event, confident that this collaboration will inspire excellence and drive the sport to new horizons.

          </p>
        </div>

      </section>
    </>
  );
}
