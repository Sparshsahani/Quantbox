"use client";
import Image from "next/image";
import Link from "next/link";
import React from "react";

export default function Footer() {
  return (
    <>
      <section className="py-10 bg-quant-orange 2xl:max-w-[1920px] mx-auto">
        <footer className="mx-5 lg:mx-25 xl:mx-16 2xl:mx-24">
          <div className="relative flex flex-col max-xl:flex-wrap items-center justify-around lg:justify-between xl:justify-between 2xl:justify-between py-8 text-white md:flex-row px-5">
            <div className="space-y-10">
              <div>
                <Image
                  src="/images/footer_logo.png"
                  alt="QuantBox Logo"
                  width={1000}
                  height={1000}
                  className="w-[100vw] md:w-[40vw] lg:w-[40vw] xl:w-[20vw] 2xl:w-[15vw]"
                />
              </div>
              <div className="mt-4 max-w-2xl text-justify text-[14px]">
                <p>
                  Quantbox is a global high-frequency trading firm operating across asset classes and geographies, driven by proprietary algorithms and deep quantitative research. We build ultra-low latency systems that act in microseconds, turning massive streams of data into fast, precise decisions. Our team of mathematicians, engineers, and statisticians collaborates across time zones to deliver reliable, high-performance strategies. At the intersection of human insight and advanced computing, we shape the future of algorithmic trading.

                </p>
              </div>
            </div>
            <div className="max-xl:w-full md:text-justify md:mx-8 lg:mx-0 xl:mx-10 2xl:mx-38">
              <div className="flex flex-col md:flex-row lg:items-start lg:justify-start xl:justify-end xl:items-end flex-wrap custom-heading-para font-bricolage_Grotesque-sans uppercase font-semibold ">
                <ul className="space-y-3 mt-10 lg:mt-20 custom-unique-heading">
                  <li>About Us</li>
                  <li>
                    <Link href={"/qb_Chess"}>Qb chess</Link>
                  </li>
                  <li>
                    <Link href={"/news"}>news & insights</Link>
                  </li>
                  <li>
                    {" "}
                    <Link href={"/careers"}>careers</Link>
                  </li>
                </ul>
              </div>
            </div>
            <div className="absolute w-[86%] md:w-[85%] lg:w-[90%] xl:w-[100%] 2xl:w-[94%] h-[1px] bg-quant-white bottom-0"></div>
          </div>
          {/* Privacy and social media section */}
          <div className="relative flex flex-col py-8 text-white mt-10 items-center justify-between md:flex-row md:mx-10 lg:justify-center lg:mx-30 xl:mx-0 xl:flex-nowrap xl:justify-between 2xl:items-center 2xl:mx-0 2xl:justify-center max-2xl:flex-wrap 2xl:mt-0 2xl:gap-x-165">
            <ul className="w-[90%] mx-5 flex flex-col md:flex-row flex-wrap gap-x-8 uppercase custom-footer-header space-y-3 md:space-y-0 justify-start md:justify-between xl:justify-between 2xl:justify-center font-inter-sans font-medium">
              <li>privacy</li>
              <li>terms & conditions</li>
              <li>notice</li>
              <li>disclosers</li>
            </ul>

            <div className="w-[90%]">
              <div className="flex items-center flex-wrap justify-center md:justify-center max-xl:mt-10 xl:justify-end 2xl:justify-center gap-x-4 duration-300">
                <div className="duration-300 hover:scale-120">
                  <Image
                    src="/images/socialmediaImg/link_logo.png"
                    alt=""
                    width={200}
                    height={200}
                    className="w-10 h-10 mr-4"
                  />
                </div>
                <div className="duration-300 hover:scale-120">
                  <Image
                    src="/images/socialmediaImg/fb_logo.png"
                    alt=""
                    width={200}
                    height={200}
                    className="w-10 h-10 mr-4"
                  />
                </div>
                <div className="duration-300 hover:scale-120">
                  <Image
                    src="/images/socialmediaImg/insta_logo.png"
                    alt=""
                    width={200}
                    height={200}
                    className="w-10 h-10 mr-4"
                  />
                </div>
                <div className="duration-300 hover:scale-120">
                  <Image
                    src="/images/socialmediaImg/x_logo.png"
                    alt=""
                    width={200}
                    height={200}
                    className="w-9 h-8 mr-4"
                  />
                </div>
              </div>
            </div>
          </div>
        </footer>
      </section>
      <div className="w-full h-[10vh] max-sm:px-5 max-sm:text-center text-quant-white text-[14px] bg-black flex items-center justify-start max-xl:justify-center lg:px-65 xl:px-20 2xl:px-[5%] 2xl:max-w-[1920px] mx-auto">
        <h5 className="">
          QUANTBOX is registered trademarks of Quantbox Trading LLC.
        </h5>
      </div>
    </>
  );
}
