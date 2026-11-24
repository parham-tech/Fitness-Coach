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
    "nav.skip_link": "Skip to main content",
    "nav.main_desktop": "Main navigation",
    "nav.main_mobile": "Mobile navigation",
    "nav.open_menu": "Open navigation menu",
    "nav.close_menu": "Close navigation menu",
    "nav.lang_switch": "Change language to Persian (FA)",
    "nav.lang_switched": "Website language switched to English",

    // Hero
    "hero.name": "MAHAN BALAEI",
    "hero.title": "Bodybuilding & Fitness Coach",
    "hero.subtitle": "Powerlifting Specialist",
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
    "about.pause_video": "Pause background video",
    "about.play_video": "Play background video",

    "about.p1":
      "I hold a degree in Sports Biology and am a certified fitness coach accredited by the Iranian Bodybuilding Federation, as well as a strength athlete with over 17 years of training experience. I am also certified in bodybuilding, physical fitness, and weightlifting coaching, and have won multiple Powerlifting and Bench Press championships across the Gilan, Alborz, and Tehran provinces.",

    "about.p2":
      "By combining scientific knowledge, hands-on experience, and a commitment to continuous learning, I strive to help every athlete reach their full potential and achieve lasting performance improvements.",
    // Achievements
    "ach.title": "Achievements",

    "ach.item1.title": "POWERLIFTING CHAMPION",
    "ach.item1.rank": "1st Place",
    "ach.item1.details": " – Alborz Province (2016)",

    "ach.item2.title": "BENCH PRESS & METAL LOG LIFT",
    "ach.item2.rank": "1st Place",
    "ach.item2.details": " – West Tehran (2017)",

    "ach.item3.title": "NATIONAL POWERLIFTING",
    "ach.item3.rank": "2nd Place",
    "ach.item3.details": " – Tehran Selection (2017)",

    "ach.item4.title": "DEADLIFT CHAMPION",
    "ach.item4.rank": "1st Place",
    "ach.item4.details": " – Gilan Province (2012)",

    "ach.item5.title": "FITNESS CHALLENGE",
    "ach.item5.rank": "2nd Place",
    "ach.item5.details": " – Gilan Province (2025)",

    // Certificates
    "cert.title": "Certificates",
    "cert.item1.title": "Bodybuilding Coaching",
    "cert.item2.title": "Physical Fitness",
    "cert.item3.title": "Weightlifting Coaching",

    // Contact
    "contact.title": "Contact",
    "contact.email.label": "Email",
    "contact.email.value": "mahanbalaei04@gmail.com",
    "contact.instagram.label": "Instagram",
    "contact.instagram.value": "@coach.mahan",
    "contact.telegram.label": "Telegram",
    "contact.telegram.value": "@mahancoach",
    "contact.linkedin.label": "Linkedin",
    "contact.linkedin.value": "mahanbalaei",

    // Common
    "common.new_tab": "(opens in a new tab)",
  },

  fa: {
    // Navbar
    "nav.logo": "ماهان بالایی",
    "nav.home": "خانه",
    "nav.about": "درباره من",
    "nav.achievements": "افتخارات",
    "nav.certificates": "مدارک",
    "nav.contact": "تماس با من",
    "nav.skip_link": "پرش به محتوای اصلی",
    "nav.main_desktop": "منوی ناوبری اصلی",
    "nav.main_mobile": "منوی ناوبری موبایل",
    "nav.open_menu": "باز کردن منوی ناوبری",
    "nav.close_menu": "بستن منوی ناوبری",
    "nav.lang_switch": "تغییر زبان به انگلیسی (EN)",
    "nav.lang_switched": "زبان سایت به فارسی تغییر یافت",

    // Hero
    "hero.name": "ماهان بالایی",
    "hero.title": "مربی پرورش اندام و آمادگی جسمانی",
    "hero.subtitle": "متخصص پاورلیفتینگ",
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
    "about.pause_video": "توقف ویدیوی پس‌زمینه",
    "about.play_video": "پخش ویدیوی پس‌زمینه",
    "about.p1":
      "من فارغ‌التحصیل بیولوژی ورزشی، مربی رسمی فدراسیون بدنسازی و ورزشکار قدرتی هستم و بیش از ۱۷ سال سابقه تمرین دارم. همچنین دارای مدرک مربیگری در رشته‌های بدنسازی، آمادگی جسمانی و وزنه‌برداری هستم و قهرمان چندین دوره مسابقات پاورلیفتینگ و پرس سینه در استان‌های گیلان، البرز و تهران بوده‌ام.",

    "about.p2":
      "با تکیه بر دانش علمی، تجربه عملی و یادگیری مستمر، تلاش می‌کنم بهترین مسیر را برای پیشرفت عملکرد ورزشی هر ورزشکار فراهم کنم.",

    // Achievements
    "ach.title": "افتخارات و قهرمانی‌ها",

    "ach.item1.title": "قهرمان پاورلیفتینگ",
    "ach.item1.rank": "مقام اول",
    "ach.item1.details": " استان البرز (۲۰۱۶)",

    "ach.item2.title": "پرس سینه و کنده فلزی",
    "ach.item2.rank": "مقام اول",
    "ach.item2.details": " غرب تهران (۲۰۱۷)",

    "ach.item3.title": "پاورلیفتینگ",
    "ach.item3.rank": "مقام دوم",
    "ach.item3.details": " انتخابی تیم ملی تهران (۲۰۱۷)",

    "ach.item4.title": "قهرمان ددلیفت",
    "ach.item4.rank": "مقام اول",
    "ach.item4.details": " استان گیلان (۲۰۱۲)",

    "ach.item5.title": "فیتنس چلنج",
    "ach.item5.rank": "مقام دوم",
    "ach.item5.details": " استان گیلان (۲۰۲۵)",

    // Certificates
    "cert.title": "مدارک و گواهینامه‌ها",
    "cert.item1.title": "مربیگری بدنسازی",
    "cert.item2.title": "آمادگی جسمانی",
    "cert.item3.title": "مربیگری وزنه‌برداری",

    // Contact
    "contact.title": "تماس با من",
    "contact.email.label": "ایمیل",
    "contact.email.value": "mahanbalaei04@gmail.com",
    "contact.instagram.label": "اینستاگرام",
    "contact.instagram.value": "@coach.mahan",
    "contact.telegram.label": "تلگرام",
    "contact.telegram.value": "@mahancoach",
    "contact.linkedin.label": "لینکدین",
    "contact.linkedin.value": "mahanbalaei",

    // Common
    "common.new_tab": "(در برگه جدید باز می‌شود)",
  },
};

