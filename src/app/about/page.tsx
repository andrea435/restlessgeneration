import type { Metadata } from "next";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import PageBanner from "@/components/PageBanner";
import Reveal from "@/components/Reveal";

export const metadata: Metadata = {
  title: "About | Restless Generation",
  description:
    "Who Restless Generation is, what we supply, how we are governed, and the compliance credentials we hold.",
};

const CREDENTIALS = [
  { label: "Registration", value: "CIPC registered" },
  { label: "B-BBEE", value: "Level 1 contributor" },
  { label: "Base", value: "South Africa" },
  { label: "Reach", value: "Southern Africa" },
];

const TICKER = [
  "Diversified supply",
  "Manufacturing",
  "Mining services",
  "Technology",
  "Level 1 B-BBEE",
  "Zero harm",
  "Youth development",
];

const CAPABILITIES = [
  {
    name: "Diversified supply",
    description:
      "Sourcing and delivery of consumables, equipment and general goods against client specification and schedule.",
  },
  {
    name: "Manufacturing",
    description:
      "Production and fabrication work delivered to agreed standards, tolerances and turnaround times.",
  },
  {
    name: "Mining services",
    description:
      "Support to mining operations, from supply contracts through to on-site service delivery.",
  },
  {
    name: "Technology",
    description:
      "Systems and technology solutions built or configured around the way a client already works.",
  },
];

const VALUES = [
  {
    keyword: "Service",
    title: "Customer excellence",
    description:
      "We provide responsive, dependable service built around each client's operational requirements.",
  },
  {
    keyword: "Conduct",
    title: "Integrity",
    description:
      "We conduct our business honestly, professionally and with accountability at every level.",
  },
  {
    keyword: "People",
    title: "Social responsibility",
    description:
      "We create opportunities that support communities and unlock the potential of young people.",
  },
  {
    keyword: "Growth",
    title: "Sustainable development",
    description:
      "We pursue responsible growth that creates lasting economic, social and environmental value.",
  },
];

const REPORTS = [
  { area: "Operations", role: "Operations Manager" },
  { area: "Commercial", role: "Sales Manager" },
];

