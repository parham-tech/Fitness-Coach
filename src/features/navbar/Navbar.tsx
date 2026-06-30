"use client";

import { useState } from "react";
import Link from "next/link";
import { Menu, X } from "lucide-react";
import Container from "@/shared/components/Container";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  const navItems = [
    { label: "Home", href: "#home" },
    { label: "About", href: "#about" },
    { label: "Certificates", href: "#certificates" },
    { label: "Contact", href: "#contact" },
  ];

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-black/80 backdrop-blur-md border-b border-white/10">
      <Container className="h-20 flex items-center justify-between">
        {/* Logo */}
        <Link href="#home" className="text-xl font-black uppercase tracking-wider text-white hover:text-yellow-400 transition-colors">
          MAHAN BALAEI
        </Link>

        {/* Desktop Nav */}
        <nav className="hidden md:flex items-center gap-8">
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

        {/* Mobile Menu Button */}
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="md:hidden text-white hover:text-yellow-400 transition-colors"
          aria-label="Toggle menu"
        >
          {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
        </button>
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
