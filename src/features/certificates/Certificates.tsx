"use client";

import { useState } from "react";
import Container from "@/shared/components/Container";
import { useLanguage } from "@/providers/LanguageContext";
import { ChevronDown } from "lucide-react";
import { motion, AnimatePresence, useReducedMotion } from "framer-motion";

const certificates = [
  {
    id: 1,
    titleKey: "cert.item1.title",
  },
  {
    id: 2,
    titleKey: "cert.item2.title",
  },
  {
    id: 3,
    titleKey: "cert.item3.title",
  },
];

export default function Certificates() {
  const { t, isRtl } = useLanguage();
  const [isOpen, setIsOpen] = useState(false);
  const shouldReduceMotion = useReducedMotion();

  return (
    <section
      id="certificates"
      aria-labelledby="certificates-title"
      className={`bg-zinc-950/20 pt-16 md:pt-24 transition-[padding-bottom] duration-300 ${
        isOpen ? "pb-16 md:pb-28" : "pb-8 md:pb-12"
      }`}
    >
      <Container>
        <div className="flex flex-col items-center">
          <h2 id="certificates-title" className="text-3xl sm:text-4xl font-bold uppercase tracking-wide text-white">
            <button
              type="button"
              onClick={() => setIsOpen(!isOpen)}
              aria-expanded={isOpen}
              aria-controls="certificates-list"
              className={`flex items-center gap-3 border border-white px-6 py-3 transition-colors duration-300 hover:border-yellow-400 hover:text-yellow-400 cursor-pointer rounded-md ${
                isRtl ? "" : "font-bebas"
              } select-none`}
            >
              <span>{t("cert.title")}</span>
              <ChevronDown
                className={`h-5 w-5 transition-transform ${
                  shouldReduceMotion ? "duration-0" : "duration-300"
                } ${isOpen ? "rotate-180" : ""}`}
                aria-hidden="true"
              />
            </button>
          </h2>

          <AnimatePresence initial={false}>
            {isOpen && (
              <motion.div
                id="certificates-list"
                key="certificates-content"
                initial={shouldReduceMotion ? { opacity: 1, height: "auto" } : { opacity: 0, height: 0 }}
                animate={{ opacity: 1, height: "auto" }}
                exit={shouldReduceMotion ? { opacity: 0, height: 0, transition: { duration: 0 } } : { opacity: 0, height: 0 }}
                transition={
                  shouldReduceMotion
                    ? { duration: 0 }
                    : {
                        height: { duration: 0.35, ease: [0.33, 1, 0.68, 1] },
                        opacity: { duration: 0.25, delay: 0.05 },
                      }
                }
                className="w-full overflow-hidden"
              >
                <ul
                  role="list"
                  className="mt-8 sm:mt-10 grid w-full grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3"
                >
                  {certificates.map((certificate) => (
                    <li
                      key={certificate.id}
                      className="rounded-lg border border-white/10 bg-zinc-900/50 p-6 text-center transition-colors hover:border-yellow-400/30 flex flex-col items-center justify-center min-h-[120px]"
                    >
                      <h3 className="text-xl font-semibold text-white">
                        {t(certificate.titleKey)}
                      </h3>
                    </li>
                  ))}
                </ul>
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </Container>
    </section>
  );
}