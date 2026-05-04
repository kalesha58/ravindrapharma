"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { ShieldCheck, History, Award, TrendingUp } from "lucide-react";

const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  show: { opacity: 1, y: 0, transition: { duration: 0.6 } }
};

const staggerContainer = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: { staggerChildren: 0.15 }
  }
};

export default function About() {
  return (
    <div className="flex flex-col w-full min-h-screen overflow-hidden bg-background">
      
      {/* Ambient Premium Background */}
      <div className="fixed inset-0 pointer-events-none z-0">
        <div className="absolute top-[-20%] left-[10%] w-[50vw] h-[50vw] bg-primary/10 rounded-full blur-[150px] animate-[pulse_10s_ease-in-out_infinite]" />
        <div className="absolute bottom-[-10%] right-[-10%] w-[60vw] h-[60vw] bg-blue-500/5 rounded-full blur-[120px] animate-[pulse_8s_ease-in-out_infinite_reverse]" />
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#8080800a_1px,transparent_1px),linear-gradient(to_bottom,#8080800a_1px,transparent_1px)] bg-[size:24px_24px] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_0%,#000_70%,transparent_100%)]" />
      </div>

      {/* Hero Header */}
      <section className="relative z-10 pt-12 pb-10 md:pt-16 md:pb-12 border-b border-border/20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="inline-flex items-center gap-2 rounded-full border border-primary/20 bg-primary/5 px-5 py-2 text-sm font-semibold text-primary mb-8 backdrop-blur-md"
          >
            <ShieldCheck className="w-4 h-4" />
            <span>Legacy of Trust Since 1970</span>
          </motion.div>
          
          <motion.h1 
            className="text-5xl md:text-7xl font-extrabold tracking-tight text-foreground mb-6 leading-tight"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
          >
            About <br className="hidden md:block" />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary via-blue-500 to-indigo-500">
              Ravindra Pharma
            </span>
          </motion.h1>
          
          <motion.p 
            className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto leading-relaxed"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            Delivering reliable, high-quality healthcare solutions with consistency and unwavering integrity for over five decades.
          </motion.p>
        </div>
      </section>

      {/* Main Content & Story */}
      <section className="relative z-10 py-10 md:py-16 bg-muted/30">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl">
          
          <div className="grid grid-cols-1 xl:grid-cols-2 gap-12 xl:gap-16 items-center mb-16">
            
            {/* Story Cards */}
            <motion.div 
              className="flex flex-col gap-6"
              variants={staggerContainer}
              initial="hidden"
              whileInView="show"
              viewport={{ once: true, margin: "-100px" }}
            >
              <motion.div variants={fadeUp} className="group p-8 md:p-10 rounded-[2rem] bg-card/60 backdrop-blur-xl border border-border/50 hover:border-primary/30 transition-all duration-500 shadow-xl hover:shadow-[0_0_40px_rgba(59,130,246,0.15)] relative overflow-hidden">
                <div className="absolute top-0 left-0 w-full h-1.5 bg-gradient-to-r from-primary/50 to-transparent" />
                <div className="w-14 h-14 rounded-2xl bg-primary/10 flex items-center justify-center mb-6">
                  <History className="w-6 h-6 text-primary" />
                </div>
                <h3 className="text-2xl font-bold text-foreground mb-4">Our Foundation</h3>
                <p className="text-muted-foreground leading-relaxed text-base">
                  Established over 52 years ago by <strong className="text-foreground">Nalla Narayana</strong>, our organization was founded with a clear purpose — to create a dependable and efficient supply network for pharmaceutical products. From inception, we focused on building enduring relationships with healthcare professionals, driven by a deep commitment to service excellence.
                </p>
              </motion.div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <motion.div variants={fadeUp} className="p-8 rounded-[2rem] bg-card/60 backdrop-blur-xl border border-border/50 hover:border-indigo-500/30 transition-all duration-500 hover:shadow-[0_0_30px_rgba(99,102,241,0.1)]">
                  <div className="w-12 h-12 rounded-xl bg-indigo-500/10 flex items-center justify-center mb-5">
                    <Award className="w-5 h-5 text-indigo-500" />
                  </div>
                  <h3 className="text-lg font-bold text-foreground mb-3">Second Generation</h3>
                  <p className="text-sm text-muted-foreground leading-relaxed">
                    Under <strong className="text-foreground">Nalla Madhu Sudhan</strong>, we strengthened capabilities and established a solid reputation for uncompromising consistency.
                  </p>
                </motion.div>

                <motion.div variants={fadeUp} className="p-8 rounded-[2rem] bg-card/60 backdrop-blur-xl border border-border/50 hover:border-cyan-500/30 transition-all duration-500 hover:shadow-[0_0_30px_rgba(6,182,212,0.1)]">
                  <div className="w-12 h-12 rounded-xl bg-cyan-500/10 flex items-center justify-center mb-5">
                    <TrendingUp className="w-5 h-5 text-cyan-500" />
                  </div>
                  <h3 className="text-lg font-bold text-foreground mb-3">Modern Future</h3>
                  <p className="text-sm text-muted-foreground leading-relaxed">
                    Today, <strong className="text-foreground">Nalla Ritesh Kumar</strong> drives us forward by adopting modern systems and expanding global business networks.
                  </p>
                </motion.div>
              </div>
            </motion.div>

            {/* Generated Modern Image */}
            <motion.div 
              className="relative w-full h-[500px] sm:h-[600px] xl:h-[700px] rounded-[3rem] overflow-hidden shadow-2xl border border-border/40 group"
              initial={{ opacity: 0, x: 30, filter: "blur(10px)" }}
              whileInView={{ opacity: 1, x: 0, filter: "blur(0px)" }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
            >
              <Image
                src="/images/about-modern.png"
                alt="Ravindra Pharma Corporate Headquarters"
                fill
                className="object-cover transition-transform duration-1000 group-hover:scale-105"
                priority
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/10 to-transparent mix-blend-multiply" />
              <div className="absolute inset-0 ring-1 ring-inset ring-white/20 rounded-[3rem]" />
              
              <div className="absolute bottom-0 left-0 right-0 p-10 sm:p-12">
                <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/10 backdrop-blur-md border border-white/20 text-white mb-4">
                  <ShieldCheck className="w-4 h-4" />
                  <span className="text-xs font-bold uppercase tracking-wider">Trusted Ecosystem</span>
                </div>
                <h3 className="text-3xl sm:text-4xl font-bold text-white mb-3">A Legacy of Trust</h3>
                <p className="text-white/80 text-lg font-medium">Since 1970</p>
              </div>
            </motion.div>

          </div>

          {/* Bottom Statement */}
          <motion.div 
            className="w-full max-w-4xl mx-auto text-center bg-card/50 backdrop-blur-2xl border border-primary/20 rounded-[2.5rem] p-10 md:p-16 shadow-[0_20px_60px_-15px_rgba(59,130,246,0.1)] relative overflow-hidden"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
          >
            <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[80%] h-1 bg-gradient-to-r from-transparent via-primary/50 to-transparent" />
            <h3 className="text-2xl md:text-3xl font-semibold text-foreground leading-snug">
              With three generations of leadership, Ravindra Pharma represents a <span className="text-primary">powerful combination of experience, trust, and forward-thinking vision</span>, positioning itself as a dependable partner in the pharmaceutical distribution ecosystem.
            </h3>
          </motion.div>

        </div>
      </section>
    </div>
  );
}
