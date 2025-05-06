import React, { useState } from "react";
import { motion } from "framer-motion";
// import { cn } from "../lib/utils";
import { FloatingDock } from "./FloatingDock";
import { IconHome, IconLogin2, IconUserPlus, IconCoinRupee,IconBriefcase
} from "@tabler/icons-react";

export default function LampDemo() {
  const navItems = [
    { title: "Home", href: "/", icon: <IconHome /> },
    { title: "Login", href: "/login", icon: <IconLogin2 /> },
    { title: "Signup", href: "/signup", icon: <IconUserPlus /> }, 
    { title: "Salary Pred", href: "/predictor", icon: <IconCoinRupee /> },
    { title: "Job pred", href: "/jpredictor", icon: <IconBriefcase
      /> },
  ];

  return (
    <>
      <FloatingDock items={navItems} desktopClassName="fixed top-16 left-1/2 -translate-x-1/2 z-50" mobileClassName="fixed top-16 right-4 z-50" />
      <div className="flex flex-col items-center justify-center min-h-screen relative bg-black">
        <motion.div
          initial={{ opacity: 0.5, width: "15rem" }}
          whileInView={{ opacity: 1, width: "30rem" }}
          transition={{
            delay: 0.3,
            duration: 0.8,
            ease: "easeInOut",
          }}
          style={{
            backgroundImage: `conic-gradient(var(--conic-position), var(--tw-gradient-stops))`,
          }}
          className="absolute inset-auto right-1/2 h-56 w-[30rem] bg-gradient-conic from-cyan-500 via-transparent to-transparent text-white [--conic-position:from_70deg_at_center_top] z-10"
        />
        <motion.div
          initial={{ opacity: 0.5, width: "15rem" }}
          whileInView={{ opacity: 1, width: "30rem" }}
          transition={{
            delay: 0.3,
            duration: 0.8,
            ease: "easeInOut",
          }}
          style={{
            backgroundImage: `conic-gradient(var(--conic-position), var(--tw-gradient-stops))`,
          }}
          className="absolute inset-auto left-1/2 h-56 w-[30rem] bg-gradient-conic from-transparent via-transparent to-cyan-500 text-white [--conic-position:from_290deg_at_center_top] z-10"
        />
        <motion.h1
          initial={{ opacity: 0.5, y: 100 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{
            delay: 0.3,
            duration: 0.8,
            ease: "easeInOut",
          }}
          className="mt-8 bg-gradient-to-br from-slate-300 to-slate-500 py-4 bg-clip-text text-center text-4xl font-medium tracking-tight text-transparent md:text-7xl relative z-20"
        >
          Ascend AI <br /> Your Job Search Ends Here!
        </motion.h1>
      </div>
    </>
  );
}
