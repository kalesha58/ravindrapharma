"use client";

import React, { useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import { ArrowRight, ShieldCheck, Truck, BarChart3, Globe, Activity, CheckCircle2, ChevronRight, Star } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import { BrandsMarquee } from "@/components/BrandsMarquee";

const heroHeadlines = [
  { line1: "Reliable Pharma", line2: "Built on Trust." },
  { line1: "Global Reach,", line2: "Rooted in Care." },
  { line1: "Five Decades", line2: "One Promise." },
] as const;

export default function Home() {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const [headlineIndex, setHeadlineIndex] = useState(0);

  const carouselImages = [
    "/images/carousel-1.png",
    "/images/carousel-2.png",
    "/images/carousel-3.png",
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImageIndex((prev) => (prev + 1) % carouselImages.length);
    }, 6000);
    return () => clearInterval(interval);
  }, [carouselImages.length]);

  useEffect(() => {
    const interval = setInterval(() => {
      setHeadlineIndex((prev) => (prev + 1) % heroHeadlines.length);
    }, 5200);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="flex flex-col w-full selection:bg-primary/30">
      {/* Ultra-Premium Hero Section */}
      <section className="relative flex w-full items-start overflow-hidden bg-background pt-6 pb-14 sm:pt-8 sm:pb-16 lg:pt-10 lg:pb-20">
        
        {/* Animated Background Gradients & Grid */}
        <div className="absolute inset-0 z-0 overflow-hidden pointer-events-none">
          <div className="absolute top-[-10%] right-[-5%] w-[800px] h-[800px] bg-primary/10 rounded-full blur-[120px] mix-blend-multiply dark:mix-blend-lighten opacity-70 animate-[pulse_8s_ease-in-out_infinite]" />
          <div className="absolute bottom-[-10%] left-[-10%] w-[600px] h-[600px] bg-blue-500/10 rounded-full blur-[100px] mix-blend-multiply dark:mix-blend-lighten opacity-50 animate-[pulse_10s_ease-in-out_infinite_reverse]" />
          <div className="absolute inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-[0.025] mix-blend-overlay" />
          <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:24px_24px] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_0%,#000_70%,transparent_100%)]" />
        </div>
        
        <div className="container relative z-10 mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 items-start gap-12 lg:grid-cols-12 lg:gap-8">
            
            {/* Left Content Area (7 cols) */}
            <div className="lg:col-span-7 flex flex-col justify-center">
              
              <motion.div 
                className="inline-flex items-center rounded-full border border-primary/30 bg-primary/5 px-4 py-1.5 text-sm font-semibold text-primary mb-8 w-fit backdrop-blur-md shadow-[0_0_15px_rgba(59,130,246,0.15)]"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, ease: "easeOut" }}
              >
                <span className="relative flex h-2.5 w-2.5 mr-3">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-primary opacity-75"></span>
                  <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-primary"></span>
                </span>
                Trusted Healthcare Partner Since 1970
              </motion.div>

              <div className="mb-6 min-h-[7.5rem] sm:min-h-[8.5rem] lg:min-h-[10.5rem]">
                <AnimatePresence mode="wait" initial={false}>
                  <motion.h1
                    key={headlineIndex}
                    className="text-5xl sm:text-6xl lg:text-[4.5rem] font-extrabold tracking-tight leading-[1.05]"
                    initial={{ opacity: 0, y: 36, filter: "blur(10px)" }}
                    animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
                    exit={{ opacity: 0, y: -28, filter: "blur(8px)" }}
                    transition={{ duration: 0.55, ease: [0.22, 1, 0.36, 1] }}
                  >
                    <span className="block text-foreground">
                      {heroHeadlines[headlineIndex].line1}
                    </span>
                    <span className="relative mt-2 inline-block">
                      <span className="absolute -inset-1 rounded-lg bg-gradient-to-r from-primary/20 via-blue-400/20 to-primary/20 blur-xl opacity-50" />
                      <span className="relative block bg-[length:200%_auto] bg-gradient-to-r from-primary via-blue-500 to-indigo-600 bg-clip-text text-transparent animate-[gradient-shift_6s_linear_infinite]">
                        {heroHeadlines[headlineIndex].line2}
                      </span>
                    </span>
                  </motion.h1>
                </AnimatePresence>

                <div className="mt-5 flex items-center gap-2" role="tablist" aria-label="Hero headline slides">
                  {heroHeadlines.map((_, i) => (
                    <button
                      key={i}
                      type="button"
                      role="tab"
                      aria-selected={i === headlineIndex}
                      aria-label={`Show headline ${i + 1}`}
                      onClick={() => setHeadlineIndex(i)}
                      className={`h-1.5 rounded-full transition-all duration-300 ${
                        i === headlineIndex
                          ? "w-8 bg-primary"
                          : "w-1.5 bg-muted-foreground/35 hover:bg-muted-foreground/55"
                      }`}
                    />
                  ))}
                </div>
              </div>
              
              <motion.p 
                className="text-lg sm:text-xl text-muted-foreground mb-10 max-w-xl leading-relaxed"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.2, ease: "easeOut" }}
              >
                Delivering high-quality healthcare products with absolute consistency, integrity, and over five decades of deep industry expertise.
              </motion.p>
              
              <motion.div 
                className="flex flex-col sm:flex-row gap-5"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.3, ease: "easeOut" }}
              >
                <Link 
                  href="/about" 
                  className="group relative inline-flex items-center justify-center rounded-full bg-primary px-8 py-4 text-sm font-semibold text-white overflow-hidden transition-all hover:scale-105 hover:shadow-[0_0_40px_-10px_rgba(59,130,246,0.8)] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring"
                >
                  <span className="absolute inset-0 w-full h-full -mt-1 rounded-lg opacity-30 bg-gradient-to-b from-transparent via-transparent to-black" />
                  <span className="relative z-10 flex items-center gap-2">
                    Discover Our Legacy
                    <ChevronRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
                  </span>
                </Link>
                <Link 
                  href="/contact" 
                  className="group inline-flex items-center justify-center rounded-full border-2 border-border bg-background/50 backdrop-blur-md px-8 py-4 text-sm font-semibold shadow-sm transition-all hover:bg-muted hover:border-primary/50 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring hover:scale-105"
                >
                  Get in Touch
                </Link>
              </motion.div>
              
              {/* Trust Indicators */}
              <motion.div 
                className="mt-12 flex items-center gap-6 text-sm text-muted-foreground font-medium"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.8, delay: 0.8 }}
              >
                <div className="flex -space-x-2">
                  {[1, 2, 3, 4].map((i) => (
                    <div key={i} className="w-8 h-8 rounded-full border-2 border-background bg-accent flex items-center justify-center shadow-sm">
                      <Star className="w-3 h-3 text-yellow-500 fill-yellow-500" />
                    </div>
                  ))}
                </div>
                <p>Trusted by <span className="text-foreground font-bold">500+</span> Healthcare Partners</p>
              </motion.div>
            </div>

            {/* Right Carousel Area (5 cols) with Floating Elements */}
            <div className="lg:col-span-5 relative mt-10 lg:mt-0 perspective-1000">
              
              {/* Floating Badge 1 */}
              <motion.div 
                className="absolute -left-12 top-10 z-30 hidden lg:flex items-center gap-4 bg-background/90 backdrop-blur-xl border border-white/20 dark:border-white/10 rounded-2xl p-4 shadow-2xl"
                initial={{ opacity: 0, x: -30, y: 10 }}
                animate={{ opacity: 1, x: 0, y: [0, -10, 0] }}
                transition={{ opacity: { delay: 0.6, duration: 0.6 }, y: { repeat: Infinity, duration: 5, ease: "easeInOut" } }}
              >
                <div className="bg-green-500/10 p-2.5 rounded-xl border border-green-500/20">
                  <CheckCircle2 className="h-5 w-5 text-green-500" />
                </div>
                <div>
                  <p className="text-xs text-muted-foreground font-medium uppercase tracking-wider mb-0.5">Quality Rate</p>
                  <p className="text-sm font-bold text-foreground">99.9% Verified</p>
                </div>
              </motion.div>

              {/* Floating Badge 2 */}
              <motion.div 
                className="absolute -right-8 bottom-20 z-30 hidden lg:flex items-center gap-4 bg-background/90 backdrop-blur-xl border border-white/20 dark:border-white/10 rounded-2xl p-4 shadow-2xl"
                initial={{ opacity: 0, x: 30, y: -10 }}
                animate={{ opacity: 1, x: 0, y: [0, 10, 0] }}
                transition={{ opacity: { delay: 0.8, duration: 0.6 }, y: { repeat: Infinity, duration: 6, ease: "easeInOut", delay: 1 } }}
              >
                <div className="bg-blue-500/10 p-2.5 rounded-xl border border-blue-500/20">
                  <Globe className="h-5 w-5 text-blue-500" />
                </div>
                <div>
                  <p className="text-xs text-muted-foreground font-medium uppercase tracking-wider mb-0.5">Network</p>
                  <p className="text-sm font-bold text-foreground">Global Reach</p>
                </div>
              </motion.div>

              {/* Main Carousel Container */}
              <motion.div 
                className="relative w-full aspect-[4/5] rounded-[2.5rem] overflow-hidden shadow-2xl ring-1 ring-white/10 bg-slate-900"
                initial={{ opacity: 0, scale: 0.9, rotateY: 15 }}
                animate={{ opacity: 1, scale: 1, rotateY: 0 }}
                transition={{ duration: 1, ease: "easeOut", delay: 0.2 }}
                style={{ transformStyle: 'preserve-3d' }}
              >
                <AnimatePresence>
                  <motion.div
                    key={currentImageIndex}
                    initial={{ opacity: 0, scale: 1.05, filter: "blur(5px)" }}
                    animate={{ opacity: 1, scale: 1, filter: "blur(0px)" }}
                    exit={{ opacity: 0, scale: 0.95, filter: "blur(5px)", zIndex: -1 }}
                    transition={{ duration: 1.2, ease: "easeInOut" }}
                    className="absolute inset-0"
                  >
                    <Image 
                      src={carouselImages[currentImageIndex]}
                      alt={`Pharmaceutical industry view ${currentImageIndex + 1}`}
                      fill
                      className="object-cover"
                      priority={currentImageIndex === 0}
                    />
                    {/* Premium Inner Overlays */}
                    <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent mix-blend-multiply" />
                    <div className="absolute inset-0 ring-1 ring-inset ring-white/10 rounded-[2.5rem]" />
                  </motion.div>
                </AnimatePresence>

                {/* Stylish Indicators */}
                <div className="absolute bottom-8 left-0 right-0 flex justify-center items-center gap-3 z-20">
                  {carouselImages.map((_, idx) => (
                    <button 
                      key={idx}
                      onClick={() => setCurrentImageIndex(idx)}
                      aria-label={`Go to slide ${idx + 1}`}
                      className="relative h-2 rounded-full transition-all duration-500 overflow-hidden"
                      style={{ width: idx === currentImageIndex ? '40px' : '8px' }}
                    >
                      <div className="absolute inset-0 bg-white/30 backdrop-blur-sm" />
                      {idx === currentImageIndex && (
                        <motion.div 
                          className="absolute inset-0 bg-white shadow-[0_0_10px_rgba(255,255,255,0.8)]"
                          layoutId="activeIndicator"
                          transition={{ type: "spring", stiffness: 300, damping: 30 }}
                        />
                      )}
                    </button>
                  ))}
                </div>
              </motion.div>

            </div>
          </div>
        </div>
      </section>

      <BrandsMarquee />

      {/* Rich "Pillars of Excellence" Features Section - Modern Alternating Layout */}
      <section className="relative w-full py-20 bg-muted/40 border-t border-border/40 overflow-hidden">
        
        {/* Decorative Background */}
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full max-w-4xl h-[400px] bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-primary/10 via-transparent to-transparent pointer-events-none" />

        <div className="container relative z-10 mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="text-center mb-24 max-w-2xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
            >
              <span className="text-primary font-bold tracking-[0.2em] uppercase text-xs sm:text-sm">Our Pillars of Excellence</span>
            </motion.div>
            <motion.h2 
              className="mt-4 text-4xl md:text-5xl font-extrabold text-foreground"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.1 }}
            >
              Why Partners Choose Us
            </motion.h2>
          </div>

          <div className="flex flex-col gap-24 lg:gap-32">
            {/* Feature 1 */}
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
              <motion.div 
                className="relative h-[400px] lg:h-[500px] w-full rounded-[2.5rem] overflow-hidden shadow-2xl border border-border/50 group"
                initial={{ opacity: 0, x: -30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ duration: 0.7 }}
              >
                <div className="absolute inset-0 bg-primary/20 mix-blend-overlay z-10 group-hover:bg-transparent transition-colors duration-500" />
                <Image src="/images/pillar-legacy.png" alt="52+ Years Legacy" fill className="object-cover transition-transform duration-700 group-hover:scale-105" />
              </motion.div>
              
              <motion.div 
                className="flex flex-col items-start lg:pl-8"
                initial={{ opacity: 0, x: 30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ duration: 0.7, delay: 0.2 }}
              >
                <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-primary/20 to-primary/5 flex items-center justify-center mb-8 border border-primary/20 shadow-[0_0_20px_rgba(59,130,246,0.15)]">
                  <ShieldCheck className="h-8 w-8 text-primary" />
                </div>
                <h3 className="text-3xl md:text-4xl font-bold mb-6 text-foreground">52+ Years Legacy</h3>
                <p className="text-muted-foreground leading-relaxed text-lg mb-8">
                  Three generations of unwavering commitment to healthcare distribution. We've built an enduring foundation of community trust, ensuring that every product we handle meets the highest standards of safety and efficacy.
                </p>
                <ul className="space-y-4">
                  {["Established in 1970", "Family-driven integrity", "Uncompromised quality standards"].map((item, i) => (
                    <li key={i} className="flex items-center gap-3 text-foreground font-medium">
                      <CheckCircle2 className="h-5 w-5 text-primary" />
                      {item}
                    </li>
                  ))}
                </ul>
              </motion.div>
            </div>

            {/* Feature 2 (Reversed) */}
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
              <motion.div 
                className="flex flex-col items-start lg:pr-8 lg:order-1 order-2"
                initial={{ opacity: 0, x: -30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ duration: 0.7, delay: 0.2 }}
              >
                <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-blue-500/20 to-blue-500/5 flex items-center justify-center mb-8 border border-blue-500/20 shadow-[0_0_20px_rgba(59,130,246,0.15)]">
                  <Truck className="h-8 w-8 text-blue-500" />
                </div>
                <h3 className="text-3xl md:text-4xl font-bold mb-6 text-foreground">Robust Distribution Network</h3>
                <p className="text-muted-foreground leading-relaxed text-lg mb-8">
                  A powerful, reliable supply chain is the backbone of our operations. We utilize state-of-the-art logistics to ensure highly timely, temperature-controlled delivery to healthcare professionals globally.
                </p>
                <ul className="space-y-4">
                  {["Cold-chain optimized infrastructure", "Real-time delivery tracking", "Nationwide fulfillment centers"].map((item, i) => (
                    <li key={i} className="flex items-center gap-3 text-foreground font-medium">
                      <CheckCircle2 className="h-5 w-5 text-blue-500" />
                      {item}
                    </li>
                  ))}
                </ul>
              </motion.div>

              <motion.div 
                className="relative h-[400px] lg:h-[500px] w-full rounded-[2.5rem] overflow-hidden shadow-2xl border border-border/50 group lg:order-2 order-1"
                initial={{ opacity: 0, x: 30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ duration: 0.7 }}
              >
                <div className="absolute inset-0 bg-blue-500/20 mix-blend-overlay z-10 group-hover:bg-transparent transition-colors duration-500" />
                <Image src="/images/pillar-network.png" alt="Robust Network" fill className="object-cover transition-transform duration-700 group-hover:scale-105" />
              </motion.div>
            </div>

            {/* Feature 3 */}
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
              <motion.div 
                className="relative h-[400px] lg:h-[500px] w-full rounded-[2.5rem] overflow-hidden shadow-2xl border border-border/50 group"
                initial={{ opacity: 0, x: -30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ duration: 0.7 }}
              >
                <div className="absolute inset-0 bg-indigo-500/20 mix-blend-overlay z-10 group-hover:bg-transparent transition-colors duration-500" />
                <Image src="/images/pillar-portfolio.png" alt="Elite Portfolio" fill className="object-cover transition-transform duration-700 group-hover:scale-105" />
              </motion.div>
              
              <motion.div 
                className="flex flex-col items-start lg:pl-8"
                initial={{ opacity: 0, x: 30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ duration: 0.7, delay: 0.2 }}
              >
                <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-indigo-500/20 to-indigo-500/5 flex items-center justify-center mb-8 border border-indigo-500/20 shadow-[0_0_20px_rgba(99,102,241,0.15)]">
                  <Activity className="h-8 w-8 text-indigo-500" />
                </div>
                <h3 className="text-3xl md:text-4xl font-bold mb-6 text-foreground">Elite Medical Portfolio</h3>
                <p className="text-muted-foreground leading-relaxed text-lg mb-8">
                  Partnering directly with world-leading pharmaceutical manufacturers, we provide an elite, comprehensive range of solutions covering every therapeutic segment, from critical care to wellness.
                </p>
                <ul className="space-y-4">
                  {["Exclusive manufacturing partnerships", "Multi-specialty therapeutic ranges", "Strict regulatory compliance"].map((item, i) => (
                    <li key={i} className="flex items-center gap-3 text-foreground font-medium">
                      <CheckCircle2 className="h-5 w-5 text-indigo-500" />
                      {item}
                    </li>
                  ))}
                </ul>
              </motion.div>
            </div>

          </div>
        </div>
      </section>
    </div>
  );
}
