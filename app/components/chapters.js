"use client"
import { usePathname } from 'next/navigation'
import { Avatar, Link, List, ListItem, ListItemAvatar, ListItemButton, ListItemText, Typography } from '@mui/material'
import supabase from '../api/supabase'

export default async function Chapters() {
  const pathname = usePathname()
  const slug = pathname.split("/")[1]

  const { data: chapters } = await supabase.from('chapters').select(`
    id,
    number,
    series!inner (*)
  `).eq('series.slug', slug)

  if(!chapters) return <p>Not found</p>

  return (
    <List sx={{ width: "100%" }}>
      {chapters?.map((chapter) => (
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
      ))}
    </List>
  )
}