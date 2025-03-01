"use client";
import { Mail, Phone, MapPin } from "lucide-react";
import Link from "next/link";

export default function Footer() {
  return (
    <footer className="bg-gray-900 text-gray-300 py-10">
      <div className="max-w-6xl mx-auto px-6 grid grid-cols-1 md:grid-cols-3 gap-8">
        {/* Información de la Empresa */}
        <div>
          <h4 className="text-xl font-semibold text-white">
            Aegis Fire Systems
          </h4>
          <p className="mt-2">
            Protecting homes & businesses with advanced fire prevention
            solutions.
          </p>
        </div>

        {/* Enlaces Rápidos */}
        <div>
          <h4 className="text-xl font-semibold text-white">Quick Links</h4>
          <ul className="mt-2 space-y-2">
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
                  className="hover:text-red-500 transition-colors"
                >
                  {item}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        {/* Contacto */}
        <div>
          <h4 className="text-xl font-semibold text-white">Contact</h4>
          <div className="mt-2 space-y-3">
            <p className="flex items-center gap-2">
              <MapPin className="text-red-500" size={20} />
              1234 Fire Safety Blvd, USA
            </p>
            <p className="flex items-center gap-2">
              <Phone className="text-red-500" size={20} />
              (123) 456-7890
            </p>
            <p className="flex items-center gap-2">
              <Mail className="text-red-500" size={20} />
              info@aegisfiresystems.com
            </p>
          </div>
        </div>
      </div>

      {/* Línea de Copyright */}
      <div className="text-center mt-8 border-t border-gray-700 pt-6">
        <p>© 2025 Firewatch Sentinel. All rights reserved.</p>
      </div>
    </footer>
  );
}
