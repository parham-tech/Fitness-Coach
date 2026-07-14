"use client";

import React, { createContext, useContext, useState, useEffect } from "react";
import { motion } from "framer-motion";

export type Language = "en" | "fa";

interface LanguageContextType {
  language: Language;
  setLanguage: (lang: Language) => void;
  t: (key: string) => string;
  isRtl: boolean;
}

const translations: Record<Language, Record<string, string>> = {
  en: {
    // Navbar
    "nav.logo": "MAHAN BALAEI",
    "nav.home": "Home",
    "nav.about": "About",
    "nav.achievements": "Achievements",
    "nav.certificates": "Certificates",
    "nav.contact": "Contact",

    // Hero
    "hero.name": "MAHAN BALAEI",
    "hero.title": "Strength & Conditioning Coach",
    "hero.subtitle": "Bodybuilding & Powerlifting Expert",
    "hero.cert_btn": "MY CERTIFICATES",
    "hero.ach_btn": "MY ACHIEVEMENTS",
    "hero.high.professional": "PROFESSIONAL",
    "hero.high.professional_desc": "Certificates",
    "hero.high.competitive": "COMPETITIVE",
    "hero.high.competitive_desc": "Achievements",
    "hero.high.sports_science": "SPORTS SCIENCE",
    "hero.high.sports_science_desc": "Expertise",

    // About
    "about.tagline": "ABOUT MAHAN",
    "about.title": "Who Am I?",
    "about.p1": "Mahan Balaei is a graduate in Sports Biology, a certified bodybuilding federation coach, and a strength athlete with over 17 years of training experience. He holds coaching certifications in bodybuilding, physical fitness, and weightlifting, and is a multi-time champion in powerlifting and bench press competitions across the provinces of Gilan, Alborz, and Tehran.",
    "about.p2": "My approach is based on scientific knowledge, practical experience, and continuous performance development in sports.",

    // Achievements
    "ach.title": "Achievements",
    "ach.item1.title": "POWERLIFTING CHAMPION",
    "ach.item1.text": "Gilan Province",
    "ach.item2.title": "BENCH PRESS CHAMPION",
    "ach.item2.text": "Alborz Province",
    "ach.item3.title": "POWERLIFTING CHAMPIONSHIP",
    "ach.item3.text": "Tehran Province",
    "ach.item4.title": "17+ YEARS",
    "ach.item4.text": "Training Experience",
    "ach.item5.title": "COMPETITIVE ATHLETE",
    "ach.item5.text": "Multiple Competitions",

    // Certificates
    "cert.title": "Certificates",
    "cert.item1.title": "Bodybuilding Coaching",
    "cert.item2.title": "Physical Fitness",
    "cert.item3.title": "Weightlifting Coaching",

    // Contact
    "contact.title": "Contact",
    "contact.email.label": "Email",
    "contact.email.value": "coach@example.com",
    "contact.instagram.label": "Instagram",
    "contact.instagram.value": "@coach.mahan",
    "contact.telegram.label": "Telegram",
    "contact.telegram.value": "@mahancoach",
    "contact.linkedin.label": "Linkedin",
    "contact.linkedin.value": "Online Coaching",
  },
  fa: {
    // Navbar
    "nav.logo": "ماهان بالائی",
    "nav.home": "خانه",
    "nav.about": "درباره من",
    "nav.achievements": "افتخارات",
    "nav.certificates": "مدارک",
    "nav.contact": "تماس با من",

    // Hero
    "hero.name": "ماهان بالائی",
    "hero.title": "مربی بدنسازی و آمادگی جسمانی",
    "hero.subtitle": "متخصص پرورش اندام و پاورلیفتینگ",
    "hero.cert_btn": "مدارک من",
    "hero.ach_btn": "افتخارات من",
    "hero.high.professional": "حرفه‌ای",
    "hero.high.professional_desc": "مدارک و گواهینامه‌ها",
    "hero.high.competitive": "رقابتی",
    "hero.high.competitive_desc": "عناوین قهرمانی",
    "hero.high.sports_science": "علوم ورزشی",
    "hero.high.sports_science_desc": "دانش تخصصی",

    // About
    "about.tagline": "درباره ماهان",
    "about.title": "من کیم؟",
    "about.p1": "ماهان بالائی فارغ‌التحصیل زیست‌شناسی ورزشی، مربی رسمی فدراسیون بدنسازی و ورزشکار قدرتی با بیش از ۱۷ سال سابقه تمرین است. او دارای مدرک مربیگری در رشته‌های بدنسازی، آمادگی جسمانی و وزنه‌برداری بوده و قهرمان چندین دوره مسابقات پاورلیفتینگ و پرس سینه در استان‌های گیلان، البرز و تهران می‌باشد.",
    "about.p2": "رویکرد من بر پایه دانش علمی، تجربه عملی و توسعه مداوم عملکرد در ورزش است.",

    // Achievements
    "ach.title": "افتخارات و قهرمانی‌ها",
    "ach.item1.title": "قهرمان پاورلیفتینگ",
    "ach.item1.text": "استان گیلان",
    "ach.item2.title": "قهرمان پرس سینه",
    "ach.item2.text": "استان البرز",
    "ach.item3.title": "قهرمانی پاورلیفتینگ",
    "ach.item3.text": "استان تهران",
    "ach.item4.title": "بیش از ۱۷ سال",
    "ach.item4.text": "سابقه تمرین مستمر",
    "ach.item5.title": "ورزشکار رقابتی",
    "ach.item5.text": "مسابقات متعدد استانی و کشوری",

    // Certificates
    "cert.title": "مدارک و گواهینامه‌ها",
    "cert.item1.title": "مربیگری بدنسازی",
    "cert.item2.title": "آمادگی جسمانی",
    "cert.item3.title": "مربیگری وزنه‌برداری",

    // Contact
    "contact.title": "تماس با من",
    "contact.email.label": "ایمیل",
    "contact.email.value": "coach@example.com",
    "contact.instagram.label": "اینستاگرام",
    "contact.instagram.value": "@coach.mahan",
    "contact.telegram.label": "تلگرام",
    "contact.telegram.value": "@mahancoach",
    "contact.linkedin.label": "لینکدین",
    "contact.linkedin.value": "مربیگری آنلاین",
  },
};

const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

export function LanguageProvider({ children }: { children: React.ReactNode }) {
  const [language, setLanguageState] = useState<Language>("en");
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    // Hydrate language choice from localStorage
    const savedLang = localStorage.getItem("preferredLanguage") as Language;
    if (savedLang === "en" || savedLang === "fa") {
      setLanguageState(savedLang);
    }
    setMounted(true);
  }, []);

  const setLanguage = (lang: Language) => {
    setLanguageState(lang);
    localStorage.setItem("preferredLanguage", lang);
  };

  const t = (key: string): string => {
    return translations[language][key] || key;
  };

  const isRtl = language === "fa";

  useEffect(() => {
    if (mounted) {
      document.documentElement.lang = language;
      document.documentElement.dir = isRtl ? "rtl" : "ltr";
    }
  }, [language, isRtl, mounted]);

  return (
    <LanguageContext.Provider value={{ language, setLanguage, t, isRtl }}>
      <motion.div
        key={language}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5, ease: "easeInOut" }}
      >
        {children}
      </motion.div>
    </LanguageContext.Provider>
  );
}

export function useLanguage() {
  const context = useContext(LanguageContext);
  if (context === undefined) {
    throw new Error("useLanguage must be used within a LanguageProvider");
  }
  return context;
}
