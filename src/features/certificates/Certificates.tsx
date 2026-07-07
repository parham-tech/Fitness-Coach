import Image from "next/image";
import Container from "@/shared/components/Container";

export default function Certificates() {
  return (
    <section
      id="certificates"
      className="py-16 md:py-28 bg-zinc-950/20"
    >
      <Container>

        <h2 className="mb-12 text-center text-3xl sm:text-4xl md:text-5xl font-bold uppercase font-bebas tracking-wide text-white">
          Certificates
        </h2>

        <div className="grid gap-6 grid-cols-1 sm:grid-cols-2 lg:grid-cols-5">
          {[1, 2, 3, 4 ,5].map((item) => (
            <div key={item} className="overflow-hidden rounded-lg border border-white/10 bg-zinc-900/50 p-2 hover:border-yellow-400/30 transition-colors">
              <Image
                src={`/certificates/${item}.jpg`}
                alt={`Certificate ${item}`}
                width={400}
                height={550}
                className="w-full h-auto rounded-md object-cover hover:scale-[1.02] transition-transform duration-300"
              />
            </div>
          ))}
        </div>
      </Container>
    </section>
  );
}
