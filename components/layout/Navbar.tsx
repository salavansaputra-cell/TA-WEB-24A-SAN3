"use client";

import Link from "next/link";
import { useEffect, useState } from "react";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 24);
    };

    handleScroll();

    window.addEventListener("scroll", handleScroll);

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header className="sticky top-0 z-50 w-full transition-shadow duration-300">

      <nav
        className={`container mx-auto flex items-center justify-between px-4 py-4 transition-all duration-300 ${
          isScrolled
            ? "bg-slate-950/95 shadow-xl backdrop-blur"
            : "bg-transparent"
        }`}
      >

        {/* Logo */}
        <div className="flex items-center gap-3 text-white">
          <span className="text-2xl font-semibold">
            Kyokko Beach
          </span>

          <span className="text-xl">
            🌴
          </span>
        </div>

        {/* Desktop Menu */}
        <div className="hidden items-center gap-8 lg:flex">

          <Link
            href="/"
            className="text-sm font-medium text-slate-200"
          >
            Home
          </Link>

          <Link
            href="/info"
            className="text-sm font-medium text-slate-200"
          >
            Info Wisata
          </Link>

          <Link
            href="/reservation"
            className="text-sm font-medium text-slate-200"
          >
            Reservasi
          </Link>

          <Link
            href="/contact"
            className="text-sm font-medium text-slate-200"
          >
            Hubungi Kami
          </Link>

        </div>

        {/* Right Side */}
        <div className="flex items-center gap-3">

          {/* Login */}
          <Link
            href="/admin/login"
            className="hidden rounded-full border border-white/20 bg-white/10 px-4 py-2 text-sm font-semibold text-white lg:inline-flex"
          >
            Login
          </Link>

          {/* Hamburger */}
          <button
            type="button"
            onClick={() => setIsOpen((prev) => !prev)}
            className="inline-flex h-10 w-10 items-center justify-center rounded-full border border-white/20 bg-white/10 text-white lg:hidden"
          >
            ☰
          </button>

        </div>

      </nav>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="bg-slate-950/95 border-t border-white/10 px-4 py-4 lg:hidden">

          <div className="flex flex-col gap-3 text-white">

            <Link href="/">Home</Link>

            <Link href="/info">
              Info Wisata
            </Link>

            <Link href="/reservation">
              Reservasi
            </Link>

            <Link href="/contact">
              Hubungi Kami
            </Link>

          </div>

        </div>
      )}

    </header>
  );
}