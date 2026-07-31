import type { Metadata } from "next";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import PageBanner from "@/components/PageBanner";

export const metadata: Metadata = {
  title: "About | Restless Generation",
  description:
    "Discover Restless Generation's mission, vision, values, governance and compliance credentials.",
};

const VALUES = [
  {
    number: "01",
    title: "Customer excellence",
    description:
      "We provide responsive, dependable service built around each client's operational requirements.",
  },
  {
    number: "02",
    title: "Integrity",
    description:
      "We conduct our business honestly, professionally and with accountability at every level.",
  },
  {
    number: "03",
    title: "Social responsibility",
    description:
      "We create opportunities that support communities and unlock the potential of young people.",
  },
  {
    number: "04",
    title: "Sustainable development",
    description:
      "We pursue responsible growth that creates lasting economic, social and environmental value.",
  },
];

const DOCS = [
  "CIPC company registration documents",
  "Level 1 B-BBEE affidavit",
  "SARS tax clearance",
  "SARS letter of good standing",
  "Company banking details",
  "COIDA, UIF and legal liability documents",
];

function SectionLabel({
  children,
  light = false,
}: {
  children: React.ReactNode;
  light?: boolean;
}) {
  return (
    <div
      className={`mb-5 flex items-center gap-3 font-mono text-xs font-semibold uppercase tracking-[0.16em] ${
        light ? "text-[#b7df76]" : "text-[#517934]"
      }`}
    >
      <span
        className={`h-px w-8 ${
          light ? "bg-[#b7df76]" : "bg-[#517934]"
        }`}
      />
      {children}
    </div>
  );
}

