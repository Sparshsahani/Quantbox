"use client";

import { useRef } from "react";
import { motion, useScroll, useTransform, useSpring } from "framer-motion";
import Image from "next/image";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import BgImg from "../../../public/images/globalimg/global_bg.png";

export default function GlobalOffice() {
    // const ref = useRef(null);

    // // Track scroll progress for the section
    // const { scrollYProgress } = useScroll({
    //     target: ref,
    //     offset: ["start start", "end end"],
    // });

    // // Smooth spring to avoid jumpy transitions
    // const smoothProgress = useSpring(scrollYProgress, {
    //     stiffness: 120,
    //     damping: 20,
    //     mass: 0.22,
    // });

    // // Height transforms — they are reversible automatically!
    // const img1Height = useTransform(smoothProgress, [0.0, 0.14], ["400px", "100px"]);
    // const img2Height = useTransform(smoothProgress, [0.14, 0.28], ["400px", "100px"]);
    // const img3Height = useTransform(smoothProgress, [0.28, 0.42], ["400px", "100px"]);
    // const img4Height = useTransform(smoothProgress, [0.42, 0.56], ["400px", "100px"]);
    // const img5Height = useTransform(smoothProgress, [0.56, 0.70], ["400px", "100px"]);
    // const img6Height = useTransform(smoothProgress, [0.70, 0.84], ["400px", "100px"]);
    // const img7Height = useTransform(smoothProgress, [0.84, 1.00], ["400px", "100px"]);



    return (
        <>
            <Navbar />
            {/* hero section */}
            <section >
                <main
                    className={`relative bg-[url('/images/hero_bg.png')] bg-[30px_120px] md:bg-[10px_100px] xl:bg-[90px_200px] 2xl:bg-[50px_195px] bg-quant-orange bg-cover bg-no-repeat h-[45vh] md:h-[80vh] lg:h-[80vh] xl:h-[100vh] 2xl:h-[100vh] text-quant-text p-10 overflow-visible 2xl:max-w-[1920px] mx-auto`}
                >

                    <div className="flex flex-wrap gap-x-2 items-center mb-2 lg:mx-15 xl:mx-10 2xl:mx-27">
                        <p className="custom-unique-para uppercase tracking-widest">
                            GLOBAL OFFICES
                        </p>
                    </div>

                    {/* Headline Text */}
                    <div className="main_heading leading-10 md:leading-12 lg:leading-15 xl:leading-20 2xl:leading-24 md:mx-0 md:mt-15 lg:mt-15 lg:mx-15 xl:mt-15 xl:mx-10 2xl:mt-20 2xl:mx-25 mt-5  uppercase font-bricolage_Grotesque-sans">
                        <h1>
                            becoming a <span className="text-quant-yellow">global</span>
                        </h1>
                        <h1><span className="text-quant-yellow">player</span> is our primary </h1>
                        <h1>ambition</h1>
                    </div>

                    {/* image Section  */}
                    <div className="absolute w-full top-[90%] lg:top-[75vh] xl:bottom-[-30%] xl:top-[100%] 2xl:top-[70%] flex justify-center items-center right-0 lg:right-[0%] ">
                        <div className="overflow-hidden lg:w-[70vw] lg:h-[70vh] xl:w-[80vw] xl:h-[80vh] 2xl:w-[80vw] 2xl:h-[80vh] ">
                            <Image
                                src={BgImg}
                                alt="Qb chess background"
                                width={1000}
                                height={1000}
                                className="w-full h-full object-cover"
                            />
                        </div>
                    </div>
                </main>
            </section>
            {/* about section */}
            <section className="py-[5%] pt-[30vh] md:pt-[83vh] lg:pt-[30vh] xl:pt-[60vh] 2xl:pt-[50vh] bg-quant-gray mx-auto 2xl:max-w-[1920px]">

                {/* Content */}
                <div className="flex flex-col  md:px-12 max-2xl:gap-y-7 xl:flex-row justify-between px-10 lg:px-30 xl:px-20 2xl:px-35 2xl:flex-nowrap text-lg tracking-wide ">
                    {/* Left Column */}
                    <div className="main_sub_heading_gb uppercase">
                        <h1 className=" xl:leading-18 2xl:leading-18 font-bricolage_Grotesque-sans">
                            explor our <br /> <span className="text-[#BA4B2F]"> global offices </span>
                        </h1>
                    </div>

                    {/* Right Column */}
                    <div className="max-w-3xl xl:w-xl 2xl:w-xl">
                        <p className="custom-para lg:mr-20 2xl:mr-15 text-justify tracking-tight">
                            We enculcate a beautiful relationship of growth between the mentors and mentees.

                        </p>
                        <p>
                            You learn and grow with the best to the critical minds, who are at the forefront of the market research and industry
                        </p>
                    </div>
                </div>
            </section>
            {/* add  ref= ref and add min-h-[400vh] */}
            <div className=" bg-white font-bricolage_Grotesque-sans ">
                {/*  add h-[400vh] */}
                <section className="relative bg-transparent">
                    {/* Sticky viewport container */}
                    <div className="sticky top-[80px] flex flex-col items-center justify-center bg-white w-full space-y-4 pb-5">
                        {/* Section 1 */}
                        <motion.div
                            // style={{ height: img1Height }}
                            className=" flex justify-between flex-wrap items-center bg-white w-[87%]  lg:w-[80%] xl:w-[87%] 2xl:w-[80%] border-b border-gray-800 pb-5 overflow-hidden"
                        >
                            <div className="flex justify-center items-center gap-x-5 uppercase max-sm:order-1 max-sm:mx-auto max-sm:mt-5">
                                <h1 className="main_sub_animation_title font-bold text-gray-800 ">Amsterdam</h1>
                                <Image
                                    alt=""
                                    src="/images/flags/amst.png"
                                    width={50}
                                    height={100}
                                    className=""
                                />
                            </div>
                            <motion.div className="relative w-[400px] h-[200px] md:w-[400px] md:h-[200px] lg:h-[400px] lg:w-[500px] xl:w-[750px] 2xl:w-[900px]  shadow-md overflow-hidden pb-5">
                                <Image
                                    src="/images/globalimg/amster.png"
                                    alt="amsterdam_scean"
                                    fill
                                    className="object-cover"
                                />
                            </motion.div>

                        </motion.div>

                        {/* Section 2 */}
                        <motion.div
                            // style={{ height: img2Height }}
                            className="flex justify-between flex-wrap items-center bg-white w-[87%] lg:w-[80%] xl:w-[87%] 2xl:w-[80%] border-b border-gray-800 pb-5 overflow-hidden"
                        >
                            <div className="flex justify-center items-center gap-x-5 uppercase max-sm:order-1 max-sm:mx-auto max-sm:mt-5">
                                <h1 className="main_sub_animation_title font-bold text-gray-800">bengaluru</h1>
                                <Image
                                    alt=""
                                    src="/images/flags/bangalore.png"
                                    width={50}
                                    height={100}
                                    className=""
                                />
                            </div>
                            <motion.div className="relative w-[400px] h-[200px] md:w-[400px] md:h-[200px] lg:h-[400px] lg:w-[500px] xl:w-[750px] 2xl:w-[900px]  shadow-md overflow-hidden pb-5">
                                <Image
                                    src="/images/globalimg/bengaluru.png"
                                    alt="WORKING & LEARNING"
                                    fill
                                    className="object-cover"
                                />
                            </motion.div>
                        </motion.div>

                        {/* Section 3 */}
                        <motion.div
                            // style={{ height: img3Height }}
                            className="flex justify-between flex-wrap items-center bg-white w-[87%] lg:w-[80%] xl:w-[87%] 2xl:w-[80%] border-b border-gray-800 pb-5 overflow-hidden"
                        >
                            <div className="flex justify-center items-center gap-x-5 uppercase max-sm:order-1 max-sm:mx-auto max-sm:mt-5">
                                <h1 className="main_sub_animation_title font-bold text-gray-800">cambridge</h1>
                                <Image
                                    alt=""
                                    src="/images/flags/camb.png"
                                    width={50}
                                    height={100}
                                    className=""
                                />
                            </div>
                            <motion.div className="relative w-[400px] h-[200px] md:w-[400px] md:h-[200px] lg:h-[400px] lg:w-[500px] xl:w-[750px] 2xl:w-[900px]  shadow-md overflow-hidden pb-5">
                                <Image
                                    src="/images/globalimg/cambridge.png"
                                    alt="CREATIVE THINKING"
                                    fill
                                    className="object-cover"
                                />
                            </motion.div>
                        </motion.div>

                        {/* Section 4 */}
                        <motion.div
                            // style={{ height: img4Height }}
                            className="flex justify-between flex-wrap items-center bg-white w-[87%] lg:w-[80%] xl:w-[87%] 2xl:w-[80%] border-b border-gray-800  pb-5 overflow-hidden"
                        >
                            <div className="flex justify-center items-center gap-x-5 uppercase max-sm:order-1 max-sm:mx-auto max-sm:mt-5">
                                <h1 className="main_sub_animation_title font-bold text-gray-800">chicago</h1>
                                <Image
                                    alt=""
                                    src="/images/flags/chigo.png"
                                    width={50}
                                    height={100}
                                    className=""
                                />
                            </div>
                            <motion.div className="relative w-[400px] h-[200px] md:w-[400px] md:h-[200px] lg:h-[400px] lg:w-[500px] xl:w-[750px] 2xl:w-[900px]  shadow-md overflow-hidden pb-5">
                                <Image
                                    src="/images/globalimg/chicago.png"
                                    alt="COLLABORATION"
                                    fill
                                    className="object-cover"
                                />
                            </motion.div>
                        </motion.div>
                        {/* Section 5 */}
                        <motion.div
                            // style={{ height: img5Height }}
                            className="flex justify-between flex-wrap items-center bg-white w-[87%] lg:w-[80%] xl:w-[87%] 2xl:w-[80%] border-b border-gray-800  pb-5 overflow-hidden"
                        >
                            <div className="flex justify-center items-center gap-x-5 uppercase max-sm:order-1 max-sm:mx-auto max-sm:mt-5">
                                <h1 className="main_sub_animation_title font-bold text-gray-800">delhi</h1>
                                <Image
                                    alt=""
                                    src="/images/flags/delhi.png"
                                    width={50}
                                    height={100}
                                    className=""
                                />
                            </div>
                            <motion.div className="relative w-[400px] h-[200px] md:w-[400px] md:h-[200px] lg:h-[400px] lg:w-[500px] xl:w-[750px] 2xl:w-[900px]  shadow-md overflow-hidden pb-5">
                                <Image
                                    src="/images/globalimg/delhi.png"
                                    alt="COLLABORATION"
                                    fill
                                    className="object-cover"
                                />
                            </motion.div>
                        </motion.div>
                        {/* Section 6 */}
                        <motion.div
                            // style={{ height: img6Height }}
                            className="flex justify-between flex-wrap items-center bg-white w-[87%] lg:w-[80%] xl:w-[87%] 2xl:w-[80%] border-b border-gray-800  pb-5 overflow-hidden"
                        >
                            <div className="flex justify-center items-center gap-x-5 uppercase max-sm:order-1 max-sm:mx-auto max-sm:mt-5">
                                <h1 className="main_sub_animation_title font-bold text-gray-800">hongkong</h1>
                                <Image
                                    alt=""
                                    src="/images/flags/hong.png"
                                    width={50}
                                    height={100}
                                    className=""
                                />
                            </div>
                            <motion.div className="relative w-[400px] h-[200px] md:w-[400px] md:h-[200px] lg:h-[400px] lg:w-[500px] xl:w-[750px] 2xl:w-[900px]  shadow-md overflow-hidden pb-5">
                                <Image
                                    src="/images/globalimg/hongkong.png"
                                    alt="COLLABORATION"
                                    fill
                                    className="object-cover"
                                />
                            </motion.div>
                        </motion.div>
                        {/* Section 7 */}
                        <motion.div
                            // style={{ height: img7Height }}
                            className="flex justify-between flex-wrap items-center bg-white w-[87%] lg:w-[80%] xl:w-[87%] 2xl:w-[80%] pb-5 overflow-hidden"
                        >
                            <div className="flex justify-center items-center gap-x-5 uppercase max-sm:order-1 max-sm:mx-auto max-sm:mt-5">
                                <h1 className="main_sub_animation_title font-bold text-gray-800">singapore</h1>
                                <Image
                                    alt=""
                                    src="/images/flags/singa.png"
                                    width={50}
                                    height={100}
                                    className=""
                                />
                            </div>
                            <motion.div className="relative w-[400px] h-[200px] md:w-[400px] md:h-[200px] lg:h-[400px] lg:w-[500px] xl:w-[750px] 2xl:w-[900px]  shadow-md overflow-hidden pb-5">
                                <Image
                                    src="/images/globalimg/singapore.png"
                                    alt="COLLABORATION"
                                    fill
                                    className="object-cover"
                                />
                            </motion.div>
                        </motion.div>
                    </div>
                </section>

                {/* Spacer */}
                <div className=" md:h-[10vh] ">
                </div>
            </div>
            <Footer />
        </>
    );
}
