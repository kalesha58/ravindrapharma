"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { MapPin, Phone, Mail, Clock, Send } from "lucide-react";

export default function Contact() {
  return (
    <div className="flex flex-col w-full">
      {/* Page Header */}
      <section className="relative bg-primary/5 py-16 md:py-24 border-b border-border/40 overflow-hidden">
        <div className="absolute inset-0 z-0">
          <Image
            src="/images/contact.png"
            alt="Global network visualization"
            fill
            className="object-cover opacity-15"
            priority
          />
        </div>
        <div className="container relative z-10 mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.h1 
            className="text-4xl md:text-5xl font-bold tracking-tight text-foreground mb-4"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            Get in <span className="text-primary">Touch</span>
          </motion.h1>
          <motion.p 
            className="text-lg text-muted-foreground max-w-2xl mx-auto"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
          >
            Let’s build dependable healthcare supply together.
          </motion.p>
        </div>
      </section>

      {/* Main Content Section */}
      <section className="py-16 md:py-24 bg-background">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24">
            
            {/* Contact Information */}
            <motion.div 
              className="space-y-10"
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
            >
              <div>
                <h2 className="text-3xl font-bold text-foreground mb-6">Contact Information</h2>
                <p className="text-muted-foreground mb-8 text-lg">
                  Reach out to us for any inquiries, partnerships, or distribution needs. Our team is ready to assist you.
                </p>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <div className="flex flex-col gap-3">
                  <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center mb-2">
                    <MapPin className="text-primary h-6 w-6" />
                  </div>
                  <h3 className="font-semibold text-lg">Our Office</h3>
                  <p className="text-muted-foreground">
                    123 Pharma Distribution Park<br />
                    Industrial Zone, Phase 1<br />
                    Hyderabad, Telangana 500001
                  </p>
                </div>

                <div className="flex flex-col gap-3">
                  <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center mb-2">
                    <Phone className="text-primary h-6 w-6" />
                  </div>
                  <h3 className="font-semibold text-lg">Phone</h3>
                  <p className="text-muted-foreground">
                    +91 (0) 123 456 7890<br />
                    +91 (0) 098 765 4321
                  </p>
                </div>

                <div className="flex flex-col gap-3">
                  <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center mb-2">
                    <Mail className="text-primary h-6 w-6" />
                  </div>
                  <h3 className="font-semibold text-lg">Email</h3>
                  <p className="text-muted-foreground">
                    info@ravindrapharma.com<br />
                    support@ravindrapharma.com
                  </p>
                </div>

                <div className="flex flex-col gap-3">
                  <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center mb-2">
                    <Clock className="text-primary h-6 w-6" />
                  </div>
                  <h3 className="font-semibold text-lg">Business Hours</h3>
                  <p className="text-muted-foreground">
                    Monday - Saturday<br />
                    9:00 AM - 6:00 PM IST
                  </p>
                </div>
              </div>
            </motion.div>

            {/* Contact Form */}
            <motion.div 
              className="bg-card border border-border/50 shadow-sm rounded-3xl p-8 md:p-10"
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.2 }}
            >
              <h3 className="text-2xl font-bold text-foreground mb-8">Send us a Message</h3>
              
              <form className="space-y-6" onSubmit={(e) => e.preventDefault()}>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <label htmlFor="name" className="text-sm font-medium text-foreground">Full Name</label>
                    <input 
                      type="text" 
                      id="name" 
                      className="w-full flex h-12 rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50 transition-all duration-200 hover:border-primary/50" 
                      placeholder="John Doe" 
                      required
                    />
                  </div>
                  <div className="space-y-2">
                    <label htmlFor="company" className="text-sm font-medium text-foreground">Company</label>
                    <input 
                      type="text" 
                      id="company" 
                      className="w-full flex h-12 rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50 transition-all duration-200 hover:border-primary/50" 
                      placeholder="Your Organization" 
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <label htmlFor="email" className="text-sm font-medium text-foreground">Email Address</label>
                    <input 
                      type="email" 
                      id="email" 
                      className="w-full flex h-12 rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50 transition-all duration-200 hover:border-primary/50" 
                      placeholder="john@example.com" 
                      required
                    />
                  </div>
                  <div className="space-y-2">
                    <label htmlFor="phone" className="text-sm font-medium text-foreground">Phone Number</label>
                    <input 
                      type="tel" 
                      id="phone" 
                      className="w-full flex h-12 rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50 transition-all duration-200 hover:border-primary/50" 
                      placeholder="+91 123 456 7890" 
                    />
                  </div>
                </div>

                <div className="space-y-2">
                  <label htmlFor="message" className="text-sm font-medium text-foreground">Message</label>
                  <textarea 
                    id="message" 
                    rows={5}
                    className="w-full flex min-h-[120px] rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50 resize-y transition-all duration-200 hover:border-primary/50" 
                    placeholder="How can we help you?"
                    required
                  />
                </div>

                <button 
                  type="submit" 
                  className="w-full inline-flex items-center justify-center rounded-md bg-primary px-8 py-4 text-sm font-medium text-primary-foreground shadow transition-colors hover:bg-primary/90 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50 mt-4"
                >
                  Send Message
                  <Send className="ml-2 h-4 w-4" />
                </button>
              </form>
            </motion.div>

          </div>
        </div>
      </section>
    </div>
  );
}
