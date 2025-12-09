import React from "react";
import { FaArrowRightLong } from "react-icons/fa6";
import ExtraLogo from "/public/images/extraimg1.jpg";
import Image from "next/image";

export default function ExceptionalSection() {
  return (
    <>
      <section className="relative md:py-20 bg-[linear-gradient(135deg,_#BA4B2F,_#D95634,_#542215,_#49190D)] w-full h-[90rem] ">
        <div className="px-4 py-16 max-sm:mx-6 xl:mx-36">
          <h1 className="max-sm:text-2xl xl:text-7xl xl:leading-20 text-white md:mr-80">
            EXCEPTIONAL TALENT, EXTRAORDINARY <br /> TEAMWORK
          </h1>

          <div className=" md:mx-2 mt-20 bg-[#FEAE2E] md:w-[27rem] md:h-[3rem] rounded-md flex justify-center items-center gap-5 vertical_line">
            <button className="max-sm:text-sm xl:text-xl md:tracking-wider ">
              EXPERIENCE THE QUANTBOX LIFE
            </button>
            <FaArrowRightLong className="text-2xl" />
          </div>
          <div className="absolute bottom-54 left-3 rotate-270 ">
            <p className=" max-sm:text-sm md:text-2xl text-white tracking-wider">
              AT QUANTBOX WE FOLLOW THE
              <br /> HUMAN FIRST APPROACH.
            </p>
          </div>
          <div className="max-sm:mt-20 max-sm:z-10 max-sm:overflow-hidden md:w-xl md:h-[552px] bg-red-700 mt-60 xl:ml-[45rem] rounded-full overflow-hidden">
            <Image
              className="h-full w-full object-cover object-center"
              src={ExtraLogo}
              alt="Description of image"
              width={197}
              height={102}
            />
          </div>
        </div>
      </section>
    </>
  );
}
