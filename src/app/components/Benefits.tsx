"use client";
import { motion } from "framer-motion";
import { useEffect, useState } from "react";
import Heatmap from "./Heatmap";

// Animated number component for smooth counting
function AnimatedNumber({ value }: { value: number }) {
  const [count, setCount] = useState(0);
  useEffect(() => {
    const duration = 2000; // 2 seconds
    const start = 0;
    const end = value;
    const stepTime = Math.abs(Math.floor(duration / (end - start)));
    let current = start;
    const timer = setInterval(() => {
      current += 1;
      setCount(current);
      if (current >= end) {
        clearInterval(timer);
      }
    }, stepTime);
    return () => clearInterval(timer);
  }, [value]);
  return <span>{count}</span>;
}

export default function Benefits() {
  return (
    <section
      id="benefits"
      className="relative w-full py-20 bg-gray-100 text-gray-900"
    >
      <div className="absolute inset-0 bg-[url('/pattern-light.png')] opacity-10" />
      <div className="max-w-6xl mx-auto px-4">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          className="text-4xl md:text-6xl font-bold text-center mb-10"
        >
          Benefits of Our System
        </motion.h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          {/* Comparative Graphic */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 1 }}
            className="flex flex-col items-center justify-center p-6 bg-gray-50 rounded-lg shadow-lg"
          >
            <h3 className="text-2xl font-bold mb-4">Fire Incident Reduction</h3>
            <div className="w-full">
              <div className="flex justify-between mb-2">
                <span>Before Sprinklers</span>
                <span className="font-bold text-red-600">
                  <AnimatedNumber value={100} />%
                </span>
              </div>
              <div className="w-full h-4 bg-gray-200 rounded-full">
                <div
                  className="h-4 bg-red-600 rounded-full"
                  style={{ width: "100%" }}
                ></div>
              </div>
              <div className="flex justify-between mt-4 mb-2">
                <span>After Sprinklers</span>
                <span className="font-bold text-green-600">
                  <AnimatedNumber value={20} />%
                </span>
              </div>
              <div className="w-full h-4 bg-gray-200 rounded-full">
                <div
                  className="h-4 bg-green-600 rounded-full"
                  style={{ width: "20%" }}
                ></div>
              </div>
            </div>
            <p className="mt-4 text-center">
              Our technology can reduce fire incidents by up to 80%.
            </p>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 1, delay: 0.3 }}
            className="flex flex-col items-center justify-center p-6 bg-gray-50 rounded-lg shadow-lg"
          >
            <h3 className="text-2xl font-bold mb-4">
              Heatmap of Fire Incidents
            </h3>
            <div className="w-full h-64">
              {/* El componente Heatmap ya no espera recibir props, contiene sus propios datos */}
              <Heatmap />
            </div>
            <p className="mt-4 text-center">
              Our system protects the highest-risk areas with cutting-edge
              technology.
            </p>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
