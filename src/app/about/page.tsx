import Header from "@/components/Header";
import Hero from "@/components/Hero";
import Footer from "@/components/Footer";
import Announcements from "@/components/Announcements";
import HomeSections from "@/components/HomeSection";

export default function About() {
  return (
    <>
    <div className="bg-white">
    <Header />
      <Hero />
      <Announcements/>
      <HomeSections/>
      <Footer/>
      </div>
    </>
  );
}
