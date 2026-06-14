"use client";

import Image from "next/image";
import Link from "next/link";
import { useState } from "react";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  const links = [
    { name: "الرئيسية", href: "/" },
    { name: "الأنشطة", href: "/activites" },
    { name: "الخدمات", href: "/services" },
    { name: "اتصل بنا", href: "/contact" },
  ];

  return (
    <nav className="md:absolute w-full bg-black/85 md:bg-black/30 md:bg-clip-padding md:backdrop-filter md:backdrop-blur-sm md:bg-opacity-40 shadow-md">
      <div className="container mx-auto flex items-center justify-between pr-3">
        {/* Desktop Menu */}
        <div className="hidden md:flex items-center gap-6">
          {links.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="text-white hover:text-black transition text-2xl font-bold"
            >
              {link.name}
            </Link>
          ))}
        </div>

        {/* Hamburger */}
        <button
          className="md:hidden text-white hover:text-yellow-600 transition"
          onClick={() => setIsOpen(!isOpen)}
        >
          <svg
            className="h-7 w-7"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            {isOpen ? (
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M6 18L18 6M6 6l12 12"
              />
            ) : (
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M4 6h16M4 12h16M4 18h16"
              />
            )}
          </svg>
        </button>
        {/* Logo */}
        <Link
          href="/"
          className="text-2xl font-bold text-blue-600"
        >
                  <Image src={'/logo.png'} alt="1" width={100} height={100} className=" rounded-full"/>

        </Link>

        
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden border-t bg-black/85">
          <div className="flex flex-col p-4 gap-4">
            {links.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="text-white hover:text-yellow-600 transition text-right text-lg"
                onClick={() => setIsOpen(false)}
              >
                {link.name}
              </Link>
            ))}
          </div>
        </div>
      )}
    </nav>
  );
}