"use client";
import Link from "next/link";
import { Leaf } from "lucide-react";

const navLinks = [
  { href: "/guides", label: "Plant Guides" },
  { href: "/visit", label: "Visit Us" },
] as const;

export default function Header() {
  return (
    <header className="sticky top-0 z-50 w-full border-b border-stone-200 bg-white/95 backdrop-blur-sm">
      <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-3">
        {/* Logo */}
        <Link href="/" className="flex items-center gap-2">
          <Leaf className="h-5 w-5 text-orange-500" />
          <span className="font-semibold text-stone-800 text-sm tracking-wide">
            Flora &amp; Luxe
          </span>
        </Link>

        {/* Nav Links */}
        <nav className="hidden md:flex items-center gap-7">
          {navLinks.map(({ href, label }) => (
            <Link
              key={href}
              href={href}
              className="text-sm text-stone-600 hover:text-stone-900 transition-colors"
            >
              {label}
            </Link>
          ))}
        </nav>

        {/* CTA */}
        <Link
          href="/visit"
          className="rounded-full bg-orange-500 px-5 py-2 text-sm font-semibold text-white hover:bg-orange-600 transition-colors"
        >
          Plan Your Visit
        </Link>
      </div>
    </header>
  );
}
