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
              Ravindra Pharma Distributors
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
      <section className="relative z-10 py-12 md:py-20 bg-muted/30">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl">
          
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-20">
            {/* Story Main Card */}
            <motion.div 
              className="lg:col-span-2 group p-10 md:p-12 rounded-[2.5rem] bg-card/60 backdrop-blur-xl border border-border/50 hover:border-primary/30 transition-all duration-500 shadow-xl hover:shadow-[0_0_50px_rgba(59,130,246,0.12)] relative overflow-hidden"
              variants={fadeUp}
              initial="hidden"
              whileInView="show"
              viewport={{ once: true }}
            >
              <div className="absolute top-0 left-0 w-full h-1.5 bg-gradient-to-r from-primary/60 via-blue-500/40 to-transparent" />
              <div className="w-16 h-16 rounded-2xl bg-primary/10 flex items-center justify-center mb-8">
                <History className="w-8 h-8 text-primary" />
              </div>
              <h3 className="text-3xl font-bold text-foreground mb-6">Our Foundation</h3>
              <p className="text-muted-foreground leading-relaxed text-lg">
                Established over 52 years ago by <strong className="text-foreground">Nalla Narayana</strong>, Ravindra Pharma Distributors was founded with a singular purpose — to create a dependable and efficient supply network for critical pharmaceutical products. 
              </p>
              <p className="mt-4 text-muted-foreground leading-relaxed text-lg">
                From our inception in 1970, we have focused on building enduring relationships with healthcare professionals and manufacturing partners, driven by a deep-seated commitment to service excellence and community health.
              </p>
            </motion.div>

            {/* Key Metrics Column */}
            <motion.div 
              className="grid grid-cols-1 gap-6"
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
                  className="p-6 rounded-[1.5rem] bg-card/40 border border-border/40 flex items-center gap-5 hover:bg-card/60 transition-colors"
                >
                  <div className={`w-12 h-12 rounded-xl bg-muted/50 flex items-center justify-center ${stat.color}`}>
                    <stat.icon className="w-6 h-6" />
                  </div>
                  <div>
                    <p className="text-2xl font-bold text-foreground">{stat.value}</p>
                    <p className="text-sm text-muted-foreground">{stat.label}</p>
                  </div>
                </motion.div>
              ))}
            </motion.div>
          </div>

          {/* Generations Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-20">
            <motion.div 
              variants={fadeUp} 
              initial="hidden"
              whileInView="show"
              viewport={{ once: true }}
              className="p-10 rounded-[2.5rem] bg-card/60 backdrop-blur-xl border border-border/50 hover:border-indigo-500/30 transition-all duration-500 hover:shadow-[0_0_30px_rgba(99,102,241,0.08)]"
            >
              <div className="w-14 h-14 rounded-2xl bg-indigo-500/10 flex items-center justify-center mb-6">
                <Award className="w-6 h-6 text-indigo-500" />
              </div>
              <h3 className="text-2xl font-bold text-foreground mb-4">Second Generation</h3>
              <p className="text-muted-foreground leading-relaxed text-base">
                Under the stewardship of <strong className="text-foreground">Nalla Madhu Sudhan</strong>, we strengthened our operational capabilities and established a solid reputation for uncompromising consistency in the wholesale pharmaceutical landscape.
              </p>
            </motion.div>

            <motion.div 
              variants={fadeUp} 
              initial="hidden"
              whileInView="show"
              viewport={{ once: true }}
              className="p-10 rounded-[2.5rem] bg-card/60 backdrop-blur-xl border border-border/50 hover:border-cyan-500/30 transition-all duration-500 hover:shadow-[0_0_30px_rgba(6,182,212,0.08)]"
            >
              <div className="w-14 h-14 rounded-2xl bg-cyan-500/10 flex items-center justify-center mb-6">
                <TrendingUp className="w-6 h-6 text-cyan-500" />
              </div>
              <h3 className="text-2xl font-bold text-foreground mb-4">Modern Future</h3>
              <p className="text-muted-foreground leading-relaxed text-base">
                Today, <strong className="text-foreground">Nalla Ritesh Kumar</strong> drives us forward by adopting state-of-the-art digital inventory systems and expanding our global business networks while maintaining our core values.
              </p>
            </motion.div>
          </div>

          {/* Bottom Statement */}
          <motion.div 
            className="w-full max-w-5xl mx-auto text-center bg-card/50 backdrop-blur-2xl border border-primary/20 rounded-[3rem] p-12 md:p-20 shadow-[0_20px_60px_-15px_rgba(59,130,246,0.1)] relative overflow-hidden"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
          >
            <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[80%] h-1 bg-gradient-to-r from-transparent via-primary/50 to-transparent" />
            <h3 className="text-3xl md:text-4xl font-semibold text-foreground leading-snug">
              With three generations of leadership, Ravindra Pharma Distributors represents a <span className="text-primary">powerful combination of experience, trust, and forward-thinking vision</span>.
            </h3>
            <p className="mt-8 text-lg text-muted-foreground max-w-3xl mx-auto">
              We continue to evolve as a dependable partner in the pharmaceutical ecosystem, ensuring that life-saving medications reach those who need them most with efficiency and care.
            </p>
          </motion.div>

        </div>
      </section>
    </div>
  );
}
