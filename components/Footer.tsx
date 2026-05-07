import Link from "next/link";
import Image from "next/image";
import {
  PlusSquare,
  Mail,
  MapPin,
  Phone,
  Clock,
  ArrowUpRight,
} from "lucide-react";

const quickLinks = [
  { href: "/", label: "Home" },
  { href: "/about", label: "About Us" },
  { href: "/management", label: "Management" },
  { href: "/clients", label: "Clients" },
  { href: "/contact", label: "Contact Us" },
] as const;

const socialLinks = [
  {
    name: "Facebook",
    href: "#",
    icon: (
      <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z" />
    ),
  },
  {
    name: "Twitter",
    href: "#",
    icon: (
      <path d="M22 4s-.7 2.1-2 3.4c1.6 10-9.4 17.3-18 11.6 2.2.1 4.4-.6 6-2C3 15.5.5 9.6 3 5c2.2 2.6 5.6 4.1 9 4-.9-4.2 4-6.6 7-3.8 1.1 0 3-1.2 3-1.2z" />
    ),
  },
  {
    name: "LinkedIn",
    href: "#",
    icon: (
      <>
        <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" />
        <rect width="4" height="12" x="2" y="9" />
        <circle cx="4" cy="4" r="2" />
      </>
    ),
  },
] as const;

