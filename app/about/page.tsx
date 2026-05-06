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
    <div className="flex flex-col w-full min-h-screen overflow-hidden bg-slate-50 dark:bg-slate-950">
      
      {/* Ambient Premium Background */}
      <div className="fixed inset-0 pointer-events-none z-0">
        <div className="absolute top-[-20%] left-[10%] w-[50vw] h-[50vw] bg-primary/10 rounded-full blur-[150px] animate-[pulse_10s_ease-in-out_infinite] opacity-60 dark:opacity-40" />
        <div className="absolute bottom-[-10%] right-[-10%] w-[60vw] h-[60vw] bg-blue-500/5 rounded-full blur-[120px] animate-[pulse_8s_ease-in-out_infinite_reverse] opacity-60 dark:opacity-30" />
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#8080800a_1px,transparent_1px),linear-gradient(to_bottom,#8080800a_1px,transparent_1px)] bg-[size:24px_24px] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_0%,#000_70%,transparent_100%)]" />
      </div>

      {/* Premium Hero Header Section with Dynamic Background */}
      <section className="relative z-10 pt-12 pb-10 md:pt-16 md:pb-12 overflow-hidden border-b border-border/10">
        {/* Background Layering */}
        <div className="absolute inset-0 z-0 overflow-hidden pointer-events-none">
          <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-full bg-[radial-gradient(circle_at_50%_-20%,_var(--tw-gradient-stops))] from-primary/10 via-background dark:via-slate-950 to-background dark:to-slate-950" />
          <div className="absolute top-[-10%] right-[-5%] w-[400px] h-[400px] bg-blue-400/10 rounded-full blur-[100px] animate-[pulse_8s_ease-in-out_infinite] dark:opacity-40" />
          <div className="absolute bottom-[-10%] left-[-5%] w-[300px] h-[300px] bg-indigo-400/10 rounded-full blur-[80px] animate-[pulse_10s_ease-in-out_infinite_reverse] dark:opacity-30" />
          <div className="absolute inset-0 bg-[linear-gradient(to_right,#8080801a_1px,transparent_1px),linear-gradient(to_bottom,#8080801a_1px,transparent_1px)] bg-[size:32px_32px] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_50%,#000_100%,transparent_100%)] opacity-40" />
          
          {/* Subtle Floating Blobs */}
          <motion.div 
            className="absolute top-10 right-[15%] w-3 h-3 rounded-full bg-primary/30 blur-[2px]"
            animate={{ y: [0, 20, 0], opacity: [0.3, 0.6, 0.3] }}
            transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
          />
        </div>

        <div className="container relative z-10 mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="inline-flex items-center gap-2 rounded-full border border-primary/20 bg-primary/5 px-5 py-2 text-xs font-bold text-primary mb-6 backdrop-blur-xl shadow-sm ring-1 ring-white/20"
          >
            <ShieldCheck className="w-3.5 h-3.5 animate-pulse" />
            <span className="tracking-wide uppercase">Legacy of Trust Since 1970</span>
          </motion.div>
          
          <motion.h1 
            className="text-4xl md:text-5xl lg:text-6xl font-extrabold tracking-tight text-foreground mb-4 leading-tight"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
          >
            About <br className="hidden md:block" />
            <span className="relative inline-block">
              <span className="absolute -inset-1 rounded-lg bg-gradient-to-r from-primary/20 via-blue-400/20 to-primary/20 blur-2xl opacity-40" />
              <span className="relative block bg-clip-text text-transparent bg-gradient-to-r from-primary via-blue-500 to-indigo-600">
                Ravindra Pharma Distributors
              </span>
            </span>
          </motion.h1>
          
          <motion.p 
            className="text-base md:text-lg text-muted-foreground max-w-2xl mx-auto leading-relaxed"
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            Delivering reliable, high-quality healthcare solutions with consistency and unwavering integrity for over five decades.
          </motion.p>
        </div>
      </section>

      {/* Main Content & Story */}
      <section className="relative z-10 py-10 md:py-16 bg-[#f1f5f9]/50 dark:bg-muted/30">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl">
          
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 mb-12">
            {/* Story Main Card */}
            <motion.div 
              className="lg:col-span-2 group p-8 md:p-10 rounded-[2rem] bg-white/90 dark:bg-slate-900/80 backdrop-blur-xl border border-white dark:border-slate-800/50 hover:border-primary/30 transition-all duration-500 shadow-sm dark:shadow-2xl relative overflow-hidden"
              variants={fadeUp}
              initial="hidden"
              whileInView="show"
              viewport={{ once: true }}
            >
              <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-primary/60 via-blue-500/40 to-transparent" />
              <div className="w-12 h-12 rounded-xl bg-primary/10 dark:bg-primary/20 flex items-center justify-center mb-6">
                <History className="w-6 h-6 text-primary" />
              </div>
              <h3 className="text-2xl font-bold text-foreground mb-4">Our Foundation</h3>
              <p className="text-muted-foreground leading-relaxed text-base">
                Established over 52 years ago by <strong className="text-foreground">Nalla Narayana</strong>, Ravindra Pharma Distributors was founded with a singular purpose — to create a dependable and efficient supply network for critical pharmaceutical products. 
              </p>
              <p className="mt-3 text-muted-foreground leading-relaxed text-base">
                From our inception in 1970, we have focused on building enduring relationships with healthcare professionals and manufacturing partners, driven by a deep-seated commitment to service excellence and community health.
              </p>
            </motion.div>

            {/* Key Metrics Column */}
            <motion.div 
              className="grid grid-cols-1 gap-4"
              variants={staggerContainer}
              initial="hidden"
              whileInView="show"
              viewport={{ once: true }}
            >
              {[
                { label: "Years of Experience", value: "52+", icon: History, color: "text-primary" },
                { label: "Healthcare Partners", value: "500+", icon: ShieldCheck, color: "text-green-500" },
                { label: "Products Catalog", value: "10k+", icon: Award, color: "text-amber-500" },
              ].map((stat, i) => (
                <motion.div 
                  key={i}
                  variants={fadeUp}
                  className="p-5 rounded-[1.25rem] bg-white/90 dark:bg-slate-900/60 border border-white dark:border-slate-800/40 flex items-center gap-4 hover:bg-white dark:hover:bg-slate-800/60 transition-all shadow-sm"
                >
                  <div className={`w-10 h-10 rounded-lg bg-muted/50 dark:bg-slate-800 flex items-center justify-center ${stat.color}`}>
                    <stat.icon className="w-5 h-5" />
                  </div>
                  <div>
                    <p className="text-xl font-bold text-foreground leading-tight">{stat.value}</p>
                    <p className="text-xs text-muted-foreground font-medium">{stat.label}</p>
                  </div>
                </motion.div>
              ))}
            </motion.div>
          </div>          {/* Generations Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-12">
            <motion.div 
              variants={fadeUp} 
              initial="hidden"
              whileInView="show"
              viewport={{ once: true }}
              className="p-8 rounded-[2rem] bg-white/90 dark:bg-slate-900/80 backdrop-blur-xl border border-white dark:border-slate-800/50 hover:border-indigo-500/30 transition-all duration-500 shadow-sm hover:shadow-xl"
            >
              <div className="w-12 h-12 rounded-xl bg-indigo-500/10 dark:bg-indigo-500/20 flex items-center justify-center mb-5">
                <Award className="w-6 h-6 text-indigo-500" />
              </div>
              <h3 className="text-xl font-bold text-foreground mb-3">Second Generation</h3>
              <p className="text-muted-foreground leading-relaxed text-sm">
                Under the stewardship of <strong className="text-foreground">Nalla Madhu Sudhan</strong>, we strengthened our operational capabilities and established a solid reputation for uncompromising consistency in the wholesale pharmaceutical landscape.
              </p>
            </motion.div>

            <motion.div 
              variants={fadeUp} 
              initial="hidden"
              whileInView="show"
              viewport={{ once: true }}
              className="p-8 rounded-[2rem] bg-white/90 dark:bg-slate-900/80 backdrop-blur-xl border border-white dark:border-slate-800/50 hover:border-cyan-500/30 transition-all duration-500 shadow-sm hover:shadow-xl"
            >
              <div className="w-12 h-12 rounded-xl bg-cyan-500/10 dark:bg-cyan-500/20 flex items-center justify-center mb-5">
                <TrendingUp className="w-6 h-6 text-cyan-500" />
              </div>
              <h3 className="text-xl font-bold text-foreground mb-3">Modern Future</h3>
              <p className="text-muted-foreground leading-relaxed text-sm">
                Today, <strong className="text-foreground">Nalla Ritesh Kumar</strong> drives us forward by adopting state-of-the-art digital inventory systems and expanding our global business networks while maintaining our core values.
              </p>
            </motion.div>
          </div>

          {/* Bottom Statement */}
          <motion.div 
            className="w-full max-w-5xl mx-auto text-center bg-white/90 dark:bg-slate-900/90 backdrop-blur-2xl border border-primary/10 dark:border-primary/30 rounded-[2.5rem] p-10 md:p-14 shadow-sm dark:shadow-2xl relative overflow-hidden"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
          >
            <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[80%] h-1 bg-gradient-to-r from-transparent via-primary/50 to-transparent" />
            <h3 className="text-2xl md:text-3xl font-semibold text-foreground leading-snug">
              With three generations of leadership, Ravindra Pharma Distributors represents a <span className="text-primary">powerful combination of experience, trust, and forward-thinking vision</span>.
            </h3>
            <p className="mt-6 text-base text-muted-foreground max-w-3xl mx-auto">
              We continue to evolve as a dependable partner in the pharmaceutical ecosystem, ensuring that life-saving medications reach those who need them most with efficiency and care.
            </p>
          </motion.div>

        </div>
      </section>
    </div>
  );
}
