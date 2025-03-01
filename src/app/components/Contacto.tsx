"use client";
import { motion } from "framer-motion";
import { Mail, Phone, MapPin, Send } from "lucide-react";

export default function Contacto() {
  return (
    <section
      id="contact"
      className="relative w-full py-20 bg-gradient-to-br from-gray-900 to-black text-white"
    >
      <div className="max-w-5xl mx-auto px-6">
        {/* Título */}
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          className="text-4xl md:text-6xl font-bold text-center mb-12"
        >
          Let&apos;s Connect
        </motion.h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          {/* Formulario */}
          <motion.form
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3, duration: 1 }}
            className="bg-gray-800 p-8 rounded-2xl shadow-2xl border border-gray-700 backdrop-blur-lg space-y-6"
            action="/api/contact" // Configura un endpoint si deseas enviar emails
            method="post"
          >
            <div>
              <label htmlFor="name" className="block text-sm font-medium mb-2">
                Your Name
              </label>
              <input
                type="text"
                id="name"
                name="name"
                required
                className="w-full p-3 rounded-xl bg-gray-700 border border-gray-600 focus:outline-none focus:ring-2 focus:ring-red-600"
                placeholder="John Doe"
              />
            </div>
            <div>
              <label htmlFor="email" className="block text-sm font-medium mb-2">
                Email Address
              </label>
              <input
                type="email"
                id="email"
                name="email"
                required
                className="w-full p-3 rounded-xl bg-gray-700 border border-gray-600 focus:outline-none focus:ring-2 focus:ring-red-600"
                placeholder="you@example.com"
              />
            </div>
            <div>
              <label
                htmlFor="message"
                className="block text-sm font-medium mb-2"
              >
                Message
              </label>
              <textarea
                id="message"
                name="message"
                required
                rows={5}
                className="w-full p-3 rounded-xl bg-gray-700 border border-gray-600 focus:outline-none focus:ring-2 focus:ring-red-600"
                placeholder="Write your message..."
              ></textarea>
            </div>
            <button
              type="submit"
              className="w-full py-3 bg-red-600 hover:bg-red-700 flex items-center justify-center gap-2 text-lg font-semibold rounded-xl transition-all duration-300"
            >
              Send Message <Send className="w-5 h-5" />
            </button>
          </motion.form>

          {/* Información de Contacto con Iconos */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.6, duration: 1 }}
            className="space-y-8"
          >
            <div className="flex items-center gap-4 bg-gray-800 p-6 rounded-xl shadow-lg border border-gray-700">
              <MapPin className="w-10 h-10 text-red-500" />
              <div>
                <h4 className="text-xl font-semibold">Our Location</h4>
                <p className="text-gray-400">
                  1234 Fire Safety Blvd, Anytown, USA
                </p>
              </div>
            </div>

            <div className="flex items-center gap-4 bg-gray-800 p-6 rounded-xl shadow-lg border border-gray-700">
              <Phone className="w-10 h-10 text-red-500" />
              <div>
                <h4 className="text-xl font-semibold">Call Us</h4>
                <p className="text-gray-400">(123) 456-7890</p>
              </div>
            </div>

            <div className="flex items-center gap-4 bg-gray-800 p-6 rounded-xl shadow-lg border border-gray-700">
              <Mail className="w-10 h-10 text-red-500" />
              <div>
                <h4 className="text-xl font-semibold">Email</h4>
                <p className="text-gray-400">info@aegisfiresystems.com</p>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
