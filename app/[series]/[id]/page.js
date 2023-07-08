"use client"
// import { usePathname } from 'next/navigation'
import { useState } from 'react'
import Image from 'next/image'
// import data from '../../api/data.json'

export const ImageWithHideOnError = (props) => {
  const [hideImage, setHideImage] = useState(false)

  return (
      !hideImage && (
          // eslint-disable-next-line jsx-a11y/alt-text
          <Image
            {...props}
            onError={() => {
                setHideImage(true)
            }}
          />
      )
  )
}

export default function ChapterPage({ params }) {
  // const pathname = usePathname()
  // const slug = pathname.split("/")[1]
  // const series = data.find(series => series.slug == slug)
  
  // console.log({params})
  // console.log([...Array(10).keys()])

  return (
    <>
      {/* <Image
        src={`/${params.series}/${params.id}/thumb.png`}
        alt={`Episode ${params.id} Thumbnail`}
        width={100}
        height={100}
        priority
      /> */}
      {[...Array(10).keys()].map((index) => (
        <ImageWithHideOnError
          key={index}
          src={`/${params.series}/${params.id}/episode-${params.id}-${index+1}.png`}
          alt={`Episode ${params.id} Part ${index+1}`}
          width={759}
          height={200}
          priority
        />
      ))}
    </>
  )
}