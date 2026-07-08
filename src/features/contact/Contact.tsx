import Image from "next/image";
import Container from "@/shared/components/Container";

const contacts = [
  {
    src: "/contact/email.svg",
    alt: "",
    imageClassName: "w-10 h-10",
    label: "Email",
    value: "coach@example.com",
href: "https://www.mahanbalaei04.com"
  },
  {
    src: "/contact/instagram.svg",
    alt: "",
    imageClassName: "w-10 h-10",
    label: "Instagram",
    value: "@coach.mahan",
    href: "https://instagram.com/coach.mahan",
  },
  {
    src: "/contact/telegram.svg",
    alt: "",
    imageClassName: "w-10 h-10",
    label: "Telegram",
    value: "@mahancoach",
    href: "https://t.me/mahancoach",
  },
  {
    src: "/contact/linkdin.svg",
    alt: "",
    imageClassName: "w-10 h-10",
    label: "linkdin",
    value: "Online Coaching",
    href: "https://www.linkedin.com/in/mahanbalaei",
  },
];

export default function Contact() {
  return (
    <section
      id="contact"
      className="py-16 md:py-32"
      aria-labelledby="contact-title"
    >
      <Container>
        <h2
          id="contact-title"
          className="text-center text-3xl sm:text-4xl md:text-5xl font-bebas text-white uppercase tracking-wide"
        >
          Contact
        </h2>

        <div className="mt-12 grid gap-6 grid-cols-2 sm:grid-cols-2 lg:grid-cols-4">
          {contacts.map((item) => (
            <a
              key={item.label}
              href={item.href}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={item.label}
              className="group rounded-xl border border-white/10 bg-zinc-900/40 p-6 text-center transition-all duration-300 hover:border-yellow-400/50 hover:bg-zinc-900/60"
            >
              <Image
                src={item.src}
                alt={item.alt}
                width={40}
                height={40}
                className={`${item.imageClassName} mx-auto mb-5 object-contain transition-transform duration-300 group-hover:scale-110`}
              />

              <p className="text-xs sm:text-sm font-semibold uppercase tracking-wider text-gray-400">
                {item.label}
              </p>

              <p className="mt-2 text-sm sm:text-base font-semibold text-white transition-colors group-hover:text-yellow-400">
                {item.value}
              </p>
            </a>
          ))}
        </div>
      </Container>
    </section>
  );
}