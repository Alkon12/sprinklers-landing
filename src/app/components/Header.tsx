"use client";
import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { Menu, X } from "lucide-react";
import Link from "next/link";
import Image from "next/image";

export default function Header() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  // Detectar scroll para cambiar el fondo del header
  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 w-full z-50 transition-all duration-300 ${scrolled ? "bg-black/80 backdrop-blur-lg shadow-lg" : "bg-transparent"}`}
    >
      <div className="max-w-6xl mx-auto px-6 py-2 flex justify-between items-center">
        {/* Logo */}
        <Link href="/" className="flex items-center">
          <Image
            src="/logo.png"
            alt="Aegis Fire Systems Logo"
            width={75} // Ajusta el tamaño si es necesario
            height={20}
            className="h-25 w-auto"
            priority
          />
        </Link>

        {/* Menú Desktop */}
        <nav className="hidden md:flex space-x-6">
          {[
            "About",
            "How It Works",
            "Benefits",
            "Success Stories",
            "Contact",
          ].map((item, index) => (
            <Link
              key={index}
              href={`#${item.toLowerCase().replace(/\s/g, "-")}`}
              className="text-white hover:text-red-500 transition-colors"
            >
              {item}
            </Link>
          ))}
        </nav>

        {/* Botón de menú para móviles */}
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="md:hidden text-white"
        >
          {isOpen ? <X size={28} /> : <Menu size={28} />}
        </button>
      </div>

      {/* Menú Móvil */}
      {isOpen && (
        <motion.nav
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -20 }}
          className="md:hidden absolute top-full left-0 w-full bg-black/90 backdrop-blur-lg py-6"
        >
          <ul className="flex flex-col space-y-4 text-center">
            {[
              "About",
              "How It Works",
              "Benefits",
              "Success Stories",
              "Contact",
            ].map((item, index) => (
              <li key={index}>
                <Link
                  href={`#${item.toLowerCase().replace(/\s/g, "-")}`}
                  className="text-white hover:text-red-500 text-lg transition-colors block py-2"
                  onClick={() => setIsOpen(false)}
                >
                  {item}
                </Link>
              </li>
            ))}
          </ul>
        </motion.nav>
      )}
    </header>
  );
}
