"use client";
import React from "react";
import Footer from "@/components/Footer";
import Navbar from "@/components/Navbar";
import QbChess from "./QbChess";

export default function Page() {
  return (
    <>
      <Navbar />
      <QbChess />
      <Footer />
    </>
  );
}
