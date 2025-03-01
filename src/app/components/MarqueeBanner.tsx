"use client";
import Marquee from "react-fast-marquee";

const messages = [
  { text: "🔥 Protecting Homes, Saving Lives!" },
  { text: "🛡️ Advanced Fire Prevention Technology" },
  { text: "✅ 80% Fire Risk Reduction with Aegis Systems" },
];

// Duplicamos los mensajes para evitar espacios vacíos en el scroll
const repeatedMessages = [...messages, ...messages];

export default function MarqueeBanner() {
  return (
    <div className="bg-black text-white py-3 overflow-hidden">
      <Marquee gradient={false} speed={40} pauseOnHover>
        {repeatedMessages.map((msg, index) => (
          <div
            key={index}
            className="flex items-center gap-4 text-lg font-semibold mx-12"
          >
            {msg.text}
          </div>
        ))}
      </Marquee>
    </div>
  );
}
