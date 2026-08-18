import Image from "next/image";
import Link from "next/link";

export default function Hero() {
  return (
    <section className="relative isolate flex min-h-[92vh] items-center overflow-hidden bg-green-deep">
     
      <div
        className="absolute inset-0"
        style={{
          background:
            "linear-gradient(155deg, #517934 0%, #26400f 38%, #4c7a20 72%, #516626 100%)",
        }}
      />
      <div
        className="absolute inset-0 opacity-70"
        style={{
          background:
            "radial-gradient(60% 60% at 38% 10%, rgba(139,198,63,0.35), transparent)",
        }}
      />

      {/* Hard hat */}
      <div className="pointer-events-none absolute -right-10 bottom-0 h-[80%] w-[70%] sm:h-[90%] sm:w-[55%] lg:h-[95%] lg:w-[48%]">
        <Image
          src="/assets/green-hard-hat-png.png"
          alt="Green safety hard hat"
          fill
          priority
          sizes="(min-width: 1024px) 48vw, 70vw"
          className="object-contain object-bottom drop-shadow-[0_40px_60px_rgba(0,0,0,0.45)]"
        />
      </div>

      {/* Bottom fade so footer/next section reads cleanly */}
      <div className="absolute inset-x-0 bottom-0 h-32 bg-gradient-to-t from-cream to-transparent" />

      <div className="relative z-10 mx-auto w-full max-w-6xl px-6 pt-28 lg:px-10">
        <div className="max-w-xl">
          <span className="mb-5 inline-flex items-center gap-2 font-mono text-xs uppercase tracking-[0.14em] text-white/80">
            <span className="h-px w-5 bg-green-bright text-white" />
            Est. 2020
          </span>
          {/* Placeholder headline — swap for the copy you want here */}
          <h1 className="font-Urbanist text-4xl font-bold leading-[1.05] text-white sm:text-5xl lg:text-6xl">
           RESTLESS GENERATION
          </h1>
          <p className="mt-6 max-w-md text-base text-white/80 sm:text-lg">
            Unleashing the power of the youth to change the world
          </p>
          <div className="mt-9 flex flex-wrap gap-4">
            <Link
              href="/contact"
              className="rounded bg-clay px-7 py-3.5 font-mono text-sm  text-white transition hover:bg-green"
            >
              Request a quote
            </Link>
            <Link
              href="/services"
              className="rounded-full border border-white/40 px-7 py-3.5 font-mono text-sm font-semibold text-white transition hover:bg-white/10"
            >
              View all services
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
