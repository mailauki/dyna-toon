import Link from "next/link";

  const chapters = [{id: 0}, {id: 1}, {id: 2}]

export default function Page() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <div className="mb-32 grid text-center lg:mb-0 lg:grid-cols-4 lg:text-left">
        <h1>Hello, Teenage Mercenary Page!</h1>

        {chapters.map((chapter) => (
          <a
            key={chapter.id}
            href={`/teenage_mercenary/${chapter.id}`}
            className="group rounded-lg border border-transparent px-5 py-4 transition-colors hover:border-gray-300 hover:bg-gray-100 hover:dark:border-neutral-700 hover:dark:bg-neutral-800/30"
            rel="noopener noreferrer"
          >
            <h2 className={`mb-3 text-2xl font-semibold`}>
              #{chapter.id}{' '}
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