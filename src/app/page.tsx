import type { Metadata } from "next";
import Navbar from "@/features/navbar/Navbar";
import Hero from "@/features/hero/Hero";
import About from "@/features/about/About";
import Achievements from "@/features/achievements/Achievements";
import Certificates from "@/features/certificates/Certificates";
import Contact from "@/features/contact/Contact";

export const metadata: Metadata = {
  metadataBase: new URL("https://mahanbalaei.ir"),

  title:
    "ماهان بالایی | مربی بدنسازی، پاورلیفتینگ و آمادگی جسمانی (Mahan Balaei)",

  description:
    "ماهان بالایی (Mahan Balaei) مربی بدنسازی، پاورلیفتینگ و آمادگی جسمانی با ۱۷+ سال سابقه تمرین و تخصص در برنامه‌ریزی تمرینات قدرتی و بهبود عملکرد ورزشی. / Mahan Balaei is a Strength Coach, Bodybuilding Coach & Powerlifting Champion with 17+ years of experience.",

  authors: [
    {
      name: "Mahan Balaei",
      url: "https://mahanbalaei.ir",
    },
  ],

  creator: "Mahan Balaei",

  publisher: "Mahan Balaei",

  keywords: [
    "ماهان بالایی",
    "مربی ماهان بالایی",
    "ماهان بالایی مربی بدنسازی",
    "برنامه تمرینی ماهان بالایی",
    "مربی بدنسازی",
    "مربی پاورلیفتینگ",
    "مربی آمادگی جسمانی",
    "بهترین مربی بدنسازی",
    "مربی خصوصی بدنسازی",
    "برنامه ورزشی آنلاین",
    "Mahan Balaei",
    "Mahan Balaei Coach",
    "Strength & Conditioning Coach",
    "Bodybuilding Coach",
    "Powerlifting Coach",
  ],

  icons: {
    icon: "/favicon.ico",
  },

  alternates: {
    canonical: "https://mahanbalaei.ir",
  },

  openGraph: {
    title:
      "ماهان بالایی | مربی بدنسازی، پاورلیفتینگ و آمادگی جسمانی (Mahan Balaei)",

    description:
      "نمونه کار، رزومه و برنامه‌های ورزشی ماهان بالایی مربی رسمی بدنسازی و قهرمان پاورلیفتینگ. / Professional portfolio of Mahan Balaei, Strength Coach & Powerlifting Champion.",

    url: "https://mahanbalaei.ir",

    siteName: "ماهان بالایی",

    locale: "fa_IR",

    type: "website",

    images: [
      {
        url: "/images/coach.png",
        width: 1200,
        height: 630,
        alt: "ماهان بالایی - مربی بدنسازی و آمادگی جسمانی",
      },
    ],
  },

  twitter: {
    card: "summary_large_image",

    title:
      "ماهان بالایی | مربی بدنسازی، پاورلیفتینگ و آمادگی جسمانی (Mahan Balaei)",

    description:
      "رزومه و برنامه‌های تمرینی ماهان بالایی، مربی بدنسازی و آمادگی جسمانی. / Strength & Conditioning Coach Mahan Balaei portfolio.",

    images: [
      "/images/coach.png",
    ],
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
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Person",
    "name": "ماهان بالایی",
    "alternateName": "Mahan Balaei",
    "jobTitle": "مربی بدنسازی، پاورلیفتینگ و آمادگی جسمانی",
    "description": "ماهان بالایی (Mahan Balaei) مربی بدنسازی، پاورلیفتینگ و آمادگی جسمانی با ۱۷+ سال سابقه تمرین و تخصص در برنامه‌ریزی تمرینات قدرتی، بدنسازی، کاهش و افزایش وزن و بهبود عملکرد ورزشی.",
    "url": "https://mahanbalaei.ir",
    "image": "https://mahanbalaei.ir/images/coach.png",
    "sameAs": [
      "https://instagram.com/coach.mahan",
      "https://t.me/mahancoach",
      "https://www.linkedin.com/in/mahanbalaei"
    ]
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
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
