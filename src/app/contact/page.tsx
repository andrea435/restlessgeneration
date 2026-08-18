import type { Metadata } from "next";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import PageBanner from "@/components/PageBanner";
import ContactForm from "@/components/ContactForm";
import Reveal from "@/components/Reveal";

export const metadata: Metadata = {
  title: "Contact Us | Restless Generation",
  description:
    "Contact Restless Generation for diversified supply, mining, manufacturing, logistics and technology solutions.",
};

const PHONE_ICON = (
  <svg
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="1.9"
    className="h-5 w-5"
    aria-hidden="true"
  >
    <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.8 19.8 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6A19.8 19.8 0 0 1 2.12 4.18 2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72c.12.9.33 1.78.62 2.61a2 2 0 0 1-.45 2.11L8 9.72a16 16 0 0 0 6 6l1.28-1.28a2 2 0 0 1 2.11-.45c.83.29 1.71.5 2.61.62A2 2 0 0 1 22 16.92Z" />
  </svg>
);

const MAIL_ICON = (
  <svg
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="1.9"
    className="h-5 w-5"
    aria-hidden="true"
  >
    <rect x="3" y="5" width="18" height="14" rx="2" />
    <path d="m3 7 9 6 9-6" />
  </svg>
);

const PIN_ICON = (
  <svg
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="1.9"
    className="h-5 w-5"
    aria-hidden="true"
  >
    <path d="M20 10c0 5-8 12-8 12S4 15 4 10a8 8 0 1 1 16 0Z" />
    <circle cx="12" cy="10" r="2.5" />
  </svg>
);

const MAPS_URL =
  "https://www.google.com/maps/search/?api=1&query=Balmoral+Road+Kendal+Mpumalanga";

const SERVICES = [
  "Industrial supplies",
  "Bulk diesel and industrial gases",
  "Mining services",
  "Cleaning and laundry services",
  "Logistics services",
  "PPE and mine machinery",
  "Occupational hygiene services",
  "Environmental services",
  "Other enquiry",
];

const STEPS = [
  {
    number: "01",
    title: "Select a service",
    text: "Choose the service area most closely related to your enquiry.",
  },
  {
    number: "02",
    title: "Provide details",
    text: "Include quantities, location, timelines or project specifications.",
  },
  {
    number: "03",
    title: "Submit your enquiry",
    text: "Confirm your contact details before sending the message.",
  },
];

function DetailCard({
  icon,
  label,
  children,
}: {
  icon: React.ReactNode;
  label: string;
  children: React.ReactNode;
}) {
  return (
    <div className="group flex gap-4 border border-[#8bc63f]/25 bg-white/[0.06] p-5 transition-colors duration-300 hover:border-[#8bc63f] hover:bg-white/[0.10]">
      <span className="flex h-11 w-11 shrink-0 items-center justify-center bg-[#8bc63f] text-[#1b2f08]">
        {icon}
      </span>

      <div className="min-w-0">
        <p className="font-mono text-[0.65rem] font-bold uppercase tracking-[0.2em] text-[#a8cc86]">
          {label}
        </p>

        <div className="mt-2 space-y-1">{children}</div>
      </div>
    </div>
  );
}

