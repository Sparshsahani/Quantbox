"use client";

import { useRef } from "react";
import { motion, useScroll, useTransform, useSpring } from "framer-motion";
import Image from "next/image";

export default function UniqueSection() {
  const ref = useRef(null);

  // Track scroll progress for the section
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end end"],
  });

  // Smooth spring to avoid jumpy transitions
  const smoothProgress = useSpring(scrollYProgress, {
    stiffness: 120,
    damping: 20,
    mass: 0.22,
  });

  // Height transforms — they are reversible automatically!
  const img1Height = useTransform(smoothProgress, [0.0, 0.2], ["400px", "100px"]);
  const img2Height = useTransform(smoothProgress, [0.2, 0.4], ["400px", "100px"]);
  const img3Height = useTransform(smoothProgress, [0.4, 0.6], ["400px", "100px"]);
  const img4Height = useTransform(smoothProgress, [0.6, 0.8], ["400px", "100px"]);
  const img5Height = useTransform(smoothProgress, [0.8, 1.0], ["400px", "100px"]);


  return (
    <div className="min-h-[400vh] bg-white">
      <section ref={ref} className="relative h-[400vh] bg-transparent">
        {/* Sticky viewport container */}
        <div className="sticky top-[80px] flex flex-col items-center justify-center bg-white w-full space-y-4 py-10">
          {/* Section 1 */}
          <motion.div
            style={{ height: img1Height }}
            className=" flex justify-between items-center bg-white w-[80%] border-b border-gray-500 py-6 overflow-hidden"
          >
            <div>
              <h1 className="text-4xl font-bold text-gray-800">VIRTUES & VALUES</h1>
              <p className="text-lg text-gray-600 mt-2">that align with fairness</p>
            </div>
            <motion.div className="relative xl:w-[600px] 2xl:w-[900px] h-[400px] shadow-md overflow-hidden py-6">
              <Image
                src="/images/uniqueImg/excellent.png"
                alt="VIRTUES & VALUES"
                fill
                className="object-cover"
              />
            </motion.div>

          </motion.div>

          {/* Section 2 */}
          <motion.div
            style={{ height: img2Height }}
            className="flex justify-between items-center bg-white w-[80%] border-b border-gray-200 py-6 overflow-hidden"
          >
            <div>
              <h1 className="text-4xl font-bold text-gray-800">WORKING & LEARNING</h1>
              <p className="text-lg text-gray-600 mt-2">with analytical minds</p>
            </div>
            <motion.div className="relative xl:w-[600px] 2xl:w-[900px] h-[400px] shadow-md overflow-hidden">
              <Image
                src="/images/uniqueImg/integrity.png"
                alt="WORKING & LEARNING"
                fill
                className="object-cover"
              />
            </motion.div>
          </motion.div>

          {/* Section 3 */}
          <motion.div
            style={{ height: img3Height }}
            className="flex justify-between items-center bg-white w-[80%] border-b border-gray-200 py-6 overflow-hidden"
          >
            <div>
              <h1 className="text-4xl font-bold text-gray-800">CREATIVE THINKING</h1>
              <p className="text-lg text-gray-600 mt-2">fueling innovation</p>
            </div>
            <motion.div className="relative xl:w-[600px] 2xl:w-[900px] h-[400px] shadow-md overflow-hidden">
              <Image
                src="/images/uniqueImg/collaborative.png"
                alt="CREATIVE THINKING"
                fill
                className="object-cover"
              />
            </motion.div>
          </motion.div>

          {/* Section 4 */}
          <motion.div
            style={{ height: img4Height }}
            className="flex justify-between items-center bg-white w-[80%] py-6 overflow-hidden"
          >
            <div>
              <h1 className="text-4xl font-bold text-gray-800">COLLABORATION</h1>
              <p className="text-lg text-gray-600 mt-2">that builds success</p>
            </div>
            <motion.div className="relative xl:w-[600px] 2xl:w-[900px] h-[400px] shadow-md overflow-hidden">
              <Image
                src="/images/uniqueImg/compound.png"
                alt="COLLABORATION"
                fill
                className="object-cover"
              />
            </motion.div>
          </motion.div>
          {/* Section 4 */}
          <motion.div
            style={{ height: img5Height }}
            className="flex justify-between items-center bg-white w-[80%] py-6 overflow-hidden"
          >
            <div>
              <h1 className="text-4xl font-bold text-gray-800">COLLABORATION</h1>
              <p className="text-lg text-gray-600 mt-2">that builds success</p>
            </div>
            <motion.div className="relative xl:w-[600px] 2xl:w-[900px] h-[400px] shadow-md overflow-hidden">
              <Image
                src="/images/uniqueImg/relentless.png"
                alt="COLLABORATION"
                fill
                className="object-cover"
              />
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Spacer */}
      <div className="h-[20vh] bg-gray-100">

      </div>
    </div>
  );
}
