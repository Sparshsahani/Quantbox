"use client";
import React, { useRef, useEffect, useState } from "react";
import { FaArrowRightLong } from "react-icons/fa6";
import { motion, useScroll, useSpring, useTransform } from "framer-motion";
import Image from "next/image";
import PlusImg from "../../public/images/codewithpurposeImg/life_work.png"

export default function CodeWithPurpose() {
  const videoRef = useRef(null);

  const { scrollYProgress } = useScroll({
    target: videoRef,
    offset: ["start end", "end end"],
  });

  // Detect screen width for responsive range logic
  const [screenSize, setScreenSize] = useState("desktop");

  useEffect(() => {
    const updateScreenSize = () => {
      const width = window.innerWidth;
      if (width < 640) setScreenSize("sm");
      else if (width < 768) setScreenSize("md");
      else if (width < 1024) setScreenSize("lg");
      else setScreenSize("xl");
    };

    updateScreenSize();
    window.addEventListener("resize", updateScreenSize);
    return () => window.removeEventListener("resize", updateScreenSize);
  }, []);

  // Scroll-based responsive width ranges
  let widthRange;
  if (screenSize === "sm") {
    widthRange = ["20vw", "80vw"];
  } else if (screenSize === "md") {
    widthRange = ["20vw", "80vw"];
  } else if (screenSize === "lg") {
    widthRange = ["30vw", "70vw"];
  } else {
    widthRange = ["20vw", "60vw"];
  }

  const rawWidth = useTransform(scrollYProgress, [0, 1], widthRange);
  const rawHeight = useTransform(scrollYProgress, [0, 1], ["70vh", "70vh"]);

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
    <>
      <section className="relative md:py-20 bg-quant-orange w-full h-full bg-[url('/images/hero_bg.png')] bg-[30px_120px] md:bg-[10px_100px] xl:bg-[90px_200px] 2xl:bg-[50px_195px] bg-cover bg-no-repeat">
        <div className="px-6 py-16 md:py-0 md:mx-4 xl:mx-16 2xl:mx-36 flex flex-col gap-y-20">
          <div className="flex flex-col gap-y-5 ">
            <div className="custom-heading xl:leading-18 2xl:leading-20 text-quant-white 2xl:mr-80 uppercase font-medium">
              <h1>Code with purpose.</h1>
              <h1>Learn from the best.</h1>
            </div>
            <div className="custom-para text-quant-white font-work-Sans-sans tracking-wide xl:mr-[45%] 2xl:mr-[62%]">
              <p>
                Delve deep into the experience of internships that let you gain
                insights into real world problem solving, working and getting
                mentored by the most brilliant minds of the current industry,
              </p>
            </div>

            <div className=" bg-quant-dark-yellow md:w-[40vw] lg:w-[30vw] md:h-[4vh] xl:w-[22vw] 2xl:w-[20vw] flex justify-center items-center gap-2">
              <button className="custom-para uppercase">
                JOIN OUR INTERNSHIPS
              </button>
              <FaArrowRightLong className="text-2xl" />
            </div>
          </div>
          <div className="w-full md:h-[20vh] 2xl:h-[10vh] max-sm:hidden flex justify-center items-center ">
              <div className="ml-50 w-[20vw]">
                  <Image
                  src={PlusImg}
                  alt="plus_logo"
                  width={500}
                  height={500}
                  className="w-full h-full object-cover object-center"
                  />
              </div>
          </div>
          <div className="relative h-full flex flex-col justify-end items-baseline ">
            <div className="before:content-[''] before:absolute before:left-[10vw] before:top-[50%] before:h-[15%] before:w-[1px] max-sm:hidden md:before:left-00 md:before:top-[-50%] md:before:h-[20%] md:before:left-0 lg:before:left-0 lg:before:h-[25%] lg:before:top-[-55%] xl:before:left-0 xl:before:top-[-53%] xl:before:h-[50%] 2xl:before:top-[-35%] before:bg-gray-200"></div>
            {/* Rotated Text aligned to the left of red box */}
            <div className="absolute bottom-0 md:bottom-0 left-9 md:left-5 lg:left-7 xl:left-7 rotate-[-90deg] origin-left text-left custom-heading-para whitespace-nowrap">
              <p className="uppercase text-quant-white tracking-wider lg:text-[20px]">
                AT QUANTBOX people power every
              </p>
              <p className="uppercase text-quant-white tracking-wider">
                line of code
              </p>
            </div>

            {/* Flex row to align video bottom right */}
            <div className="w-full flex justify-end items-end px-4 pb-4">
              <motion.div
                ref={videoRef}
                style={{
                  width,
                  height,
                  willChange: "width, height",
                  transition: "all ease-in",
                }}
                className="overflow-hidden"
              >
                <video
                  className="w-full h-full object-cover"
                  autoPlay
                  loop
                  muted
                  playsInline
                >
                  <source src="/videos/Render.mp4" type="video/mp4" />
                  Your browser does not support the video tag.
                </video>
              </motion.div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
