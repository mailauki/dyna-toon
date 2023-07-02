"use client"
import { usePathname } from 'next/navigation'
import data from '../api/data.json'
import NavBar from '../components/navbar'

export default function SeriesLayout({ children }) {
  const pathname = usePathname()
  // const slug = pathname.replace("/", "")
  const slug = pathname.split("/")[1]
  const series = data.find(series => series.slug == slug)
  // const id = pathname.split("/")[2]
  // console.log(series)
  // console.log(pathname.split("/")[1])
  // console.log(pathname.split("/")[2])
  return (
    <>
      <NavBar series={series} />
      <main className="flex min-h-screen flex-col items-start justify-start p-10">{children}</main>
    </>
  )
}