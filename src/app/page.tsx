import Navbar from "@/features/navbar/Navbar";
import Hero from "@/features/hero/Hero";
import About from "@/features/about/About";
import Achievements from "@/features/achievements/Achievements";
import Certificates from "@/features/certificates/Certificates";
import Contact from "@/features/contact/Contact";

export default function Page() {
  return (
    <>
      <Navbar />

      <main>
        <section id="home">
          <Hero />
        </section>

        <section id="about">
          <About />
        </section>

        {/* <section id="achievements">
          <Achievements />
        </section> */}

        <section id="certificates">
          <Certificates />
        </section>

        <section id="contact">
          <Contact />
        </section>
      </main>
    </>
  );
}