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
    <section id="home" className="relative flex min-h-screen items-center">
      <Container className="grid gap-10 lg:grid-cols-2">

        {/* LEFT SIDE */}
        <motion.div
          initial="hidden"
          animate="visible"
          className="flex flex-col gap-2"
        >

          {/* 🔥 GSAP SPLIT TEXT (ONLY H1) */}
          <div className="font-bebas text-[64px] leading-none uppercase">
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
            className="font-bebas text-[48px] leading-none uppercase"
          >
            Strength & <br />
            Conditioning Coach
          </motion.h2>

          <motion.p
            custom={2}
            variants={fadeInText}
            className="font-bebas text-[32px] leading-none text-yellow-400"
          >
            Bodybuilding & Powerlifting Expert
          </motion.p>

          {/* BUTTONS */}
          <motion.div
            custom={3}
            variants={fadeInText}
            className="mt-6 flex gap-4"
          >
            <button className="flex font-bold text-[14px] justify-center items-center gap-2 italic w-52 bg-red-500 border border-black px-6 py-2 rounded-md">
              MY CERTIFICATES
              <Image
                src="/icons/rightarr.svg"
                alt="Certificate"
                width={20}
                height={20}
              />
            </button>

            <button className="flex font-bold text-[14px] justify-center italic w-52 border border-yellow-400 px-6 py-2 rounded-md">
              MY ACHIEVEMENT
            </button>
          </motion.div>

          {/* ICONS */}
          <motion.div
            custom={4}
            variants={fadeInText}
            className="flex gap-6 mt-10"
          >

            <div className="flex items-start gap-2">
              <Image src="/icons/certificate.svg" alt="" width={26} height={28} className="mt-1" />
              <div className="flex flex-col">
                <h5 className="font-bold text-[13px] uppercase">PROFESSIONAL</h5>
                <p className="font-bold text-[11px]">Certificates</p>
              </div>
            </div>

            <div className="flex items-start gap-2">
              <Image src="/icons/trophy.svg" alt="" width={28} height={24} className="mt-1" />
              <div className="flex flex-col">
                <h5 className="font-bold text-[13px] uppercase">COMPETITIVE</h5>
                <p className="font-bold text-[11px]">Achievement</p>
              </div>
            </div>

            <div className="flex items-start gap-2">
              <Image src="/icons/sience.svg" alt="" width={24} height={24} className="mt-1" />
              <div className="flex flex-col">
                <h5 className="font-bold text-[13px] uppercase">SPORTS SCIENCE</h5>
                <p className="font-bold text-[11px]">Expertise</p>
              </div>
            </div>

          </motion.div>
        </motion.div>

        {/* RIGHT SIDE (VIDEO) */}
        <motion.div
          initial="hidden"
          animate="visible"
          variants={fadeInMedia}
          className="relative w-full flex items-center justify-center overflow-hidden rounded-2xl"
        >
          <div className="absolute inset-0" />

          <video
            ref={videoRef}
            src="/videos/herovideo.mp4"
            autoPlay
            muted
            loop
            playsInline
            preload="auto"
            className="w-full h-full object-cover scale-110 origin-center rounded-2xl absolute inset-0"
          />
        </motion.div>

      </Container>
    </section>
  );
}