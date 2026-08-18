import Image from "next/image";
import Link from "next/link";

const NAV = [
  { label: "Home", href: "/" },
  { label: "Services", href: "/services" },
  { label: "About", href: "/about" },
  { label: "Contact", href: "/contact" },
];

const CAPABILITIES = [
  "Diversified supply",
  "Manufacturing",
  "Mining services",
  "Technology",
];

/* Replace these with the real details before launch. */
const CONTACT: Array<{
  label: string;
  values: Array<{ text: string; href?: string }>;
}> = [
  {
    label: "Email",
    values: [
      {
        text: "restlessgeneration20@gmail.com",
        href: "mailto:restlessgeneration20@gmail.com",
      },
    ],
  },
  {
    label: "Call us",
    values: [
      { text: "+27 78 088 2172", href: "tel:+27780882172" },
      { text: "+27 71 394 2892", href: "tel:+27713942892" },
    ],
  },
  { label: "Location", values: [{ text: "South Africa" }] },
];

const CREDENTIALS = ["CIPC registered", "Level 1 B-BBEE", "SARS compliant"];

function FooterLabel({ children }: { children: React.ReactNode }) {
  return (
    <div className="flex items-center gap-3 font-mono text-[0.7rem] font-bold uppercase tracking-[0.2em] text-[#8bc63f]">
      <span className="h-0.5 w-5 bg-[#e08b3a]" />
      {children}
    </div>
  );
}

export default function Footer() {
  return (
    <footer className="relative overflow-hidden bg-[#1b2f08] text-[#e4efd6]">
      {/* Colour edge */}
      <div className="h-1.5 w-full bg-[linear-gradient(90deg,#8bc63f_0%,#b7df76_35%,#e08b3a_70%,#8bc63f_100%)]" />

      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(#8bc63f_1px,transparent_1px)] [background-size:22px_22px] opacity-[0.10]" />
      <div className="pointer-events-none absolute -left-24 top-10 h-72 w-72 rounded-full bg-[#8bc63f]/15 blur-3xl" />
      <div className="pointer-events-none absolute -bottom-20 right-0 h-64 w-64 rounded-full bg-[#e08b3a]/15 blur-3xl" />

      <div className="relative mx-auto max-w-6xl px-6 lg:px-10">
        {/* Top */}
        <div className="grid gap-10 py-14 md:grid-cols-2 lg:grid-cols-[1.4fr_0.7fr_0.9fr_1fr] lg:gap-12 lg:py-16">
          <div>
            <Link
              href="/"
              className="inline-flex items-center gap-3 font-display text-lg font-bold text-white transition-opacity duration-300 hover:opacity-85 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#8bc63f]"
            >
              <Image
                src="/assets/logo-Photoroom.png"
                alt="Restless Generation"
                width={120}
                height={40}
                className="h-10 w-auto object-contain"
              />
              <span>Restless Generation</span>
            </Link>

            <p className="mt-5 max-w-[38ch] text-sm leading-7 text-[#e4efd6]">
              Diversified supply, manufacturing, mining and technology
              solutions across South Africa, with the ambition to expand
              throughout Southern Africa.
            </p>

            <p className="mt-6 max-w-[34ch] border-l-4 border-[#8bc63f] pl-4 font-display text-base font-bold leading-relaxed text-[#d7f0a4]">
              Unleashing the power of youth to change the world.
            </p>
          </div>

          <nav aria-label="Footer">
            <FooterLabel>Pages</FooterLabel>

            <ul className="mt-5 space-y-3">
              {NAV.map((item) => (
                <li key={item.href}>
                  <Link
                    href={item.href}
                    className="group inline-flex items-center gap-2 text-sm font-semibold text-white transition-colors duration-300 hover:text-[#8bc63f] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#8bc63f]"
                  >
                    <span
                      aria-hidden="true"
                      className="h-0.5 w-0 bg-[#e08b3a] transition-all duration-300 group-hover:w-4 motion-reduce:transition-none"
                    />
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>

          <div>
            <FooterLabel>What we do</FooterLabel>

            <ul className="mt-5 space-y-3 text-sm font-medium text-[#e4efd6]">
              {CAPABILITIES.map((item) => (
                <li key={item} className="flex items-center gap-2.5">
                  <span
                    aria-hidden="true"
                    className="h-1.5 w-1.5 shrink-0 rotate-45 bg-[#8bc63f]"
                  />
                  {item}
                </li>
              ))}
            </ul>
          </div>

          <div>
            <FooterLabel>Get in touch</FooterLabel>

         <dl className="mt-5 space-y-4 text-sm">
  {CONTACT.map((item) => (
    <div key={item.label}>
      <dt className="font-mono text-[0.65rem] font-bold uppercase tracking-[0.2em] text-[#a8cc86]">
        {item.label}
      </dt>
      <dd className="mt-1 space-y-1">
        {item.values.map((entry) =>
          entry.href ? (
            <a
              key={entry.text}
              href={entry.href}
              className="block break-words font-semibold text-white underline decoration-[#8bc63f] decoration-2 underline-offset-4 transition-colors duration-300 hover:text-[#8bc63f] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#8bc63f]"
            >
              {entry.text}
            </a>
          ) : (
            <span key={entry.text} className="block font-semibold text-white">
              {entry.text}
            </span>
          ),
        )}
      </dd>
    </div>
  ))}
</dl>

            <Link
              href="/contact"
              className="mt-6 inline-flex items-center gap-2 bg-[#8bc63f] px-5 py-2.5 font-display text-sm font-bold text-[#1b2f08] transition-colors duration-300 hover:bg-[#d7f0a4] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-white"
            >
              Request a quote
              <span aria-hidden="true">&rarr;</span>
            </Link>
          </div>
        </div>

        {/* Bottom */}
        <div className="flex flex-col gap-5 border-t-2 border-[#8bc63f]/40 py-7 sm:flex-row sm:items-center sm:justify-between">
          <p className="text-xs font-medium text-[#c3d9a8]">
            &copy; {new Date().getFullYear()} Restless Generation. All rights
            reserved.
          </p>

          <ul className="flex flex-wrap gap-2">
            {CREDENTIALS.map((item) => (
              <li
                key={item}
                className="bg-[#8bc63f]/20 px-3 py-1.5 font-mono text-[0.65rem] font-bold uppercase tracking-[0.16em] text-[#d7f0a4]"
              >
                {item}
              </li>
            ))}
          </ul>
        </div>
      </div>
    </footer>
  );
}