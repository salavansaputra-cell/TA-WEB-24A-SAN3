"use client";

import Link from "next/link";

export default function Navbar() {
  return (
    <header className="sticky top-0 z-50 w-full">
      <nav className="container mx-auto flex items-center justify-between px-4 py-4">

        <div className="flex items-center gap-3 text-white">
          <span className="text-2xl font-semibold">
            Kyokko Beach
          </span>

          <span className="text-xl">
            🌴
          </span>
        </div>

      </nav>
    </header>
  );
}