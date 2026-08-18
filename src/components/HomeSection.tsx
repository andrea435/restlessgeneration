import Reveal from "@/components/Reveal";

const CATEGORIES = [
  {
    num: "01",
    title: "Supplies & equipment",
    body: "PPE, medical supplies, tissues, road marking paint, padlocks, stationery, refreshments, mechanical parts, electronic products, grocery, industrial gas, bulk diesel and mining machinery hire.",
  },
  {
    num: "02",
    title: "On-site services",
    body: "Laundry, commercial and deep cleaning, environmental oil-spill cleaning, mobile toilets, logistics, and mine administration support.",
  },
  {
    num: "03",
    title: "People & compliance",
    body: "Occupational hygiene monitoring, health and safety services, and human resource services that keep your site legally and operationally sound.",
  },
];

const REASONS = [
  {
    num: "01",
    title: "Single point of contact",
    body: "One supplier relationship instead of ten. Supplies and services procured through one team.",
  },
  {
    num: "02",
    title: "Compliance-ready",
    body: "CIPC registration, Level 1 B-BBEE affidavit, SARS tax clearance and letter of good standing on file and ready to share.",
  },
  {
    num: "03",
    title: "Youth-led delivery",
    body: "Our mission is unleashing the power of youth. Every contract also builds local skills and capacity.",
  },
];

const TICKER_ITEMS = [
  "PPE & safety wear",
  "Medical supplies",
  "Mining equipment",
  "Laundry services",
  "Occupational hygiene",
  "Cleaning services",
  "Road marking paint",
  "Electronic products",
  "Stationery & grocery",
  "Human resource services",
];

const STATS = [
  { value: "23", label: "service and supply lines" },
  { value: "Level 1", label: "B-BBEE contributor" },
  { value: "SA", label: "based, expanding regionally" },
  { value: "Zero", label: "harm target across every site" },
];

