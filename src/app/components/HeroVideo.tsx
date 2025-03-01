"use client";
import { useEffect } from "react";

export default function HeroVideo() {
  // Función personalizada para animar el scroll con easing
  const smoothScrollToAbout = () => {
    const aboutSection = document.getElementById("about-us");
    if (!aboutSection) return;

    const targetPosition =
      aboutSection.getBoundingClientRect().top + window.pageYOffset;
    const startPosition = window.pageYOffset;
    const distance = targetPosition - startPosition;
    const duration = 800; // duración en milisegundos
    let startTime: number | null = null;

    // Easing function: easeInOutQuad
    const easeInOutQuad = (t: number, b: number, c: number, d: number) => {
      t /= d / 2;
      if (t < 1) return (c / 2) * t * t + b;
      t--;
      return (-c / 2) * (t * (t - 2) - 1) + b;
    };

    const animation = (currentTime: number) => {
      if (startTime === null) startTime = currentTime;
      const timeElapsed = currentTime - startTime;
      const nextScroll = easeInOutQuad(
        timeElapsed,
        startPosition,
        distance,
        duration,
      );
      window.scrollTo(0, nextScroll);
      if (timeElapsed < duration) requestAnimationFrame(animation);
    };

    requestAnimationFrame(animation);
  };

  useEffect(() => {
    let autoScrollTriggered = false;
    const handleScroll = () => {
      // Detecta si el usuario empieza a scrollear dentro del área del Hero
      if (
        !autoScrollTriggered &&
        window.scrollY > 50 &&
        window.scrollY < window.innerHeight
      ) {
        autoScrollTriggered = true;
        smoothScrollToAbout();
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <section className="relative w-full h-screen">
      <video
        autoPlay
        loop
        muted
        playsInline
        className="absolute top-0 left-0 w-full h-full object-cover"
      >
        <source src="/hero-video.mp4" type="video/mp4" />
      </video>
      <div className="absolute inset-0 flex flex-col items-center justify-center text-white text-center px-6">
        <h1 className="text-4xl md:text-6xl font-bold">
          Protect Your Home, Secure Your Future
        </h1>
        <button
          onClick={smoothScrollToAbout}
          className="mt-6 px-6 py-3 bg-red-600 hover:bg-red-700 rounded-lg text-lg font-semibold cursor-pointer"
        >
          Learn More
        </button>
        <div
          className="absolute bottom-10 text-white text-lg animate-bounce cursor-pointer"
          onClick={smoothScrollToAbout}
        >
          ↓ Scroll Down
        </div>
      </div>
    </section>
  );
}
