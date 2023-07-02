"use client"
import { usePathname } from 'next/navigation'
import { useEffect, useState } from 'react'
import data from '../api/data.json'
import { Avatar, Breadcrumbs, Link, List, ListItem, ListItemAvatar, ListItemButton, ListItemText, Typography } from '@mui/material'
// import { createServerComponentClient } from '@supabase/auth-helpers-nextjs'
import supabase from '../api/supabase'

const chapters = [
  {
    id: 1,
  }, {
    id: 2,
  }, {
    id: 3,
  }
];

export default function Page() {
  const pathname = usePathname()
  // const slug = pathname.replace("/", "")
  const slug = pathname.split("/")[1]
  // const series = data.find(series => series.slug == slug)
  const [series, setSeries] = useState({})
  console.log(series)

  useEffect(() => {
    const fetchSeries = async () => {
      const { data } = await supabase.from('series').select(`
      id, 
      title, 
      slug,
      chapters ( id, number )
    `).eq('slug', slug)
      setSeries(data)
      // console.log(data)
    }

    fetchSeries()
  }, [slug])

  return (
    <>
      <Breadcrumbs aria-label="breadcrumb">
        <Link underline="hover" color="inherit" href="/" sx={{ color: "rgb(var(--foreground-rgb))" }}>
          Home
        </Link>
        {/* <Typography color="text.primary">{series.title}</Typography> */}
      </Breadcrumbs>

      <List sx={{ width: "100%" }}>
        {series.chapters ? (
          series.chapters.map((chapter) => (
            <ListItem disablePadding key={chapter.id}>
              <ListItemButton 
                sx={{ borderRadius: "4px" }}
                className="group"
                component={Link}
                href={`/${slug}/${chapter.number}`}
              >
                <ListItemAvatar>
                  <Avatar 
                    alt={`Episode ${chapter.number} Thumbnail`} 
                    src={`/${slug}/${chapter.number}/thumb.png`} 
                    variant="rounded" 
                    sx={{ width: 100, height: 100, mr: 2 }}
                  />
                </ListItemAvatar>
                <ListItemText primary={<Typography variant="h6" sx={{ flexGrow: 1 }}>Chapter {chapter.number}</Typography>} />
                <h2 className={`text-2xl transition-transform group-hover:translate-x-1 motion-reduce:transform-none`}>
                  -&gt;
                </h2>
              </ListItemButton>
            </ListItem>
          ))
        ) : (
          <></>
        )}
      </List>
    </>
  )
}

// export default async function Posts() {
//   const { data: posts } = await supabase.from('series').select()
//   // console.log(posts)
//   return <pre>{JSON.stringify(posts, null, 2)}</pre>
// }