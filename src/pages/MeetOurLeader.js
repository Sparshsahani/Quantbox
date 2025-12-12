"use client";
import Image from 'next/image'
import Link from 'next/link'
import React, { useState } from 'react'
import { IoLogoLinkedin } from "react-icons/io";
import { FaArrowRight } from "react-icons/fa6";
import { RxCross1 } from "react-icons/rx";
import { motion, AnimatePresence } from "framer-motion";


export default function MeetOurLeader() {
    const [open, setOpen] = useState(false);
    const [activeIndex, setActiveIndex] = useState(null);
    const [isPopupOpen, setIsPopupOpen] = useState(false);
    const [selectedPerson, setSelectedPerson] = useState(null);


    const people = [
        {
            img: "/images/leader/prashant.png",
            name: "PRASHANT SINGH",
            role: "Chief Executive Officer",
            linkedin: "https://www.linkedin.com/in/pkusingh/",
            description: ` Prashant is the founder and main inspiration behind Quantbox. A successful and dedicated quant trader by profession while a statistician by education, he brings expertise in quant trading.`,
            description_2: `Prashant is the founder and main inspiration behind Quantbox. A successful and dedicated quant trader by profession while a statistician by education, he brings expertise in quant trading.

Prashant had been in quantitative trading and research for more than 12 years. In 2020, he founded Quantbox Research, an algorithmic trading firm. Before that, he was a senior vice president at AlphaGrep Securities, a proprietary trading firm. He has set up and built a team of high potential traders from scratch, which eventually became one of the most sought after and profitable team in the industry.

Before that, he worked at Morgan Stanley from 2008 to 2012 fixed income division. He holds a Bachelor in Statistics and a Master in Statistics degree from Indian Statistical Institute, Kolkata.

Playing and following the world of chess is something that interests him outside his day job!`
        },
        {
            img: "/images/leader/gunjan.png",
            name: "GUNJAN KANDOI",
            role: "Chief Financial Officer",
            linkedin: "https://www.linkedin.com/in/gunjan-kandoi-11680b6/",
            description: ` Gunjan is Quantbox's CFO and business development head for APAC Markets. He brings along 12+ yrs experience in investment banking and quantitative research from Morgan Stanley New York.`,
            description_2: `Gunjan is Quantbox's CFO and business development head for APAC Markets. He brings along 12+ yrs experience in investment banking and quantitative research from Morgan Stanley New York.

Gunjan's decade plus investment banking (Morgan Stanley, NY) experience has helped the firm with initiation into lots of markets and opportunities. There he was involved in commodities and energy trading business. Prior to that he did his 5yr Int. M.Tech in Mathematics and Computing from IIT Delhi.

His calm but firm approach helps to forge some of the strongest ties with clients and partners alike.  When off-duty, he will be found spending time family, on road trips (hates to fly) or bingeing on Netflix.`
        },
        {
            img: "/images/leader/pankaj.png",
            name: "PANKAJ KEWALRAMANI",
            role: "Chief Technology Officer",
            linkedin: "https://www.linkedin.com/in/pankajprateek/",
            description: `Pankaj being the CTO of Quantbox, cruises through the tasks of hiring, grooming and leading the tech talent of the firm. In doing so, he deploys his vast experience in the low-latency development stack.`,
            description_2: `Pankaj being the CTO of Quantbox, cruises through the tasks of hiring, grooming and leading the tech talent of the firm. In Doing so, he deploys his vast experience in the low-latency development stack.

Prior to that, he was a part of the infrastructure team at AlphaGrep, where he led low-latency development in various exchanges including CME, India, Korea.

Pankaj did his B.Tech-M.Tech in Computer Science from IIT Kanpur. If not found tinkering with open source, or working with mathematical puzzles, he would be indulging in his passion to experiment with various cuisines and drinks.`
        },
    ];
    return (
        <>
            <section className="font-bricolage_Grotesque-sans 2xl:max-w-[1920px] mx-auto">
                <div className="main_sub_heading uppercase my-10 xl:my-15 2xl:my-19">
                    <h1 className="mx-10 lg:mx-25 xl:mx-20 2xl:mx-35">
                        meet our<span className="text-[#BA4B2F]"> leaders </span>
                    </h1>
                </div>
                <div className="flex flex-wrap justify-start md:justify-center lg:justify-start gap-x-5 gap-y-12 mx-10 mb-10 lg:mx-20 xl:mx-25 xl:mb-20 2xl:mx-35 2xl:mb-34">
                    {people.map((person, index) => {
                        return <div key={index} className=" min-w-[100px] md:w-[270px] lg:w-[270px] xl:w-[370px] 2xl:w-[520px] ">
                            <div className="m-5 2xl:h-[620px]">
                                <div className="relative group overflow-hidden"
                                    onMouseEnter={() => setActiveIndex(index)}
                                    onMouseLeave={() => setActiveIndex(null)}>
                                    {/* IMAGE */}
                                    <Image
                                        src={person.img}
                                        alt="Team"
                                        width={1000}
                                        height={1000}
                                        className="w-full h-full 2xl:h-[70vh] object-cover"
                                    />

                                    {/* HOVER POPUP */}
                                    <div

                                        className={`absolute left-0 w-full h-full bg-quant-orange flex flex-col items-center justify-center text-quant-white text-center font-work-Sans-sans hover_text transition-all duration-500 ease-in-out cursor-pointer px-3 xl:px-9 lg:leading-5 xl:leading-8 2xl:leading-11 ${activeIndex === index ? "top-0" : "top-[85%]"} xl:${activeIndex === index ? "top-0" : "top-[100%]"}`}
                                    >
                                        <p>{person.description}</p>

                                        <button
                                            onClick={(e) => {
                                                e.stopPropagation();
                                                setSelectedPerson(person);
                                                setIsPopupOpen(true);
                                            }}
                                            className="uppercase custom_read_more_btn flex items-center gap-x-2 mx-auto mt-5 cursor-pointer"
                                        >
                                            read more <FaArrowRight />
                                        </button>

                                    </div>

                                </div>

                                {/* NAME + ROLE + LINK */}
                                <div className="flex justify-between mt-5 w-full">
                                    <div>
                                        <h1 className="font-semibold custom-unique-heading">
                                            {person.name}
                                        </h1>
                                        <h1 className="custom-unique-para">
                                            {person.role}
                                        </h1>
                                    </div>

                                    <Link href={person.linkedin} target="_blank">
                                        <IoLogoLinkedin className="text-quant-orange text-4xl duration-150 hover:scale-110" />
                                    </Link>
                                </div>
                            </div>

                        </div>
                    })}
                </div>
                <div className='text-center'>
                    <button >
                        <Link
                            href="/team"
                            className="uppercase px-8 py-2 xl:px-15 xl:py-5 bg-quant-blue text-quant-white flex items-center gap-x-5 2xl:mt-10 cursor-pointer font-work-Sans-sans"
                        >
                            meet our team <FaArrowRight />
                        </Link>
                    </button>
                </div>

                {/* popus */}
                <AnimatePresence>
                    {isPopupOpen && selectedPerson && (
                        <>
                            {/* DARK BACKDROP */}
                            <motion.div
                                initial={{ opacity: 0 }}
                                animate={{ opacity: 0.6 }}
                                exit={{ opacity: 0 }}
                                transition={{ duration: 0.3 }}
                                className="fixed inset-0 bg-black z-[9]"
                                onClick={() => {
                                    setIsPopupOpen(false);
                                    setSelectedPerson(null);
                                }}
                            />
                            <motion.section
                                initial={{ opacity: 0, y: 40 }}
                                animate={{ opacity: 1, y: 0 }}
                                exit={{ opacity: 0, y: 40 }}
                                transition={{ duration: 0.4, ease: "easeOut" }}
                                className="fixed top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[90vw] max-h-[90vh] bg-quant-white z-10 overflow-y-auto scrollbar-hide"

                            >
                                {/* CLOSE */}
                                <div className="flex justify-end main_sub_heading mr-3 xl:mr-6 2xl:mr-9 my-5 2xl:my-10">
                                    <RxCross1
                                        onClick={() => {
                                            setIsPopupOpen(false);
                                            setSelectedPerson(null);
                                        }}
                                        className="text-quant-orange font-extralight cursor-pointer"
                                    />
                                </div>

                                <div className=" flex max-lg:flex-col justify-center items-start pb-20 ">
                                    {/* IMAGE */}
                                    <div className="w-full lg:w-[40%]">
                                        <div className="w-[50%] md:w-[30vw] lg:w-[25vw] xl:w-[18vw] 2xl:w-[20vw] mx-auto">
                                            <Image
                                                alt={selectedPerson.name}
                                                src={selectedPerson.img}
                                                width={500}
                                                height={500}
                                                className="w-full h-full object-cover"
                                            />
                                        </div>
                                    </div>

                                    {/* CONTENT */}
                                    <div className="lg:w-[60%] max-lg:mx-10 max-lg:mt-5 relative">
                                        <div className="font-work-Sans-sans">
                                            {/* NAME */}
                                            <h1 className="font-semibold hover_block font-bricolage_Grotesque-sans uppercase">
                                                <span className="text-quant-orange">
                                                    {selectedPerson.name.split(" ")[0]}
                                                </span>{" "}
                                                {selectedPerson.name.split(" ").slice(1).join(" ")}
                                            </h1>

                                            {/* ROLE */}
                                            <h1 className="custom-unique-heading">
                                                {selectedPerson.role}
                                            </h1>

                                            {/* DESCRIPTION (MAP ✅) */}
                                            <div className="font-work-Sans-sans hover_para mt-5 2xl:mt-12 flex flex-col gap-y-2 2xl:gap-y-10 items-baseline lg:mr-10 xl:mr-10 2xl:mr-50">
                                                {selectedPerson.description_2
                                                    .split("\n\n")
                                                    .map((para, i) => (
                                                        <p key={i}>{para}</p>
                                                    ))}
                                            </div>

                                            {/* LINKEDIN */}
                                            <Link href={selectedPerson.linkedin} target="_blank">
                                                <IoLogoLinkedin className="text-quant-orange text-4xl duration-150 hover:scale-110 " />
                                            </Link>
                                        </div>
                                    </div>
                                </div>
                            </motion.section>
                        </>
                    )}

                </AnimatePresence>

            </section>
        </>
    )
}
