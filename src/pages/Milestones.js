"use client";

import React, { useRef } from "react";
import { motion, useScroll, useTransform, useInView } from "framer-motion";
import { features } from "../lib/MilestoneData";
import { FaCircleCheck } from "react-icons/fa6";
import MilestoneCard from "@/components/MilestoneCard";

export default function Milestones() {
  const sectionRef = useRef(null);

  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start 30vh", "end center"],
  });

  const height = useTransform(scrollYProgress, [0, 1], ["0%", "100%"]);

  // Create refs for each card
  const cardRefs = useRef(features.map(() => React.createRef()));

  return (
    <section
      className="py-10 px-5 md:px-8 lg:px-15 xl:py-20 xl:px-18 2xl:px-38"
      ref={sectionRef}
    >
      <div className="grid md:grid-cols-2 max-sm:space-y-10">
        {/* Left side content */}
        <div className="flex flex-col gap-y-8 flex-wrap">
          <div className="sticky top-10 md:top-25 xl:top-20 space-y-8">
            <div className="custom-heading uppercase">
              <h1>Our</h1>
              <h1 className="text-quant-orange">Milestone</h1>
              <h1>Marked by</h1>
              <h1>code and</h1>
              <h1>curiosity</h1>
            </div>
            <div>
              <p className="custom-para">
                Charting a timeline of relentless growth
              </p>
            </div>
          </div>
        </div>

        {/* Right section */}
        <div className="relative flex flex-row flex-warp gap-x-8">
          {/* Scroll progress line container */}
          <div className="relative w-[5px] h-full bg-gray-200 max-sm:hidden">
            <motion.div
              style={{ height, originY: 0 }}
              className="absolute top-0 left-0 w-full bg-quant-orange"
            />
          </div>

          {/* Milestone cards */}
          <div className="flex flex-col gap-y-10 custom-milestone-text">
            {features.map((item, id) => (
              <MilestoneCard
                key={id}
                item={item}
                index={id}
                cardRef={(el) => (cardRefs.current[id] = el)}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
