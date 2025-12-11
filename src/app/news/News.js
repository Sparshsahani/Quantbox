"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import Image from "next/image";

export default function News() {
  return (
    <section className="min-h-screen flex flex-col items-center justify-center bg-white px-6 text-center">
      
      {/* Animated 404 Number */}
      <motion.h1
        initial={{ opacity: 0, y: -40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="text-[120px] md:text-[180px] font-extrabold text-black leading-none"
      >
        404
      </motion.h1>

      {/* Animated Message */}
      <motion.p
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.2, duration: 0.5 }}
        className="text-lg md:text-xl text-gray-600 mt-4"
      >
        Oops! The page you’re looking for doesn’t exist.
      </motion.p>

      {/* Cute illustration */}
      <motion.div
        initial={{ scale: 0.8, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ delay: 0.3, duration: 0.6 }}
        className="relative w-[260px] h-[200px] mt-8"
      >
        <Image
          src="/images/404-illustration.png"   // change to your custom image
          alt="404 Illustration"
          fill
          className="object-contain"
        />
      </motion.div>

      {/* Button */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.5 }}
      >
        <Link
          href="/"
          className="inline-block mt-10 px-8 py-3 rounded-lg bg-black text-white text-lg font-semibold hover:bg-[#BA4B2F] transition"
        >
          Back To Home
        </Link>
      </motion.div>
    </section>
  );
}
