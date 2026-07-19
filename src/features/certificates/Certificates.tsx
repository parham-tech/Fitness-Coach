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
          <h2
            onClick={() => setIsOpen(!isOpen)}
            className={`inline-block cursor-pointer border border-white px-6 py-3 text-3xl sm:text-4xl font-bold uppercase transition-colors duration-300 hover:border-yellow-400 ${
              isRtl ? "" : "font-bebas"
            } tracking-wide text-white select-none`}
          >
            {t("cert.title")}
          </h2>

          <div
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
              <div
                key={certificate.id}
                className="rounded-lg border border-white/10 bg-zinc-900/50 p-6 text-center transition-colors hover:border-yellow-400/30 flex flex-col items-center justify-center min-h-[120px]"
              >
                <h3 className="text-xl font-semibold text-white">
                  {t(certificate.titleKey)}
                </h3>
              </div>
            ))}
          </div>
        </div>
      </Container>
    </section>
  );
}