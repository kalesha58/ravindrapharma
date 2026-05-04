"use client";

import Image from "next/image";
import { motion } from "framer-motion";
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

    </div>
  );
}
