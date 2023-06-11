import Image from 'next/image'
import Link from 'next/link'
import data from './api/data.json'

const chapters = [
  {
    id: 0,
  }, 
  {
    id: 1,
  }, 
  {
    id: 2,
  }, 
  {
    id: 3,
  }
];

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-10">
      <div className="z-10 w-full max-w-5xl items-center justify-between font-mono text-sm lg:flex">
        <a
          className="fixed left-0 top-0 flex w-full justify-center border-b border-gray-300 bg-gradient-to-b from-zinc-200 pb-6 pt-8 backdrop-blur-2xl dark:border-neutral-800 dark:bg-zinc-800/30 dark:from-inherit lg:static lg:w-auto  lg:rounded-xl lg:border lg:bg-gray-200 lg:p-4 lg:dark:bg-zinc-800/30 pointer-events-none flex place-items-center gap-2 p-8 lg:pointer-events-auto lg:p-0"
          href="/"
          rel="noopener noreferrer"
        >
          Home
        </a>

        <div className="fixed bottom-0 left-0 flex h-48 w-full items-end justify-center bg-gradient-to-t from-white via-white dark:from-black dark:via-black lg:static lg:h-auto lg:w-auto lg:bg-none">
          <a
            className="pointer-events-none flex place-items-center gap-2 p-8 lg:pointer-events-auto lg:p-0"
            href=""
            rel="noopener noreferrer"
          >
          </a>
        </div>
      </div>

      <div className="mt-14 mb-32 flex flex-col text-center w-full">
        <a
          className="group flex items-center rounded-lg border border-transparent px-5 py-4 transition-colors hover:border-gray-300 hover:bg-gray-100 hover:dark:border-neutral-700 hover:dark:bg-neutral-800/30"
          href={`/teenage_mercenary`}
          rel="noopener noreferrer"
        >
          <Image
            src="/teenage-mercenary/thumbnail.jpg"
            alt="Teenage Mercenary Thumbnail"
            className="dark:invert mr-2"
            width={140}
            height={140}
          />

          <h2 className="mb-3 text-2xl font-semibold">
            {data.title}
            <span className="inline-block transition-transform group-hover:translate-x-1 motion-reduce:transform-none">
              -&gt;
            </span>
          </h2>
        </a>
      </div>
    </main>
  )
}
