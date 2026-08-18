"use client";

import Image from "next/image";
import Link from "next/link";
import { useState } from "react";

const NAV_LINKS = [
  { href: "/", label: "Home" },
  { href: "/about", label: "About" },
   { href: "/services", label: "Services" },
  { href: "/contact", label: "Contact" },
];

export default function Header() {
  const [open, setOpen] = useState(false);

  return (
    <header className="absolute top-0 left-0 right-0 z-50">
      <div className="mx-auto flex max-w-6xl items-center justify-between px-6 py-6 lg:px-10">
        <Link href="/" className="flex items-center gap-3" onClick={() => setOpen(false)}>
          <Image
            src="/assets/restless-generation-logo-white.png"
            alt="Restless Generation"
            width={80}
            height={80}
            className="h-18 w-48 object-contain drop-shadow-[0_1px_3px_rgba(0,0,0,0.35)]"
            priority
          />
        { /* <span className="hidden flex-col leading-tight sm:flex">
            <span className="font-display text-base font-semibold text-white drop-shadow-[0_1px_3px_rgba(0,0,0,0.35)]">
              Restless Generation
            </span>
            <span className="font-mono text-[0.62rem] uppercase tracking-[0.14em] text-white/75">
              Unleashing the power of youth
            </span>
          </span> */}
        </Link>

        <nav className="hidden items-center gap-1 md:flex">
          {NAV_LINKS.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="rounded-full px-4 py-2 font-mono text-sm font-medium text-white/90 transition hover:bg-white/10 hover:text-white uppercase tracking-[0.14em]"
            >
              {link.label}
            </Link>
          ))}
          
        </nav>

        <button
          aria-label="Toggle navigation"
          className="flex h-10 w-10 flex-col items-center justify-center gap-1.5 rounded-lg border border-white/30 md:hidden"
          onClick={() => setOpen((v) => !v)}
        >
          <span className="h-px w-5 bg-white" />
          <span className="h-px w-5 bg-white" />
          <span className="h-px w-5 bg-white" />
        </button>
      </div>

      {open && (
        <nav className="mx-6 flex flex-col gap-1 rounded-2xl bg-green-deep/95 p-4 backdrop-blur md:hidden">
          {NAV_LINKS.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="rounded-xl px-4 py-3 font-display text-sm font-medium text-white/90 hover:bg-white/10"
              onClick={() => setOpen(false)}
            >
              {link.label}
            </Link>
          ))}
          <Link
            href="/contact"
            className="mt-1 rounded-xl bg-white px-4 py-3 text-center font-display text-sm font-semibold text-green-deep"
            onClick={() => setOpen(false)}
          >
            Request a quote
          </Link>
        </nav>
      )}
    </header>
  );
}
