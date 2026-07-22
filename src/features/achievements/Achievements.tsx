"use client";

import Image from "next/image";
import Container from "@/shared/components/Container";
import { useLanguage } from "@/providers/LanguageContext";

const achievements = [
  {
    src: "/achievements/medal.svg",
    alt: "Medal Achievement",
    titleKey: "ach.item1.title",
    textKey: "ach.item1.text",
    imageClassName: "w-15 h-15",
  },
  {
    src: "/achievements/press.svg",
    alt: "Bench Press & Metal Log Lift Achievement",
    titleKey: "ach.item2.title",
    textKey: "ach.item2.text",
    imageClassName: "w-26 h-26",
  },
  {
    src: "/achievements/powerlift.svg",
    alt: "Powerlifting Achievement",
    titleKey: "ach.item3.title",
    textKey: "ach.item3.text",
    imageClassName: "w-20 h-20",
  },
  {
    src: "/achievements/trophy_logo_traced 1.svg",
    alt: "Trophy Achievement",
    titleKey: "ach.item4.title",
    textKey: "ach.item4.text",
    imageClassName: "w-24 h-24",
  },
  {
    src: "/achievements/shield_star_logo 1.svg",
    alt: "Shield Star Achievement",
    titleKey: "ach.item5.title",
    textKey: "ach.item5.text",
    imageClassName: "w-18 h-18",
  },
];

export default function Achievements() {
  const { t, isRtl } = useLanguage();

  return (
    <section id="achievements" className="py-16 md:py-28 bg-zinc-950/20">
      <Container>
        <div className="flex items-center gap-6">
          <div className="h-px flex-1 bg-yellow-500/40" />

          <button  className={`${isRtl ? "" : "font-bebas"} text-3xl sm:text-4xl text-yellow-400 uppercase whitespace-nowrap`}>
            {t("ach.title")}
          </button>

          <div className="h-px flex-1 bg-yellow-500/40" />
        </div>

        <div className="grid mt-20 gap-6 grid-cols-2 sm:grid-cols-3 lg:grid-cols-5">
          {achievements.map((item, index) => (
            <div
              key={index}
              className="overflow-hidden rounded-lg border border-white/10 bg-zinc-800 p-4 ms:p-6 hover:border-yellow-400/30 transition-colors flex flex-col items-center justify-center sm:gap-4"
            >
              <div className="h-18 w-28 flex items-center justify-center flex-shrink-0">
                <Image
                  src={item.src}
                  alt={item.alt}
                  width={120}
                  height={120}
                  className={`${item.imageClassName} max-w-full max-h-full object-contain hover:scale-[1.08] transition-transform duration-300`}
                />
              </div>
              <h3
                className="min-h-12
              mt-2 sm:mt-0 text-center text-xs sm:text-[1rem] font-extrabold text-white uppercase tracking-wider leading-snug"
              >
                {t(item.titleKey)}
              </h3>
              <p className="font-[200] text-[.625rem] sm:text-[.8rem] whitespace-nowrap">
                {t(item.textKey)}
              </p>
              <div className="w-16 h-px bg-yellow-500/40 mt-4" />{" "}
            </div>

            
          ))}
        </div>
      </Container>
    </section>
  );
}
