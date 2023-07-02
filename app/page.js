"use client"
import Image from 'next/image'
// import Link from 'next/link'
import data from './api/data.json'
import { ImageList, ImageListItem, ImageListItemBar, Link, Typography } from '@mui/material'

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-10">
      <ImageList>
        {data.map((series, index) => (
          <ImageListItem 
            component={Link} 
            href={`/${series.slug}`} 
            key={index}
            sx={{ m: 2, transition: "transform 0.2s", "&:hover": { transform: "scale(1.05)"} }}
          >
            <Image
              src={`/${series.slug}/square_landingpage.jpg`}
              alt={`${series.title} Thumbnail`}
              width={340}
              height={340}
            />
            <ImageListItemBar 
              title={<Typography variant="h5">{series.title}</Typography>}
              subtitle={`by: ${series.author} ${series.artist ? "& " + series.artist : ""}`}
              sx={{
                background: "linear-gradient(to top, rgba(0,0,0,0.7) 0%, rgba(0,0,0,0.3) 70%, rgba(0,0,0,0) 100%)",
                pt: 2
              }}
            />
          </ImageListItem>
        ))}
      </ImageList>
    </main>
  )
}
