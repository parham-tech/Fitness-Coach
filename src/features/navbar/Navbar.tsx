"use client";

import { useState, useRef, useEffect } from "react";
import Link from "next/link";
import { Menu, X, Globe } from "lucide-react";
import Container from "@/shared/components/Container";
import { useLanguage } from "@/providers/LanguageContext";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const { language, setLanguage, t } = useLanguage();
  const menuButtonRef = useRef<HTMLButtonElement>(null);

  useEffect(() => {
    if (!isOpen) return;

    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        setIsOpen(false);
        menuButtonRef.current?.focus();
      }
    };

    document.addEventListener("keydown", handleKeyDown);
    return () => document.removeEventListener("keydown", handleKeyDown);
  }, [isOpen]);

  const navItems = [
    { label: t("nav.home"), href: "#home" },
    { label: t("nav.about"), href: "#about" },
    { label: t("nav.certificates"), href: "#certificates" },
    { label: t("nav.contact"), href: "#contact" },
  ];

  const toggleLanguage = () => {
    setLanguage(language === "en" ? "fa" : "en");
  };

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-black/80 backdrop-blur-md border-b border-white/10">
      {/* Skip Navigation Link */}
      <a
        href="#main-content"
        className="sr-only focus:not-sr-only focus:fixed focus:top-4 focus:left-4 rtl:focus:left-auto rtl:focus:right-4 focus:z-[100] focus:px-5 focus:py-2.5 focus:bg-yellow-400 focus:text-black focus:font-bold focus:rounded-md focus:shadow-2xl focus:outline-none focus:ring-4 focus:ring-yellow-400/50"
      >
        {t("nav.skip_link")}
      </a>

      <Container className="h-20 flex items-center justify-between">
        {/* Logo */}
        <Link href="#home" className="text-xl font-black uppercase tracking-wider text-white hover:text-yellow-400 transition-colors">
          {t("nav.logo")}
        </Link>

        {/* Desktop Nav */}
        <div className="hidden md:flex items-center gap-8">
          <nav aria-label={t("nav.main_desktop")} className="flex items-center gap-8">
            {navItems.map((item) => (
              <Link
                key={item.label}
                href={item.href}
                className="text-sm font-medium uppercase tracking-wider text-gray-300 hover:text-yellow-400 transition-colors"
              >
                {item.label}
              </Link>
            ))}
          </nav>

          {/* Language Switcher */}
          <button
            onClick={toggleLanguage}
            aria-label={t("nav.lang_switch")}
            className="flex items-center gap-1 px-3 py-1.5 text-xs font-bold border border-white/40 rounded-md hover:border-yellow-400 hover:text-yellow-400 transition-all cursor-pointer bg-zinc-900/50"
          >
            <Globe className="h-3.5 w-3.5" aria-hidden="true" />
            <span>{language === "en" ? "FA" : "EN"}</span>
          </button>
        </div>

        {/* Mobile Buttons */}
        <div className="flex items-center gap-4 md:hidden">
          {/* Mobile Language Switcher */}
          <button
            onClick={toggleLanguage}
            aria-label={t("nav.lang_switch")}
            className="flex items-center gap-1 px-2.5 py-1.5 text-xs font-bold border border-white/40 rounded-md hover:border-yellow-400 hover:text-yellow-400 transition-all cursor-pointer bg-zinc-900/50"
          >
            <Globe className="h-3.5 w-3.5" aria-hidden="true" />
            <span>{language === "en" ? "FA" : "EN"}</span>
          </button>

          {/* Mobile Menu Button */}
          <button
            ref={menuButtonRef}
            onClick={() => setIsOpen(!isOpen)}
            className="min-w-[44px] min-h-[44px] p-2.5 flex items-center justify-center rounded-md text-white hover:text-yellow-400 transition-colors"
            aria-label={isOpen ? t("nav.close_menu") : t("nav.open_menu")}
            aria-expanded={isOpen}
            aria-controls="mobile-nav-menu"
          >
            {isOpen ? <X className="h-6 w-6" aria-hidden="true" /> : <Menu className="h-6 w-6" aria-hidden="true" />}
          </button>
        </div>
      </Container>

      {/* Mobile Nav Overlay */}
      <div
        id="mobile-nav-menu"
        hidden={!isOpen}
        className="md:hidden border-t border-white/10 bg-black py-4"
      >
        <nav aria-label={t("nav.main_mobile")} className="flex flex-col px-6 gap-4">
          {navItems.map((item) => (
            <Link
              key={item.label}
              href={item.href}
              onClick={() => setIsOpen(false)}
              className="text-sm font-medium uppercase tracking-wider text-gray-300 hover:text-yellow-400 transition-colors py-2"
            >
              {item.label}
            </Link>
          ))}
        </nav>
      </div>
    </header>
  );
}
