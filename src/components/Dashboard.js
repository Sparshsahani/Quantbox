"use client";
import React, { useRef } from "react";
import { motion, useScroll, useSpring, useTransform } from "framer-motion";
// import Image from "next/image";

export default function Dashboard() {
  const videoRef = useRef(null);

  const { scrollYProgress } = useScroll({
    target: videoRef,
    offset: ["start end", "end start"], // Adjust this if needed
  });

  // Animate width and height based on scroll progress

  const rawWidth = useTransform(scrollYProgress, [0, 1], ["50vw", "110vw"]);
  const rawHeight = useTransform(scrollYProgress, [0, 1], ["40vh", "80vh"]);

  const width = useSpring(rawWidth, {
    stiffness: 100,
    damping: 20,
    mass: 0.5,
  });
  const height = useSpring(rawHeight, {
    stiffness: 100,
    damping: 20,
    mass: 0.5,
  });

  return (
    <main
      className={`relative bg-[url('/images/hero_bg.png')] bg-[30px_120px] md:bg-[10px_100px] xl:bg-[90px_200px] 2xl:bg-[50px_195px] bg-quant-orange bg-cover bg-no-repeat h-[50vh] md:h-[65vh] lg:h-[80vh] xl:h-[90vh] text-quant-text p-10 overflow-visible`}
    >
      {/* Headline Text */}
      <div className="main_heading xl:leading-24 md:mx-5 lg:mx-20 xl:mx-25 mt-5 lg:mt-15 uppercase font-hanken-grotesk">
        <h1>Human Ingenuity.</h1>
        <h1>Machine Precision.</h1>
        <h1>
          One <span className="text-quant-yellow">Relentless</span> Team
        </h1>
      </div>

      {/* Video Section with Scroll-based Resize */}
      <div className="absolute w-full top-[90%] xl:bottom-[-30%] 2xl:top-[80%] flex justify-center items-center right-0 lg:right-[0%] z-10">
        <motion.div
          ref={videoRef}
          style={{ width, height }}
          className="overflow-hidden"
        >
          <video
            className="w-full h-full object-cover"
            autoPlay
            loop
            muted
            playsInline // IMPORTANT for iPhones
            preload="auto" // Optional, helps loading
          >
            <source src="/videos/hero_section_video_qb.mp4" type="video/mp4" />
            Your browser does not support the video tag.
          </video>
        </motion.div>
      </div>
    </main>
  );
}
