"use client";

import React, { useEffect, useRef, useState } from "react";
import Image from "next/image";
import { motion, useScroll, useTransform } from "framer-motion";

import Img1 from "../../../public/images/uniqueImg/uniqueimg1.jpg";
import Img2 from "../../../public/images/uniqueImg/uniqueimg2.jpg";
import Img3 from "../../../public/images/uniqueImg/uniqueimg3.jpg";
import Img4 from "../../../public/images/uniqueImg/uniqueimg4.jpg";

export default function News() {
  // ---- sizes in px (reliable with framer). defaults prevent first-paint jank
  const [sizes, setSizes] = useState({ maxPx: 800, minPx: 200 }); // ~80vh -> ~20vh on ~1000px screen
  useEffect(() => {
    const calc = () => {
      const vh = typeof window !== "undefined" ? window.innerHeight : 1000;
      setSizes({
        maxPx: Math.round(vh * 0.8), // 80vh
        minPx: Math.round(vh * 0.2), // 20vh (set to 0.1*vh for 10vh)
      });
    };
    calc();
    window.addEventListener("resize", calc);
    return () => window.removeEventListener("resize", calc);
  }, []);

  const { maxPx, minPx } = sizes;
  const stackTop = 60; // first sticky sits 60px from top
  const overlap = maxPx - minPx; // how much next section "comes along"
  const wrapperH = maxPx; // each wrapper visible area

  // ---- 1
  const wrap1 = useRef(null);
  const { scrollYProgress: prog1 } = useScroll({
    target: wrap1,
    offset: ["start top", "end top"], // shrink only after it reaches the top
  });
  const h1 = useTransform(prog1, [0, 1], [maxPx, minPx]);
  const o1 = useTransform(prog1, [0, 1], [1, 0.95]);

  // ---- 2
  const wrap2 = useRef(null);
  const { scrollYProgress: prog2 } = useScroll({
    target: wrap2,
    offset: ["start top", "end top"],
  });
  const h2 = useTransform(prog2, [0, 1], [maxPx, minPx]);
  const o2 = useTransform(prog2, [0, 1], [1, 0.95]);

  // ---- 3
  const wrap3 = useRef(null);
  const { scrollYProgress: prog3 } = useScroll({
    target: wrap3,
    offset: ["start top", "end top"],
  });
  const h3 = useTransform(prog3, [0, 1], [maxPx, minPx]);
  const o3 = useTransform(prog3, [0, 1], [1, 0.95]);

  // ---- 4
  const wrap4 = useRef(null);
  const { scrollYProgress: prog4 } = useScroll({
    target: wrap4,
    offset: ["start top", "end top"],
  });
  const h4 = useTransform(prog4, [0, 1], [maxPx, minPx]);
  const o4 = useTransform(prog4, [0, 1], [1, 0.95]);

  return (
    <section className="bg-white">
      {/* OPTIONAL: your header — keep it fixed height if you have one */}
      {/* <div className="sticky top-0 z-[100] h-[60px] bg-blue-200 flex items-center justify-center text-xl">
        Intro Section
      </div> */}

      {/* -------- DIV 1 -------- */}
      <div
        ref={wrap1}
        style={{ height: wrapperH, marginTop: 0 }}
        className="relative"
      >
        <motion.div
          style={{ height: h1, top: stackTop + 0 * minPx, opacity: o1 }}
          className="sticky w-full bg-white border-y border-black overflow-hidden"
        >
          <div className="flex flex-col lg:flex-row items-start justify-between p-6 lg:p-10 h-full">
            <div className="lg:w-1/2 z-10 pr-4">
              <h2 className="text-3xl lg:text-4xl font-bold">
                VIRTUES & VALUES
              </h2>
              <p className="text-lg text-gray-700">that align with fairness</p>
            </div>
            <div className="lg:w-[90%] h-full relative z-0 rounded-xl overflow-hidden">
              <Image
                src={Img1}
                alt="VIRTUES & VALUES"
                fill
                className="object-cover"
              />
            </div>
          </div>
        </motion.div>
      </div>

      {/* -------- DIV 2 -------- */}
      <div
        ref={wrap2}
        style={{ height: wrapperH, marginTop: -overlap }}
        className="relative"
      >
        <motion.div
          style={{ height: h2, top: stackTop + 1 * minPx, opacity: o2 }}
          className="sticky w-full bg-white border-y border-black overflow-hidden"
        >
          <div className="flex flex-col lg:flex-row items-start justify-between p-6 lg:p-10 h-full">
            <div className="lg:w-1/2 z-10 pr-4">
              <h2 className="text-3xl lg:text-4xl font-bold">
                WORKING & LEARNING
              </h2>
              <p className="text-lg text-gray-700">with analytical minds</p>
            </div>
            <div className="lg:w-[90%] h-full relative z-0 rounded-xl overflow-hidden">
              <Image
                src={Img2}
                alt="WORKING & LEARNING"
                fill
                className="object-cover"
              />
            </div>
          </div>
        </motion.div>
      </div>

      {/* -------- DIV 3 -------- */}
      <div
        ref={wrap3}
        style={{ height: wrapperH, marginTop: -overlap }}
        className="relative"
      >
        <motion.div
          style={{ height: h3, top: stackTop + 2 * minPx, opacity: o3 }}
          className="sticky w-full bg-white border-y border-black overflow-hidden"
        >
          <div className="flex flex-col lg:flex-row items-start justify-between p-6 lg:p-10 h-full">
            <div className="lg:w-1/2 z-10 pr-4">
              <h2 className="text-3xl lg:text-4xl font-bold">
                CREATIVE THINKING
              </h2>
              <p className="text-lg text-gray-700">fueling innovation</p>
            </div>
            <div className="lg:w-[90%] h-full relative z-0 rounded-xl overflow-hidden">
              <Image
                src={Img3}
                alt="CREATIVE THINKING"
                fill
                className="object-cover"
              />
            </div>
          </div>
        </motion.div>
      </div>

      {/* -------- DIV 4 -------- */}
      <div
        ref={wrap4}
        style={{ height: wrapperH, marginTop: -overlap }}
        className="relative"
      >
        <motion.div
          style={{ height: h4, top: stackTop + 3 * minPx, opacity: o4 }}
          className="sticky w-full bg-white border-y border-black overflow-hidden"
        >
          <div className="flex flex-col lg:flex-row items-start justify-between p-6 lg:p-10 h-full">
            <div className="lg:w-1/2 z-10 pr-4">
              <h2 className="text-3xl lg:text-4xl font-bold">COLLABORATION</h2>
              <p className="text-lg text-gray-700">that builds success</p>
            </div>
            <div className="lg:w-[90%] h-full relative z-0 rounded-xl overflow-hidden">
              <Image
                src={Img4}
                alt="COLLABORATION"
                fill
                className="object-cover"
              />
            </div>
          </div>
        </motion.div>
      </div>

      {/* spacer so fully-shrunk stack can scroll away */}
      <div style={{ height: minPx * 4 + 200 }} />
    </section>
  );
}
