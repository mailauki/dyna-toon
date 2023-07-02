import NavBar from '../navbar'

export default function Layout({ children }) {
  return (
    <>
      <NavBar />
      <main className="flex min-h-screen flex-col items-start justify-start p-10">{children}</main>
    </>
  )
}