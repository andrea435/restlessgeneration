import Image from "next/image";
import Link from "next/link";

export default function Footer() {
  return (
    <footer className="bg-green-deep py-11 text-white/70">
      <div className="mx-auto flex max-w-6xl flex-col items-center gap-6 px-6 sm:flex-row sm:justify-between lg:px-10">
        <div className="flex items-center gap-2 font-display font-semibold ">
          <Image
            src="/assets/logo-Photoroom.png"
            alt=""
            width={42}
            height={42}
            className="h-10 w-30 object-contain"
          />
          Restless Generation
        </div>
        <nav className="flex gap-5 text-sm text-[#26400f] uppercase tracking-[0.01em] sm:gap-8">
          <Link href="/" className="hover:text-[#517934]">Home</Link>
          <Link href="/services" className="hover:text-[#517934]">Services</Link>
          <Link href="/about" className="hover:text-[#517934]">About</Link>
          <Link href="/contact" className="hover:text-[#517934]">Contact</Link>
        </nav>
        <p className="text-xs">&copy; 2026 Restless Generation. Unleashing the power of youth to change the world.</p>
      </div>
    </footer>
  );
}