export default function ContactPage() {
  return (
    <>
      <Header />

      <main className="bg-[#f7f5ee]">
        <PageBanner
          eyebrow="Contact Restless Generation"
          title="Let us discuss what your business needs."
          lead="Speak to our team about supplies, mining, manufacturing, logistics, environmental services and other operational requirements."
        />

        <section className="px-6 py-14 lg:px-10 lg:py-16">
          <div className="mx-auto grid max-w-6xl border border-[#26400f]/15 bg-white lg:grid-cols-[0.85fr_1.15fr]">
            {/* Contact information */}
            <aside className="relative overflow-hidden bg-[#1b2f08] p-8 sm:p-10 lg:p-12">
              <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(#8bc63f_1px,transparent_1px)] [background-size:22px_22px] opacity-[0.10]" />
              <div className="rg-drift pointer-events-none absolute -right-24 -top-24 h-72 w-72 rounded-full bg-[#8bc63f]/15 blur-3xl" />

              <div className="relative">
                <div className="flex items-center gap-3 font-mono text-[0.7rem] font-bold uppercase tracking-[0.2em] text-[#8bc63f]">
                  <span className="h-0.5 w-5 bg-[#e08b3a]" />
                  Get in touch
                </div>

                <h2 className="mt-4 max-w-md font-display text-3xl font-bold leading-tight text-white sm:text-[2rem]">
                  Start a conversation with our team.
                </h2>

                <p className="mt-4 max-w-md text-[0.95rem] leading-7 text-[#e4efd6]">
                  Send us your requirements with as much detail as possible.
                  This helps us direct your enquiry to the relevant service
                  area.
                </p>

                <div className="mt-9 space-y-3">
                  <DetailCard icon={PHONE_ICON} label="Call us">
                    <a
                      href="tel:+27780882172"
                      className="block font-semibold text-white underline decoration-[#8bc63f] decoration-2 underline-offset-4 transition-colors duration-300 hover:text-[#8bc63f] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#8bc63f]"
                    >
                      +27 78 088 2172
                    </a>
                    <a
                      href="tel:+27713942892"
                      className="block font-semibold text-white underline decoration-[#8bc63f] decoration-2 underline-offset-4 transition-colors duration-300 hover:text-[#8bc63f] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#8bc63f]"
                    >
                      +27 71 394 2892
                    </a>
                  </DetailCard>

                  <DetailCard icon={MAIL_ICON} label="Email us">
                    <a
                      href="mailto:restlessgeneration20@gmail.com"
                      className="block break-words font-semibold text-white underline decoration-[#8bc63f] decoration-2 underline-offset-4 transition-colors duration-300 hover:text-[#8bc63f] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#8bc63f]"
                    >
                      restlessgeneration20@gmail.com
                    </a>
                  </DetailCard>

                  <DetailCard icon={PIN_ICON} label="Visit us">
                    <address className="not-italic text-sm font-semibold leading-6 text-white">
                      Shop 2, Huewelfontein
                      <br />
                      Balmoral Road, Kendal
                      <br />
                      Mpumalanga, 2225
                    </address>

                    <a
                      href={MAPS_URL}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-1.5 pt-1 font-mono text-[0.65rem] font-bold uppercase tracking-[0.18em] text-[#d7f0a4] transition-colors duration-300 hover:text-white focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#8bc63f]"
                    >
                      Get directions
                      <span aria-hidden="true">&rarr;</span>
                    </a>
                  </DetailCard>
                </div>

                <div className="mt-9 flex flex-wrap items-baseline gap-x-4 gap-y-1 border-t-2 border-[#8bc63f]/40 pt-6">
                  <p className="font-mono text-[0.65rem] font-bold uppercase tracking-[0.2em] text-[#a8cc86]">
                    Company registration
                  </p>

                  <p className="font-mono text-sm font-semibold text-white">
                    2020/456798/07
                  </p>
                </div>
              </div>
            </aside>

            {/* Enquiry form */}
            <div className="p-8 sm:p-10 lg:p-12">
              <div className="flex items-center gap-3 font-mono text-[0.7rem] font-bold uppercase tracking-[0.2em] text-[#759c42]">
                <span className="h-0.5 w-5 bg-[#d68a3f]" />
                Send an enquiry
              </div>

              <h2 className="mt-4 font-display text-3xl font-bold text-[#26400f]">
                How can we assist?
              </h2>

              <p className="mt-3 max-w-xl text-[0.95rem] leading-7 text-[#536347]">
                Complete the form below and our team will review your enquiry.
              </p>

              <div className="mt-8">
                <ContactForm services={SERVICES} />
              </div>
            </div>
          </div>
        </section>

        {/* Supporting information */}
        <section className="border-t border-[#26400f]/15 bg-[#ebe9df] px-6 py-16 lg:px-10 lg:py-20">
          <div className="mx-auto max-w-6xl">
            <Reveal>
              <div className="flex flex-wrap items-end justify-between gap-4">
                <div>
                  <div className="flex items-center gap-3 font-mono text-[0.7rem] font-bold uppercase tracking-[0.2em] text-[#759c42]">
                    <span className="h-0.5 w-5 bg-[#d68a3f]" />
                    Before contacting us
                  </div>

                  <h2 className="mt-4 max-w-lg font-display text-3xl font-bold leading-tight text-[#26400f] sm:text-[2.25rem]">
                    Help us understand your requirement.
                  </h2>
                </div>

                <p className="max-w-sm text-[0.95rem] leading-7 text-[#536347]">
                  The more specific the enquiry, the faster we can come back
                  with pricing and lead times.
                </p>
              </div>
            </Reveal>

            <ol className="mt-10 grid gap-px border border-[#26400f]/15 bg-[#26400f]/15 sm:grid-cols-3">
              {STEPS.map((item, index) => (
                <Reveal
                  key={item.number}
                  delay={index * 90}
                  className="bg-white"
                >
                  <li className="h-full p-7">
                    <span className="inline-flex bg-[#26400f] px-2.5 py-1 font-mono text-[0.65rem] font-bold tracking-[0.2em] text-[#d7f0a4]">
                      {item.number}
                    </span>

                    <h3 className="mt-5 font-display text-lg font-bold text-[#26400f]">
                      {item.title}
                    </h3>

                    <p className="mt-2.5 text-sm leading-6 text-[#536347]">
                      {item.text}
                    </p>
                  </li>
                </Reveal>
              ))}
            </ol>
          </div>
        </section>
      </main>

      <Footer />
    </>
  );
}