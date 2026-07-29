"use client";

import { useState } from "react";
import Container from "@/shared/components/Container";
import { useLanguage } from "@/providers/LanguageContext";

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

  return (
    <section
      id="certificates"
      className="py-16 md:py-28 bg-zinc-950/20"
    >
      <Container>
        <div className="group flex flex-col items-center">
          <h2 className="text-3xl sm:text-4xl font-bold uppercase tracking-wide text-white">
            <button
            onClick={() => setIsOpen(!isOpen)}
              aria-expanded={isOpen}
              className={`inline-block border border-white px-6 py-3 transition-colors duration-300 hover:border-yellow-400 ${
              isRtl ? "" : "font-bebas"
              } select-none`}
          >
            {t("cert.title")}
            </button>
          </h2>

          <ul
            className={`
              mt-10
              grid w-full grid-cols-1 gap-6
              sm:grid-cols-2 lg:grid-cols-3
              transition-all duration-500
              ${
                isOpen
                  ? "opacity-100 translate-y-0 pointer-events-auto"
                  : "opacity-0 -translate-y-4 pointer-events-none md:group-hover:opacity-100 md:group-hover:translate-y-0 md:group-hover:pointer-events-auto"
              }
            `}
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
        </div>
      </Container>
    </section>
  );
}