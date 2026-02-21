"use client";

import { useEffect, useState } from "react";
import Link from "next/link";

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header
  className={`fixed top-0 left-0 w-full z-50 transition-all duration-500 ${
    scrolled
      ? "bg-black/40 backdrop-blur-md shadow-xl"
      : "bg-transparent"
  }`}
>

      <div className="max-w-6xl mx-auto px-6 py-4 flex justify-between items-center text-white">
        <Link href="/" className="text-lg font-semibold tracking-wide">
          Wild Horizons
        </Link>

        <nav className="hidden md:flex gap-8 text-sm uppercase tracking-wider">
          <Link href="/" className="hover:text-yellow-400 transition">
            Home
          </Link>
          <Link href="/about" className="hover:text-yellow-400 transition">
            About
          </Link>
          <Link href="/build-your-adventure">
  Design Your Ride
</Link>
        </nav>
      </div>
    </header>
  );
}
