import NavBar from '../components/header/navbar'

export default function SeriesLayout({ children }) {
  return (
    <>
      <NavBar />
      <main className="flex flex-col items-center justify-start p-4 max-w-screen-md mx-auto">
        {children}
      </main>
    </>
  )
}