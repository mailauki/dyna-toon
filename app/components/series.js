"use client"
import Image from 'next/image'
import { ImageList, ImageListItem, ImageListItemBar, Link, Typography } from '@mui/material'
import supabase from '../api/supabase'

export default async function Series() {
  const { data } = await supabase.from('series').select('id, title, author, artist, slug')
  
  // console.log(series)

  if(!data) return <p>Not found</p>

  return (
    <ImageList>
      {data.map((series) => (
        <ImageListItem 
          component={Link} 
          href={`/${series.slug}`} 
          key={series.id}
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
  )
}