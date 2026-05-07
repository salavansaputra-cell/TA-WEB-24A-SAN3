"use client";

import Link from "next/link";
import { useEffect, useState } from "react";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 24);
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
        <div className="flex items-center gap-3 text-white">
          <span className="text-2xl font-semibold">Kyokko Beach</span>
          <span className="text-xl">🌴</span>
        </div>

        <div className="hidden items-center gap-8 lg:flex">
          <Link href="/" className="text-sm font-medium text-slate-200 transition hover:text-white">
            Home
          </Link>
          <Link href="/info" className="text-sm font-medium text-slate-200 transition hover:text-white">
            Info Wisata
          </Link>
          <Link href="/reservation" className="text-sm font-medium text-slate-200 transition hover:text-white">
            Reservasi
          </Link>
          <Link href="/contact" className="text-sm font-medium text-slate-200 transition hover:text-white">
            Hubungi Kami
          </Link>
        </div>

        <div className="flex items-center gap-3">
          <Link
            href="/admin/login"
            className="hidden rounded-full border border-white/20 bg-white/10 px-4 py-2 text-sm font-semibold text-white transition hover:border-white hover:bg-white/20 lg:inline-flex"
          >
            Login
          </Link>

          <button
            type="button"
            onClick={() => setIsOpen((prev) => !prev)}
            className="inline-flex h-10 w-10 items-center justify-center rounded-full border border-white/20 bg-white/10 text-white transition hover:bg-white/20 lg:hidden"
            aria-label="Toggle navigation menu"
            aria-expanded={isOpen}
          >
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="h-6 w-6">
              <path d="M4 7h16M4 12h16M4 17h16" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
          </button>
        </div>
      </nav>

      {isOpen && (
        <div className="bg-slate-950/95 border-t border-white/10 px-4 py-4 lg:hidden">
          <div className="flex flex-col gap-3">
            <Link href="/" onClick={() => setIsOpen(false)} className="rounded-xl px-3 py-3 text-sm font-medium text-slate-100 transition hover:bg-white/10">
              Home
            </Link>
            <Link href="/info" onClick={() => setIsOpen(false)} className="rounded-xl px-3 py-3 text-sm font-medium text-slate-100 transition hover:bg-white/10">
              Info Wisata
            </Link>
            <Link href="/reservation" onClick={() => setIsOpen(false)} className="rounded-xl px-3 py-3 text-sm font-medium text-slate-100 transition hover:bg-white/10">
              Reservasi
            </Link>
            <Link href="/contact" onClick={() => setIsOpen(false)} className="rounded-xl px-3 py-3 text-sm font-medium text-slate-100 transition hover:bg-white/10">
              Hubungi Kami
            </Link>
            <Link href="/admin/login" onClick={() => setIsOpen(false)} className="mt-2 inline-flex rounded-full bg-white px-4 py-3 text-center text-sm font-semibold text-slate-950 transition hover:bg-slate-100">
              Login
            </Link>
          </div>
        </div>
      )}
    </header>
  );
}