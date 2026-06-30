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
      className="py-32"
      aria-labelledby="contact-title"
    >
      <Container>

        <h2
          id="contact-title"
          className="text-center text-4xl font-bold uppercase"
        >
          Contact
        </h2>

        <p className="mt-4 text-center text-gray-400">
          Get in touch for coaching programs & collaboration
        </p>

        <div className="mt-16 grid gap-6 md:grid-cols-2 lg:grid-cols-4">
          {contacts.map((item) => (
            <a
              key={item.label}
              href={item.href}
              className="
                group border border-white/10
                bg-zinc-900/40
                p-6 text-center
                transition hover:border-yellow-400/50
              "
              aria-label={item.label}
            >
              <p className="text-sm text-gray-400">
                {item.label}
              </p>

              <p className="mt-2 font-semibold text-white group-hover:text-yellow-400">
                {item.value}
              </p>
            </a>
          ))}
        </div>

      </Container>
    </section>
  );
}
