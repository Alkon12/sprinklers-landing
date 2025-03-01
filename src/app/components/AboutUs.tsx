"use client";
import { motion } from "framer-motion";
import Image from "next/image";
import React from "react";
import { Cover } from "@/components/ui/cover";

export default function AboutUs() {
  return (
    <section
      id="about-us"
      className="relative w-full py-20 bg-gradient-to-r from-gray-900 to-black text-white overflow-hidden"
    >
      {/* Fondo decorativo */}
      <div className="absolute inset-0 -z-10 bg-[url('/sprinkler-bg.jpg')] bg-cover bg-center opacity-10" />

      <div className="relative z-10 max-w-6xl mx-auto px-4">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 1 }}
          className="text-4xl md:text-6xl font-bold text-center mb-4"
        >
          Revolutionizing <Cover>Fire Protection</Cover>
        </motion.h2>
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.3, duration: 1 }}
          className="text-lg md:text-xl text-center mb-10 max-w-3xl mx-auto"
        >
          At Firewatch Sentinel, we don’t just install sprinklers—we redefine
          fire prevention. Our cutting-edge technology and innovative approach
          ensure that your property remains safe from fire hazards.
        </motion.p>

        {/* Galería de Imágenes Rediseñada */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <motion.div
            initial={{ scale: 0.9, opacity: 0 }}
            whileInView={{ scale: 1, opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 1 }}
            className="relative group overflow-hidden rounded-xl shadow-lg"
          >
            <Image
              src="/sprinkler-install.jpg"
              alt="Instalación de sistemas de rociadores"
              width={800}
              height={600}
              className="w-full h-80 object-cover transition-transform duration-500 group-hover:scale-110"
            />
            {/* Overlay removido para pruebas:
  <div className="absolute inset-0 bg-black bg-opacity-0 group-hover:bg-opacity-50 transition duration-500 flex items-center justify-center">
    <span className="text-lg font-semibold text-white opacity-0 group-hover:opacity-100 transition duration-500">
      Next-Gen Installation
    </span>
  </div>
  */}
          </motion.div>

          <motion.div
            initial={{ scale: 0.9, opacity: 0 }}
            whileInView={{ scale: 1, opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.3, duration: 1 }}
            className="relative group overflow-hidden rounded-xl shadow-lg"
          >
            <Image
              src="/water-tank.webp"
              alt="Sistema de tanque de agua"
              width={800}
              height={600}
              className="w-full h-80 object-cover transition-transform duration-500 group-hover:scale-110"
            />
            {/* Overlay removido para pruebas:
  <div className="absolute inset-0 bg-black bg-opacity-0 group-hover:bg-opacity-50 transition duration-500 flex items-center justify-center">
    <span className="text-lg font-semibold text-white opacity-0 group-hover:opacity-100 transition duration-500">
      Next-Gen Installation
    </span>
  </div>
  */}
          </motion.div>
        </div>

        {/* CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.5, duration: 1 }}
          className="mt-12 text-center"
        >
          <button className="px-8 py-4 bg-red-600 hover:bg-red-700 text-lg font-semibold rounded-lg">
            Learn More
          </button>
        </motion.div>
      </div>
    </section>
  );
}
