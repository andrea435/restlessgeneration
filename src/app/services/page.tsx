import type { Metadata } from "next";
import Link from "next/link";
import PageBanner from "@/components/PageBanner";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import Reveal from "@/components/Reveal";

export const metadata: Metadata = {
  title: "Services | Restless Generation",
  description:
    "Supplies and services from Restless Generation: PPE and industrial supply, on-site services, and people and compliance support.",
};

type Group = {
  id: string;
  index: string;
  title: string;
  lead: string;
  items: { name: string; detail?: string }[];
};

const GROUPS: Group[] = [
  {
    id: "supplies",
    index: "01",
    title: "Supplies & equipment",
    lead: "Ordered once or on a standing schedule, delivered to site.",
    items: [
      {
        name: "Personal protective equipment",
        detail:
          "Respiratory, ear, eye, hand, foot and head protection, work wear, reflective wear, safety harnesses, Covid-19 PPE.",
      },
      {
        name: "Mine machinery hire",
        detail:
          "Articulated dump trucks, rigid dump trucks, drill rigs, TLB, dozer, front end loader, excavator, water bowser, diesel bowser.",
      },
      {
        name: "Bulk diesel",
        detail: "Distribution of 50ppm diesel to companies.",
      },
      {
        name: "Industrial gases",
        detail: "Oxygen, argon, acetylene.",
      },
      { name: "Medical supplies" },
      { name: "Tissues & hygiene consumables" },
      { name: "Road marking paint" },
      { name: "Padlocks & site security hardware" },
      { name: "Stationery" },
      { name: "Refreshments" },
      { name: "Mechanical parts" },
      { name: "Electronic products" },
      { name: "Grocery supply" },
    ],
  },
  {
    id: "on-site",
    index: "02",
    title: "On-site services",
    lead: "Rostered or on-demand teams working from your site.",
    items: [
      {
        name: "Laundry services",
        detail:
          "Commercial, off-site and contracted laundry, on-site and in-house laundry, folding and ironing, washing of contaminated mine PPE.",
      },
      {
        name: "Cleaning services",
        detail:
          "Commercial cleaning, deep cleaning, disinfection, disaster cleaning and restoration.",
      },
      {
        name: "Environmental oil-spill cleaning",
        detail:
          "Cleaning of hydrocarbon land pollution with SABS-approved spill kits, soil rehabilitation, sale of oil dip trays and spill kits.",
      },
      {
        name: "Mobile toilets",
        detail:
          "VIP and ordinary units, servicing and maintenance, waste disposal slips.",
      },
      {
        name: "Logistics",
        detail:
          "Provision of haul trucks, obtaining logistics contracts, transport administration.",
      },
      {
        name: "Mine administration",
        detail:
          "Compiling contractor packs and working files, COIDA registration, assistance with legal liability applications.",
      },
    ],
  },
  {
    id: "compliance",
    index: "03",
    title: "People & compliance",
    lead: "Keeping your site legally and operationally sound.",
    items: [
      {
        name: "Occupational hygiene monitoring",
        detail:
          "Airborne pollutants, thermal and cold stress, noise, ergonomics, water sampling, diesel bay inspections, workshop inspection, change house inspection and swab sampling.",
      },
      {
        name: "MHSA 12.1 appointee duties",
        detail:
          "Plus bi-annual illumination and noise surveys for TMM tagging.",
      },
      { name: "Health & safety services" },
      { name: "Human resource services" },
    ],
  },
];

const BAND = ["bg-white", "bg-[#f7f5ee]", "bg-white"];

