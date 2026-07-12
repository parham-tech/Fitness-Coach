"use client";

import { useState } from "react";
import Link from "next/link";
import { Menu, X, Globe } from "lucide-react";
import Container from "@/shared/components/Container";
import { useLanguage } from "@/providers/LanguageContext";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const { language, setLanguage, t, isRtl } = useLanguage();

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
      <Container className="h-20 flex items-center justify-between">
        {/* Logo */}
        <Link href="#home" className="text-xl font-black uppercase tracking-wider text-white hover:text-yellow-400 transition-colors">
          {t("nav.logo")}
        </Link>

        {/* Desktop Nav */}
        <div className="hidden md:flex items-center gap-8">
          <nav className="flex items-center gap-8">
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
            className="flex items-center gap-1 px-3 py-1.5 text-xs font-bold border border-white/20 rounded-md hover:border-yellow-400 hover:text-yellow-400 transition-all cursor-pointer bg-zinc-900/50"
          >
            <Globe className="h-3.5 w-3.5" />
            <span>{language === "en" ? "FA" : "EN"}</span>
          </button>
        </div>

        {/* Mobile Buttons */}
        <div className="flex items-center gap-4 md:hidden">
          {/* Mobile Language Switcher */}
          <button
            onClick={toggleLanguage}
            className="flex items-center gap-1 px-2.5 py-1.5 text-xs font-bold border border-white/20 rounded-md hover:border-yellow-400 hover:text-yellow-400 transition-all cursor-pointer bg-zinc-900/50"
          >
            <Globe className="h-3.5 w-3.5" />
            <span>{language === "en" ? "FA" : "EN"}</span>
          </button>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="text-white hover:text-yellow-400 transition-colors"
            aria-label="Toggle menu"
          >
            {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </div>
      </Container>

      {/* Mobile Nav Overlay */}
      {isOpen && (
        <div className="md:hidden border-t border-white/10 bg-black py-4">
          <nav className="flex flex-col px-6 gap-4">
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
      )}
    </header>
  );
}
