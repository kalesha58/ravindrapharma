"use client";

import React from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import { Phone, Mail, Clock, Send, MessageSquare, Building2, Globe } from "lucide-react";

const containerVariants = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: { staggerChildren: 0.1 },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  show: { opacity: 1, y: 0, transition: { type: "spring" as const, stiffness: 300, damping: 24 } },
};

export default function Contact() {
  return (
    <div className="flex flex-col w-full min-h-screen bg-background overflow-hidden relative">
      
      {/* Immersive Hero Section with Generated Image */}
      <section className="relative w-full h-[25vh] min-h-[200px] flex items-center justify-center border-b border-border/10">
        <div className="absolute inset-0 w-full h-full">
          <Image
            src="/images/contact-modern.png"
            alt="Global Healthcare Logistics Network"
            fill
            className="object-cover"
            priority
          />
          {/* Rich Gradient Overlay */}
          <div className="absolute inset-0 bg-gradient-to-b from-background/90 via-background/60 to-background" />
          <div className="absolute inset-0 bg-gradient-to-r from-primary/30 to-blue-600/30 mix-blend-multiply dark:mix-blend-color" />
        </div>

        <div className="relative z-10 container mx-auto px-4 sm:px-6 lg:px-8 text-center pt-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="inline-flex items-center gap-2 rounded-full border border-primary/20 bg-primary/10 px-4 py-1.5 text-xs font-bold text-primary mb-3 backdrop-blur-md"
          >
            <Globe className="w-3.5 h-3.5" />
            <span className="uppercase tracking-wider">24/7 Global Support</span>
          </motion.div>
          
          <motion.h1 
            className="text-4xl md:text-5xl lg:text-6xl font-extrabold tracking-tight text-foreground mb-2"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
          >
            Get in <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary via-blue-500 to-indigo-500">Touch</span>
          </motion.h1>
          
          <motion.p 
            className="text-base md:text-lg text-muted-foreground max-w-2xl mx-auto font-medium"
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            Let's build a highly dependable healthcare supply network together.
          </motion.p>
        </div>
      </section>

      {/* Main Content Layout */}
      <section className="relative z-10 py-8 md:py-12 bg-[#f1f5f9]/50 dark:bg-muted/20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-10">
            
            {/* Left Side: Bento Grid Contact Info (5 Cols) */}
            <motion.div 
              className="lg:col-span-5 grid grid-cols-1 sm:grid-cols-2 gap-4 lg:gap-6"
              variants={containerVariants}
              initial="hidden"
              whileInView="show"
              viewport={{ once: true, margin: "-50px" }}
            >
              {/* Main HQ Card */}
              <motion.div variants={itemVariants} className="sm:col-span-2 group relative p-6 md:p-8 rounded-[2rem] bg-white/80 dark:bg-card/80 backdrop-blur-xl border border-white dark:border-border/60 hover:border-primary/50 transition-all duration-500 shadow-sm hover:shadow-xl overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                <div className="relative z-10">
                  <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-primary/20 to-primary/5 flex items-center justify-center mb-4 border border-primary/20 group-hover:scale-105 transition-transform duration-500 shadow-sm">
                    <Building2 className="w-5 h-5 text-primary" />
                  </div>
                  <h3 className="text-xl font-bold text-foreground mb-2">Global Headquarters</h3>
                  <p className="text-muted-foreground leading-relaxed text-sm">
                    123 Pharma Distribution Park<br />
                    Industrial Zone, Phase 1<br />
                    Hyderabad, Telangana 500001
                  </p>
                </div>
              </motion.div>

              {/* Email Card */}
              <motion.div variants={itemVariants} className="group relative p-5 rounded-[1.5rem] bg-white/80 dark:bg-card/80 backdrop-blur-xl border border-white dark:border-border/60 hover:border-blue-500/50 transition-all duration-500 shadow-sm hover:shadow-lg">
                <div className="w-10 h-10 rounded-lg bg-gradient-to-br from-blue-500/20 to-blue-500/5 flex items-center justify-center mb-3 border border-blue-500/20 group-hover:scale-105 transition-transform duration-500">
                  <Mail className="w-4 h-4 text-blue-500" />
                </div>
                <h3 className="text-sm font-bold text-foreground mb-0.5">Email</h3>
                <p className="text-xs text-muted-foreground break-all">info@ravindrapharma.com</p>
              </motion.div>

              {/* Phone Card */}
              <motion.div variants={itemVariants} className="group relative p-5 rounded-[1.5rem] bg-white/80 dark:bg-card/80 backdrop-blur-xl border border-white dark:border-border/60 hover:border-indigo-500/50 transition-all duration-500 shadow-sm hover:shadow-lg">
                <div className="w-10 h-10 rounded-lg bg-gradient-to-br from-indigo-500/20 to-indigo-500/5 flex items-center justify-center mb-3 border border-indigo-500/20 group-hover:scale-105 transition-transform duration-500">
                  <Phone className="w-4 h-4 text-indigo-500" />
                </div>
                <h3 className="text-sm font-bold text-foreground mb-0.5">Call Us</h3>
                <p className="text-xs text-muted-foreground">+91 123 456 7890</p>
              </motion.div>

              {/* Hours Card */}
              <motion.div variants={itemVariants} className="sm:col-span-2 group relative p-5 rounded-[1.5rem] bg-white/80 dark:bg-card/80 backdrop-blur-xl border border-white dark:border-border/60 hover:border-emerald-500/50 transition-all duration-500 shadow-sm flex flex-row items-center gap-4">
                <div className="w-10 h-10 rounded-lg bg-gradient-to-br from-emerald-500/20 to-emerald-500/5 flex items-center justify-center border border-emerald-500/20 shrink-0 group-hover:scale-105 transition-transform duration-500">
                  <Clock className="w-4 h-4 text-emerald-500" />
                </div>
                <div>
                  <h3 className="text-sm font-bold text-foreground mb-0.5">Business Hours</h3>
                  <p className="text-xs text-muted-foreground">Mon - Sat <span className="mx-1 opacity-50">•</span> 9:00 AM - 6:00 PM IST</p>
                </div>
              </motion.div>
            </motion.div>

            {/* Right Side: Ultra Premium Form (7 Cols) */}
            <motion.div 
              className="lg:col-span-7 relative"
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.7, delay: 0.2 }}
            >
              {/* Form Glow Underlay */}
              <div className="absolute inset-0 bg-gradient-to-br from-primary/10 to-indigo-500/10 blur-3xl rounded-[3rem] -z-10" />
              
              <div className="bg-white/90 dark:bg-card/90 backdrop-blur-2xl border border-white dark:border-border/60 shadow-xl rounded-[2rem] p-6 md:p-10 relative overflow-hidden h-full">
                <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-primary via-blue-500 to-indigo-500" />
                
                <div className="mb-8 flex items-center gap-4">
                  <div className="w-10 h-10 bg-primary/10 rounded-full flex items-center justify-center">
                    <MessageSquare className="w-4 h-4 text-primary" />
                  </div>
                  <div>
                    <h3 className="text-2xl font-extrabold text-foreground tracking-tight">Send a Message</h3>
                    <p className="text-xs text-muted-foreground mt-0.5">Our team will respond within 24 hours.</p>
                  </div>
                </div>
                
                <form className="space-y-6" onSubmit={(e) => e.preventDefault()}>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div className="space-y-2 group">
                      <label htmlFor="name" className="text-xs font-bold uppercase tracking-wider text-muted-foreground group-focus-within:text-primary transition-colors">Full Name</label>
                      <input 
                        type="text" 
                        id="name" 
                        className="w-full h-14 rounded-xl border border-border/60 bg-background/50 px-4 py-2 text-[15px] ring-offset-background placeholder:text-muted-foreground/40 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary/50 focus-visible:border-primary transition-all duration-300 hover:border-primary/40 hover:bg-background" 
                        placeholder="John Doe" 
                        required
                      />
                    </div>
                    <div className="space-y-2 group">
                      <label htmlFor="company" className="text-xs font-bold uppercase tracking-wider text-muted-foreground group-focus-within:text-primary transition-colors">Company</label>
                      <input 
                        type="text" 
                        id="company" 
                        className="w-full h-14 rounded-xl border border-border/60 bg-background/50 px-4 py-2 text-[15px] ring-offset-background placeholder:text-muted-foreground/40 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary/50 focus-visible:border-primary transition-all duration-300 hover:border-primary/40 hover:bg-background" 
                        placeholder="Your Organization" 
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div className="space-y-2 group">
                      <label htmlFor="email" className="text-xs font-bold uppercase tracking-wider text-muted-foreground group-focus-within:text-primary transition-colors">Email Address</label>
                      <input 
                        type="email" 
                        id="email" 
                        className="w-full h-14 rounded-xl border border-border/60 bg-background/50 px-4 py-2 text-[15px] ring-offset-background placeholder:text-muted-foreground/40 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary/50 focus-visible:border-primary transition-all duration-300 hover:border-primary/40 hover:bg-background" 
                        placeholder="john@example.com" 
                        required
                      />
                    </div>
                    <div className="space-y-2 group">
                      <label htmlFor="phone" className="text-xs font-bold uppercase tracking-wider text-muted-foreground group-focus-within:text-primary transition-colors">Phone Number</label>
                      <input 
                        type="tel" 
                        id="phone" 
                        className="w-full h-14 rounded-xl border border-border/60 bg-background/50 px-4 py-2 text-[15px] ring-offset-background placeholder:text-muted-foreground/40 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary/50 focus-visible:border-primary transition-all duration-300 hover:border-primary/40 hover:bg-background" 
                        placeholder="+91 123 456 7890" 
                      />
                    </div>
                  </div>

                  <div className="space-y-2 group">
                    <label htmlFor="message" className="text-xs font-bold uppercase tracking-wider text-muted-foreground group-focus-within:text-primary transition-colors">Message</label>
                    <textarea 
                      id="message" 
                      rows={4}
                      className="w-full min-h-[140px] rounded-xl border border-border/60 bg-background/50 px-4 py-4 text-[15px] ring-offset-background placeholder:text-muted-foreground/40 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary/50 focus-visible:border-primary resize-y transition-all duration-300 hover:border-primary/40 hover:bg-background" 
                      placeholder="How can we help you?"
                      required
                    />
                  </div>

                  <button 
                    type="submit" 
                    className="group relative w-full inline-flex items-center justify-center rounded-xl bg-primary px-8 py-5 text-[15px] font-bold text-white overflow-hidden transition-all hover:scale-[1.01] hover:shadow-[0_0_30px_-5px_rgba(59,130,246,0.6)] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring mt-4"
                  >
                    <span className="absolute inset-0 w-full h-full -mt-1 rounded-lg opacity-20 bg-gradient-to-b from-transparent via-transparent to-black" />
                    <span className="absolute inset-0 w-full h-full bg-gradient-to-r from-primary via-blue-500 to-indigo-500 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                    <span className="relative z-10 flex items-center gap-2">
                      Send Secure Message
                      <Send className="w-4 h-4 transition-transform group-hover:translate-x-1 group-hover:-translate-y-1" />
                    </span>
                  </button>
                </form>
              </div>
            </motion.div>

          </div>
        </div>
      </section>
    </div>
  );
}
