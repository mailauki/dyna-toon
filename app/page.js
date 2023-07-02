"use client"
import Image from 'next/image'
// import Link from 'next/link'
import data from './api/data.json'
import { ImageList, ImageListItem, ImageListItemBar, Link } from '@mui/material'

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-10">
      <ImageList>
        {data.map((series, index) => (
          <ImageListItem component={Link} href={`/${series.slug}`} key={index}>
            <Image
              src={`/${series.slug}/square_landingpage.jpg`}
              alt={`${series.title} Thumbnail`}
              className="dark:invert"
              width={340}
              height={340}
            />
            <ImageListItemBar 
              title={series.title}
              subtitle={`by: ${series.author} ${series.artist ? "& " + series.artist : ""}`}
              position="below" 
            />
          </ImageListItem>
        ))}
      </ImageList>
    </main>
  )
}
