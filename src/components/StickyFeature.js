"use client";
import { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import Image from "next/image";

export default function StickyFeature({ feature }) {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"],
  });

  const imageHeight = useTransform(scrollYProgress, [0, 1], [900, 50]);

  return (
    <div ref={ref} className={` relative top-0 z-10`}>
      <motion.div className="sticky top-[10vh] flex flex-col xl:flex-row xl:justify-between xl:items-start border-b-2 border-black py-6">
        <div className="flex flex-col xl:w-1/2">
          <h2 className="text-4xl font-semibold">VIRTUES & VALUES</h2>
          <p className="text-lg text-gray-700 mt-2">{feature.para}</p>
        </div>

        <motion.div
          style={{ height: imageHeight }}
          className="relative  w-full xl:w-[44rem] 2xl:w-[60vw] overflow-hidden"
        >
          <Image
            src={feature.img}
            alt={feature.title}
            fill
            className="object-cover object-center"
          />
        </motion.div>
      </motion.div>
    </div>
  );
}
