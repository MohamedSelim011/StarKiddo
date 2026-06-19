"use client";
import { useState, useEffect, useCallback } from "react";
import Image from "next/image";

const photos = [
  "/WhatsApp Image 2026-06-19 at 9.44.10 PM.jpeg",
  "/WhatsApp Image 2026-06-19 at 9.44.12 PM.jpeg",
  "/WhatsApp Image 2026-06-19 at 9.44.12 PM (1).jpeg",
  "/WhatsApp Image 2026-06-19 at 9.44.12 PM (2).jpeg",
  "/WhatsApp Image 2026-06-19 at 9.27.24 PM.jpeg",
  "/WhatsApp Image 2026-06-19 at 9.27.25 PM.jpeg",
  "/WhatsApp Image 2026-06-19 at 9.27.25 PM (1).jpeg",
  "/WhatsApp Image 2026-06-19 at 9.27.25 PM (2).jpeg",
  "/WhatsApp Image 2026-06-19 at 9.27.25 PM (4).jpeg",
  "/WhatsApp Image 2026-06-19 at 9.27.25 PM (5).jpeg",
  "/WhatsApp Image 2026-06-19 at 9.27.25 PM (6).jpeg",
  "/WhatsApp Image 2026-06-19 at 9.27.26 PM.jpeg",
  "/WhatsApp Image 2026-06-19 at 9.27.26 PM (1).jpeg",
];

export default function PhotoCarousel() {
  const [current, setCurrent] = useState(0);
  const [paused, setPaused] = useState(false);

  const next = useCallback(() => setCurrent((c) => (c + 1) % photos.length), []);
  const prev = () => setCurrent((c) => (c - 1 + photos.length) % photos.length);

  useEffect(() => {
    if (paused) return;
    const id = setInterval(next, 3500);
    return () => clearInterval(id);
  }, [paused, next]);

  return (
    <section className="py-16 px-4 bg-white">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-10">
          <div className="inline-flex items-center gap-2 bg-brand-purple/10 text-brand-purple px-4 py-1.5 rounded-full text-sm font-bold mb-4">
            📸 From Our Sessions
          </div>
          <h2 className="text-4xl sm:text-5xl font-display text-gray-900">
            Kids in <span className="text-gradient">Action</span>
          </h2>
        </div>

        <div
          className="relative rounded-3xl overflow-hidden shadow-2xl aspect-video bg-gray-100"
          onMouseEnter={() => setPaused(true)}
          onMouseLeave={() => setPaused(false)}
        >
          {/* Images */}
          {photos.map((src, i) => (
            <div
              key={src}
              className={`absolute inset-0 transition-opacity duration-700 ${i === current ? "opacity-100" : "opacity-0"}`}
            >
              <Image
                src={src}
                alt={`StarKiddo session photo ${i + 1}`}
                fill
                className="object-cover"
                sizes="(max-width: 768px) 100vw, 1200px"
                priority={i === 0}
              />
            </div>
          ))}

          {/* Prev / Next */}
          <button
            onClick={prev}
            className="absolute left-4 top-1/2 -translate-y-1/2 w-11 h-11 rounded-full bg-white/80 backdrop-blur flex items-center justify-center shadow-lg hover:bg-white transition-all text-brand-purple font-black text-lg"
            aria-label="Previous"
          >
            ‹
          </button>
          <button
            onClick={next}
            className="absolute right-4 top-1/2 -translate-y-1/2 w-11 h-11 rounded-full bg-white/80 backdrop-blur flex items-center justify-center shadow-lg hover:bg-white transition-all text-brand-purple font-black text-lg"
            aria-label="Next"
          >
            ›
          </button>

          {/* Dot indicators */}
          <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex gap-2">
            {photos.map((_, i) => (
              <button
                key={i}
                onClick={() => setCurrent(i)}
                className={`h-2 rounded-full transition-all duration-300 ${
                  i === current ? "w-6 bg-white" : "w-2 bg-white/50"
                }`}
                aria-label={`Go to photo ${i + 1}`}
              />
            ))}
          </div>

          {/* Counter */}
          <div className="absolute top-4 right-4 bg-black/40 text-white text-xs font-bold px-3 py-1 rounded-full backdrop-blur">
            {current + 1} / {photos.length}
          </div>
        </div>
      </div>
    </section>
  );
}
