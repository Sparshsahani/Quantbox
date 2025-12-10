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
  const img1Height = useTransform(smoothProgress, [0.0, 0.2], ["400px", "120px"]);
  const img2Height = useTransform(smoothProgress, [0.2, 0.4], ["400px", "120px"]);
  const img3Height = useTransform(smoothProgress, [0.4, 0.6], ["400px", "120px"]);
  const img4Height = useTransform(smoothProgress, [0.6, 0.8], ["400px", "120px"]);
  const img5Height = useTransform(smoothProgress, [0.8, 1.0], ["400px", "120px"]);


  return (
    <>
      <section className="font-bricolage_Grotesque-sans 2xl:max-w-[1920px] mx-auto">
        <div className="flex flex-wrap justify-between items-center mx-10 py-8 md:py-18 lg:mx-25 lg:py-18 xl:mx-20 2xl:mx-35 ">
          <div className="main_sub_heading_gb uppercase ">
            <h1 className="">
              Our<span className="text-[#BA4B2F]"> values </span>
            </h1>
          </div>
          <div className="custom-heading-para font-work-Sans-sans uppercase max-sm:mt-8 ">
            <p className="">
              Performance Meets Purpose At
            </p>
            <p>
              Quantbox. Quantbox is built on
            </p>
            <p>
              ownership, integrity, collaboration, and
            </p>
            <p>
              the constant pursuit of excellence.
            </p>
          </div>
        </div>
      </section>
      <div className="min-h-[400vh] bg-white">
        <section ref={ref} className="relative h-[400vh] bg-transparent">
          {/* Sticky viewport container */}
          <div className="sticky top-[100px] flex flex-col items-center justify-center bg-white w-full space-y-4 py-10">
            {/* Section 1 */}
            <motion.div
              style={{ height: img1Height }}
              className=" flex justify-between items-center bg-quant-white 2xl:mx-35 border-b border-gray-500 py-6 overflow-hidden "
            >
              <div className="custom-unique-heading font-bricolage_Grotesque-sans w-[40%]">
                <h1 className="font-medium">Excellence Without Limits</h1>
                <div className="custom-unique-para mt-4 font-work-Sans-sans">
                  <p>We raise the bar every day — pushing the boundaries of performance, technology, and ideas. In a world measured in microseconds, we never settle for “good enough.”
                  </p>
                </div>
              </div>
              <motion.div className="relative w-[50vw] h-[400px]  shadow-md overflow-hidden py-6 bg-amber-800 ">
                <Image
                  src="/images/uniqueImg/value1_img.png"
                  alt="chearing_img"
                  fill
                  className="object-cover"
                />
              </motion.div>

            </motion.div>

            {/* Section 2 */}
            <motion.div
              style={{ height: img2Height }}
              className=" flex justify-between items-center bg-quant-white 2xl:mx-35 border-b border-gray-500 py-6 overflow-hidden "
            >
              <div className="custom-unique-heading font-bricolage_Grotesque-sans w-[40%]">
                <h1 className="font-medium">Integrity at Every Step</h1>
                <div className="custom-unique-para mt-4 font-work-Sans-sans">
                  <p>
                    Trust is our foundation. We hold ourselves to uncompromising standards of fairness, transparency, and compliance — ensuring that our actions and algorithms reflect the highest ethical and professional rigor.
                  </p>
                </div>
              </div>
              <motion.div className="relative w-[50vw] h-[400px]  shadow-md overflow-hidden py-6 bg-amber-800 ">
                <Image
                  src="/images/uniqueImg/value2_img.png"
                  alt="chearing_img"
                  fill
                  className="object-cover"
                />
              </motion.div>

            </motion.div>

            {/* Section 3 */}
            <motion.div
              style={{ height: img3Height }}
              className=" flex justify-between items-center bg-quant-white 2xl:mx-35 border-b border-gray-500 py-6 overflow-hidden"
            >
              <div className="custom-unique-heading font-bricolage_Grotesque-sans w-[40%]">
                <h1 className="font-medium">Collaborative Intelligence</h1>
                <div className="custom-unique-para mt-4 font-work-Sans-sans">
                  <p>
                    Innovation happens through connection. Our teams work seamlessly across research, trading, and engineering — transforming bold ideas into measurable impact through shared insight and disciplined execution.
                  </p>
                </div>
              </div>
              <motion.div className="relative w-[50vw] h-[400px]  shadow-md overflow-hidden py-6 bg-amber-800 ">
                <Image
                  src="/images/uniqueImg/value3_img.png"
                  alt="chearing_img"
                  fill
                  className="object-cover"
                />
              </motion.div>

            </motion.div>

            {/* Section 4 */}
            <motion.div
              style={{ height: img4Height }}
              className=" flex justify-between items-center bg-quant-white 2xl:mx-35 border-b border-gray-500 py-6 overflow-hidden"
            >
              <div className="custom-unique-heading font-bricolage_Grotesque-sans w-[40%]">
                <h1 className="font-medium">Compound Learning</h1>
                <div className="custom-unique-para mt-4 font-work-Sans-sans">
                  <p>
                    We believe growth compounds when knowledge is shared. Through structured mentorship, open feedback, and real responsibility, we cultivate expertise that scales — developing individuals who elevate the whole organization.
                  </p>
                </div>
              </div>
              <motion.div className="relative w-[50vw] h-[400px]  shadow-md overflow-hidden py-6 bg-amber-800 ">
                <Image
                  src="/images/uniqueImg/value4_img.png"
                  alt="chearing_img"
                  fill
                  className="object-cover"
                />
              </motion.div>

            </motion.div>

            {/* Section 5 */}
            <motion.div
              style={{ height: img5Height }}
              className=" flex justify-between items-center bg-quant-white 2xl:mx-35 border-b border-gray-500 py-6 overflow-hidden"
            >
              <div className="custom-unique-heading font-bricolage_Grotesque-sans w-[40%]">
                <h1 className="font-medium">Relentless Ownership</h1>
                <div className="custom-unique-para mt-4 font-work-Sans-sans">
                  <p>
                    We take charge — of ideas, systems, and outcomes. Every challenge is an opportunity to push boundaries, raise standards, and deliver with precision. Excellence isn’t a goal; it’s a daily practice.
                  </p>
                </div>
              </div>
              <motion.div className="relative w-[50vw] h-[400px]  shadow-md overflow-hidden py-6 bg-amber-800 ">
                <Image
                  src="/images/uniqueImg/value5_img.png"
                  alt="chearing_img"
                  fill
                  className="object-cover"
                />
              </motion.div>

            </motion.div>
          </div>
        </section>

        {/* Spacer */}
        <div className="h-[10vh]">

        </div>
      </div>
    </>
  );
}
