import type { Metadata } from "next";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import PageBanner from "@/components/PageBanner";
import ContactForm from "@/components/ContactForm";

export const metadata: Metadata = {
  title: "Contact Us | Restless Generation",
  description:
    "Contact Restless Generation for diversified supply, mining, manufacturing, logistics and technology solutions.",
};

const CONTACT_DETAILS = [
  {
    label: "Call us",
    value: "+27 78 088 2172",
    secondary: "+27 71 394 2892",
    href: "tel:+27780882172",
    icon: (
      <svg
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.8"
        className="h-5 w-5"
        aria-hidden="true"
      >
        <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.8 19.8 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6A19.8 19.8 0 0 1 2.12 4.18 2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72c.12.9.33 1.78.62 2.61a2 2 0 0 1-.45 2.11L8 9.72a16 16 0 0 0 6 6l1.28-1.28a2 2 0 0 1 2.11-.45c.83.29 1.71.5 2.61.62A2 2 0 0 1 22 16.92Z" />
      </svg>
    ),
  },
  {
    label: "Email us",
    value: "restlessgenearation20@gmail.com",
    href: "mailto:restlessgenearation20@gmail.com",
    icon: (
      <svg
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.8"
        className="h-5 w-5"
        aria-hidden="true"
      >
        <rect x="3" y="5" width="18" height="14" rx="2" />
        <path d="m3 7 9 6 9-6" />
      </svg>
    ),
  },
  {
    label: "Visit us",
    value: "Shop 2, Huewelfontein",
    secondary: "Balmoral Road, Kendal, Mpumalanga, 2225",
    icon: (
      <svg
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.8"
        className="h-5 w-5"
        aria-hidden="true"
      >
        <path d="M20 10c0 5-8 12-8 12S4 15 4 10a8 8 0 1 1 16 0Z" />
        <circle cx="12" cy="10" r="2.5" />
      </svg>
    ),
  },
];

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

export default function ContactPage() {
  return (
    <>
      <Header />

      <main className="overflow-hidden bg-[#f7f5ee]">
        <PageBanner
          eyebrow="Contact Restless Generation"
          title="Let us discuss what your business needs."
          lead="Speak to our team about supplies, mining, manufacturing, logistics, environmental services and other operational requirements."
        />

        <section className="relative z-10 -mt-8 px-6 pb-24 lg:-mt-12 lg:px-10 lg:pb-32">
          <div className="mx-auto grid max-w-6xl overflow-hidden rounded-[2rem] border border-[#26400f]/10 bg-white shadow-[0_24px_80px_rgba(38,64,15,0.12)] lg:grid-cols-[0.82fr_1.18fr]">
            {/* Contact information */}
            <aside className="relative overflow-hidden bg-[#26400f] p-8 text-white sm:p-10 lg:p-12">
              <div className="absolute -right-20 -top-20 h-64 w-64 rounded-full border-[48px] border-[#8bc63f]/10" />
              <div className="absolute -bottom-28 -left-20 h-64 w-64 rounded-full bg-[#c07a37]/10 blur-3xl" />

              <div className="relative">
                <div className="mb-5 flex items-center gap-3 font-mono text-xs font-semibold uppercase tracking-[0.16em] text-[#b7df76]">
                  <span className="h-px w-8 bg-[#b7df76]" />
                  Get in touch
                </div>

                <h2 className="max-w-md font-display text-3xl font-bold leading-tight sm:text-4xl">
                  Start a conversation with our team.
                </h2>

                <p className="mt-5 max-w-md leading-7 text-white/65">
                  Send us your requirements and provide as much detail as
                  possible. This helps us direct your enquiry to the relevant
                  service area.
                </p>

                <div className="mt-10 space-y-3">
                  {CONTACT_DETAILS.map((detail) => {
                    const content = (
                      <div className="group flex gap-4 rounded-2xl border border-white/10 bg-white/[0.05] p-5 transition hover:border-[#8bc63f]/40 hover:bg-white/[0.08]">
                        <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full bg-[#8bc63f] text-[#26400f]">
                          {detail.icon}
                        </span>

                        <div className="min-w-0">
                          <p className="font-mono text-[0.65rem] font-semibold uppercase tracking-[0.16em] text-[#b7df76]">
                            {detail.label}
                          </p>

                          <p className="mt-2 break-words text-sm font-medium text-white">
                            {detail.value}
                          </p>

                          {detail.secondary && (
                            <p className="mt-1 text-sm leading-6 text-white/60">
                              {detail.secondary}
                            </p>
                          )}
                        </div>
                      </div>
                    );

                    return detail.href ? (
                      <a
                        key={detail.label}
                        href={detail.href}
                        className="block"
                      >
                        {content}
                      </a>
                    ) : (
                      <div key={detail.label}>{content}</div>
                    );
                  })}
                </div>

                <div className="mt-10 border-t border-white/10 pt-8">
                  <p className="font-mono text-[0.65rem] font-semibold uppercase tracking-[0.16em] text-[#b7df76]">
                    Company registration
                  </p>

                  <p className="mt-2 text-sm text-white/70">
                    2020/456798/07
                  </p>
                </div>
              </div>
            </aside>

            {/* Enquiry form */}
            <div className="p-8 sm:p-10 lg:p-12">
              <div className="mb-8">
                <div className="mb-4 flex items-center gap-3 font-mono text-xs font-semibold uppercase tracking-[0.16em] text-[#517934]">
                  <span className="h-px w-8 bg-[#517934]" />
                  Send an enquiry
                </div>

                <h2 className="font-display text-3xl font-bold text-[#26400f]">
                  How can we assist?
                </h2>

                <p className="mt-3 max-w-xl leading-7 text-[#536347]">
                  Complete the form below and our team will review your
                  enquiry.
                </p>
              </div>

              <ContactForm services={SERVICES} />
            </div>
          </div>
        </section>

        {/* Supporting information */}
        <section className="border-t border-[#26400f]/10 bg-[#ebe9df] px-6 py-20 lg:px-10 lg:py-24">
          <div className="mx-auto grid max-w-6xl gap-10 lg:grid-cols-[0.8fr_1.2fr] lg:items-center">
            <div>
              <div className="mb-5 flex items-center gap-3 font-mono text-xs font-semibold uppercase tracking-[0.16em] text-[#517934]">
                <span className="h-px w-8 bg-[#517934]" />
                Before contacting us
              </div>

              <h2 className="font-display text-3xl font-bold leading-tight text-[#26400f] sm:text-4xl">
                Help us understand your requirement.
              </h2>
            </div>

            <div className="grid gap-4 sm:grid-cols-3">
              {[
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
              ].map((item) => (
                <article
                  key={item.number}
                  className="rounded-2xl border border-[#26400f]/10 bg-white/70 p-6"
                >
                  <span className="font-mono text-xs font-bold text-[#759c42]">
                    {item.number}
                  </span>

                  <h3 className="mt-8 font-display text-lg font-semibold text-[#26400f]">
                    {item.title}
                  </h3>

                  <p className="mt-3 text-sm leading-6 text-[#536347]">
                    {item.text}
                  </p>
                </article>
              ))}
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </>
  );
}