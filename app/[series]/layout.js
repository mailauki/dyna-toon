import NavBar from '../components/header/navbar'

export default function SeriesLayout({ children }) {
  return (
    <>
      <NavBar />
      <main className="flex min-h-screen flex-col items-center justify-start p-10">
        {children}
      </main>
    </>
  )
}