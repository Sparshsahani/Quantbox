"use client";
import React, { useEffect, useRef } from "react";
import { motion, useInView } from "framer-motion";
import { FaCircleCheck } from "react-icons/fa6";

export default function MilestoneCard({ item, index, cardRef }) {
  const ref = useRef(null);

  useEffect(() => {
    if (typeof cardRef === "function") {
      cardRef(ref.current); // assign to parent
    }
  }, [cardRef]);

  const isInView = useInView(ref, {
    margin: "-36% 0px -100% 0px",
  });

  return (
    <motion.div
      ref={ref}
      className="relative w-full md:min-h-[300px] xl:min-h-[300px] p-5 bg-quant-orange rounded-[30px] font-bricolage_Grotesque-sans text-quant-white flex flex-col justify-around"
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6, delay: index * 0.1 }}
    >
      {isInView && (
        <div className="absolute left-[-52px] md:top-10 xl:top-10 rounded-full bg-quant-white flex items-center justify-center max-sm:hidden">
          <FaCircleCheck className="text-quant-orange text-4xl" />
        </div>
      )}

      <h4 className="text-quant-dark-yellow">{item?.date}</h4>
      <div>
        <div className="flex flex-row items-center">
          <p className="custom-para">{item?.location}</p>
          <p className="custom-para">{item?.locationName}</p>
        </div>
        <h3 className="xl:text-[32px]">{item?.title}</h3>
      </div>
      <p className="font-work-Sans-sans custom-para">{item?.para}</p>
    </motion.div>
  );
}
