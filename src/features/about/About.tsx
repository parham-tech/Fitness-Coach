"use client";

import Container from "@/shared/components/Container";
import { useLanguage } from "@/providers/LanguageContext";
import { motion, Variants } from "framer-motion";

export default function About() {
  const { t, isRtl } = useLanguage();

  // 🎬 Framer Motion variants
  const fadeInText: Variants = {
    hidden: { opacity: 0, y: 30 },
    visible: (i: number) => ({
      opacity: 1,
      y: 0,
      transition: {
        delay: i * 0.15,
        duration: 0.8,
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
    <section
      id="about"
      className="py-0 lg:py-30 text-center lg:text-start "
      aria-labelledby="about-title"
    >
      <Container className="grid grid-cols-1 lg:grid-cols-2 mt-10 items-center gap-10 lg:gap-16 ">

        {/* IMAGE SIDE - VIDEO MASK */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          variants={fadeInMedia}
          className="relative order-2 lg:order-1 w-full max-w-md sm:max-w-2xl lg:max-w-none mx-auto aspect-[4/3] overflow-hidden rounded-2xl bg-black flex items-center justify-center border border-white/10"
        >
          <video
            src="/videos/mask.mp4"
            autoPlay
            loop
            muted
            playsInline
            className=" object-cover scale-90 inset-0 w-full h-full"
          />
          <div className="absolute inset-0 bg-black flex flex-col items-center justify-center mix-blend-multiply select-none pointer-events-none">
            <span className="text-[9rem] sm:text-[17rem] md:text-[18rem] lg:text-[19.5vw] xl:text-[250px] font-black tracking-tighter uppercase text-white font-bebas leading-[0.8]">
              MAHAN
            </span>
            <span className="text-[10rem] sm:text-[18rem] md:text-[19rem] lg:text-[19.5vw] xl:text-[270px] font-black tracking-tighter uppercase text-white font-bebas leading-[0.8]">
              BALAEI
            </span>
          </div>
        </motion.div>

        {/* TEXT SIDE */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          className="flex flex-col order-1 lg:order-2"
        >
          <motion.span
            custom={0}
            variants={fadeInText}
            className="text-red-500 font-bold text-sm tracking-widest uppercase"
          >
            {t("about.tagline")}
          </motion.span>

          <motion.h2
            id="about-title"
            custom={1}
            variants={fadeInText}
            className={`${isRtl ? "" : "font-bebas"} text-3xl sm:text-4xl md:text-5xl lg:text-6xl text-white leading-tight uppercase mt-2`}
          >
            {t("about.title")}
          </motion.h2>

          <motion.p
            custom={2}
            variants={fadeInText}
            className="mt-6 text-sm sm:text-base md:text-lg text-gray-300 leading-relaxed"
          >
            {t("about.p1")}
          </motion.p>

          <motion.p
            custom={3}
            variants={fadeInText}
            className="mt-4 text-sm sm:text-base md:text-lg text-gray-300 leading-relaxed"
          >
            {t("about.p2")}
          </motion.p>
        </motion.div>

      </Container>
    </section>
  );
}
