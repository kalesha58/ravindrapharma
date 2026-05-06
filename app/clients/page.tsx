"use client";

import React from "react";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import { partnerLogos } from "@/lib/partnerLogos";

export default function Clients() {

  const containerVariants = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: { staggerChildren: 0.08 }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, scale: 0.9, y: 20 },
    show: { opacity: 1, scale: 1, y: 0, transition: { type: "spring" as const, stiffness: 300, damping: 24 } }
  };

  return (
    <div className="flex flex-col w-full min-h-screen">
      {/* Premium Page Header */}
      <section className="relative bg-background pt-24 pb-16 overflow-hidden border-b border-border/40">
        <div className="absolute top-[-10%] left-[50%] w-[600px] h-[600px] -translate-x-1/2 bg-primary/5 rounded-full blur-[100px] pointer-events-none" />
        <div className="container relative z-10 mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="inline-flex items-center rounded-full border border-primary/20 bg-primary/5 px-4 py-1.5 text-sm font-semibold text-primary mb-6 backdrop-blur-md"
          >
            Our Network
          </motion.div>
          <motion.h1 
            className="text-4xl md:text-6xl font-extrabold tracking-tight text-foreground mb-6"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
          >
            Trusted by Industry <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-blue-500">Leaders</span>
          </motion.h1>
          <motion.p 
            className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto leading-relaxed"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            We partner with the world's most innovative pharmaceutical and healthcare brands to deliver uncompromising quality.
          </motion.p>
        </div>
      </section>

      {/* Featured Image Logos Grid Section */}
      <section className="py-24 bg-muted/30 dark:bg-muted/10">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-foreground">Featured Partners</h2>
            <div className="w-16 h-1 bg-primary mx-auto mt-4 rounded-full" />
          </div>

          <motion.div 
            className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 lg:gap-8"
            variants={containerVariants}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, margin: "-50px" }}
          >
            {partnerLogos.map((logo, index) => (
              <motion.div
                key={`${logo.name}-${index}`}
                variants={itemVariants}
                className="group relative flex items-center justify-center p-8 h-40 bg-white dark:bg-white/95 border border-border/50 rounded-2xl overflow-hidden transition-all duration-500 hover:-translate-y-2 hover:shadow-[0_10px_40px_-15px_rgba(59,130,246,0.5)] hover:border-primary/50"
              >
                {/* Image Container for precise sizing */}
                <div className="relative w-full h-full flex items-center justify-center transition-all duration-500">
                  <Image 
                    src={logo.src}
                    alt={`${logo.name} logo`}
                    fill
                    className="object-contain p-2"
                    sizes="(max-width: 768px) 50vw, (max-width: 1200px) 33vw, 25vw"
                  />
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Testimonials Carousel Section */}
      <section className="py-24 bg-background relative overflow-hidden">
        <div className="absolute bottom-[-10%] right-[-10%] w-[500px] h-[500px] bg-blue-500/5 rounded-full blur-[120px] pointer-events-none" />
        
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-5xl">
          <div className="text-center mb-16">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-primary font-bold tracking-[0.2em] uppercase text-sm mb-4"
            >
              Voice of Our Partners
            </motion.div>
            <h2 className="text-4xl md:text-5xl font-extrabold text-foreground">What They Say About Us</h2>
          </div>

          <TestimonialsCarousel />
        </div>
      </section>

    </div>
  );
}

const testimonials = [
  {
    content: "Ravindra Pharma Distributors has been our most reliable supply partner for over 15 years. Their consistency in delivering critical care medications is unmatched in the region.",
    author: "Dr. Arjun Reddy",
    role: "Medical Director, Apollo Hospitals",
    initials: "AR"
  },
  {
    content: "The level of professionalism and the robustness of their distribution network makes them a standout in the Indian pharmaceutical industry. They are truly modern and forward-thinking.",
    author: "Priya Sharma",
    role: "Procurement Manager, Global Life Sciences",
    initials: "PS"
  },
  {
    content: "We trust Ravindra Pharma for their unwavering integrity and quality compliance. They are not just distributors, but a vital partner in our mission to deliver healthcare.",
    author: "Rajesh Khanna",
    role: "Healthcare Administrator, City Specialty Clinic",
    initials: "RK"
  }
];

function TestimonialsCarousel() {
  const [index, setIndex] = React.useState(0);

  React.useEffect(() => {
    const timer = setInterval(() => {
      setIndex((prev) => (prev + 1) % testimonials.length);
    }, 6000);
    return () => clearInterval(timer);
  }, []);

  return (
    <div className="relative min-h-[400px] flex flex-col items-center justify-center">
      <AnimatePresence mode="wait">
        <motion.div
          key={index}
          initial={{ opacity: 0, scale: 0.95, y: 20 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 1.05, y: -20 }}
          transition={{ duration: 0.6, ease: "easeInOut" }}
          className="w-full"
        >
          <div className="bg-card/50 backdrop-blur-xl border border-border/50 rounded-[3rem] p-10 md:p-16 text-center shadow-2xl shadow-primary/5 relative">
            {/* Quotation Mark Decoration */}
            <div className="absolute top-10 left-10 text-primary/10 text-8xl font-serif select-none pointer-events-none">"</div>
            <div className="absolute bottom-10 right-10 text-primary/10 text-8xl font-serif rotate-180 select-none pointer-events-none">"</div>
            
            <p className="text-xl md:text-2xl lg:text-3xl font-medium text-foreground leading-relaxed mb-12 italic">
              {testimonials[index].content}
            </p>
            
            <div className="flex flex-col items-center">
              <div className="w-16 h-16 rounded-full bg-gradient-to-br from-primary to-blue-500 flex items-center justify-center text-white text-xl font-bold mb-4 shadow-lg">
                {testimonials[index].initials}
              </div>
              <h4 className="text-xl font-bold text-foreground">{testimonials[index].author}</h4>
              <p className="text-muted-foreground font-medium">{testimonials[index].role}</p>
            </div>
          </div>
        </motion.div>
      </AnimatePresence>

      {/* Indicators */}
      <div className="flex gap-3 mt-12">
        {testimonials.map((_, i) => (
          <button
            key={i}
            onClick={() => setIndex(i)}
            className={`h-2 rounded-full transition-all duration-500 ${
              i === index ? "w-12 bg-primary" : "w-2 bg-muted-foreground/30 hover:bg-muted-foreground/50"
            }`}
          />
        ))}
      </div>
    </div>
  );
}


