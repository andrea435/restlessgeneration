const ANNOUNCEMENTS = [
  { tag: "PROVIDING", text: "PERSONAL PROTECTIVE EQUIPMENT" },
  { tag: "PROVIDING", text: "MINING EQUIPMENT" },
  { tag: "PROVIDING", text: "OCCUPATIONAL HYGIENE" },
];

export default function Announcements() {
  return (
    <section className="relative z-10  bg-paper">
      <div className="mx-auto max-w-6xl px-6 py-5 lg:px-10">
        <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:gap-8">
          <span className="flex shrink-0 items-center gap-2 font-mono text-[0.68rem] uppercase tracking-[0.14em] text-[#517934]">
            <span className="h-1.5 w-1.5 rounded-full bg-clay" />
            Announcements
          </span>
          <ul className="flex flex-1 flex-col gap-2 sm:flex-row sm:items-center sm:gap-6">
            {ANNOUNCEMENTS.map((item, i) => (
              <li
                key={i}
                className="flex items-center gap-2 py-2 text-sm text-[#26400f] sm:py-0 sm:pl-6 first:sm:pl-0"
              >
                <span className="font-mono text-[0.65rem] font-medium uppercase tracking-wide text-[#8eac7a]">
                  {item.tag}
                </span>
                {item.text}
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}