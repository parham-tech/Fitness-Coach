"use client";

import { useEffect, useRef } from "react";
import Image from "next/image";
import Container from "@/shared/components/Container";
import { motion, Variants } from "framer-motion";
import SplitText from "@/shared/components/SplitText";

export default function Hero() {
  const videoRef = useRef<HTMLVideoElement>(null);

  useEffect(() => {
    if (videoRef.current) {
      videoRef.current.load();
      const playPromise = videoRef.current.play();
      if (playPromise !== undefined) {
        playPromise.catch((error) => {
          console.log("Autoplay failed or was prevented:", error);
        });
      }
    }
  }, []);

  // 🎬 Framer Motion variants
  const fadeInText: Variants = {
    hidden: { opacity: 0, y: -20 },
    visible: (i: number) => ({
      opacity: 1,
      y: 0,
      transition: {
        delay: i * 0.2,
        duration: 0.6,
        ease: [0.33, 1, 0.68, 1],
      },
    }),
  };

  const fadeInMedia: Variants = {
    hidden: { opacity: 0, scale: 0.95 },
    visible: {
      opacity: 1,
      scale: 1,
      transition: {
        duration: 1,
        ease: [0.33, 1, 0.68, 1],
      },
    },
  };

  return (
    <section id="home" className="relative flex mt-7 sm:mt-16 items-center pt-20 md:pt-16 lg:pt-16">
      <Container className="grid gap-12 md:grid-cols-2  items-center">

        {/* LEFT SIDE */}
        <motion.div
          initial="hidden"
          animate="visible"
          className="flex flex-col items-center md:items-start"
        >

          {/* 🔥 GSAP SPLIT TEXT (ONLY H1) */}
          <div className="font-bebas text-4xl sm:text-5xl md:text-6xl lg:text-[64px] leading-none uppercase">
            <SplitText
              text="MAHAN BALAEI"
              splitType="chars"
              className="inline-block"
            />
          </div>

          {/* FRAMER TEXT */}
          <motion.h2
            custom={1}
            variants={fadeInText}
            className=" font-bebas text-3xl sm:text-4xl md:text-5xl lg:text-[48px]  leading-none uppercase"
          >
            Strength & <br className="hidden md:block"/>
            Conditioning Coach
          </motion.h2>

          <motion.p
            custom={2}
            variants={fadeInText}
            className="font-bebas text-xl sm:text-2xl md:text-3xl lg:text-[32px] leading-none text-yellow-400 animate-pulse"
          >
            Bodybuilding & Powerlifting Expert
          </motion.p>

          {/* BUTTONS */}
          <motion.div
            custom={3}
            variants={fadeInText}
            className="mt-6 flex flex-col self-stretch mx-16 sm:mx-0 sm:self-auto sm:flex-row gap-4"
          >
            <button className="flex font-bold text-[.7rem] sm:text-sm justify-center items-center gap-2 italic w-full sm:w-42 lg:w-52 bg-red-500 border border-black px-4 py-2 lg:px-6 lg:py-3 rounded-md hover:bg-red-600 transition-colors">
              MY CERTIFICATES
              <Image
                src="/icons/rightarr.svg"
                alt="Certificate"
                width={20}
                height={20}
                className="hidden lg:block"
              />
            </button>

            <button className="flex font-bold text-[.7rem] sm:text-sm justify-center italic w-full sm:w-42 lg:w-52 border border-yellow-400 px-4 py-2 lg:px-6 lg:py-3 rounded-md hover:bg-yellow-400/10 transition-colors">
              MY ACHIEVEMENT
            </button>
          </motion.div>

          {/* ICONS */}
          <motion.div
            custom={4}
            variants={fadeInText}
            className="grid grid-cols-3 sm:grid-cols-3 gap-3 sm:gap-6 mt-10 lg:flex lg:flex-wrap lg:gap-6"
          >

            <div className="flex flex-col sm:flex-row items-center sm:items-start gap-2 bg-zinc-900/40 p-3 rounded-lg sm:bg-transparent sm:p-0">
              <Image src="/icons/certificate.svg" alt="" width={26} height={28} className="mt-1 flex-shrink-0" />
              <div className="flex flex-col items-center sm:items-start">
                <h5 className="font-bold text-[.66rem] sm:text-[.8rem] uppercase text-white">PROFESSIONAL</h5>
                <p className="font-bold text-[.6rem] sm:text-[.7rem] text-gray-400">Certificates</p>
              </div>
            </div>

            <div className="flex flex-col sm:flex-row items-center sm:items-start gap-2 bg-zinc-900/40 p-3 rounded-lg sm:bg-transparent sm:p-0">
              <Image src="/icons/trophy.svg" alt="" width={28} height={24} className="mt-1 flex-shrink-0" />
              <div className="flex flex-col items-center sm:items-start">
                <h5 className="font-bold text-[.66rem] sm:text-[.8rem] uppercase text-white">COMPETITIVE</h5>
                <p className="font-bold text-[.6rem] sm:text-[.7rem] text-gray-400">Achievement</p>
              </div>
            </div>

            <div className="flex flex-col sm:flex-row items-center sm:items-start  gap-2 bg-zinc-900/40 p-3 rounded-lg sm:bg-transparent sm:p-0">
              <Image src="/icons/sience.svg" alt="" width={24} height={24} className="mt-1 flex-shrink-0" />
              <div className="flex flex-col items-center sm:items-start">
                <h5 className="font-bold text-[.66rem] sm:text-[.8rem] uppercase text-white whitespace-nowrap">SPORTS SCIENCE</h5>
                <p className="font-bold text-[.6rem] sm:text-[.7rem] text-gray-400">Expertise</p>
              </div>
            </div>

          </motion.div>
        </motion.div>

        {/* RIGHT SIDE (VIDEO) */}
        <motion.div
          initial="hidden"
          animate="visible"
          variants={fadeInMedia}
          className="relative w-full  lg:aspect-video md:aspect-square aspect-video  flex items-center justify-center overflow-hidden rounded-2xl shadow-2xl border border-white/10"
        >

          <video
            ref={videoRef}
            src="/videos/herovideo.mp4"
            autoPlay
            muted
            
            playsInline
            preload="auto"
            className="w-full h-full object-cover   origin-center absolute inset-0"
          />
        </motion.div>

      </Container>
    </section>
  );
}
