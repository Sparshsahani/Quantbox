"use client";
import React, { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";
import Logo from "../../public/images/logo.png";

export default function Loader({ isDone }) {
  const [progress, setProgress] = useState(0);
  const [shouldRender, setShouldRender] = useState(true);

  useEffect(() => {
    const interval = setInterval(() => {
      setProgress((prev) => {
        if (prev >= 100) {
          clearInterval(interval);
          return 100;
        }
        return prev + 1;
      });
    }, 30);
    return () => clearInterval(interval);
  }, []);

  useEffect(() => {
    if (isDone) {
      setTimeout(() => setShouldRender(false), 800);
    }
  }, [isDone]);

  return (
    <AnimatePresence>
      {shouldRender && (
        <motion.div
          className="fixed inset-0 z-[9999] bg-quant-white font-bricolage_Grotesque-sans text-quant-white flex items-center justify-center px-4"
          initial={{ y: "100%" }}
          animate={{ y: 0 }}
          exit={{ y: "-100%" }}
          transition={{ duration: 0.8, ease: "easeInOut" }}
        >
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 sm:gap-6 w-full max-w-[90%] sm:max-w-[80%] md:max-w-[60%] xl:max-w-[40%]">
            <div className="min-w-[120px] text-center sm:text-left">
              <Image src={Logo} alt="Logo" width={100} height={100} priority />
            </div>
            <div className="w-full sm:w-20 h-[1px]">
              <motion.div
                className="h-full bg-quant-black"
                initial={{ width: "0%" }}
                animate={{ width: `${progress}%` }}
                transition={{ duration: 0.2 }}
              />
            </div>
            <p className="text-sm text-quant-black font-work-Sans-sans tracking-widest min-w-[40px] text-center">
              {progress}%
            </p>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
