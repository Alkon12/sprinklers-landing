"use client";
import { AnimatedTestimonials } from "@/components/ui/animated-testimonials";
import { motion } from "framer-motion";

export default function CasosExito() {
  const testimonials = [
    {
      quote:
        "The installation was incredibly fast and the workmanship was flawless. It significantly boosted the safety of my home.",
      name: "John Smith",
      designation: "Homeowner",
      src: "/caso1.jpeg",
    },
    {
      quote:
        "The Aegis Fire Systems team did a clean and professional job. I was amazed at how quickly the installation was completed.",
      name: "Emily Johnson",
      designation: "Director",
      src: "/caso2.jpeg",
    },
    {
      quote:
        "I was extremely satisfied with the speed and quality of the service. The installation was seamless and everything turned out perfect.",
      name: "Michael Brown",
      designation: "Administrator",
      src: "/caso3.jpeg",
    },
    {
      quote:
        "The installation was done in record time and the results were outstanding. The process was very organized and neat.",
      name: "Jessica Davis",
      designation: "Manager",
      src: "/caso4.webp",
    },
    {
      quote:
        "I was impressed by the fast and efficient installation process. The service was professional and the work was impeccable.",
      name: "David Wilson",
      designation: "Client",
      src: "/caso5.webp",
    },
    {
      quote:
        "Exceptional service: fast installation, clean workmanship, and results that exceeded my expectations.",
      name: "Amanda Taylor",
      designation: "Business Owner",
      src: "/caso6.webp",
    },
  ];

  return (
    <section
      id="casos-exito"
      className="relative w-full py-20 bg-black text-white"
    >
      <div className="absolute inset-0 bg-[url('/pattern-dark.png')] opacity-10" />
      <div className="max-w-6xl mx-auto px-4">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          className="text-4xl md:text-6xl font-bold text-center mb-10"
        >
          Success Stories
        </motion.h2>
        <AnimatedTestimonials testimonials={testimonials} />
      </div>
    </section>
  );
}
