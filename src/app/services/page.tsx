import type { Metadata } from "next";
import Link from "next/link";
import PageBanner from "@/components/PageBanner";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

export const metadata: Metadata = {
  title: "Services | Restless Generation",
  description:
    "The full range of supplies and services Restless Generation provides — PPE and industrial supply, on-site services, and people & compliance support.",
};

type Group = {
  tag: string;
  title: string;
  lead: string;
  items: { name: string; detail?: string }[];
};

const GROUPS: Group[] = [
  {
    tag: "01 · Supplies & equipment",
    title: "Supplies & equipment",
    lead: "Ordered once or on a standing schedule, delivered to site.",
    items: [
      {
        name: "Personal protective equipment",
        detail:
          "Respiratory, ear, eye, hand, foot and head protection, work wear, reflective wear, safety harnesses, Covid-19 PPE.",
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
      {
        name: "Industrial gases",
        detail: "Oxygen, argon, acetylene.",
      },
      {
        name: "Bulk diesel",
        detail: "Distribution of 50ppm diesel to companies.",
      },
      {
        name: "Mine machinery hire",
        detail:
          "Articulated dump trucks, rigid dump trucks, drill rigs, TLB, dozer, front end loader, excavator, water bowser, diesel bowser.",
      },
    ],
  },
  {
    tag: "02 · On-site services",
    title: "On-site services",
    lead: "Rostered or on-demand teams working from your site.",
    items: [
      {
        name: "Laundry services",
        detail:
          "Commercial/off-site/contracted laundry, on-site/in-house laundry, folding & ironing, washing of contaminated mine PPE.",
      },
      {
        name: "Cleaning services",
        detail:
          "Commercial cleaning, deep cleaning, disinfection, disaster cleaning & restoration.",
      },
      {
        name: "Environmental oil-spill cleaning",
        detail:
          "Cleaning of hydrocarbon land pollution with SABS-approved spill kits, soil rehabilitation, sale of oil dip trays and spill kits.",
      },
      {
        name: "Mobile toilets",
        detail:
          "VIP & ordinary units, servicing & maintenance, waste disposal slips.",
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
    tag: "03 · People & compliance",
    title: "People & compliance",
    lead: "Keeping your site legally and operationally sound.",
    items: [
      {
        name: "Occupational hygiene monitoring",
        detail:
          "Airborne pollutants, thermal & cold stress, noise, ergonomics, water sampling, diesel bay inspections, workshop inspection, change house inspection & swab sampling.",
      },
      {
        name: "MHSA 12.1 appointee duties",
        detail: "Plus bi-annual illumination & noise surveys for TMM tagging.",
      },
      { name: "Health & safety services" },
      { name: "Human resource services" },
    ],
  },
];

export default function ServicesPage() {
  return (
    <>
    <Header/>
      <PageBanner
        eyebrow="What we offer"
        title="Services & supplies"
        lead="Grouped the way you'll actually order — physical goods, on-site services, and people & compliance support. Ask about anything not listed here; our supply network runs wider than this page."
      />

      <section className="bg-cream py-16 lg:py-20">
        <div className="mx-auto max-w-6xl px-6 lg:px-10">
          {GROUPS.map((group, i) => (
            <div key={group.title} className={i !== 0 ? "mt-16" : ""}>
              <div className="mb-8 flex flex-wrap items-baseline justify-between gap-3 border-b-2 border-[#26400f] pb-3">
                <h2 className="font-display text-2xl font-bold text-[#26400f]">
                  {group.title}
                </h2>
                <span className="font-mono text-xs uppercase tracking-[0.1em] text-[#8f5726]">
                  {group.tag}
                </span>
              </div>
              <p className="mb-8 max-w-xl text-[#3d5c28]">{group.lead}</p>

              <div className="grid grid-cols-1 gap-x-10 gap-y-0 sm:grid-cols-2">
                {group.items.map((item) => (
                  <div
                    key={item.name}
                    className="flex gap-3 border-b border-[#26400f]/10 py-4"
                  >
                    <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-[#c07a37]" />
                    <div>
                      <p className="font-display text-sm font-semibold text-[#26400f]">
                        {item.name}
                      </p>
                      {item.detail && (
                        <p className="mt-1 text-sm text-[#3d5c28]">
                          {item.detail}
                        </p>
                      )}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          ))}

          <div className="mt-16 flex flex-col items-start gap-5 rounded-2xl bg-[#26400f] px-8 py-10 sm:flex-row sm:items-center sm:justify-between">
            <div>
              <h3 className="font-display text-xl font-bold text-white">
                Don&apos;t see what you need?
              </h3>
              <p className="mt-2 max-w-md text-[#c9dba9]">
                Send us your requirements and we&apos;ll confirm pricing and
                lead times.
              </p>
            </div>
            <Link
              href="/contact"
              className="shrink-0 rounded-full bg-[#c07a37] px-7 py-3.5 font-display text-sm font-semibold text-white transition hover:bg-[#8f5726]"
            >
              Request a quote
            </Link>
          </div>
        </div>
      </section>
      <Footer/>
    </>
  );
}