export default function AboutPage() {
  return (
    <>
      <Header />

      <main className="overflow-hidden bg-[#f7f5ee]">
        <PageBanner
          eyebrow="About Restless Generation"
          title="Built to supply. Driven to create opportunity."
          lead="We provide diversified supply, manufacturing, mining and technology solutions across South Africa, with the ambition to expand throughout Southern Africa."
        />

        {/* Introduction */}
        <section className="relative z-10 -mt-8 px-6 lg:-mt-12 lg:px-10">
          <div className="mx-auto grid max-w-6xl overflow-hidden rounded-[2rem] border border-[#26400f]/10 bg-white shadow-[0_24px_70px_rgba(38,64,15,0.12)] lg:grid-cols-[1.3fr_0.7fr]">
            <div className="p-8 sm:p-10 lg:p-14">
              <SectionLabel>Who we are</SectionLabel>

              <h2 className="max-w-2xl font-display text-3xl font-bold leading-tight text-[#26400f] sm:text-4xl">
                A purposeful business committed to quality, innovation and
                youth development.
              </h2>

              <p className="mt-6 max-w-2xl text-base leading-8 text-[#536347]">
                Restless Generation was established to play a meaningful role
                in the development of South Africa&apos;s economy. We combine
                practical capability, industry knowledge and an entrepreneurial
                mindset to provide reliable products and services.
              </p>

              <p className="mt-4 max-w-2xl text-base leading-8 text-[#536347]">
                Our long-term goal is to build a respected national and
                international business while using our resources, skills and
                passion to unleash the power of youth to change the world.
              </p>
            </div>

            <div className="relative flex min-h-[320px] flex-col justify-end overflow-hidden bg-[#26400f] p-8 text-white sm:p-10 lg:p-12">
              <div className="absolute -right-16 -top-16 h-56 w-56 rounded-full border-[42px] border-[#8bc63f]/20" />
              <div className="absolute bottom-10 right-10 h-24 w-24 rounded-full bg-[#c07a37]/20 blur-xl" />

              <p className="relative text-sm uppercase tracking-[0.18em] text-[#b7df76]">
                Our purpose
              </p>

              <p className="relative mt-4 font-display text-2xl font-semibold leading-snug sm:text-3xl">
                Creating sustainable value while opening doors for the next
                generation.
              </p>
            </div>
          </div>
        </section>

        {/* Vision and mission */}
        <section className="px-6 py-24 lg:px-10 lg:py-32">
          <div className="mx-auto max-w-6xl">
            <div className="grid items-end gap-8 lg:grid-cols-[0.8fr_1.2fr]">
              <div>
                <SectionLabel>Why we exist</SectionLabel>

                <h2 className="font-display text-4xl font-bold leading-[1.05] text-[#26400f] sm:text-5xl">
                  Restless by name.
                  <span className="block text-[#759c42]">
                    Purposeful by design.
                  </span>
                </h2>
              </div>

              <p className="max-w-2xl text-base leading-8 text-[#536347] lg:ml-auto">
                Our vision and mission guide how we grow, how we serve our
                clients and how we contribute to the communities in which we
                operate.
              </p>
            </div>

            <div className="mt-12 grid gap-6 md:grid-cols-2">
              <article className="group relative min-h-[310px] overflow-hidden rounded-[2rem] bg-[#26400f] p-8 text-white sm:p-10">
                <span className="absolute right-7 top-4 font-display text-[7rem] font-bold leading-none text-white/[0.05]">
                  01
                </span>

                <div className="relative flex h-full flex-col justify-between">
                  <div className="flex h-12 w-12 items-center justify-center rounded-full bg-[#8bc63f] text-xl text-[#26400f]">
                    ✦
                  </div>

                  <div className="mt-20">
                    <p className="font-mono text-xs uppercase tracking-[0.18em] text-[#b7df76]">
                      Vision
                    </p>

                    <h3 className="mt-4 max-w-md font-display text-2xl font-semibold leading-snug">
                      To become an internationally acclaimed company.
                    </h3>

                    <p className="mt-4 max-w-md leading-7 text-white/70">
                      We aim to achieve this by promoting and unleashing the
                      power of youth to change the world.
                    </p>
                  </div>
                </div>
              </article>

              <article className="group relative min-h-[310px] overflow-hidden rounded-[2rem] border border-[#26400f]/10 bg-[#e7efdc] p-8 sm:p-10">
                <span className="absolute right-7 top-4 font-display text-[7rem] font-bold leading-none text-[#26400f]/[0.05]">
                  02
                </span>

                <div className="relative flex h-full flex-col justify-between">
                  <div className="flex h-12 w-12 items-center justify-center rounded-full bg-[#26400f] text-xl text-white">
                    ↗
                  </div>

                  <div className="mt-20">
                    <p className="font-mono text-xs uppercase tracking-[0.18em] text-[#517934]">
                      Mission
                    </p>

                    <h3 className="mt-4 max-w-md font-display text-2xl font-semibold leading-snug text-[#26400f]">
                      To deliver quality products and dependable services.
                    </h3>

                    <p className="mt-4 max-w-md leading-7 text-[#536347]">
                      We serve clients across mining, manufacturing, technology
                      and diversified supply markets.
                    </p>
                  </div>
                </div>
              </article>
            </div>
          </div>
        </section>

        {/* Values */}
        <section className="border-y border-[#26400f]/10 bg-white px-6 py-24 lg:px-10 lg:py-28">
          <div className="mx-auto max-w-6xl">
            <div className="grid gap-8 lg:grid-cols-[0.75fr_1.25fr]">
              <div>
                <SectionLabel>What guides us</SectionLabel>

                <h2 className="font-display text-4xl font-bold text-[#26400f]">
                  Our values
                </h2>

                <p className="mt-5 max-w-md leading-7 text-[#536347]">
                  These principles shape our decisions, relationships and
                  approach to service delivery.
                </p>
              </div>

              <div className="grid gap-px overflow-hidden rounded-[2rem] border border-[#26400f]/10 bg-[#26400f]/10 sm:grid-cols-2">
                {VALUES.map((value) => (
                  <article
                    key={value.number}
                    className="group min-h-[250px] bg-[#faf9f4] p-7 transition duration-300 hover:bg-[#edf3e5] sm:p-8"
                  >
                    <div className="flex items-center justify-between">
                      <span className="font-mono text-xs font-semibold text-[#759c42]">
                        {value.number}
                      </span>

                      <span className="flex h-9 w-9 items-center justify-center rounded-full border border-[#26400f]/15 text-[#26400f] transition duration-300 group-hover:bg-[#26400f] group-hover:text-white">
                        ↗
                      </span>
                    </div>

                    <h3 className="mt-14 font-display text-xl font-semibold text-[#26400f]">
                      {value.title}
                    </h3>

                    <p className="mt-3 text-sm leading-6 text-[#536347]">
                      {value.description}
                    </p>
                  </article>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Governance */}
        <section className="px-6 py-24 lg:px-10 lg:py-32">
          <div className="mx-auto max-w-6xl">
            <div className="max-w-2xl">
              <SectionLabel>Governance</SectionLabel>

              <h2 className="font-display text-4xl font-bold text-[#26400f]">
                Clear leadership and accountability
              </h2>

              <p className="mt-5 leading-7 text-[#536347]">
                Our organisational structure supports effective decision-making,
                commercial growth and efficient service delivery.
              </p>
            </div>

            <div className="mt-14 rounded-[2rem] border border-[#26400f]/10 bg-white p-6 shadow-[0_20px_60px_rgba(38,64,15,0.06)] sm:p-10 lg:p-14">
              <div className="mx-auto max-w-4xl">
                <div className="mx-auto max-w-sm rounded-2xl bg-[#26400f] p-6 text-center text-white shadow-lg">
                  <span className="font-mono text-[0.65rem] uppercase tracking-[0.18em] text-[#b7df76]">
                    Executive leadership
                  </span>

                  <h3 className="mt-3 font-display text-xl font-semibold">
                    Director
                  </h3>

                  <p className="mt-1 text-sm text-white/70">NP Xulu</p>
                </div>

                <div className="mx-auto h-10 w-px bg-[#26400f]/25" />

                <div className="relative grid gap-5 md:grid-cols-2 md:gap-10">
                  <div className="absolute left-1/4 right-1/4 top-0 hidden h-px bg-[#26400f]/25 md:block" />

                  <div className="relative pt-5 md:pt-10">
                    <div className="absolute left-1/2 top-0 hidden h-10 w-px -translate-x-1/2 bg-[#26400f]/25 md:block" />

                    <div className="rounded-2xl border border-[#26400f]/15 bg-[#f7f5ee] p-6 text-center">
                      <span className="font-mono text-[0.65rem] uppercase tracking-[0.18em] text-[#759c42]">
                        Operations
                      </span>

                      <h3 className="mt-3 font-display text-lg font-semibold text-[#26400f]">
                        Operations Manager
                      </h3>
                    </div>
                  </div>

                  <div className="relative pt-5 md:pt-10">
                    <div className="absolute left-1/2 top-0 hidden h-10 w-px -translate-x-1/2 bg-[#26400f]/25 md:block" />

                    <div className="rounded-2xl border border-[#26400f]/15 bg-[#f7f5ee] p-6 text-center">
                      <span className="font-mono text-[0.65rem] uppercase tracking-[0.18em] text-[#759c42]">
                        Commercial
                      </span>

                      <h3 className="mt-3 font-display text-lg font-semibold text-[#26400f]">
                        Sales Manager
                      </h3>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* HSEQ */}
        <section className="px-6 pb-24 lg:px-10 lg:pb-32">
          <div className="relative mx-auto max-w-6xl overflow-hidden rounded-[2.5rem] bg-[#26400f] px-7 py-16 sm:px-12 lg:px-16 lg:py-20">
            <div className="absolute -right-24 -top-24 h-80 w-80 rounded-full bg-[#8bc63f]/10" />
            <div className="absolute -bottom-32 left-1/3 h-72 w-72 rounded-full bg-[#c07a37]/10 blur-3xl" />

            <div className="relative grid gap-10 lg:grid-cols-[0.7fr_1.3fr] lg:items-end">
              <div>
                <SectionLabel light>
                  Health, safety, quality and environment
                </SectionLabel>

                <h2 className="font-display text-3xl font-bold text-white sm:text-4xl">
                  Zero harm is the standard.
                </h2>
              </div>

              <blockquote className="border-l-2 border-[#8bc63f] pl-6 font-display text-xl font-medium leading-relaxed text-white/90 sm:text-2xl">
                We are committed to continual improvement toward zero harm to
                people, the environment and property, while developing young
                people and supporting sustainable growth.
              </blockquote>
            </div>
          </div>
        </section>

        {/* Quality and compliance */}
        <section className="bg-[#ebe9df] px-6 py-24 lg:px-10 lg:py-28">
          <div className="mx-auto max-w-6xl">
            <SectionLabel>Quality and compliance</SectionLabel>

            <div className="grid gap-12 lg:grid-cols-[0.8fr_1.2fr] lg:gap-20">
              <div>
                <h2 className="font-display text-4xl font-bold leading-tight text-[#26400f]">
                  Built on credible standards and dependable delivery.
                </h2>

                <p className="mt-6 leading-8 text-[#536347]">
                  Our products and services subscribe to recognised standards
                  of excellence. Solutions are delivered according to
                  international standards or developed and validated against
                  specific client and market requirements.
                </p>

                <div className="mt-8 rounded-2xl border border-[#26400f]/10 bg-white/60 p-6">
                  <p className="font-display text-lg font-semibold text-[#26400f]">
                    Documentation availability
                  </p>

                  <p className="mt-2 text-sm leading-6 text-[#536347]">
                    Supporting compliance documentation is provided on request
                    and matched to the client, project and type of service.
                  </p>
                </div>
              </div>

              <div className="overflow-hidden rounded-[2rem] border border-[#26400f]/10 bg-white">
                <div className="border-b border-[#26400f]/10 px-6 py-5 sm:px-8">
                  <p className="font-display text-xl font-semibold text-[#26400f]">
                    Compliance documents
                  </p>
                </div>

                <ul className="divide-y divide-[#26400f]/10">
                  {DOCS.map((doc, index) => (
                    <li
                      key={doc}
                      className="flex items-center gap-4 px-6 py-5 transition hover:bg-[#f5f7f1] sm:px-8"
                    >
                      <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-[#e7efdc] font-mono text-[0.65rem] font-bold text-[#517934]">
                        {String(index + 1).padStart(2, "0")}
                      </span>

                      <span className="text-sm font-medium text-[#26400f]">
                        {doc}
                      </span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </>
  );
}