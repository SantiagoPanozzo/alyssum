import Image from "next/image"

interface SpeakerCardProps {
  name: string
  role: string
  image: string
  topic: string
}

export default function SpeakerCard({ name, role, image, topic }: SpeakerCardProps) {
  return (
    <div className="group relative overflow-hidden rounded-lg border bg-background transition-all hover:shadow-md">
      <div className="aspect-square overflow-hidden">
        <Image
          src={image || "speaker image"}
          alt={name}
          width={400}
          height={400}
          className="h-full w-full object-cover transition-transform duration-300 group-hover:scale-105"
        />
      </div>
      <div className="p-4">
        <h3 className="font-bold text-lg">{name}</h3>
        <p className="text-muted-foreground text-sm">{role}</p>
        <div className="mt-2 inline-flex items-center rounded-full border px-2.5 py-0.5 text-xs font-semibold transition-colors">
          {topic}
        </div>
      </div>
    </div>
  )
}

