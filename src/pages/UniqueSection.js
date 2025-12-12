"use client";

import { useEffect, useRef, useState } from "react";
import { motion, useScroll, useTransform, useSpring } from "framer-motion";
import Image from "next/image";

export default function UniqueSection() {
  const [enableAnimation, setEnableAnimation] = useState(false);
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


  useEffect(() => {
    const checkScreen = () => {
      const w = window.innerWidth;
      const h = window.innerHeight;

      const isFullHD = w >= 1880 && h >= 900;
      const isLaptop1366 = w >= 1330 && w <= 1380 && h >= 560 && h <= 650;

      setEnableAnimation(isFullHD || isLaptop1366);
      // console.log(window.innerWidth, window.innerHeight);

    };

    checkScreen();
    window.addEventListener("resize", checkScreen);
    return () => window.removeEventListener("resize", checkScreen);
  }, []);

  // framer motions (always create)
  const full_hd_t1 = useTransform(smoothProgress, [0, 0.2], ["400px", "120px"]);
  const full_hd_t2 = useTransform(smoothProgress, [0.2, 0.4], ["400px", "120px"]);
  const full_hd_t3 = useTransform(smoothProgress, [0.4, 0.6], ["400px", "120px"]);
  const full_hd_t4 = useTransform(smoothProgress, [0.6, 0.8], ["400px", "120px"]);
  const full_hd_t5 = useTransform(smoothProgress, [0.8, 1], ["400px", "120px"]);

  const hd_t1 = useTransform(smoothProgress, [0, 0.2], ["300px", "70px"]);
  const hd_t2 = useTransform(smoothProgress, [0.2, 0.4], ["300px", "70px"]);
  const hd_t3 = useTransform(smoothProgress, [0.4, 0.6], ["300px", "70px"]);
  const hd_t4 = useTransform(smoothProgress, [0.6, 0.8], ["300px", "70px"]);
  const hd_t5 = useTransform(smoothProgress, [0.8, 1], ["300px", "70px"]);

  const pick = (full, hd) => {
    if (!enableAnimation) return "400px";

    if (window.innerWidth >= 1900) return full; // 1920 × 1080
    return hd;                                  // 1366 × 768
  };

  const img1Height = pick(full_hd_t1, hd_t1);
  const img2Height = pick(full_hd_t2, hd_t2);
  const img3Height = pick(full_hd_t3, hd_t3);
  const img4Height = pick(full_hd_t4, hd_t4);
  const img5Height = pick(full_hd_t5, hd_t5);

  return (
    <>
      <section className="font-bricolage_Grotesque-sans 2xl:max-w-[1920px] mx-auto">
        <div className="flex flex-wrap justify-between items-center mx-10 py-8 md:py-18 lg:mx-25 lg:py-18 xl:mx-20 2xl:mx-35 ">
          <div className="main_sub_heading_gb uppercase max-lg:w-full lg:w-[50%]">
            <h1 className="">
              Our<span className="text-[#BA4B2F]"> values </span>
            </h1>
          </div>
          <div className="custom-heading-para font-work-Sans-sans uppercase max-sm:mt-8 max-lg:w-full lg:w-[50%]">
            <p className="">
              Performance Meets Purpose At Quantbox. Quantbox is built on ownership, integrity, collaboration, and the constant pursuit of excellence.
            </p>
          </div>
        </div>
      </section>
      <div className={`2xl:max-w-[1920px] mx-auto ${enableAnimation ? "min-h-[400vh]" : ""} bg-white`}>
        <section ref={ref}
          className={`${enableAnimation ? "relative h-[400vh]" : ""} bg-transparent`}>
          {/* Sticky viewport container */}
          <div className={`sticky xl:top-0 flex flex-col items-center justify-center bg-white w-full space-y-4 2xl:py-10 ${enableAnimation ? "" : "static"
            }`}>
            {/* Section 1 */}
            <motion.div
              style={{ height: img1Height }}
              className=" flex max-sm:flex-col justify-between items-center bg-quant-white mx-10 md:mx-10 lg:mx-25 xl:mx-25 2xl:mx-35 border-b border-gray-500 py-6 overflow-hidden "
            >
              <div className="custom-unique-heading font-bricolage_Grotesque-sans w-full md:w-[40%] xl:h-full">
                <h1 className="font-medium">Excellence Without Limits</h1>
                <div className="custom-unique-para mt-4 font-work-Sans-sans">
                  <p>We raise the bar every day — pushing the boundaries of performance, technology, and ideas. In a world measured in microseconds, we never settle for “good enough.”
                  </p>
                </div>
              </div>
              <motion.div className="relative max-sm:mt-5 w-full md:w-[50vw] h-[400px] md:h-[30vh] lg:h-[40vh] xl:h-[400px]  shadow-md overflow-hidden py-6 ">
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
              className=" flex max-sm:flex-col justify-between items-center bg-quant-white mx-10 md:mx-10 lg:mx-25 xl:mx-25 2xl:mx-35 border-b border-gray-500 py-6 overflow-hidden  "
            >
              <div className="custom-unique-heading font-bricolage_Grotesque-sans w-full md:w-[40%] xl:h-full">
                <h1 className="font-medium">Integrity at Every Step</h1>
                <div className="custom-unique-para mt-4 font-work-Sans-sans">
                  <p>
                    Trust is our foundation. We hold ourselves to uncompromising standards of fairness, transparency, and compliance — ensuring that our actions and algorithms reflect the highest ethical and professional rigor.
                  </p>
                </div>
              </div>
              <motion.div className="relative max-sm:mt-5 w-full md:w-[50vw] h-[400px] md:h-[30vh] lg:h-[40vh] xl:h-[400px]  shadow-md overflow-hidden py-6  ">
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
              className=" flex max-sm:flex-col justify-between items-center bg-quant-white mx-10 md:mx-10 lg:mx-25 xl:mx-25 2xl:mx-35 border-b border-gray-500 py-6 overflow-hidden  "
            >
              <div className="custom-unique-heading font-bricolage_Grotesque-sans w-full md:w-[40%] xl:h-full">
                <h1 className="font-medium">Collaborative Intelligence</h1>
                <div className="custom-unique-para mt-4 font-work-Sans-sans">
                  <p>
                    Innovation happens through connection. Our teams work seamlessly across research, trading, and engineering — transforming bold ideas into measurable impact through shared insight and disciplined execution.
                  </p>
                </div>
              </div>
              <motion.div className="relative max-sm:mt-5 w-full md:w-[50vw] h-[400px] md:h-[30vh] lg:h-[40vh] xl:h-[400px]  shadow-md overflow-hidden py-6  ">
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
              className=" flex max-sm:flex-col justify-between items-center bg-quant-white mx-10 md:mx-10 lg:mx-25 xl:mx-25 2xl:mx-35 border-b border-gray-500 py-6 overflow-hidden  "
            >
              <div className="custom-unique-heading font-bricolage_Grotesque-sans w-full md:w-[40%] xl:h-full">
                <h1 className="font-medium">Compound Learning</h1>
                <div className="custom-unique-para mt-4 font-work-Sans-sans">
                  <p>
                    We believe growth compounds when knowledge is shared. Through structured mentorship, open feedback, and real responsibility, we cultivate expertise that scales — developing individuals who elevate the whole organization.
                  </p>
                </div>
              </div>
              <motion.div className="relative max-sm:mt-5 w-full md:w-[50vw] h-[400px] md:h-[30vh] lg:h-[40vh] xl:h-[400px]  shadow-md overflow-hidden py-6  ">
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
              className=" flex max-sm:flex-col justify-between items-center bg-quant-white mx-10 md:mx-10 lg:mx-25 xl:mx-25 2xl:mx-35 border-b border-gray-500 py-6 overflow-hidden  "
            >
              <div className="custom-unique-heading font-bricolage_Grotesque-sans w-full md:w-[40%] xl:h-full">
                <h1 className="font-medium">Relentless Ownership</h1>
                <div className="custom-unique-para mt-4 font-work-Sans-sans">
                  <p>
                    We take charge — of ideas, systems, and outcomes. Every challenge is an opportunity to push boundaries, raise standards, and deliver with precision. Excellence isn’t a goal; it’s a daily practice.
                  </p>
                </div>
              </div>
              <motion.div className="relative max-sm:mt-5 w-full md:w-[50vw] h-[400px] md:h-[30vh] lg:h-[40vh] xl:h-[400px]  shadow-md overflow-hidden py-6  ">
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
