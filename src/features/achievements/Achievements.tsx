import Image from "next/image";

type Props = {
  title: string;
  icon: string;
};

export default function AchievementCard({
  title,
  icon,
}: Props) {
  return (
    <article
      className="
      border
      border-yellow-500/30
      bg-zinc-900
      p-8
      text-center
    "
    >
      <Image
        src={icon}
        alt=""
        width={60}
        height={60}
      />

      <h3 className="mt-6 uppercase">
        {title}
      </h3>
    </article>
  );
}