export default function HomeSections() {
  return (
    <>
      {/* What we cover */}
      <section className="bg-[#f7f5ee] px-6 py-16 lg:px-10 lg:py-20">
        <div className="mx-auto max-w-6xl">
          <Reveal>
            <div className="flex items-center gap-3 font-mono text-[0.7rem] font-bold uppercase tracking-[0.2em] text-[#759c42]">
              <span className="h-0.5 w-5 bg-[#d68a3f]" />
              What we cover
            </div>

            <h2 className="mt-4 max-w-xl font-display text-3xl font-bold leading-tight text-[#26400f] sm:text-[2.25rem]">
              Three ways we plug into your operation
            </h2>

            <p className="mt-5 max-w-xl text-[0.95rem] leading-7 text-[#3d5c28]">
              Whether you need a single delivery or an ongoing site contract,
              our offering sits in three groups: physical supplies, on-site
              services, and people and compliance support.
            </p>
          </Reveal>

          <div className="mt-10 grid gap-px border border-[#26400f]/15 bg-[#26400f]/15 md:grid-cols-3">
            {CATEGORIES.map((cat, index) => (
              <Reveal key={cat.num} delay={index * 90} className="bg-white">
                <article className="group h-full border-t-4 border-transparent p-7 transition-colors duration-300 hover:border-[#8bc63f] hover:bg-[#f2f7ea]">
                  <span className="inline-flex bg-[#26400f] px-2.5 py-1 font-mono text-[0.65rem] font-bold tracking-[0.2em] text-[#d7f0a4]">
                    {cat.num}
                  </span>

                  <h3 className="mt-5 font-display text-lg font-bold text-[#26400f]">
                    {cat.title}
                  </h3>

                  <p className="mt-3 text-sm leading-6 text-[#3d5c28]">
                    {cat.body}
                  </p>
                </article>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* Ticker */}
      <div
        aria-hidden="true"
        className="rg-marquee relative overflow-hidden bg-[#1b2f08]"
      >
        <div className="h-1 w-full bg-[linear-gradient(90deg,#8bc63f_0%,#b7df76_35%,#e08b3a_70%,#8bc63f_100%)]" />

        <div className="overflow-hidden py-4 [mask-image:linear-gradient(90deg,transparent,#000_8%,#000_92%,transparent)]">
          <div className="rg-marquee-track flex w-max items-center whitespace-nowrap">
            {[0, 1].map((copy) => (
              <div key={copy} className="flex items-center">
                {TICKER_ITEMS.map((item) => (
                  <span
                    key={item}
                    className="flex items-center gap-6 pr-6 font-mono text-sm font-semibold uppercase tracking-[0.14em] text-[#d7f0a4]"
                  >
                    {item}
                    <span className="h-1.5 w-1.5 rotate-45 bg-[#e08b3a]" />
                  </span>
                ))}
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Why Restless Generation */}
      <section className="relative overflow-hidden bg-[#26400f] px-6 py-16 lg:px-10 lg:py-20">
        <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(#8bc63f_1px,transparent_1px)] [background-size:22px_22px] opacity-[0.09]" />
        <div className="rg-drift pointer-events-none absolute -left-24 top-0 h-80 w-80 rounded-full bg-[#8bc63f]/12 blur-3xl" />

        <div className="relative mx-auto grid max-w-6xl gap-10 lg:grid-cols-[1.1fr_1fr] lg:gap-16">
          <Reveal>
            <div className="flex items-center gap-3 font-mono text-[0.7rem] font-bold uppercase tracking-[0.2em] text-[#8bc63f]">
              <span className="h-0.5 w-5 bg-[#e08b3a]" />
              Why Restless Generation
            </div>

            <h2 className="mt-4 font-display text-3xl font-bold leading-tight text-white sm:text-[2.25rem]">
              Built on the same energy the name promises
            </h2>

            <p className="mt-5 max-w-md text-[0.95rem] leading-7 text-[#e4efd6]">
              We are a youth-driven company. That means responsive service,
              close attention to compliance paperwork, and a genuine stake in
              doing right by the communities we work in.
            </p>
          </Reveal>

          <ul className="flex flex-col gap-6">
            {REASONS.map((reason, index) => (
              <Reveal key={reason.num} delay={index * 90}>
                <li className="flex gap-4 border-l-2 border-[#8bc63f]/40 pl-5 transition-colors duration-300 hover:border-[#8bc63f]">
                  <span className="flex h-8 w-8 shrink-0 items-center justify-center bg-[#8bc63f] font-mono text-xs font-bold text-[#1b2f08]">
                    {reason.num}
                  </span>

                  <div>
                    <h3 className="font-display text-base font-bold text-white">
                      {reason.title}
                    </h3>

                    <p className="mt-1.5 text-sm leading-6 text-[#e4efd6]">
                      {reason.body}
                    </p>
                  </div>
                </li>
              </Reveal>
            ))}
          </ul>
        </div>
      </section>

      {/* Stats */}
      <section className="border-y border-[#26400f]/15 bg-white px-6 lg:px-10">
        <dl className="mx-auto grid max-w-6xl grid-cols-2 gap-y-8 py-10 sm:grid-cols-4 sm:gap-y-0 lg:py-12">
          {STATS.map((stat, index) => (
            <Reveal
              key={stat.label}
              delay={index * 80}
              className={
                index !== 0 ? "sm:border-l sm:border-[#26400f]/20 sm:pl-6" : ""
              }
            >
              <dt className="sr-only">{stat.label}</dt>

              <dd>
                <strong className="block font-display text-3xl font-bold leading-none text-[#26400f]">
                  {stat.value}
                </strong>

                <span className="mt-2 block max-w-[18ch] text-sm font-medium leading-6 text-[#4c7a20]">
                  {stat.label}
                </span>
              </dd>
            </Reveal>
          ))}
        </dl>
      </section>
    </>
  );
}