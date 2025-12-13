"use client";
import { useEffect, useRef, useState } from "react";
import { motion, useScroll, useTransform, useSpring } from "framer-motion";
import React from "react";
import OfficeImg from "../../../public/images/officeImg/office_bg.png";
import ImgPeople from "../../../public/images/team/satvik.png";
import Image from "next/image";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { IoLogoLinkedin } from "react-icons/io";
import Link from "next/link";
import { FaArrowRight } from "react-icons/fa6";

export default function OfficeCulture() {
    const teamTestimonials = [
        {
            text: `For students passionate about quantitative research and
technology, it’s a hands-on experience, working on real-world
projects, collaborating closely with experienced professionals,
and being part of a vibrant, supportive team culture.`,

            image: "/images/officeImg/anany.png",
        },
        {
            text: `Trust among peers, freedom to achieve goals, flat hierarchy, 
            and exceptional work culture - these are the cornerstones 
            of the Quantbox`,
            name: "Neha Singh",
            image: "/images/officeImg/nilesh.png",
        },
        {
            text: `At Quantbox, I have found a place where creativity meets 
            experimentation, and every challenge brings an opportunity 
            to grow. Here, collaboration and freedom fuel the journey `,
            name: "Rahul Verma",
            image: "/images/officeImg/akshit.png",
        },
        {
            text: `At Quantbox, learning happens directly from experienced 
            minds. I contribute to early conversations, share my ideas 
            that matter, and take bold steps in shaping my growth. It’s 
            the perfect first step into a place that values curiosity and 
            collaboration.`,
            name: "Neha Singh",
            image: "/images/officeImg/anish.png",
        },
        {
            text: `At Quantbox, I am applying what I learned in college to real-
            world trading systems and seeing it come to life in 
            production. I am  excited to keep growing my skills and 
            deepen my understanding of market structures.`,
            name: "Neha Singh",
            image: "/images/officeImg/mradul.png",
        },
        {
            text: `At Quantbox, I find it easy to connect with peers and 
            seniors alike, learning continuously and growing every single 
            day in an environment that values innovation and constant 
            improvement.`,
            name: "Neha Singh",
            image: "/images/officeImg/mradul_2.png",
        },
    ];
    const [index, setIndex] = useState(0);

    const prevSlide = () => {
        setIndex((prev) =>
            prev === 0 ? teamTestimonials.length - 1 : prev - 1
        );
    };

    const nextSlide = () => {
        setIndex((prev) =>
            prev === teamTestimonials.length - 1 ? 0 : prev + 1
        );
    };

    // ✅ AUTO SLIDE EVERY 4 SECONDS
    useEffect(() => {
        const interval = setInterval(() => {
            nextSlide();
        }, 4000); // 4 seconds

        return () => clearInterval(interval);
    }, []);

    const current = teamTestimonials[index];



    return (
        <>
            <Navbar />
            {/* hero section */}
            <section >
                <main
                    className={`relative bg-[url('/images/hero_bg.png')] bg-[30px_120px] md:bg-[10px_100px] xl:bg-[90px_200px] 2xl:bg-[50px_195px] bg-quant-orange bg-cover bg-no-repeat h-[45vh] md:h-[80vh] lg:h-[80vh] xl:h-[100vh] 2xl:h-[100vh] text-quant-text p-10 overflow-visible 2xl:max-w-[1920px] mx-auto`}
                >

                    {/* <div className="flex flex-wrap gap-x-2 items-center mb-2 lg:mx-15 xl:mx-10 2xl:mx-27">
                        <p className="custom-unique-para uppercase tracking-widest">
                            About us
                        </p>
                        <IoIosArrowForward />
                        <p className="custom-unique-para uppercase tracking-widest font-semibold">
                            our team
                        </p>
                    </div> */}

                    {/* Headline Text */}
                    <div className="main_heading leading-10 md:leading-12 lg:leading-15 xl:leading-20 2xl:leading-24 md:mx-0 md:mt-15 lg:mt-15 lg:mx-15 xl:mt-15 xl:mx-10 2xl:mt-20 2xl:mx-25 mt-5 uppercase font-bricolage_Grotesque-sans">
                        <h1>
                            we are a <span className="text-quant-yellow">family</span> of
                        </h1>
                        <h1>mathematicians who</h1>
                        <h1>enrich & empower</h1>
                        <h1>each other</h1>
                    </div>

                    {/* image Section  */}
                    <div className="absolute w-full top-[90%] lg:top-[50vh] xl:bottom-[-30%] xl:top-[100%] 2xl:top-[70%] flex justify-center items-center right-0 lg:right-[0%] ">
                        <div className="overflow-hidden lg:w-[70vw] lg:h-[50vh] xl:w-[80vw] xl:h-[80vh] 2xl:w-[80vw] 2xl:h-[80vh] ">
                            <Image
                                src={OfficeImg}
                                alt="office background"
                                width={5000}
                                height={100}
                                className="w-full h-full object-cover"
                            />
                        </div>
                    </div>
                </main>
            </section>
            {/* about section */}
            <section className="py-[5%] pt-[30vh] md:pt-[83vh] lg:pt-[30vh] xl:pt-[60vh] 2xl:pt-[50vh] bg-quant-gray mx-auto 2xl:max-w-[1920px]">

                {/* Content */}
                <div className="flex flex-col flex-wrap md:px-12 max-2xl:gap-y-7 xl:flex-row justify-between px-10 lg:px-30 xl:px-18 2xl:px-40 2xl:flex-nowrap text-lg tracking-wide ">
                    {/* Left Column */}
                    <div className="max-w-xl xl:w-sm 2xl:w-2xl">
                        <p className="custom-heading-para 2xl:mr-44 uppercase tracking-tight">
                            THE 3 T’S OF QB: TRUST, TEAMWORK & TOGETHERNESS
                        </p>
                    </div>

                    {/* Right Column */}
                    <div className="max-w-3xl xl:w-xl 2xl:w-xl">
                        <p className="custom-para 2xl:mr-15 text-justify tracking-tight">
                            We enculcate a beautiful relationship of growth between the mentors and mentees.

                        </p>
                        <p>
                            You learn and grow with the best to the critical minds, who are at the forefront of the market research and industry
                        </p>
                    </div>
                </div>
            </section>
            {/* our values */}
            <section className="font-bricolage_Grotesque-sans 2xl:max-w-[1920px] mx-auto">
                <div className="flex flex-wrap justify-between items-center mx-10 py-8 md:py-18 lg:mx-25 lg:py-18 xl:mx-20 2xl:mx-35 ">
                    <div className="main_sub_heading_gb uppercase ">
                        <h1 className="">
                            Our<span className="text-[#BA4B2F]"> values </span>
                        </h1>
                    </div>
                    <div className="custom-heading-para font-work-Sans-sans uppercase max-sm:mt-8 2xl:mx-5">
                        <p className="">
                            our values are our foundation of success
                        </p>
                        <p>
                            and growth aspirations
                        </p>
                    </div>
                </div>
                <div className=" bg-quant-white font-bricolage_Grotesque-sans ">
                    {/*  add h-[400vh] */}
                    <section className="relative bg-transparent">
                        {/* Sticky viewport container */}
                        <div className="sticky top-[80px] flex flex-col items-center justify-center bg-quant-white w-full space-y-4 pb-5">
                            {/* Section 1 */}
                            <motion.div
                                // style={{ height: img1Height }}
                                className=" flex max-lg:flex-wrap justify-between items-start bg-quant-white w-[87%] lg:w-[80%] xl:w-[87%] 2xl:w-[85%] border-b border-gray-800 pb-5 overflow-hidden "
                            >
                                <div className="flex flex-col justify-center items-start uppercase max-sm:order-1 max-sm:mx-auto max-sm:mt-5 xl:mt-20 2xl:mt-20">
                                    <h1 className="main_video_title font-bold text-gray-800 ">pankaj kewalramani</h1>
                                    <div className="capitalize font-work-Sans-sans main_video_para max-lg:mr-10">
                                        <p className="mt-5 ">“At the core of our culture there are 3 non-negotiable </p>
                                        <p>
                                            pillars - tenacity, integrity & accountability.”
                                        </p>
                                    </div>
                                </div>
                                <motion.div className="relative max-lg:mx-auto max-lg:mt-5 lg:w-[400px] xl:w-[650px] 2xl:w-[900px] bg-quant-orange shadow-md overflow-hidden pb-5">
                                    <video
                                        src="/videos/pankaj_kewalramani.mp4"
                                        loop
                                        muted
                                        controls
                                        className="object-cover"
                                        playsInline
                                        preload="auto"
                                        autoPlay
                                    />
                                </motion.div>

                            </motion.div>
                            {/* Section 2 */}
                            <motion.div
                                // style={{ height: img1Height }}
                                className=" flex max-lg:flex-wrap justify-between items-start bg-quant-white w-[87%] lg:w-[80%] xl:w-[87%] 2xl:w-[85%] border-b border-gray-800 pb-5 overflow-hidden "
                            >
                                <div className="flex flex-col justify-center items-start uppercase max-sm:order-1 max-sm:mx-auto max-sm:mt-5 xl:mt-20 2xl:mt-20">
                                    <h1 className="main_video_title font-bold text-gray-800 ">sathvik gupta</h1>
                                    <div className="capitalize font-work-Sans-sans main_video_para max-lg:mr-10">
                                        <p className="mt-5 ">“Big part of our culture is inveting in prople. We </p>
                                        <p>focus on traning and mentorship of fresh talent”</p>
                                    </div>
                                </div>
                                <motion.div className="relative max-lg:mx-auto max-lg:mt-5  lg:w-[400px] xl:w-[650px] 2xl:w-[900px] bg-quant-orange shadow-md overflow-hidden pb-5">
                                    <video
                                        src="/videos/sathvik_gupta.mp4"
                                        loop
                                        muted
                                        controls
                                        className="object-cover"
                                        playsInline
                                        preload="auto"
                                        autoPlay
                                    />
                                </motion.div>

                            </motion.div>
                            {/* Section 3 */}
                            <motion.div
                                // style={{ height: img1Height }}
                                className=" flex max-lg:flex-wrap justify-between items-start bg-quant-white w-[87%] lg:w-[80%] xl:w-[87%] 2xl:w-[85%] border-b border-gray-800 pb-5 overflow-hidden "
                            >
                                <div className="flex flex-col justify-center items-start uppercase max-sm:order-1 max-sm:mx-auto max-sm:mt-5 xl:mt-20 2xl:mt-20">
                                    <h1 className="main_video_title font-bold text-gray-800 ">ANKuSH PHULIA</h1>
                                    <div className="capitalize font-work-Sans-sans main_video_para max-lg:mr-10">
                                        <p className="mt-5 ">“As a firm we place long term bets on people & ideas, </p>
                                        <p>backed by system & process that drive sustainable </p>
                                        <p>progress”</p>
                                    </div>
                                </div>
                                <motion.div className="relative max-lg:mx-auto max-lg:mt-5  lg:w-[400px] xl:w-[650px] 2xl:w-[900px] bg-quant-orange shadow-md overflow-hidden pb-5">
                                    <video
                                        src="/videos/ankush_phulia.mp4"
                                        loop
                                        muted
                                        controls
                                        className="object-cover"
                                        playsInline
                                        preload="auto"
                                        autoPlay
                                    />
                                </motion.div>

                            </motion.div>


                        </div>
                    </section>
                </div>
            </section>
            {/* world from our team */}
            <section className="2xl:max-w-[1920px] bg-quant-gray py-10 xl:py-20 mx-auto">
                {/* Heading */}
                <div className="mx-10 lg:mx-25 xl:mx-20 2xl:mx-35 xl:mb-16">
                    <div className="main_sub_heading_gb font-bricolage_Grotesque-sans uppercase xl:leading-18 2xl:leading-20">
                        <h1>words from</h1>
                        <h1>
                            Our <span className="text-[#BA4B2F]">team</span>
                        </h1>
                    </div>
                </div>

                {/* Carousel */}
                <div className="flex flex-col md:flex-row justify-center items-center gap-12 relative max-lg:mt-5 max-lg:flex-wrap">

                    {/* LEFT ARROW */}
                    <button
                        onClick={prevSlide}
                        className="absolute left-2 lg:left-10 xl:left-[10%] 2xl:left-[20%] md:left-10 top-1/2 -translate-y-1/2 w-12 h-12 rounded-full border flex items-center justify-center hover:bg-black hover:text-white transition"
                    >
                        ←
                    </button>

                    {/* QUOTE ICON */}
                    <div className="w-[30px] xl:w-[50px] overflow-hidden">
                        <Image
                            alt="quote"
                            src="/images/officeImg/colan.png"
                            width={400}
                            height={500}
                            className="w-full h-full"
                        />
                    </div>

                    {/* TEXT */}
                    <div className="max-w-xl text-center md:text-left px-6 transition-all duration-500">
                        <p className="main_video_para leading-6">
                            {current.text}
                        </p>
                    </div>

                    {/* IMAGE */}
                    <div className=" w-[100px] xl:w-[180px] xl:h-[220px] overflow-hidden transition-all duration-500">
                        <Image
                            alt="image"
                            src={current.image}
                            width={8000}
                            height={500}
                            className="w-full h-full object-cover"
                        />
                    </div>

                    {/* RIGHT ARROW */}
                    <button
                        onClick={nextSlide}
                        className="absolute right-2 lg:right-10 xl:right-[10%] 2xl:right-[20%] md:right-10 top-1/2 -translate-y-1/2 w-12 h-12 rounded-full border flex items-center justify-center hover:bg-black hover:text-white transition"
                    >
                        →
                    </button>
                </div>
            </section>
            {/* global presence */}
            <section className="2xl:max-w-[1920px] mx-auto">
                <div className="flex justify-between items-center max-sm:flex-wrap mx-10 lg:mx-25 py-10 xl:mx-20 xl:py-18 2xl:mx-35 2xl:py-18 font-bricolage_Grotesque-sans">
                    <div className="main_sub_heading_gb uppercase xl:leading-18 2xl:leading-18">
                        <h1 >
                            <span className="text-[#BA4B2F]"> global </span>
                        </h1>
                        <h1 >
                            presence
                        </h1>
                    </div>
                    <div className="max-sm:mt-5 md:mx-10 lg:mx-5">
                        <div className="main_video_para font-work-Sans-sans uppercase ">
                            <p >
                                Our offices are designed to encourage collaboration
                            </p>
                            <p>
                                amongst various colleagues.  Our offices are
                            </p>
                            <p>
                                designed to encourage collaboration amongst
                            </p>
                            <p>
                                various colleagues.
                            </p>
                        </div>
                        <button >
                            <Link className="uppercase max-sm:mt-5 px-8 py-2 xl:px-15 xl:py-5 bg-quant-blue text-quant-white flex items-center gap-x-5 mt-5 cursor-pointer font-work-Sans-sans" href="/global_office">  view our offices <FaArrowRight /></Link>
                        </button>
                    </div>
                </div>
            </section>
            {/* explore careers */}
            <section className="2xl:max-w-[1920px] mx-auto">
                <div className="bg-[url('/images/officeImg/carrer_banner.png')] bg-cover bg-center w-full h-[300px] md:h-[500px]">
                    <div className="flex flex-col justify-center items-center h-full text-center">
                        <div className="main_sub_heading uppercase font-bricolage_Grotesque-sans 2xl:leading-20 text-quant-white">
                            <h1>
                                explore <span className="text-quant-yellow">careers</span> of
                            </h1>
                            <h1>at quantbox</h1>
                        </div>
                        <button>
                            <Link
                                href="/careers"
                                className="uppercase px-8 py-2 xl:px-15 xl:py-5 bg-quant-yellow text-quant-black flex items-center gap-x-5 mt-5 cursor-pointer font-work-Sans-sans"
                            >
                                see open positions <FaArrowRight />
                            </Link>
                        </button>
                    </div>
                </div>
            </section>


            <Footer />
        </>
    );
}
