const contacts = [
  {
    label: "Email",
    value: "coach@example.com",
    href: "mailto:coach@example.com",
  },
  {
    label: "Instagram",
    value: "@coach.mahan",
    href: "#",
  },
  {
    label: "Telegram",
    value: "@mahancoach",
    href: "#",
  },
  {
    label: "Location",
    value: "Online Coaching",
    href: "#",
  },
];

import Container from "@/shared/components/Container";

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
          className="text-center text-3xl sm:text-4xl md:text-5xl font-bold uppercase font-bebas text-white tracking-wide"
        >
          Contact
        </h2>

        <p className="mt-4 text-center text-sm sm:text-base text-gray-400 max-w-md mx-auto">
          Get in touch for coaching programs & collaboration
        </p>

        <div className="mt-12 grid gap-6 grid-cols-1 sm:grid-cols-2 lg:grid-cols-4">
          {contacts.map((item) => (
            <a
              key={item.label}
              href={item.href}
              className="
                group border border-white/10
                bg-zinc-900/40 rounded-xl
                p-6 text-center
                transition hover:border-yellow-400/50 hover:bg-zinc-900/60 duration-300
              "
              aria-label={item.label}
            >
              <p className="text-xs sm:text-sm text-gray-400 uppercase tracking-wider font-semibold">
                {item.label}
              </p>

              <p className="mt-2 text-sm sm:text-base font-semibold text-white group-hover:text-yellow-400 transition-colors">
                {item.value}
              </p>
            </a>
          ))}
        </div>

      </Container>
    </section>
  );
}