export function Footer() {
  return (
    <footer className="relative mt-auto">
      <div
        className="pointer-events-none absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-primary/50 to-transparent"
        aria-hidden
      />
      <div className="relative overflow-hidden border-t border-border/50 bg-gradient-to-b from-muted/50 via-background to-muted/30 dark:from-primary/[0.07] dark:via-background dark:to-primary/[0.12]">
        <div
          className="pointer-events-none absolute -right-24 -top-32 h-80 w-80 rounded-full bg-primary/10 blur-3xl dark:bg-primary/15"
          aria-hidden
        />
        <div
          className="pointer-events-none absolute -left-20 bottom-0 h-64 w-64 rounded-full bg-primary/5 blur-3xl dark:bg-primary/10"
          aria-hidden
        />

        <div className="container relative mx-auto px-4 py-16 sm:px-6 lg:px-8 lg:py-20">
          <div className="grid grid-cols-1 gap-12 md:grid-cols-2 lg:grid-cols-12 lg:gap-10">
            <div className="lg:col-span-5">
              <Link
                href="/"
                className="group inline-flex items-center gap-4 transition-opacity hover:opacity-90"
              >
                <div className="relative h-20 w-20 transition-all duration-300 dark:brightness-0 dark:invert">
                  <Image 
                    src="/images/logo-rpd.png" 
                    alt="RPD Logo" 
                    fill 
                    sizes="80px"
                    className="object-contain object-left" 
                  />
                </div>
                <span className="text-2xl font-bold tracking-tight text-foreground ml-2">
                  Ravindra Pharma Distributors
                </span>
              </Link>
              <p className="mt-2 inline-flex items-center rounded-full border border-border/60 bg-background/60 px-3 py-1 text-xs font-medium uppercase tracking-widest text-primary/90 dark:border-primary/25 dark:bg-primary/10">
                52+ years of trust
              </p>
              <p className="mt-5 max-w-md text-pretty text-sm leading-relaxed text-muted-foreground sm:text-[0.9375rem]">
                A leading pharmaceutical distribution firm committed to delivering
                reliable, high-quality healthcare solutions with consistency and
                integrity.
              </p>
              <div className="mt-8 flex flex-wrap gap-2.5">
                {socialLinks.map((s) => (
                  <Link
                    key={s.name}
                    href={s.href}
                    className="inline-flex h-10 w-10 items-center justify-center rounded-full border border-border/70 bg-background/80 text-muted-foreground shadow-sm transition-all duration-300 hover:-translate-y-0.5 hover:border-primary/40 hover:bg-primary/5 hover:text-primary dark:border-border/50 dark:bg-card/50"
                    aria-label={s.name}
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="20"
                      height="20"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    >
                      {s.icon}
                    </svg>
                  </Link>
                ))}
                <Link
                  href="mailto:ravindrapharma.nzb1@gmail.com"
                  className="inline-flex h-10 items-center gap-2 rounded-full border border-border/70 bg-background/80 px-4 text-sm text-muted-foreground shadow-sm transition-all duration-300 hover:-translate-y-0.5 hover:border-primary/40 hover:bg-primary/5 hover:text-primary dark:border-border/50 dark:bg-card/50"
                >
                  <Mail className="h-4 w-4 shrink-0" />
                  <span className="sr-only sm:not-sr-only sm:max-w-[10rem] sm:truncate">
                    ravindrapharma.nzb1@gmail.com
                  </span>
                </Link>
              </div>
            </div>

            <div className="lg:col-span-3">
              <h3 className="text-xs font-semibold uppercase tracking-[0.2em] text-foreground/80">
                Explore
              </h3>
              <ul className="mt-6 space-y-1">
                {quickLinks.map((item) => (
                  <li key={item.href}>
                    <Link
                      href={item.href}
                      className="group flex items-center justify-between gap-2 rounded-lg py-2.5 pl-0 pr-1 text-sm text-muted-foreground transition-colors hover:text-foreground"
                    >
                      <span className="border-b border-transparent transition-[border-color] group-hover:border-primary/40">
                        {item.label}
                      </span>
                      <ArrowUpRight className="h-3.5 w-3.5 opacity-0 transition-all group-hover:translate-x-0.5 group-hover:translate-y-0.5 group-hover:opacity-100" />
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            <div className="lg:col-span-4">
              <h3 className="text-xs font-semibold uppercase tracking-[0.2em] text-foreground/80">
                Get in touch
              </h3>
              <ul className="mt-6 space-y-4 text-sm text-muted-foreground">
                <li className="flex gap-3">
                  <span className="mt-0.5 flex h-9 w-9 shrink-0 items-center justify-center rounded-lg bg-primary/10 text-primary dark:bg-primary/15">
                    <MapPin className="h-4 w-4" />
                  </span>
                  <a 
                    href="https://maps.google.com/?q=5%207%2044%205-7-144,%20KHALLELWADI%20Nizamabad,%20Telangana,%20503001%20India"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="pt-1 leading-relaxed transition-colors hover:text-primary"
                  >
                    5 7 44 5-7-144, KHALLELWADI, Nizamabad, Telangana, 503001 India
                  </a>
                </li>
                <li className="flex gap-3">
                  <span className="mt-0.5 flex h-9 w-9 shrink-0 items-center justify-center rounded-lg bg-primary/10 text-primary dark:bg-primary/15">
                    <Phone className="h-4 w-4" />
                  </span>
                  <a
                    href="tel:+918881699999"
                    className="pt-1 text-foreground/90 transition-colors hover:text-primary"
                  >
                    +91 88816 99999, 88852 99999
                  </a>
                </li>
                <li className="flex gap-3">
                  <span className="mt-0.5 flex h-9 w-9 shrink-0 items-center justify-center rounded-lg bg-primary/10 text-primary dark:bg-primary/15">
                    <Mail className="h-4 w-4" />
                  </span>
                  <a
                    href="mailto:ravindrapharma.nzb1@gmail.com"
                    className="pt-1 break-all text-foreground/90 transition-colors hover:text-primary"
                  >
                    ravindrapharma.nzb1@gmail.com
                  </a>
                </li>
                <li className="flex gap-3">
                  <span className="mt-0.5 flex h-9 w-9 shrink-0 items-center justify-center rounded-lg bg-primary/10 text-primary dark:bg-primary/15">
                    <Clock className="h-4 w-4" />
                  </span>
                  <span className="pt-1 leading-relaxed">
                    Mon – Sat · 9:00 AM – 6:00 PM
                  </span>
                </li>
              </ul>
            </div>
          </div>
        </div>

        <div className="border-t border-border/50 bg-muted/30 backdrop-blur-sm dark:bg-muted/15">
          <div className="container mx-auto flex flex-col gap-4 px-4 py-6 sm:px-6 sm:py-8 lg:flex-row lg:items-center lg:justify-between lg:px-8">
            <p className="text-center text-sm text-muted-foreground lg:text-left">
              © {new Date().getFullYear()} Ravindra Pharma. All rights reserved.
            </p>
            <div className="flex flex-wrap items-center justify-center gap-x-6 gap-y-2 text-sm">
              <Link
                href="#"
                className="text-muted-foreground transition-colors hover:text-foreground"
              >
                Privacy Policy
              </Link>
              <span className="hidden text-border sm:inline" aria-hidden>
                |
              </span>
              <Link
                href="#"
                className="text-muted-foreground transition-colors hover:text-foreground"
              >
                Terms of Service
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
