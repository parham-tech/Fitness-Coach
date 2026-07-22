"use client";

import Image from "next/image";
import Container from "@/shared/components/Container";
import { useLanguage } from "@/providers/LanguageContext";

const contacts = [
  {
    src: "/contact/email.svg",
    alt: "",
    imageClassName: "w-10 h-10",
    labelKey: "contact.email.label",
    valueKey: "contact.email.value",
    href: "mailto:mahanbalaei04@gmail.com"
  },
  {
    src: "/contact/instagram.svg",
    alt: "",
    imageClassName: "w-10 h-10",
    labelKey: "contact.instagram.label",
    valueKey: "contact.instagram.value",
    href: "https://instagram.com/coach.mahan",
  },
  {
    src: "/contact/telegram.svg",
    alt: "",
    imageClassName: "w-10 h-10",
    labelKey: "contact.telegram.label",
    valueKey: "contact.telegram.value",
    href: "https://t.me/mahancoach",
  },
  {
    src: "/contact/linkdin.svg",
    alt: "",
    imageClassName: "w-10 h-10",
    labelKey: "contact.linkedin.label",
    valueKey: "contact.linkedin.value",
    href: "https://www.linkedin.com/in/mahanbalaei",
  },
];

export default function Contact() {
  const { t, isRtl } = useLanguage();

  return (
    <section
      id="contact"
      className="py-16 md:py-32"
      aria-labelledby="contact-title"
    >
      <Container>
        <h2
          id="contact-title"
          className={`text-center text-3xl sm:text-4xl md:text-5xl ${isRtl ? "" : "font-bebas"} text-white uppercase tracking-wide`}
        >
          {t("contact.title")}
        </h2>

        <div className="mt-12 grid gap-6 grid-cols-2 sm:grid-cols-2 lg:grid-cols-4">
          {contacts.map((item) => (
            <a
              key={item.labelKey}
              href={item.href}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={t(item.labelKey)}
              className="group rounded-xl border border-white/10 bg-zinc-900/40 p-6 text-center transition-all duration-300 hover:border-yellow-400/50 hover:bg-zinc-900/60"
            >
              <Image
                src={item.src}
                alt={item.alt}
                width={40}
                height={40}
                className={`${item.imageClassName} mx-auto mb-5 object-contain transition-transform duration-300 group-hover:scale-110`}
              />

              <p className="text-xs sm:text-sm font-semibold uppercase tracking-wider text-gray-400">
                {t(item.labelKey)}
              </p>

              <p className="mt-2 text-sm sm:text-base font-semibold text-white transition-colors group-hover:text-yellow-400">
                {item.valueKey === "contact.email.value" ? (
                  <>
                    <span>mahanbalaei04</span>
                    <span className="hidden sm:inline">@gmail.com</span>
                  </>
                ) : (
                  t(item.valueKey)
                )}
              </p>
            </a>
          ))}
        </div>
      </Container>
    </section>
  );
}
