export default function PageBanner({
  eyebrow,
  title,
  lead,
}: {
  eyebrow: string;
  title: string;
  lead?: string;
}) {
  return (
    <section className="relative isolate overflow-hidden bg-[#26400f] pb-16 pt-36 lg:pb-20 lg:pt-40">
      <div
        className="absolute inset-0"
        style={{
          background:
            "linear-gradient(155deg, #17280a 0%, #26400f 45%, #3a5c17 100%)",
        }}
      />
      <div className="relative mx-auto max-w-6xl px-6 lg:px-10">
        <span className="mb-4 inline-flex items-center gap-2 font-mono text-xs uppercase tracking-[0.14em] text-[#c07a37]">
          <span className="h-px w-5 bg-[#c07a37]" />
          {eyebrow}
        </span>
        <h1 className="font-display text-4xl font-bold text-white sm:text-5xl">
          {title}
        </h1>
        {lead && (
          <p className="mt-5 max-w-xl text-[#c9dba9] sm:text-lg">{lead}</p>
        )}
      </div>
    </section>
  );
}