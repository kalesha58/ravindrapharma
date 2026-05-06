"use client";

import * as React from "react";
import { createPortal } from "react-dom";
import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { AnimatePresence, motion } from "framer-motion";
import { ThemeToggle } from "./ThemeToggle";
import {
  Menu,
  X,
  Home,
  Building2,
  Users,
  Handshake,
  Mail,
  ChevronRight,
} from "lucide-react";

const navItems = [
  { name: "Home", path: "/", icon: Home },
  { name: "About Us", path: "/about", icon: Building2 },
  { name: "Management", path: "/management", icon: Users },
  { name: "Clients", path: "/clients", icon: Handshake },
  { name: "Contact Us", path: "/contact", icon: Mail },
] as const;

export function Navbar() {
  const [isOpen, setIsOpen] = React.useState(false);
  const [mounted, setMounted] = React.useState(false);
  const pathname = usePathname();

  React.useEffect(() => setMounted(true), []);

  React.useEffect(() => {
    if (!isOpen) return;
    const prev = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    return () => {
      document.body.style.overflow = prev;
    };
  }, [isOpen]);

  React.useEffect(() => {
    if (!isOpen) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") setIsOpen(false);
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [isOpen]);

  React.useEffect(() => {
    setIsOpen(false);
  }, [pathname]);

  const toggleMenu = () => setIsOpen((o) => !o);

  const mobileMenu =
    mounted &&
    createPortal(
      <AnimatePresence>
        {isOpen && (
          <motion.div
            key="mobile-menu"
            className="fixed inset-0 z-[100] md:hidden"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.2 }}
          >
            <button
              type="button"
              className="absolute inset-0 z-0 bg-black/45 backdrop-blur-[2px] dark:bg-black/60"
              aria-label="Close navigation menu"
              onClick={() => setIsOpen(false)}
            />
            <motion.aside
              id="mobile-nav-dialog"
              role="dialog"
              aria-modal="true"
              aria-label="Site navigation"
              initial={{ x: "100%" }}
              animate={{ x: 0 }}
              exit={{ x: "100%" }}
              transition={{ type: "spring", damping: 32, stiffness: 380 }}
              className="absolute inset-y-0 right-0 z-10 flex w-[min(20rem,100%)] max-w-[100vw] flex-col border-l border-border/60 bg-background/95 pt-[env(safe-area-inset-top)] shadow-[-16px_0_48px_rgba(0,0,0,0.08)] backdrop-blur-2xl dark:shadow-[-16px_0_48px_rgba(0,0,0,0.35)]"
              onClick={(e) => e.stopPropagation()}
            >
              <div className="flex items-center justify-between gap-3 border-b border-border/40 px-4 pb-4 pt-3">
                <div>
                  <p className="text-[10px] font-semibold uppercase tracking-[0.2em] text-primary">
                    Menu
                  </p>
                  <p className="text-sm font-semibold text-foreground">Ravindra Pharma Distributors</p>
                </div>
                <button
                  type="button"
                  onClick={() => setIsOpen(false)}
                  className="inline-flex h-10 w-10 shrink-0 items-center justify-center rounded-full border border-border/60 bg-muted/40 text-foreground transition-colors hover:bg-muted"
                  aria-label="Close menu"
                >
                  <X className="h-5 w-5" aria-hidden />
                </button>
              </div>

              <nav className="flex flex-1 flex-col gap-0.5 overflow-y-auto overscroll-contain px-3 py-3">
                {navItems.map((item) => {
                  const Icon = item.icon;
                  const isActive = pathname === item.path;
                  return (
                    <Link
                      key={item.path}
                      href={item.path}
                      onClick={() => setIsOpen(false)}
                      className={`group flex items-center gap-3 rounded-xl px-3 py-2.5 text-sm font-medium transition-colors ${
                        isActive
                          ? "bg-primary/12 text-primary ring-1 ring-primary/20"
                          : "text-muted-foreground hover:bg-muted/70 hover:text-foreground"
                      }`}
                    >
                      <span
                        className={`flex h-9 w-9 shrink-0 items-center justify-center rounded-lg border transition-colors ${
                          isActive
                            ? "border-primary/25 bg-primary/10 text-primary"
                            : "border-border/50 bg-muted/30 text-muted-foreground group-hover:border-border group-hover:bg-muted/50 group-hover:text-foreground"
                        }`}
                      >
                        <Icon className="h-4 w-4" aria-hidden />
                      </span>
                      <span className="min-w-0 flex-1">{item.name}</span>
                      <ChevronRight
                        className={`h-4 w-4 shrink-0 transition-transform group-hover:translate-x-0.5 ${
                          isActive
                            ? "text-primary/70"
                            : "text-muted-foreground/35 group-hover:text-muted-foreground"
                        }`}
                        aria-hidden
                      />
                    </Link>
                  );
                })}
              </nav>

              <div className="border-t border-border/40 px-4 py-3 pb-[max(0.75rem,env(safe-area-inset-bottom))]">
                <p className="text-center text-[11px] leading-relaxed text-muted-foreground">
                  Reliable pharmaceutical distribution since 1970
                </p>
              </div>
            </motion.aside>
          </motion.div>
        )}
      </AnimatePresence>,
      document.body
    );

  return (
    <>
      <nav className="sticky top-0 z-50 w-full border-b border-border/40 bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex h-20 items-center justify-between">
            <div className="flex items-center">
              <Link href="/" className="flex items-center gap-3">
                <div className="relative h-16 w-16 transition-all duration-300 dark:brightness-0 dark:invert">
                    <Image
                      src="/images/logo-rpd.png"
                      alt="RPD Logo"
                      fill
                      sizes="64px"
                      className="object-contain object-left"
                      priority
                    />
                </div>
                <span className="ml-2 hidden text-xl font-bold tracking-tight text-foreground sm:block">
                  Ravindra Pharma Distributors
                </span>
              </Link>
            </div>

            <div className="hidden md:block">
              <div className="ml-10 flex items-baseline space-x-4">
                {navItems.map((item) => {
                  const isActive = pathname === item.path;
                  return (
                    <Link
                      key={item.name}
                      href={item.path}
                      className={`rounded-md px-3 py-2 text-sm font-medium transition-colors ${
                        isActive
                          ? "bg-primary/10 text-primary"
                          : "text-muted-foreground hover:bg-accent hover:text-foreground"
                      }`}
                    >
                      {item.name}
                    </Link>
                  );
                })}
                <ThemeToggle />
              </div>
            </div>

            <div className="-mr-2 flex items-center gap-3 md:hidden">
              <ThemeToggle />
              <button
                type="button"
                onClick={toggleMenu}
                className="inline-flex items-center justify-center rounded-full border border-border/50 bg-muted/30 p-2.5 text-foreground transition-colors hover:bg-muted"
                aria-expanded={isOpen}
                aria-controls="mobile-nav-dialog"
                aria-label={isOpen ? "Close main menu" : "Open main menu"}
              >
                {isOpen ? (
                  <X className="h-5 w-5" aria-hidden />
                ) : (
                  <Menu className="h-5 w-5" aria-hidden />
                )}
              </button>
            </div>
          </div>
        </div>
      </nav>
      {mobileMenu}
    </>
  );
}
