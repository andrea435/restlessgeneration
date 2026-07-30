const CATEGORIES = [
  {
    num: "01",
    title: "Supplies & equipment",
    body: "PPE, medical supplies, tissues, road marking paint, padlocks, stationery, refreshments, mechanical parts, electronic products, grocery, industrial gas, bulk diesel and mining machinery hire.",
    tint: false,
  },
  {
    num: "02",
    title: "On-site services",
    body: "Laundry, commercial & deep cleaning, environmental oil-spill cleaning, mobile toilets, logistics, and mine administration support.",
    tint: true,
  },
  {
    num: "03",
    title: "People & compliance",
    body: "Occupational hygiene monitoring, health & safety services, and human resource services that keep your site legally and operationally sound.",
    tint: false,
  },
];

const REASONS = [
  {
    num: "01",
    title: "Single point of contact",
    body: "One supplier relationship instead of ten — supplies and services procured through one team.",
  },
  {
    num: "02",
    title: "Compliance-ready",
    body: "CIPC registration, Level 1 B-BBEE affidavit, SARS tax clearance and letter of good standing on file and ready to share.",
  },
  {
    num: "03",
    title: "Youth-led delivery",
    body: "Our mission is unleashing the power of youth — every contract also builds local skills and capacity.",
  },
];

const TICKER_ITEMS = [
  "PPE & SAFETY WEAR",
  "MEDICAL SUPPLIES",
  "MINING EQUIPMENT",
  "LAUNDRY SERVICES",
  "OCCUPATIONAL HYGIENE",
  "CLEANING SERVICES",
  "ROAD MARKING PAINT",
  "ELECTRONIC PRODUCTS",
  "STATIONERY & GROCERY",
  "HUMAN RESOURCE SERVICES",
];

const STATS = [
  { value: "15+", label: "service & supply categories" },
  { value: "Level 1", label: "B-BBEE contributor" },
  { value: "SA", label: "based, expanding regionally" },
  { value: "Zero", label: "harm target across every site" },
];

export default function HomeSections() {
  return (
    <>
      {/* What we cover */}
      <section className="bg-cream py-20 lg:py-24">
        <div className="mx-auto max-w-6xl px-6 lg:px-10">
          <span className="mb-5 inline-flex items-center gap-2 font-mono text-xs uppercase tracking-[0.14em] text-[#517934]">
            <span className="h-px w-5 bg-[#517934]" />
            What we cover
          </span>
          <h2 className="max-w-xl font-display text-3xl font-bold leading-tight sm:text-4xl text-[#26400f]">
            Three ways we plug into your operation
          </h2>
          <p className="mt-5 max-w-xl text-[#3d5c28]">
            Whether you need a single delivery or an ongoing site contract,
            our offering sits in three groups — physical supplies, on-site
            services, and people &amp; compliance support.
          </p>

          <div className="mt-12 grid grid-cols-1 gap-px overflow-hidden border border-[#26400f]/15 bg-[#26400f]/15 sm:grid-cols-3">
            {CATEGORIES.map((cat) => (
              <div
                key={cat.num}
                className={`px-7 py-9 transition-colors ${
                  cat.tint ? "bg-[#8bc63f]/15" : "bg-[#faf9f4]"
                }`}
              >
                <span className="font-mono text-xs text-[#8f5726]">{cat.num}</span>
                <h3 className="mt-4 font-display text-lg font-semibold text-[#26400f]">
                  {cat.title}
                </h3>
                <p className="mt-3 text-sm text-[#3d5c28]">{cat.body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Restless Generation */}
      <section className="bg-[#26400f] py-20 lg:py-24">
        <div className="mx-auto grid max-w-6xl grid-cols-1 gap-12 px-6 lg:grid-cols-[1.1fr_1fr] lg:gap-16 lg:px-10">
          <div>
            <span className="mb-5 inline-flex items-center gap-2 font-mono text-xs uppercase tracking-[0.14em] text-[#c07a37]">
              <span className="h-px w-5 bg-[#c07a37]" />
              Why Restless Generation
            </span>
            <h2 className="font-display text-3xl font-bold leading-tight text-white sm:text-4xl">
              Built on the same energy the name promises
            </h2>
            <p className="mt-5 max-w-md text-[#c9dba9]">
              We&apos;re a youth-driven company — that means responsive
              service, close attention to compliance paperwork, and a
              genuine stake in doing right by the communities we work in.
            </p>
          </div>

          <ul className="flex flex-col gap-8">
            {REASONS.map((reason) => (
              <li key={reason.num} className="flex gap-4">
                <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full border border-[#8bc63f] font-mono text-xs text-[#8bc63f]">
                  {reason.num}
                </span>
                <div>
                  <h3 className="font-display font-semibold text-white">
                    {reason.title}
                  </h3>
                  <p className="mt-1 text-sm text-[#c9dba9]">{reason.body}</p>
                </div>
              </li>
            ))}
          </ul>
        </div>
      </section>

      {/* Ticker + stats */}
      <div className="relative isolate overflow-hidden bg-[#26400f] py-8">
        <div
          className="absolute inset-0"
          style={{
            background:
              "linear-gradient(115deg, #26400f 0%, #26400f 48%, #4c7a20 52%, #8bc63f 88%, #c07a37 100%)",
          }}
        />
        <div className="relative overflow-hidden [mask-image:linear-gradient(90deg,transparent,#000_8%,#000_92%,transparent)]">
          <div className="flex w-max animate-marquee whitespace-nowrap font-mono text-sm tracking-wide text-white/90">
            {[...TICKER_ITEMS, ...TICKER_ITEMS].map((item, i) => (
              <span key={i} className="mx-6">
                {item}
              </span>
            ))}
          </div>
        </div>
      </div>

      <div className="border-b border-[#26400f]/15 bg-[#faf9f4]">
        <div className="mx-auto max-w-6xl px-6 py-9 lg:px-10">
          <div className="grid grid-cols-2 gap-y-7 sm:grid-cols-4 sm:gap-y-0">
            {STATS.map((stat, i) => (
              <div
                key={stat.label}
                className={`px-0 sm:px-6 ${
                  i !== 0 ? "sm:border-l sm:border-[#26400f]/15" : ""
                }`}
              >
                <strong className="block font-display text-2xl text-[#26400f]">
                  {stat.value}
                </strong>
                <span className="text-sm text-[#4c7a20]">{stat.label}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </>
  );
}