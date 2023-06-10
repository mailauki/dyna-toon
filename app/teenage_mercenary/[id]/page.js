export default function Chapter({ params }) {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <div className="mb-32 grid text-center lg:mb-0 lg:grid-cols-4 lg:text-left">
        <h1>Chapter {params.id}</h1>
      </div>
    </main>
  )
}