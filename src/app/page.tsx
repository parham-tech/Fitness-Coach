import type { Metadata } from "next";
import Navbar from "@/features/navbar/Navbar";
import Hero from "@/features/hero/Hero";
import About from "@/features/about/About";
import Achievements from "@/features/achievements/Achievements";
import Certificates from "@/features/certificates/Certificates";
import Contact from "@/features/contact/Contact";

export const metadata: Metadata = {
  title: "Mahan Balaei | Strength Coach - ماهان بالائی | مربی بدنسازی و پاورلیفتینگ",
  description:
    "Mahan Balaei is a graduate in Sports Biology, a certified bodybuilding federation coach, and a powerlifting champion with 17+ years of experience. / ماهان بالائی فارغ‌التحصیل زیست‌شناسی ورزشی، مربی رسمی فدراسیون بدنسازی و قهرمان پاورلیفتینگ با بیش از ۱۷ سال سابقه تمرین.",
  keywords: [
    "Mahan Balaei",
    "Bodybuilding Coach",
    "Strength and Conditioning Coach",
    "Powerlifting Champion",
    "Physical Fitness",
    "Weightlifting Coach",
    "Mahan Coach",
    "ماهان بالائی",
    "مربی بدنسازی",
    "مربی پاورلیفتینگ",
    "آمادگی جسمانی",
  ],
  authors: [{ name: "Mahan Balaei" }],
  openGraph: {
    title: "Mahan Balaei | Strength Coach - ماهان بالائی | مربی بدنسازی و پاورلیفتینگ",
    description:
      "Mahan Balaei: Graduate in Sports Biology, certified bodybuilding federation coach & powerlifting champion. / ماهان بالائی: فارغ‌التحصیل زیست‌شناسی ورزشی، مربی بدنسازی و قهرمان پاورلیفتینگ.",
    url: "https://mahan-coach.com", // قابل شخصی‌سازی به آدرس نهایی سایت
    siteName: "Mahan Balaei Portfolio",
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
    title: "Mahan Balaei | Strength Coach - ماهان بالائی | مربی بدنسازی و پاورلیفتینگ",
    description:
      "Mahan Balaei: Graduate in Sports Biology, certified bodybuilding federation coach & powerlifting champion. / ماهان بالائی: فارغ‌التحصیل زیست‌شناسی ورزشی، مربی بدنسازی و قهرمان پاورلیفتینگ.",
    images: ["/images/coach.png"],
  },
  alternates: {
    canonical: "https://mahan-coach.com",
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