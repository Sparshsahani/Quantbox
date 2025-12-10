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
        },
        {
            img: "/images/leader/gunjan.png",
            name: "GUNJAN KANDOI",
            role: "Chief Financial Officer",
            linkedin: "https://www.linkedin.com/in/gunjan-kandoi-11680b6/",
        },
        {
            img: "/images/leader/pankaj.png",
            name: "PANKAJ KEWALRAMANI",
            role: "Chief Technology Officer",
            linkedin: "https://www.linkedin.com/in/pankajprateek/",
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
                <div className="flex flex-wrap justify-start gap-x-5 gap-y-12 mx-10 mb-10 lg:mx-20 xl:mx-25 xl:mb-34 2xl:mx-35 2xl:mb-34">
                    {people.map((person, index) => {
                        return <div key={index} className=" min-w-[100px] md:w-[320px] lg:w-[270px] xl:w-[370px] 2xl:w-[520px] ">
                            <div className="m-5 2xl:h-[620px]">
                                <div className='relative'>
                                    <Image
                                        src={person.img}
                                        alt="Team"
                                        width={1000}
                                        height={1000}
                                        className="w-full h-full object-cover"
                                    />
                                    {/* <div className='absolute top-0 w-full h-full bg-quant-orange z-5'>
                                        <p></p>
                                        <Link href="" target="_black"><IoLogoLinkedin className="text-white text-4xl duration-150 hover:scale-110" /></Link>
                                    </div> */}
                                </div>
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
                <div className='text-center'>
                    <button >
                        <Link
                            href="/team"
                            className="uppercase px-8 py-2 xl:px-15 xl:py-5 bg-quant-blue text-quant-white flex items-center gap-x-5 mt-10 cursor-pointer font-work-Sans-sans"
                        >
                            meet our team <FaArrowRight />
                        </Link>
                    </button>
                </div>
            </section>
        </>
    )
}
