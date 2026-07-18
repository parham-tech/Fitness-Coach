import type { Metadata } from "next";

import Navbar from "@/features/navbar/Navbar";
import Hero from "@/features/hero/Hero";
import About from "@/features/about/About";
import Achievements from "@/features/achievements/Achievements";
import Certificates from "@/features/certificates/Certificates";
import Contact from "@/features/contact/Contact";

export const metadata: Metadata = {
  title:
    "Mahan Balaei | Strength & Conditioning Coach - ماهان بالائی (ماهان بالایی)",

  description:
    "Mahan Balaei is a Strength & Conditioning Coach, bodybuilding federation coach and powerlifting champion with 17+ years of experience. ماهان بالائی (ماهان بالایی) مربی بدنسازی، پاورلیفتینگ و آمادگی جسمانی.",

  keywords: [
    "Mahan Balaei",
    "Mahan Balaei Coach",
    "Mahan Coach",
    "Strength Coach",
    "Strength and Conditioning Coach",
    "Bodybuilding Coach",
    "Powerlifting Coach",
    "Powerlifting Champion",
    "Fitness Coach",
    "ماهان بالائی",
    "ماهان بالایی",
    "مربی ماهان بالائی",
    "مربی ماهان بالایی",
    "مربی بدنسازی",
    "مربی پاورلیفتینگ",
    "مربی آمادگی جسمانی",
  ],

  authors: [
    {
      name: "Mahan Balaei",
    },
  ],

  creator: "Mahan Balaei",

  metadataBase: new URL("https://mahanbalaei.ir"),

  openGraph: {
    title:
      "Mahan Balaei | Strength & Conditioning Coach - ماهان بالائی (ماهان بالایی)",

    description:
      "Professional portfolio of Mahan Balaei, Strength Coach, bodybuilding federation coach and powerlifting champion.",

    url: "https://mahanbalaei.ir",

    siteName: "Mahan Balaei",

    images: [
      {
        url: "/images/coach.png",
        width: 1200,
        height: 630,
        alt: "Mahan Balaei - Strength Coach",
      },
    ],

    locale: "fa_IR",
    type: "website",
  },

  twitter: {
    card: "summary_large_image",

    title:
      "Mahan Balaei | Strength Coach - ماهان بالائی (ماهان بالایی)",

    description:
      "Strength & Conditioning Coach, Bodybuilding Coach and Powerlifting Champion.",

    images: [
      "/images/coach.png",
    ],
  },

  alternates: {
    canonical: "https://mahanbalaei.ir",
  },

  robots: {
    index: true,
    follow: true,

    googleBot: {
      index: true,
      follow: true,
      "max-image-preview": "large",
      "max-snippet": -1,
      "max-video-preview": -1,
    },
  },
};


export default function Page() {
  return (
    <>
      <Navbar />

      <main>
        <section id="home">
          <Hero />
        </section>

        <section id="about">
          <About />
        </section>

        <section id="achievements">
          <Achievements />
        </section>

        <section id="certificates">
          <Certificates />
        </section>

        <section id="contact">
          <Contact />
        </section>
      </main>
    </>
  );
}