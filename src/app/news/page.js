import React from "react";
import News from "./News";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

export default function page() {
  return (
    <>
      <Navbar />
      <News />
      <Footer />
    </>
  );
}
