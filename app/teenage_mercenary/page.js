import Link from "next/link";
import Image from "next/image";

const chapters = [
  {
    id: 0,
    thumb: "/teenage-mercenary/0/episode-0-thumbnail.png"
  }, {
    id: 1,
    thumb: "/teenage-mercenary/1/episode-1-thumbnail.png"
  }, {
    id: 2,
    thumb: "/teenage-mercenary/2/episode-2-thumbnail.png"
  }
];

export default function Page() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <div className="z-10 w-full max-w-5xl items-center justify-between font-mono text-sm lg:flex">
        <p className="fixed left-0 top-0 flex w-full justify-center border-b border-gray-300 bg-gradient-to-b from-zinc-200 pb-6 pt-8 backdrop-blur-2xl dark:border-neutral-800 dark:bg-zinc-800/30 dark:from-inherit lg:static lg:w-auto  lg:rounded-xl lg:border lg:bg-gray-200 lg:p-4 lg:dark:bg-zinc-800/30">
          Hello, Teenage Mercenary Page!
        </p>

        <div className="fixed bottom-0 left-0 flex h-48 w-full items-end justify-center bg-gradient-to-t from-white via-white dark:from-black dark:via-black lg:static lg:h-auto lg:w-auto lg:bg-none">
          <a
            className="pointer-events-none flex place-items-center gap-2 p-8 lg:pointer-events-auto lg:p-0"
            href="https://vercel.com?utm_source=create-next-app&utm_medium=appdir-template&utm_campaign=create-next-app"
            target="_blank"
            rel="noopener noreferrer"
          >
            By{' '}YC & Rakyeon
          </a>
        </div>
      </div>

      <div className="mb-32 flex flex-col text-center lg:mb-0 lg:text-left w-full">
        {chapters.map((chapter) => (
          <a
            key={chapter.id}
            className="group flex items-center rounded-lg border border-transparent px-5 py-4 transition-colors hover:border-gray-300 hover:bg-gray-100 hover:dark:border-neutral-700 hover:dark:bg-neutral-800/30"
            href={`/teenage_mercenary/${chapter.id}`}
            rel="noopener noreferrer"
          >
            <Image
              src={chapter.thumb}
              alt={`Episode ${chapter.id} Thumbnail`}
              className="dark:invert mr-2"
              width={100}
              height={24}
              priority
            />

            <h2 className="mb-3 text-2xl font-semibold">
              Chapter {chapter.id}{' '}
              <span className="inline-block transition-transform group-hover:translate-x-1 motion-reduce:transform-none">
                -&gt;
              </span>
            </h2>
          </a>
        ))}
      </div>
    </main>
  )
}