export default function ServicesPage() {
  return (
    <>
      <Header />

      <main className="bg-white">
        <PageBanner
          eyebrow="What we offer"
          title="Services & supplies"
          lead="Grouped the way you order: physical goods, on-site services, and people and compliance support. Ask about anything not listed here, our supply network runs wider than this page."
        />

        {/* Jump nav */}
        <nav
          aria-label="Service groups"
          className="border-b border-[#26400f]/12 bg-[#26400f]"
        >
          <ul className="mx-auto flex max-w-6xl flex-wrap gap-x-8 gap-y-2 px-6 py-4 lg:px-10">
            {GROUPS.map((group) => (
              <li key={group.id}>
                <a
                  href={`#${group.id}`}
                  className="group flex items-baseline gap-2.5 font-mono text-[0.7rem] font-bold uppercase tracking-[0.18em] text-[#d7f0a4] transition-colors duration-300 hover:text-white focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#8bc63f]"
                >
                  <span className="text-[#e08b3a]">{group.index}</span>
                  {group.title}
                </a>
              </li>
            ))}
          </ul>
        </nav>

        {GROUPS.map((group, groupIndex) => {
          const featured = group.items.filter((item) => item.detail);
          const plain = group.items.filter((item) => !item.detail);

          return (
            <section
              key={group.id}
              id={group.id}
              className={`scroll-mt-8 border-b border-[#26400f]/12 px-6 py-16 lg:px-10 lg:py-20 ${BAND[groupIndex % BAND.length]}`}
            >
              <div className="mx-auto max-w-6xl">
                <Reveal>
                  <div className="flex flex-wrap items-end justify-between gap-4 border-b-2 border-[#26400f] pb-4">
                    <div>
                      <div className="flex items-center gap-3 font-mono text-[0.7rem] font-bold uppercase tracking-[0.2em] text-[#759c42]">
                        <span className="h-0.5 w-5 bg-[#d68a3f]" />
                        Group {group.index}
                      </div>

                      <h2 className="mt-3 font-display text-3xl font-bold text-[#26400f] sm:text-[2.25rem]">
                        {group.title}
                      </h2>
                    </div>

                    <span className="font-mono text-[0.7rem] font-bold uppercase tracking-[0.18em] text-[#8f5726]">
                      {group.items.length} lines
                    </span>
                  </div>

                  <p className="mt-5 max-w-xl text-[0.95rem] leading-7 text-[#3d5c28]">
                    {group.lead}
                  </p>
                </Reveal>

                {/* Detailed offerings */}
                <div className="mt-9 grid gap-px border border-[#26400f]/15 bg-[#26400f]/15 sm:grid-cols-2">
                  {featured.map((item, index) => (
                    <Reveal
                      key={item.name}
                      delay={index * 70}
                      className="bg-white"
                    >
                      <article className="group h-full border-l-4 border-transparent p-6 transition-colors duration-300 hover:border-[#8bc63f] hover:bg-[#f2f7ea] sm:p-7">
                        <div className="flex items-start gap-3">
                          <span
                            aria-hidden="true"
                            className="mt-2 h-2 w-2 shrink-0 rotate-45 bg-[#d68a3f] transition-transform duration-300 group-hover:scale-150 motion-reduce:transform-none"
                          />

                          <div>
                            <h3 className="font-display text-lg font-bold leading-snug text-[#26400f]">
                              {item.name}
                            </h3>

                            <p className="mt-2 text-sm leading-6 text-[#3d5c28]">
                              {item.detail}
                            </p>
                          </div>
                        </div>
                      </article>
                    </Reveal>
                  ))}
                </div>

                {/* Everything else */}
                {plain.length > 0 && (
                  <Reveal delay={120}>
                    <div className="mt-8 border border-[#26400f]/15 bg-[#f2f7ea] p-6 sm:p-7">
                      <div className="font-mono text-[0.7rem] font-bold uppercase tracking-[0.2em] text-[#517934]">
                        Also supplied
                      </div>

                      <ul className="mt-4 flex flex-wrap gap-2">
                        {plain.map((item) => (
                          <li
                            key={item.name}
                            className="border border-[#26400f]/20 bg-white px-3 py-1.5 text-sm font-semibold text-[#26400f] transition-colors duration-300 hover:border-[#8bc63f] hover:bg-[#e7efdc]"
                          >
                            {item.name}
                          </li>
                        ))}
                      </ul>
                    </div>
                  </Reveal>
                )}
              </div>
            </section>
          );
        })}

        
        
      </main>

      <Footer />
    </>
  );
}