import Image from 'next/image'
import Link from 'next/link'
import React from 'react'
import { IoLogoLinkedin } from "react-icons/io";
import { FaArrowRight } from "react-icons/fa6";

export default function MeetOurLeader() {
    const people = [
        {
            img: "/images/leader/prashant.png",
            name: "PRASHANT SINGH",
            role: "Chief Executive Officer",
            linkedin: "https://www.linkedin.com/in/pkusingh/",
            description: ` Prashant is the founder and main inspiration behind Quantbox. A successful and dedicated quant trader by profession while a statistician by education, he brings expertise in quant trading.`
        },
        {
            img: "/images/leader/gunjan.png",
            name: "GUNJAN KANDOI",
            role: "Chief Financial Officer",
            linkedin: "https://www.linkedin.com/in/gunjan-kandoi-11680b6/",
            description: ` Gunjan is Quantbox's CFO and business development head for APAC Markets. He brings along 12+ yrs experience in investment banking and quantitative research from Morgan Stanley New York.`
        },
        {
            img: "/images/leader/pankaj.png",
            name: "PANKAJ KEWALRAMANI",
            role: "Chief Technology Officer",
            linkedin: "https://www.linkedin.com/in/pankajprateek/",
            description: `Pankaj being the CTO of Quantbox, cruises through the tasks of hiring, grooming and leading the tech talent of the firm. In doing so, he deploys his vast experience in the low-latency development stack.`
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
                <div className="flex flex-wrap justify-start gap-x-5 gap-y-12 mx-10 mb-10 lg:mx-20 xl:mx-25 xl:mb-20 2xl:mx-35 2xl:mb-34">
                    {people.map((person, index) => {
                        return <div key={index} className=" min-w-[100px] md:w-[210px] lg:w-[270px] xl:w-[370px] 2xl:w-[520px] ">
                            <div className="m-5 2xl:h-[620px]">
                                <div className="relative group">
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
                                        className="
        absolute top-0 left-0 w-full h-full 
        bg-quant-orange text-quant-white
        text-center font-work-Sans-sans main_video_title
        flex flex-col items-center justify-center px-9
        opacity-0 group-hover:opacity-100
        translate-y-4 group-hover:translate-y-0
        transition-all duration-300 ease-out
      "
                                    >
                                        <p>{person.description}</p>

                                        <button className="uppercase custom_read_more_btn flex items-center gap-x-2 mx-auto mt-5 cursor-pointer">
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
            </section>
        </>
    )
}