const DOCS = [
  { name: "CIPC company registration documents", status: "Held" },
  { name: "Level 1 B-BBEE affidavit", status: "Held" },
  { name: "SARS tax clearance", status: "Held" },
  { name: "SARS letter of good standing", status: "Held" },
  { name: "Company banking details", status: "On request" },
  { name: "COIDA, UIF and legal liability documents", status: "Held" },
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
      className={`flex items-center gap-3 font-mono text-xs font-semibold uppercase tracking-[0.18em] ${
        light ? "text-[#b7df76]" : "text-[#759c42]"
      }`}
    >
      <span
        className={`rg-pulse-rule h-px w-6 ${
          light ? "bg-[#b7df76]" : "bg-[#c07a37]"
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

      <main className="bg-white">
        <PageBanner
          eyebrow="About"
          title="Restless Generation"
          lead="A South African supply, manufacturing, mining and technology business, built to deliver dependably and to open doors for young people."
        />

        {/* Credentials strip */}
        <section className="border-b border-[#26400f]/12 bg-[#26400f]/[0.04] px-6 lg:px-10">
          <dl className="mx-auto grid max-w-6xl grid-cols-2 gap-y-7 py-8 sm:grid-cols-4 sm:gap-y-0 lg:py-9">
            {CREDENTIALS.map((item, index) => (
              <Reveal
                key={item.label}
                delay={index * 90}
                className="border-[#26400f]/15 sm:border-l sm:pl-6 sm:first:border-l-0 sm:first:pl-0"
              >
                <dt className="font-mono text-[0.65rem] uppercase tracking-[0.2em] text-[#759c42]">
                  {item.label}
                </dt>
                <dd className="mt-1.5 font-display text-lg font-semibold text-[#26400f] sm:text-xl">
                  {item.value}
                </dd>
              </Reveal>
            ))}
          </dl>
        </section>

        {/* Ticker */}
        <section
          aria-hidden="true"
          className="rg-marquee overflow-hidden border-b border-[#26400f]/12 bg-[#26400f] py-4"
        >
          <div className="rg-marquee-track flex w-max items-center gap-8 whitespace-nowrap">
            {[0, 1].map((copy) => (
              <div key={copy} className="flex items-center gap-8">
                {TICKER.map((item) => (
                  <span
                    key={item}
                    className="flex items-center gap-8 font-mono text-xs uppercase tracking-[0.22em] text-[#b7df76]"
                  >
                    {item}
                    <span className="h-1.5 w-1.5 rotate-45 bg-[#c07a37]" />
                  </span>
                ))}
              </div>
            ))}
          </div>
        </section>

        {/* Who we are */}
        <section className="px-6 py-16 lg:px-10 lg:py-20">
          <div className="mx-auto grid max-w-6xl gap-10 lg:grid-cols-[1.15fr_0.85fr] lg:gap-14">
            <div>
              <Reveal>
                <SectionLabel>Who we are</SectionLabel>

                <p className="mt-5 max-w-[34ch] border-l-2 border-[#8bc63f] pl-6 font-display text-2xl font-medium leading-[1.4] text-[#26400f] sm:text-[1.75rem]">
                  Practical capability, industry knowledge and an
                  entrepreneurial mindset.
                </p>
              </Reveal>

              <Reveal delay={120}>
                <p className="mt-7 max-w-[58ch] text-[0.95rem] leading-7 text-[#536347]">
                  We work across supply, manufacturing, mining and technology
                  markets, taking on the work that keeps operations running:
                  the goods that have to arrive, the parts that have to be
                  made, the systems that have to hold up. Clients deal with a
                  team that understands the standard the work is measured
                  against.
                </p>

                <p className="mt-4 max-w-[58ch] text-[0.95rem] leading-7 text-[#536347]">
                  The longer-term goal is to build a respected national and
                  international business while using our resources, skills and
                  passion to unleash the power of youth to change the world.
                  That purpose is not separate from how we trade. It shapes who
                  we hire, who we train and who we buy from.
                </p>
              </Reveal>
            </div>

            {/* Swap this panel for a site or team photograph when you have one. */}
            <Reveal delay={200}>
              <div className="relative flex h-full min-h-[300px] flex-col justify-end overflow-hidden bg-[#26400f] p-8 sm:p-10">
                <div className="absolute inset-0 bg-[radial-gradient(#8bc63f_1px,transparent_1px)] [background-size:18px_18px] opacity-[0.14]" />
                <div className="rg-drift absolute -right-20 -top-20 h-64 w-64 rounded-full bg-[#8bc63f]/20 blur-2xl" />

                <p className="relative font-mono text-[0.65rem] uppercase tracking-[0.2em] text-[#b7df76]">
                  Our purpose
                </p>

                <p className="relative mt-4 font-display text-2xl font-semibold leading-snug text-white sm:text-[1.75rem]">
                  Creating sustainable value while opening doors for the next
                  generation.
                </p>
              </div>
            </Reveal>
          </div>
        </section>

        {/* What we do */}
        <section className="border-y border-[#26400f]/12 bg-[#f7f5ee] px-6 py-16 lg:px-10 lg:py-20">
          <div className="mx-auto max-w-6xl">
            <Reveal>
              <div className="flex flex-wrap items-end justify-between gap-4">
                <div>
                  <SectionLabel>What we do</SectionLabel>
                  <h2 className="mt-4 max-w-xl font-display text-3xl font-bold leading-tight text-[#26400f] sm:text-[2.25rem]">
                    Four lines of business, one delivery standard.
                  </h2>
                </div>

                <span className="font-mono text-[0.65rem] uppercase tracking-[0.2em] text-[#759c42]">
                  Capabilities
                </span>
              </div>
            </Reveal>

            <div className="mt-9 border-t border-[#26400f]/15">
              {CAPABILITIES.map((item, index) => (
                <Reveal key={item.name} delay={index * 80}>
                  <article className="group relative grid gap-2 overflow-hidden border-b border-[#26400f]/15 py-6 md:grid-cols-[0.38fr_1fr] md:gap-10 md:px-5">
                    <span
                      aria-hidden="true"
                      className="absolute inset-y-0 left-0 w-0 bg-[#e7efdc] transition-[width] duration-500 ease-out group-hover:w-full motion-reduce:transition-none"
                    />

                    <h3 className="relative flex items-center gap-3 font-display text-xl font-semibold text-[#26400f] transition-transform duration-300 group-hover:translate-x-1 motion-reduce:transform-none">
                      <span
                        aria-hidden="true"
                        className="h-1.5 w-1.5 shrink-0 rotate-45 bg-[#c07a37] transition-transform duration-300 group-hover:scale-[1.8] motion-reduce:transform-none"
                      />
                      {item.name}
                    </h3>

                    <p className="relative max-w-[58ch] text-[0.95rem] leading-7 text-[#536347]">
                      {item.description}
                    </p>
                  </article>
                </Reveal>
              ))}
            </div>
          </div>
        </section>

        {/* Vision and mission */}
        <section className="relative overflow-hidden bg-[#26400f] px-6 py-20 lg:px-10 lg:py-28">
          <div className="rg-drift pointer-events-none absolute -left-32 top-0 h-96 w-96 rounded-full bg-[#8bc63f]/10 blur-3xl" />

          <span
            aria-hidden="true"
            className="rg-pan pointer-events-none absolute -bottom-[3vw] left-0 select-none font-display text-[22vw] font-bold leading-none tracking-tight text-white/[0.035]"
          >
            Restless
          </span>

          <div className="relative mx-auto grid max-w-6xl gap-12 md:grid-cols-2 md:gap-16">
            <Reveal className="md:border-r md:border-white/15 md:pr-16">
              <SectionLabel light>Vision</SectionLabel>

              <h2 className="mt-6 max-w-md font-display text-3xl font-semibold leading-snug text-white sm:text-[2rem]">
                To become an internationally acclaimed company.
              </h2>

              <p className="mt-5 max-w-md text-base leading-8 text-white/70">
                We aim to achieve this by promoting and unleashing the power of
                youth to change the world.
              </p>
            </Reveal>

            <Reveal delay={150}>
              <SectionLabel light>Mission</SectionLabel>

              <h2 className="mt-6 max-w-md font-display text-3xl font-semibold leading-snug text-white sm:text-[2rem]">
                To deliver quality products and dependable services.
              </h2>

              <p className="mt-5 max-w-md text-base leading-8 text-white/70">
                We serve clients across mining, manufacturing, technology and
                diversified supply markets.
              </p>
            </Reveal>
          </div>
        </section>

        {/* Values */}
        <section className="px-6 py-16 lg:px-10 lg:py-20">
          <div className="mx-auto max-w-6xl">
            <Reveal>
              <div className="flex flex-wrap items-end justify-between gap-4">
                <div>
                  <SectionLabel>What guides us</SectionLabel>
                  <h2 className="mt-4 font-display text-3xl font-bold leading-tight text-[#26400f] sm:text-[2.25rem]">
                    Our values
                  </h2>
                </div>

                <p className="max-w-sm text-[0.95rem] leading-7 text-[#536347]">
                  These principles shape our decisions, our relationships and
                  how we deliver.
                </p>
              </div>
            </Reveal>

            <div className="mt-9 grid gap-px border border-[#26400f]/15 bg-[#26400f]/15 sm:grid-cols-2">
              {VALUES.map((value, index) => (
                <Reveal
                  key={value.title}
                  delay={index * 90}
                  className={index % 2 === 0 ? "bg-white" : "bg-[#faf9f4]"}
                >
                  <article className="group h-full p-7 transition-colors duration-300 hover:bg-[#e7efdc] sm:p-8">
                    <span className="inline-flex bg-[#26400f] px-2.5 py-1 font-mono text-[0.6rem] uppercase tracking-[0.2em] text-[#b7df76] transition-colors duration-300 group-hover:bg-[#c07a37] group-hover:text-white">
                      {value.keyword}
                    </span>

                    <h3 className="mt-4 font-display text-xl font-semibold text-[#26400f]">
                      {value.title}
                    </h3>

                    <p className="mt-2.5 max-w-[46ch] text-[0.95rem] leading-7 text-[#536347]">
                      {value.description}
                    </p>
                  </article>
                </Reveal>
              ))}
            </div>
          </div>
        </section>

        {/* Governance */}
        <section className="border-y border-[#26400f]/12 bg-[#f7f5ee] px-6 py-16 lg:px-10 lg:py-20">
          <div className="mx-auto grid max-w-6xl gap-9 lg:grid-cols-[0.8fr_1.2fr] lg:gap-16">
            <Reveal>
              <SectionLabel>Governance</SectionLabel>

              <h2 className="mt-4 font-display text-3xl font-bold leading-tight text-[#26400f] sm:text-[2.25rem]">
                Clear leadership and accountability
              </h2>

              <p className="mt-4 max-w-[44ch] text-[0.95rem] leading-7 text-[#536347]">
                Our structure keeps decision-making short. Operational and
                commercial responsibility sit with named managers who report
                directly to the Director.
              </p>
            </Reveal>

            <Reveal delay={150}>
              <div className="border border-[#26400f]/15 bg-white p-6 sm:p-8">
                <div className="border-t-2 border-[#26400f] pt-4">
                  <span className="font-mono text-[0.65rem] uppercase tracking-[0.2em] text-[#759c42]">
                    Executive leadership
                  </span>

                  <div className="mt-2 flex flex-wrap items-baseline justify-between gap-x-6 gap-y-1">
                    <h3 className="font-display text-2xl font-semibold text-[#26400f]">
                      Director
                    </h3>
                    <p className="text-base text-[#536347]">NP Xulu</p>
                  </div>
                </div>

                <div className="mt-5 border-l border-[#26400f]/20 pl-6 sm:pl-8">
                  {REPORTS.map((item) => (
                    <div
                      key={item.role}
                      className="relative border-b border-[#26400f]/12 py-4 last:border-b-0 last:pb-0"
                    >
                      <span
                        aria-hidden="true"
                        className="absolute -left-6 top-1/2 h-px w-4 bg-[#26400f]/20 sm:-left-8 sm:w-6"
                      />

                      <span className="font-mono text-[0.65rem] uppercase tracking-[0.2em] text-[#c07a37]">
                        {item.area}
                      </span>

                      <h3 className="mt-1.5 font-display text-lg font-semibold text-[#26400f]">
                        {item.role}
                      </h3>
                    </div>
                  ))}
                </div>
              </div>
            </Reveal>
          </div>
        </section>

        {/* HSEQ */}
        <section className="relative overflow-hidden bg-[#8bc63f] px-6 py-16 lg:px-10 lg:py-20">
          <div className="absolute inset-0 bg-[radial-gradient(#26400f_1px,transparent_1px)] [background-size:20px_20px] opacity-[0.12]" />
          <div className="rg-drift absolute -bottom-24 right-0 h-72 w-72 rounded-full bg-[#e7efdc]/40 blur-3xl" />

          <div className="relative mx-auto max-w-6xl">
            <Reveal>
              <div className="flex items-center gap-3 font-mono text-xs font-semibold uppercase tracking-[0.18em] text-[#26400f]">
                <span className="rg-pulse-rule h-px w-6 bg-[#26400f]" />
                Health, safety, quality and environment
              </div>

              <blockquote className="mt-6 max-w-4xl font-display text-2xl font-semibold leading-[1.35] text-[#26400f] sm:text-[2.1rem]">
                Zero harm is the standard. We are committed to continual
                improvement toward zero harm to people, the environment and
                property, while developing young people and supporting
                sustainable growth.
              </blockquote>
            </Reveal>
          </div>
        </section>

        {/* Quality and compliance */}
        <section className="px-6 py-16 lg:px-10 lg:py-20">
          <div className="mx-auto grid max-w-6xl gap-9 lg:grid-cols-[0.8fr_1.2fr] lg:gap-16">
            <Reveal>
              <SectionLabel>Quality and compliance</SectionLabel>

              <h2 className="mt-4 font-display text-3xl font-bold leading-tight text-[#26400f] sm:text-[2.25rem]">
                Credentials you can check before you buy.
              </h2>

              <p className="mt-4 max-w-[44ch] text-[0.95rem] leading-7 text-[#536347]">
                Our products and services subscribe to recognised standards of
                excellence, delivered to international standards or validated
                against specific client and market requirements.
              </p>

              <p className="mt-3 max-w-[44ch] text-[0.95rem] leading-7 text-[#536347]">
                Supporting documentation is supplied on request and matched to
                the client, project and type of service.
              </p>
            </Reveal>

            <div className="border border-[#26400f]/15">
              <div className="flex items-center justify-between bg-[#26400f] px-5 py-3 font-mono text-[0.65rem] uppercase tracking-[0.2em] text-[#b7df76] sm:px-6">
                <span>Document</span>
                <span>Status</span>
              </div>

              {DOCS.map((doc, index) => (
                <Reveal
                  key={doc.name}
                  delay={index * 60}
                  className={index % 2 === 1 ? "bg-[#faf9f4]" : "bg-white"}
                >
                  <div className="group flex items-baseline justify-between gap-6 border-t border-[#26400f]/12 px-5 py-4 transition-colors duration-300 hover:bg-[#e7efdc] sm:px-6">
                    <span className="max-w-[38ch] text-[0.95rem] font-medium leading-6 text-[#26400f] transition-transform duration-300 group-hover:translate-x-1 motion-reduce:transform-none">
                      {doc.name}
                    </span>

                    <span
                      className={`shrink-0 font-mono text-[0.65rem] uppercase tracking-[0.16em] ${
                        doc.status === "Held"
                          ? "text-[#517934]"
                          : "text-[#c07a37]"
                      }`}
                    >
                      {doc.status}
                    </span>
                  </div>
                </Reveal>
              ))}
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </>
  );
}