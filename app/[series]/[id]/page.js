"use client"
// import { usePathname } from 'next/navigation'
import Image from 'next/image'
// import data from '../../api/data.json'

export default function ChapterPage({ params }) {
  // const pathname = usePathname()
  // const slug = pathname.split("/")[1]
  // const series = data.find(series => series.slug == slug)
  
  // console.log({params})

  return (
    <>
      <Image
        src={`/${params.series}/${params.id}/thumb.png`}
        alt={`Episode ${params.id} Thumbnail`}
        width={100}
        height={100}
        priority
      />
    </>
  )
}