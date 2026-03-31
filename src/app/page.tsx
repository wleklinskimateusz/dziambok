import { Header } from "@/components/Header";
import { Hero } from "@/components/Hero";
import { Audience } from "@/components/Audience";
import { Offers } from "@/components/Offers";
import { About } from "@/components/About";
import { Contact } from "@/components/Contact";
import { Footer } from "@/components/Footer";

export default function Home() {
  return (
    <>
      <Header />
      <main id="main">
        <Hero />
        <Audience />
        <Offers />
        <About />
        <Contact />
      </main>
      <Footer />
    </>
  );
}
