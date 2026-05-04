"use client";

import Image from "next/image";
import { useRef, useState, useLayoutEffect } from "react";
import { motion, useReducedMotion } from "framer-motion";
import { partnerLogos } from "@/lib/partnerLogos";

function logoAlt(logo: (typeof partnerLogos)[number], index: number) {
  if (logo.name !== "Partner Logo") return `${logo.name} logo`;
  return `Partner brand ${index + 1}`;
}

export function BrandsMarquee() {
  const trackRef = useRef<HTMLDivElement>(null);
  const [stripWidth, setStripWidth] = useState(0);
  const prefersReducedMotion = useReducedMotion();

  useLayoutEffect(() => {
    const track = trackRef.current;
    if (!track) return;
    const firstStrip = track.firstElementChild as HTMLElement | null;
    if (!firstStrip) return;

    const measure = () => {
      setStripWidth(firstStrip.getBoundingClientRect().width);
    };

    measure();
    const ro = new ResizeObserver(measure);
    ro.observe(firstStrip);
    return () => ro.disconnect();
  }, []);

  const shouldScroll = !prefersReducedMotion && stripWidth > 0;
  /** ~55px/s feels like a calm marquee; scales with strip length */
  const durationSec = stripWidth > 0 ? Math.max(24, stripWidth / 55) : 0;

  return (
    <section
      className="relative w-full border-y border-border/50 bg-muted/30 py-10 md:py-12"
      aria-label="Partner brand logos"
    >
      <div className="pointer-events-none absolute inset-y-0 left-0 z-10 w-16 bg-gradient-to-r from-background to-transparent md:w-24" />
      <div className="pointer-events-none absolute inset-y-0 right-0 z-10 w-16 bg-gradient-to-l from-background to-transparent md:w-24" />

      <div className="container mx-auto mb-6 px-4 sm:px-6 lg:px-8">
        <p className="text-center text-xs font-bold uppercase tracking-[0.2em] text-primary">
          Brands we represent
        </p>
      </div>

      <div className="overflow-hidden">
        <motion.div
          ref={trackRef}
          className="flex w-max will-change-transform"
          initial={false}
          animate={
            shouldScroll ? { x: [0, -stripWidth] } : { x: 0 }
          }
          transition={
            shouldScroll
              ? {
                  x: {
                    duration: durationSec,
                    repeat: Infinity,
                    ease: "linear",
                  },
                }
              : undefined
          }
        >
          {[0, 1].map((dup) => (
            <ul
              key={dup}
              className="flex shrink-0 items-center gap-10 px-6 md:gap-16 md:px-10"
              aria-hidden={dup === 1}
            >
              {partnerLogos.map((logo, i) => (
                <li key={`${dup}-${logo.src}-${i}`} className="flex h-12 shrink-0 items-center md:h-14">
                  <Image
                    src={logo.src}
                    alt={dup === 0 ? logoAlt(logo, i) : ""}
                    width={200}
                    height={72}
                    className="h-10 w-auto max-w-[160px] object-contain md:h-12 md:max-w-[200px]"
                  />
                </li>
              ))}
            </ul>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
