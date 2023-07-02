"use client"
import { usePathname } from 'next/navigation'
import data from '../api/data.json'
import { Avatar, Breadcrumbs, Link, List, ListItem, ListItemAvatar, ListItemButton, ListItemText, Typography } from '@mui/material'

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
  const slug = pathname.replace("/", "")
  const series = data.find(series => series.slug == slug)
  console.log(series)
  return (
    <>
      <Breadcrumbs aria-label="breadcrumb">
        <Link underline="hover" color="inherit" href="/" sx={{ color: "rgb(var(--foreground-rgb))" }}>
          Home
        </Link>
        <Typography color="text.primary">{series.title}</Typography>
      </Breadcrumbs>

      <List sx={{ width: "100%" }}>
        {chapters.map((chapter) => (
          <ListItem disablePadding key={chapter.id}>
            <ListItemButton 
              sx={{ borderRadius: "4px" }}
              className="group"
              component={Link}
              href={`/${slug}/${chapter.id}`}
            >
              <ListItemAvatar>
                <Avatar 
                  alt={`Episode ${chapter.id} Thumbnail`} 
                  src={`/${slug}/${chapter.id}/thumb.png`} 
                  variant="rounded" 
                  sx={{ width: 100, height: 100, mr: 2 }}
                />
              </ListItemAvatar>
              <ListItemText primary={<Typography variant="h6" sx={{ flexGrow: 1 }}>Chapter {chapter.id}</Typography>} />
              <h2 className={`text-2xl transition-transform group-hover:translate-x-1 motion-reduce:transform-none`}>
                -&gt;
              </h2>
            </ListItemButton>
          </ListItem>
        ))}
      </List>
    </>
  )
}