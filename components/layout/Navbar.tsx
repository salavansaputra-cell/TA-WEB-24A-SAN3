"use client";

import Link from "next/link";

export default function Navbar() {
  return (
    <header className="sticky top-0 z-50 w-full">
      <nav className="container mx-auto flex items-center justify-between px-4 py-4">

        {/* Logo */}
        <div className="flex items-center gap-3 text-white">
          <span className="text-2xl font-semibold">
            Kyokko Beach
          </span>

          <span className="text-xl">
            🌴
          </span>
        </div>

        {/* Menu Desktop */}
        <div className="hidden items-center gap-8 lg:flex">

          <Link href="/" className="text-sm font-medium text-slate-200">
            Home
          </Link>

          <Link href="/info" className="text-sm font-medium text-slate-200">
            Info Wisata
          </Link>

          <Link href="/reservation" className="text-sm font-medium text-slate-200">
            Reservasi
          </Link>

          <Link href="/contact" className="text-sm font-medium text-slate-200">
            Hubungi Kami
          </Link>

        </div>

      </nav>
    </header>
  );
}