const LanguageContext = createContext<LanguageContextType | undefined>(
  undefined,
);

export function LanguageProvider({ children }: { children: React.ReactNode }) {
  const [language, setLanguageState] = useState<Language>("fa");
  const [mounted, setMounted] = useState(false);
  const [announcement, setAnnouncement] = useState("");

  useEffect(() => {
    // Hydrate language choice from localStorage
    const savedLang = localStorage.getItem("preferredLanguage") as Language;

    if (savedLang === "en" || savedLang === "fa") {
      // eslint-disable-next-line react-hooks/set-state-in-effect -- Client hydration of preferred language from localStorage requires post-mount state update
      setLanguageState(savedLang);
      document.documentElement.lang = savedLang;
      document.documentElement.dir = savedLang === "fa" ? "rtl" : "ltr";
    } else {
      document.documentElement.lang = "fa";
      document.documentElement.dir = "rtl";
    }

    setMounted(true);
  }, []);

  const setLanguage = (lang: Language) => {
    setLanguageState(lang);
    localStorage.setItem("preferredLanguage", lang);
    document.documentElement.lang = lang;
    document.documentElement.dir = lang === "fa" ? "rtl" : "ltr";
    setAnnouncement(translations[lang]["nav.lang_switched"]);
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
      <div role="status" aria-live="polite" aria-atomic="true" className="sr-only">
        {announcement}
      </div>
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
