import React from "react";
import QbChessImg from "../../../public/images/qbChessImg/chess_bg.png";
import Image from "next/image";

export default function QbChess() {
  const qbData = [
    {
      img: "/images/qbChessImg/img3.png",
      title: "CHENNAI GRAND MASTERS 2025",
      description_1:
      "The sponsorship of the Chennai Grand Masters 2025 by Quantbox underscores our unwavering commitment to the game of chess, built on the shared values of strategy, precision, and forward thinking. Quantbox is proud to support this prestigious event, confident that this collaboration will inspire excellence and drive the sport to new horizons. ",
    },
    {
      img: "/images/qbChessImg/img2.png",
      title: "ASSOCIATION WITH ARJUN ERIGAISI",
      description_1:
      "Quantbox is proud to partner with Arjun Erigaisi, one of India’s top grandmasters and only the second Indian to cross the 2800+ Elo mark.",
      description_2:
      "Through this association, we support Arjun’s competitive journey while drawing on his insight to inspire and mentor rising chess talent across the country.",
      description_3:
      " His pursuit of excellence mirrors our own — motivating the next generation to think deeper, move faster, and aim higher.",
    },
    {
      img: "/images/qbChessImg/img1.png",
      title: "THE QB CHESS SCHOLARSHIP",
      description_1:
        "The QB Chess Scholarship supports 50 young talents across India, providing them with mentorship, resources, and the chance to compete on national and international stages.",
      description_2:
        "Rooted in discipline and strategy, the programme nurtures not just chess players — but future thinkers, leaders, and champions",
    },
  ];
  return (
    <>
      {/* hero section */}
      <section className="2xl:max-w-[1920px] mx-auto">
        <main
          className={`relative bg-[url('/images/hero_bg.png')] bg-[30px_120px] md:bg-[10px_100px] xl:bg-[90px_200px] 2xl:bg-[50px_195px] bg-quant-orange bg-cover bg-no-repeat h-[45vh] md:h-[35vh] lg:h-[80vh] xl:h-[90vh] text-quant-white p-10 overflow-visible`}
        >
          {/* Headline Text */}
          <div className="text-3xl md:text-5xl md:mx-5 xl:text-7xl 2xl:text-8xl lg:mx-20 xl:mx-25 mt-5 lg:mt-15 uppercase font-hanken-grotesk">
            <h1>
              quantbox <span className="text-quant-yellow">champions</span>
            </h1>
            <h1>chess - a descipline that</h1>
            <h1>sharpens future minds</h1>
          </div>

          {/* image Section  */}
          <div className="absolute w-full top-[90%] lg:top-[70vh] xl:bottom-[-30%] 2xl:top-[80%] flex justify-center items-center right-0 lg:right-[0%]">
            <div className="overflow-hidden xl:w-[60vw] xl:h-[70vh]">
              <Image
                src={QbChessImg}
                alt="Qb chess background"
                width={8000}
                height={500}
                className="w-full h-full object-cover"
              />
            </div>
          </div>
        </main>
      </section>
      {/* about section */}
      <section className=" py-[5%] pt-[30vh] md:pt-[35vh] lg:pt-[65vh] xl:pt-[60vh] 2xl:pt-[50vh] bg-quant-gray 2xl:max-w-[1920px] mx-auto">
        {/* Heading */}
        {/* Content */}
        <div className="flex flex-col flex-wrap md:px-12 max-2xl:gap-y-7 xl:flex-row justify-between px-10 xl:px-18 2xl:px-40 2xl:flex-nowrap text-lg tracking-wide">
          {/* Left Column */}
          <div className="max-w-xl xl:w-sm 2xl:w-2xl">
            <p className="custom-heading-para 2xl:mr-44 uppercase tracking-tight">
              THE thinking that drives our chess foundations
            </p>
          </div>

          {/* Right Column */}
          <div className="max-w-3xl xl:w-xl 2xl:w-3xl">
            <p className="custom-para 2xl:mr-15 text-justify tracking-tight">
              We cultivate a meaningful relationship of growth between mentors
              and mentees — grounded in trust and curiosity. Like high-frequency
              trading, chess demands precision and foresight. Our foundation
              reflects the same values we uphold at Quantbox: rigour, strategy,
              and continuous learning.
            </p>
          </div>
        </div>
      </section>
      {/* chess section */}
      <section className="px-10 pt-20 md:px-10 md:pt-28 lg:px-12 xl:px-20 2xl:px-35 ">
        {/* Heading */}
        <div className="mb-12 xl:w-6xl uppercase">
          <div className="grid grid-cols-[60%_40%] max-sm:grid-cols-[70%_30%]">
            <div className=" custom-heading font-medium">
              <h1>
                qb <span className="text-quant-orange">chess</span>
              </h1>
              <h1>endevours</h1>
            </div>
          </div>
        </div>
        <div className="grid grid-col-1 md:grid-cols-1 xl:flex-row justify-between gap-y-20 font-body pb-20">
          {qbData.map((items, id) => {
            return (
              <div
                key={id}
                className="grid grid-col-1 gap-y-5 gap-x-3 lg:gap-x-8 md:grid-cols-2"
              >
                {/* Left Column */}
                <div className="md:self-center ">
                  <Image
                    src={items.img}
                    width={500}
                    height={500}
                    alt="person_image"
                  />
                </div>
                {/* Right Column */}
                <div className="space-y-5 flex flex-col justify-center">
                  <h2 className="custom-heading-para">{items.title}</h2>
                  <p className="custom-para text-justify tracking-tight">
                    {items.description_1}
                  </p>
                  <p className="custom-para text-justify tracking-tight">
                    {items.description_2}
                  </p>
                  <p className="custom-para text-justify tracking-tight">
                    {items.description_3}
                  </p>
                </div>
              </div>
            );
          })}
        </div>
      </section>
    </>
  );
}
