import React from "react";
import "./globals.css";
import "./mycss.css";
import Navbar from "@/components/Navbar";
import Dashboard from "@/components/Dashboard";
import About from "@/components/About";
import UniqueSection from "../pages/UniqueSection";
import Milliseconds from "@/pages/Milliseconds";
import CodeWithPurpose from "@/pages/CodeWithPurpose";
import GlobalPresence from "@/pages/GlobalPresence";
import Footer from "@/components/Footer";
import Milestones from "@/pages/Milestones";
import MeetOurLeader from "@/pages/MeetOurLeader";
import InsideQuantbox from "@/pages/InsideQuantbox";

export default function page() {
  return (
    <>
      <Navbar />
      <Dashboard />
      <About />
      <Milliseconds />
      <UniqueSection />
      <CodeWithPurpose />
      <MeetOurLeader />
      <InsideQuantbox />
      {/* <Milestones /> */}
      {/* <GlobalPresence /> */}
      <Footer />
    </>
  );
}
