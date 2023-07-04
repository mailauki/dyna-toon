"use client"
import Image from 'next/image'
import { usePathname } from 'next/navigation'
// import data from '../api/data.json'
import supabase from '../api/supabase'
import { AppBar, ImageListItem, ImageListItemBar, Toolbar, Typography } from '@mui/material'
import Breadcrumb from './breadcrumbs'

export default async function NavBar() {
  const pathname = usePathname()
  const slug = pathname.split("/")[1]

  const { data: series } = await supabase.from('series').select('*').eq('slug', slug).single()

  if(!series) return (
    <AppBar position="sticky">
      <Toolbar sx={{ justifyContent: "center" }}>
        <p>Not Found</p>
      </Toolbar>
    </AppBar>
  )

  return (
    <AppBar
      // color="inherit" 
      position="sticky"
    >
      <Toolbar disableGutters>
        <ImageListItem 
          component="div" 
          sx={{ 
            width: "100%", 
            display: "flex", 
            justifyContent: "center"
          }}
        >
          <Image
            src={`/${series.slug}/landingpage.png`}
            alt={`${series.title} Thumbnail`}
            width={1200}
            height={240}
          />
          <ImageListItemBar
            title={<Typography variant="h5">{series.title}</Typography>}
            subtitle={`by: ${series.author} ${series.artist ? "& " + series.artist : ""}`}
            sx={{
              // background: "linear-gradient(to top, rgba(0,0,0,0.7) 0%, rgba(0,0,0,0.3) 70%, rgba(0,0,0,0) 100%)",
              background: "transparent",
              // pt: 2,
              textAlign: "center"
            }}
          />
        </ImageListItem>
      </Toolbar>
      <Breadcrumb series={series} />
    </AppBar>
  )
}