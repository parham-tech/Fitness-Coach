import Image from "next/image";
import Container from "@/shared/components/Container";

export default function About() {
  return (
    <section
      id="about"
      className="py-32"
      aria-labelledby="about-title"
    >
      <Container className="grid grid-cols-1 items-center gap-16 lg:grid-cols-2">

        {/* IMAGE SIDE */}
        <div className="relative">
          <div className="absolute -left-10 -top-10 h-40 w-40 bg-yellow-500/10 blur-2xl" />

          <Image
            src="/images/about.jpg"
            alt="Coach portrait"
            width={600}
            height={700}
            className="relative z-10 rounded-2xl object-cover"
          />
        </div>

        {/* TEXT SIDE */}
 <section id="about" aria-labelledby="about-title">
  <span className="section-tag">ABOUT MAHAN</span>

  <h2 id="about-title">
    Who Am I?
  </h2>

          <p className="mt-6 text-lg text-gray-300 leading-relaxed">
            Mahan Balaei is a graduate in Sports Biology, a certified bodybuilding federation coach, and a strength athlete with over 17 years of training experience. He holds coaching certifications in bodybuilding, physical fitness, and weightlifting, and is a multi-time champion in powerlifting and bench press competitions across the provinces of Gilan, Alborz, and Tehran.

My approach is based on scientific knowledge, practical experience, and continuous performance development in sports.
          </p>

          

          {/* STATS */}
          <div className="mt-10 grid grid-cols-3 gap-6">
            <div>
              <p className="text-2xl font-bold text-yellow-400">17+</p>
              <p className="text-sm text-gray-400">Years Experience</p>
            </div>

            <div>
              <p className="text-2xl font-bold text-yellow-400">100+</p>
              <p className="text-sm text-gray-400">Athletes Trained</p>
            </div>

            <div>
              <p className="text-2xl font-bold text-yellow-400">10+</p>
              <p className="text-sm text-gray-400">Championships</p>
            </div>
          </div>
        </section>

      </Container>
    </section>
  );
}
