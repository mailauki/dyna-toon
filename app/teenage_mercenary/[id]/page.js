import Image from 'next/image'
import data from '../../api/data.json'

export default function Chapter({ params }) {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-10">
      <div className="z-10 w-full max-w-5xl items-center justify-between font-mono text-sm lg:flex">
        <p className="fixed left-0 top-0 flex w-full justify-center border-b border-gray-300 bg-gradient-to-b from-zinc-200 pb-6 pt-8 backdrop-blur-2xl dark:border-neutral-800 dark:bg-zinc-800/30 dark:from-inherit lg:static lg:w-auto  lg:rounded-xl lg:border lg:bg-gray-200 lg:p-4 lg:dark:bg-zinc-800/30">
          <a
            className="pointer-events-none flex place-items-center gap-2 p-8 lg:pointer-events-auto lg:p-0"
            href={`/teenage_mercenary${params.id}`}
            rel="noopener noreferrer"
          >
            Chapter {params.id}
          </a>
        </p>

        <div className="fixed bottom-0 left-0 flex h-48 w-full items-end justify-center bg-gradient-to-t from-white via-white dark:from-black dark:via-black lg:static lg:h-auto lg:w-auto lg:bg-none">
          <p>By {data.author} & {data.artist}</p>
        </div>
      </div>

      <div className="relative flex place-items-center before:absolute before:h-[300px] before:w-[480px] before:-translate-x-1/2 before:rounded-full before:bg-gradient-radial before:from-white before:to-transparent before:blur-2xl before:content-[''] after:absolute after:-z-20 after:h-[180px] after:w-[240px] after:translate-x-1/3 after:bg-gradient-conic after:from-sky-200 after:via-blue-200 after:blur-2xl after:content-[''] before:dark:bg-gradient-to-br before:dark:from-transparent before:dark:to-blue-700 before:dark:opacity-10 after:dark:from-sky-900 after:dark:via-[#0141ff] after:dark:opacity-40 before:lg:h-[360px] mt-36">
        <Image
          src={`/teenage-mercenary/${params.id}/thumb.png`}
          alt={`Episode ${params.id} Thumbnail`}
          className="relative dark:drop-shadow-[0_0_0.3rem_#ffffff70] mr-2"
          width={100}
          height={100}
          priority
        />
      </div>

      <div className="mb-32 flex flex-col text-center w-full">
      </div>

      <div className="mb-32 flex items-center text-center lg:mb-0 lg:text-left">
        <a
          className="pointer-events-none flex place-items-center gap-2 p-8 lg:pointer-events-auto lg:p-0"
          href="/"
          rel="noopener noreferrer"
        >
          Home
        </a>
        <p className="pl-1 pr-1">/</p>
        <a
          className="pointer-events-none flex place-items-center gap-2 p-8 lg:pointer-events-auto lg:p-0"
          href="/teenage_mercenary"
          rel="noopener noreferrer"
        >
          {data.title}
        </a>
      </div>
    </main>
  )
}