"use client";
import Image from "next/image";
import Link from "next/link";
import React, { useEffect, useState } from "react";
import logo from "/public/images/logo.png";
// import { RxHamburgerMenu, RxCross2 } from "react-icons/rx";
import { motion, AnimatePresence } from "framer-motion";

export default function Navbar() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [lastScrollY, setLastScrollY] = useState(0);
  const [showNavbar, setShowNavbar] = useState(true);
  const featuresLink = [
    { Link: "About", routes: "#about" },
    { Link: "Careers", routes: "/careers" },
  ];

  // Detect scroll direction
  useEffect(() => {
    const handleScroll = () => {
      if (typeof window !== "undefined") {
        if (window.scrollY > lastScrollY && window.scrollY > 50) {
          setShowNavbar(false); // scroll down
        } else {
          setShowNavbar(true); // scroll up
        }
        setLastScrollY(window.scrollY);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [lastScrollY]);

  const menuVariants = {
    hidden: { x: "100%" },
    visible: { x: 0 },
    exit: { x: "100%" },
  };

  return (
    <>
      <header
        className={`sticky w-full top-0 z-50 bg-quant-white mx-auto p-5 xl:px-16 xl:py-5 2xl:px-30 2xl:py-9 shadow-md transition-transform duration-500 ease-in-out xl:max-w-[1920px] `}
      >
        <nav className="flex justify-between items-center lg:mx-20 xl:mx-6 ">
          {/* Logo */}
          <div className="flex items-center space-x-4 md:space-x-1">
            <Link href={"/"}>
              <Image
                src={logo}
                alt="Company Logo"
                className="w-[40vw] md:w-[20vw] lg:w-[15vw] 2xl:w-[13vw]"
              />
            </Link>
          </div>

          {/* Desktop Menu */}
          <div className="flex space-x-17 lg:space-x-20 py-1 font-xl max-lg:hidden items-center nav-btn font-medium uppercase">
            {featuresLink.map((items, id) => {
              return (
                <div key={id}>
                  <Link href={items?.routes}>{items?.Link}</Link>
                  {/* <Link href="#careers">CAREERS</Link> */}
                </div>
              );
            })}
            <button className="bg-quant-blue text-quant-white px-4 py-2">
              <Link href="/global_office">GLOBAL OFFICES</Link>
            </button>
          </div>

          {/* Custom Animated Hamburger */}
          <button
            className="lg:hidden flex flex-col justify-center items-center w-8 h-8 gap-[6px] z-[101] relative"
            onClick={() => setIsMobileMenuOpen((prev) => !prev)}
            aria-label="Toggle menu"
          >
            <motion.span
              animate={{
                rotate: isMobileMenuOpen ? 45 : 0,
                y: isMobileMenuOpen ? 8 : 0,
                // opacity: isMobileMenuOpen ? 0 : 1,
                backgroundColor: isMobileMenuOpen ? "#ba4b2f" : "#000000",
              }}
              className="w-6 h-[4px] rounded-b-lg bg-black origin-center"
              transition={{ duration: 0.4 }}
            />
            {/* <motion.span
              animate={{
                opacity: isMobileMenuOpen ? 1 : 0,
              }}
              className="w-6 h-6 rounded-full border border-quant-orange origin-center"
              transition={{ duration: 0.4 }}
            /> */}
            <motion.span
              animate={{
                rotate: isMobileMenuOpen ? -45 : 0,
                y: isMobileMenuOpen ? -8 : 0,
                backgroundColor: isMobileMenuOpen ? "#ba4b2f" : "#000000",
                // opacity: isMobileMenuOpen ? 0 : 1,
              }}
              className="w-6 h-[4px] rounded-t-lg bg-black origin-center"
              transition={{ duration: 0.4 }}
            />
          </button>
        </nav>
      </header>

      {/* Framer Motion Slide Menu */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial="hidden"
            animate="visible"
            exit="exit"
            variants={menuVariants}
            transition={{ type: "tween", duration: 0.3 }}
            className="fixed mt-15 inset-0 z-[100] bg-white flex flex-col items-center justify-center space-y-8 text-xl uppercase font-semibold"
          >
            {/* Home - Only visible on mobile */}
            <Link
              href="/"
              onClick={() => setIsMobileMenuOpen(false)}
              className="lg:hidden"
            >
              Home
            </Link>

            {featuresLink.map((item, index) => (
              <Link
                key={index}
                href={item.routes}
                onClick={() => setIsMobileMenuOpen(false)}
              >
                {item.Link}
              </Link>
            ))}

            <Link
              href="/global_office"
              className="bg-quant-blue text-white px-6 py-3 rounded"
              onClick={() => setIsMobileMenuOpen(false)}
            >
              GLOBAL OFFICES
            </Link>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
