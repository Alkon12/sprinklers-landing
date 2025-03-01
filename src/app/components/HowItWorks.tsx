"use client";
import { motion } from "framer-motion";
import Image from "next/image";

export default function HowItWorks() {
  return (
    <section
      id="how-it-works"
      className="relative w-full py-20 bg-black text-white overflow-hidden"
    >
      <div className="absolute inset-0 bg-[url('/pattern-dark.png')] opacity-10" />
      <div className="relative max-w-6xl mx-auto px-4">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          className="text-4xl md:text-6xl font-bold text-center mb-6"
        >
          How Sprinklers Work
        </motion.h2>
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3, duration: 1 }}
          className="text-lg md:text-xl text-center mb-12 max-w-3xl mx-auto"
        >
          Our advanced sprinkler system <strong>detects heat instantly</strong>{" "}
          and releases a powerful mist of water, cooling the area and{" "}
          <strong>stopping fires before they spread</strong>.
        </motion.p>

        {/* Contenedor con relación de aspecto fija para la imagen */}
        <div className="relative mx-auto w-full max-w-lg aspect-[3/2] rounded-2xl overflow-hidden">
          <Image
            src="/sprinkler-action.jpeg" // Reemplaza con la ruta correcta de tu imagen
            alt="Advanced Sprinkler System"
            fill
            className="object-cover"
          />
          {/* SVG superpuesto para el borde animado tipo rayo de luz */}
          <motion.svg
            initial={{ strokeDashoffset: 0 }}
            animate={{ strokeDashoffset: -1976 }}
            transition={{ duration: 3, repeat: Infinity, ease: "linear" }}
            className="absolute inset-0 w-full h-full pointer-events-none"
            viewBox="0 0 600 400"
          >
            <rect
              x="3"
              y="3"
              width="594"
              height="394"
              rx="16"
              ry="16"
              fill="none"
              stroke="#FFAA00"
              strokeWidth="6"
              strokeDasharray="50 1926"
            />
          </motion.svg>
        </div>
      </div>
    </section>
  );
}
