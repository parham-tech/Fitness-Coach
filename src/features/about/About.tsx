import Container from "@/shared/components/Container";

export default function About() {
  return (
    <section
      id="about"
      className="py-0 lg:py-30 text-center lg:text-start "
      aria-labelledby="about-title"
    >
      <Container className="grid grid-cols-1 lg:grid-cols-2 mt-10 items-center gap-10 lg:gap-16 ">

        {/* IMAGE SIDE - VIDEO MASK */}
        <div className="relative order-2 lg:order-1 w-full max-w-md sm:max-w-2xl lg:max-w-none mx-auto aspect-[4/3] overflow-hidden rounded-2xl bg-black flex items-center justify-center border border-white/10">
          <video
            src="/videos/mask.mp4"
            autoPlay
            loop
            muted
            playsInline
            className=" object-cover scale-90 inset-0 w-full h-full"
          />
          <div className="absolute inset-0 bg-black flex flex-col items-center justify-center mix-blend-multiply select-none pointer-events-none">
            <span className="text-[9rem] sm:text-[17rem] md:text-[18rem] lg:text-[19.5vw] xl:text-[250px] font-black tracking-tighter uppercase text-white font-bebas leading-[0.8]">
              MAHAN
            </span>
            <span className="text-[10rem] sm:text-[18rem] md:text-[19rem] lg:text-[19.5vw] xl:text-[270px] font-black tracking-tighter uppercase text-white font-bebas leading-[0.8]">
              BALAEI
            </span>
          </div>
        </div>

        {/* TEXT SIDE */}
        <div className="flex flex-col order-1 lg:order-2">
          <span className="text-red-500 font-bold text-sm tracking-widest uppercase">
            ABOUT MAHAN
          </span>

          <h2
            id="about-title"
            className="font-bebas text-3xl sm:text-4xl md:text-5xl lg:text-6xl text-white leading-tight uppercase mt-2"
          >
            Who Am I?
          </h2>

          <p className="mt-6 text-sm sm:text-base md:text-lg text-gray-300 leading-relaxed font-sans">
            Mahan Balaei is a graduate in Sports Biology, a certified bodybuilding federation coach, and a strength athlete with over 17 years of training experience. He holds coaching certifications in bodybuilding, physical fitness, and weightlifting, and is a multi-time champion in powerlifting and bench press competitions across the provinces of Gilan, Alborz, and Tehran.
          </p>

          <p className="mt-4 text-sm sm:text-base md:text-lg text-gray-300 leading-relaxed font-sans">
            My approach is based on scientific knowledge, practical experience, and continuous performance development in sports.
          </p>

      
        </div>

      </Container>
    </section>
  );
}
