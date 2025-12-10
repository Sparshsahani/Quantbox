import React from "react";
import QbChessImg from "../../../public/images/team/team_bg.png";
import ImgPeople from "../../../public/images/team/satvik.png";
import Image from "next/image";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { IoLogoLinkedin } from "react-icons/io";
import Link from "next/link";
import { IoIosArrowForward } from "react-icons/io";

export default function Team() {
    const people = [
        {
            img: "/images/team/satvik.png",
            name: "Satvik gupta",
            role: "Portfolio Manager",
            linkedin:"https://www.linkedin.com/in/satvik-gupta-7b136153/",
        },
        {
            img: "/images/team/ankush.png",
            name: "Ankush Phulia",
            role: "Portfolio Manager",
            linkedin:"https://www.linkedin.com/in/ankush-phulia/",
        },
        {
            img: "/images/team/james.png",
            name: "James Fissler",
            role: "Portfolio Manager",
            linkedin:"https://www.linkedin.com/in/james-f-27828710b/",
        },
        {
            img: "/images/team/shashank.png",
            name: "Shashank Kanoria",
            role: "Treading Head",  
            linkedin:"https://www.linkedin.com/in/shashank-kanoria-b0b80613b/",
        },
        {
            img: "/images/team/edmund.png",
            name: "Edmund Ho",
            role: "Global Head of Business Development",
            linkedin:"https://www.linkedin.com/in/edmund-ho-a62a7320/",
        },
        {
            img: "/images/team/aleksei.png",
            name: "Aleksei Safonov",
            role: "Head System Administrator & Network",
            linkedin:"https://www.linkedin.com/in/aleksei-safonov-a7842a13/",
        },
        {
            img: "/images/team/naveen.png",
            name: "Naveen Bansal",
            role: "Portfolio Manager",
            linkedin:"https://www.linkedin.com/in/bansalnvn/",
        },
        {
            img: "/images/team/aniruddha.png",
            name: "Aniruddha Barman",
            role: "Quant Researcher",
            linkedin:"https://www.linkedin.com/in/aniruddha-barman-174ab151/",
        },
    ];
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
                            About us
                        </p>
                        <IoIosArrowForward />
                        <p className="custom-unique-para uppercase tracking-widest font-semibold">
                            our team
                        </p>
                    </div>

                    {/* Headline Text */}
                    <div className="main_heading leading-10 md:leading-12 lg:leading-15 xl:leading-20 2xl:leading-24 md:mx-0 md:mt-15 lg:mt-15 lg:mx-15 xl:mt-15 xl:mx-10 2xl:mt-20 2xl:mx-25 mt-5  uppercase font-bricolage_Grotesque-sans">
                        <h1>
                            our <span className="text-quant-yellow">team</span> is the
                        </h1>
                        <h1>foundation of our</h1>
                        <h1>progress</h1>
                    </div>

                    {/* image Section  */}
                    <div className="absolute w-full top-[90%] lg:top-[75vh] xl:bottom-[-30%] xl:top-[100%] 2xl:top-[70%] flex justify-center items-center right-0 lg:right-[0%] ">
                        <div className="overflow-hidden lg:w-[70vw] lg:h-[70vh] xl:w-[80vw] xl:h-[80vh] 2xl:w-[80vw] 2xl:h-[80vh] ">
                            <Image
                                src={QbChessImg}
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
                <div className="flex flex-col flex-wrap md:px-12 max-2xl:gap-y-7 xl:flex-row justify-between px-10 lg:px-30 xl:px-18 2xl:px-40 2xl:flex-nowrap text-lg tracking-wide ">
                    {/* Left Column */}
                    <div className="max-w-xl xl:w-sm 2xl:w-2xl">
                        <p className="custom-heading-para 2xl:mr-44 uppercase tracking-tight">
                            THE 3 T’S OF QB: TRUST, TEAMWORK & TOGETHERNESS
                        </p>
                    </div>

                    {/* Right Column */}
                    <div className="max-w-3xl xl:w-xl 2xl:w-3xl">
                        <p className="custom-para 2xl:mr-15 text-justify tracking-tight">
                            We enculcate a beautiful relationship of growth between the mentors and mentees.

                        </p>
                        <p>
                            You learn and grow with the best to the critical minds, who are at the forefront of the market research and industry
                        </p>
                    </div>
                </div>
            </section>
            {/* guiding our progress */}
            <section className="font-bricolage_Grotesque-sans 2xl:max-w-[1920px] mx-auto">
                <div className="main_sub_heading uppercase my-10 xl:my-15 2xl:my-19">
                    <h1 className="mx-10 lg:mx-25 xl:mx-20 2xl:mx-30">
                        GUIDING Our<span className="text-[#BA4B2F]"> PROGRESS </span>
                    </h1>
                </div>
                <div className="flex flex-wrap justify-between gap-x-5 gap-y-12 mx-10 mb-10 lg:mx-20 xl:mx-25 xl:mb-34 2xl:mx-30 2xl:mb-34">
                    {people.map((person, index) => {
                        return <div key={index} className="border border-quant-orange min-w-[100px] md:w-[320px] lg:w-[270px] xl:w-[370px] 2xl:w-[520px]">
                            <div className="m-5">
                                <Image
                                    src={person.img}
                                    alt="Team"
                                    width={1000}
                                    height={1000}
                                    className="w-full h-full object-cover"
                                />
                                <div className="flex justify-between mt-5 w-full ">
                                    <div>
                                        <h1 className="font-semibold custom-unique-heading ">{person.name} </h1>
                                        <h1 className="custom-unique-para">{person.role}</h1>
                                    </div>
                                    <div>
                                        <Link href={person.linkedin} target="_black"><IoLogoLinkedin className="text-quant-orange text-4xl duration-150 hover:scale-110" /></Link>
                                    </div>
                                </div>
                            </div>
                        </div>
                    })}
                </div>
            </section>
            <Footer />
        </>
    );
}
