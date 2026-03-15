"use client";
import Link from "next/link";
import Image from "next/image";
import { useState } from "react";
import { Menu, X } from "lucide-react";

const navLinks = [
  { href: "/guides", label: "Plant Guides" },
  { href: "/visit", label: "Visit Us" },
] as const;

export default function Header() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 w-full border-b border-stone-200 bg-white/95 backdrop-blur-sm">
      <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-3">
        {/* Logo */}
        <Link href="/" className="flex items-center gap-2 z-50">
          <Image src="/logo.svg" alt="Flora & Luxe Logo" width={28} height={36} className="h-8 w-auto" />
          <span className="font-semibold text-stone-800 text-sm tracking-wide">
            Flora &amp; Luxe
          </span>
        </Link>

        {/* Desktop Nav Links */}
        <nav className="hidden md:flex items-center gap-7">
          {navLinks.map(({ href, label }) => (
            <Link
              key={href}
              href={href}
              className="text-sm font-medium text-stone-600 hover:text-stone-900 transition-colors"
            >
              {label}
            </Link>
          ))}
        </nav>

        {/* Desktop CTA & Mobile Toggle */}
        <div className="flex items-center gap-4 z-50">
          <Link
            href="/visit"
            className="hidden md:inline-flex rounded-full bg-[#3a7d34] px-5 py-2 text-sm font-semibold text-white hover:bg-[#2d6228] transition-colors"
          >
            Plan Your Visit
          </Link>
          <button
            className="md:hidden p-2 text-stone-600 hover:text-stone-900"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            aria-label="Toggle menu"
          >
            {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {/* Mobile Menu Dropdown */}
      <div
        className={`md:hidden absolute left-0 top-[100%] w-full flex flex-col gap-6 border-b border-stone-200 bg-white px-6 py-6 pb-8 transition-all duration-300 ease-in-out shadow-lg shadow-black/5 ${
          isMobileMenuOpen ? "opacity-100 translate-y-0 visible" : "opacity-0 -translate-y-4 invisible"
        }`}
      >
        <nav className="flex flex-col gap-5 text-center">
          {navLinks.map(({ href, label }) => (
            <Link
              key={href}
              href={href}
              onClick={() => setIsMobileMenuOpen(false)}
              className="text-lg font-bold text-stone-800 hover:text-[#3a7d34] transition-colors"
            >
              {label}
            </Link>
          ))}
        </nav>
        <Link
          href="/visit"
          onClick={() => setIsMobileMenuOpen(false)}
          className="mx-auto block w-full max-w-[200px] rounded-full bg-[#3a7d34] px-5 py-3 text-center text-sm font-bold text-white hover:bg-[#2d6228] transition-colors"
        >
          Plan Your Visit
        </Link>
      </div>
    </header>
  );
}
