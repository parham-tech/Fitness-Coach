import Image from "next/image";
import Container from "@/shared/components/Container";

export default function Certificates() {
  return (
    <section
      id="certificates"
      className="py-28"
    >
      <Container>

        <h2 className="mb-12 text-center text-4xl font-bold uppercase">
          Certificates
        </h2>

        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
          {[1, 2, 3, 4].map((item) => (
            <Image
              key={item}
              src={`/certificates/${item}.jpg`}
              alt={`Certificate ${item}`}
              width={400}
              height={550}
            />
          ))}
        </div>
      </Container>
    </section>
  );
}
