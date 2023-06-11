import Image from "next/image";

export default function Chapter({ params }) {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <div className="mb-32 flex items-center text-center lg:mb-0 lg:text-left">
        <Image
          src={`/teenage-mercenary/${params.id}/episode-${params.id}-thumbnail.png`}
          alt={`Episode ${params.id} Thumbnail`}
          className="dark:invert mr-2"
          width={100}
          height={24}
          priority
        />

        <h1>Chapter {params.id}</h1>
      </div>
    </main>
  )
}