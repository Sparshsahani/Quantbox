// src/components/ClientWrapper.jsx
"use client";

import { useState, useEffect } from "react";
import Loader from "./Loader"; // 👈 We'll check this next

export default function ClientWrapper({ children }) {
  const [showContent, setShowContent] = useState(false);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const timeout = setTimeout(() => setIsLoading(false), 3000);
    const fullDelay = setTimeout(() => setShowContent(true), 4600);
    return () => {
      clearTimeout(timeout);
      clearTimeout(fullDelay);
    };
  }, []);

  return (
    <>
      {!showContent && <Loader isDone={!isLoading} />}
      {showContent && children}
    </>
  );
}
