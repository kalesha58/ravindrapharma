"use client";

import React from "react";
import { motion } from "framer-motion";
import { Building2, Compass, LineChart, Milestone } from "lucide-react";

const leaders = [
  {
    name: "Nalla Narayana",
    role: "Founder & First Generation",
    tag: "1970 - Foundation",
    icon: Building2,
    gradient: "from-blue-500 to-cyan-400",
    shadow: "group-hover:shadow-[0_0_40px_rgba(59,130,246,0.3)]",
    description: "Established Ravindra Pharma Distributors over 52 years ago with a vision to create a dependable and efficient supply network. Built the foundation of trust and service excellence that defines the company today.",
  },
  {
    name: "Nalla Madhu Sudhan",
    role: "Second Generation Leadership",
    tag: "Expansion Era",
    icon: Compass,
    gradient: "from-indigo-500 to-blue-500",
    shadow: "group-hover:shadow-[0_0_40px_rgba(99,102,241,0.3)]",
    description: "Strengthened operational capabilities and significantly expanded market presence. Established a solid reputation for professionalism, consistency, and modernized distribution strategies.",
  },
  {
    name: "Nalla Ritesh Kumar",
    role: "Third Generation Leadership",
    tag: "Modernization & Future",
    icon: LineChart,
    gradient: "from-violet-500 to-indigo-500",
    shadow: "group-hover:shadow-[0_0_40px_rgba(139,92,246,0.3)]",
    description: "Driving the company towards the future by adopting modern technological systems, expanding global business networks, and introducing a progressive, growth-oriented approach while preserving the family legacy.",
  },
];

const containerVariants = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: { staggerChildren: 0.15 },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 40, filter: "blur(10px)" },
  show: {
    opacity: 1,
    y: 0,
    filter: "blur(0px)",
    transition: { type: "spring" as const, stiffness: 200, damping: 20 },
  },
};

export default function Management() {
  return (
    <div className="relative min-h-screen flex flex-col overflow-hidden bg-background">
      {/* Ultra-Premium Ambient Background */}
      <div className="fixed inset-0 pointer-events-none z-0">
        <div className="absolute -top-[20%] -right-[10%] w-[70vw] h-[70vw] rounded-full bg-primary/5 blur-[150px] animate-[pulse_10s_ease-in-out_infinite]" />
        <div className="absolute top-[40%] -left-[10%] w-[50vw] h-[50vw] rounded-full bg-blue-500/5 blur-[150px] animate-[pulse_8s_ease-in-out_infinite_reverse]" />
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:24px_24px] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_0%,#000_70%,transparent_100%)]" />
      </div>

      {/* Hero Section */}
      <header className="relative z-10 pt-20 pb-12 md:pt-24 md:pb-16 border-b border-border/20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="inline-flex items-center gap-2 rounded-full border border-primary/20 bg-primary/5 px-5 py-2 text-sm font-semibold text-primary mb-5 backdrop-blur-md"
          >
            <Milestone className="w-4 h-4" />
            <span>Legacy of Leadership</span>
          </motion.div>
          
          <motion.h1
            className="text-5xl md:text-7xl font-extrabold tracking-tight text-foreground mb-4"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
          >
            Guiding with <br className="hidden md:block" />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary via-blue-500 to-indigo-500">
              Vision & Integrity
            </span>
          </motion.h1>
          
          <motion.p
            className="mx-auto max-w-2xl text-lg md:text-xl text-muted-foreground leading-relaxed"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            Three generations of strategic vision—guiding the organization with 
            unwavering continuity and a forward-looking mindset.
          </motion.p>
        </div>
      </header>

      {/* Leadership Cards Section */}
      <section className="relative z-10 py-16 md:py-24 bg-muted/20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl">
          
          {/* Animated Connecting Line (Desktop) */}
          <div className="hidden lg:block absolute left-[10%] right-[10%] top-[35%] h-[2px] bg-gradient-to-r from-transparent via-border/50 to-transparent -z-10" />

          <motion.div
            className="grid grid-cols-1 lg:grid-cols-3 gap-8 md:gap-12"
            variants={containerVariants}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, margin: "-100px" }}
          >
            {leaders.map((leader, index) => {
              const Icon = leader.icon;
              return (
                <motion.article
                  key={leader.name}
                  variants={itemVariants}
                  className={`group relative flex flex-col rounded-[2.5rem] bg-card/60 backdrop-blur-2xl border border-border/50 overflow-hidden transition-all duration-500 hover:-translate-y-4 ${leader.shadow}`}
                >
                  {/* Glowing Top Border */}
                  <div className={`absolute top-0 left-0 right-0 h-1.5 bg-gradient-to-r ${leader.gradient} opacity-80`} />
                  
                  {/* Subtle Background Glow */}
                  <div className={`absolute -inset-24 bg-gradient-to-br ${leader.gradient} opacity-[0.03] group-hover:opacity-[0.08] transition-opacity duration-500 rounded-full blur-3xl`} />

                  <div className="relative p-8 md:p-10 flex-1 flex flex-col">
                    {/* Header: Icon & Tag */}
                    <div className="flex items-center justify-between mb-10">
                      <div className={`w-16 h-16 rounded-2xl bg-gradient-to-br ${leader.gradient} p-[2px] shadow-lg group-hover:scale-110 transition-transform duration-500`}>
                        <div className="w-full h-full bg-card rounded-[14px] flex items-center justify-center">
                          <Icon className="w-7 h-7 text-foreground" />
                        </div>
                      </div>
                      <div className="px-4 py-1.5 rounded-full bg-muted border border-border/50 text-xs font-bold tracking-wider text-muted-foreground uppercase">
                        Gen 0{index + 1}
                      </div>
                    </div>

                    {/* Content */}
                    <h3 className="text-sm font-bold tracking-[0.2em] text-primary uppercase mb-2">
                      {leader.tag}
                    </h3>
                    <h2 className="text-3xl font-extrabold text-foreground mb-2 group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-gradient-to-r group-hover:from-foreground group-hover:to-muted-foreground transition-all">
                      {leader.name}
                    </h2>
                    <p className="text-sm font-semibold text-muted-foreground mb-8 pb-8 border-b border-border/50">
                      {leader.role}
                    </p>

                    <p className="text-base text-muted-foreground leading-relaxed flex-1">
                      {leader.description}
                    </p>
                  </div>
                </motion.article>
              );
            })}
          </motion.div>
        </div>
      </section>
    </div>
  );
}
