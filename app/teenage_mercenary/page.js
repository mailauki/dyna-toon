"use client"
import Image from 'next/image'
import data from '../api/data.json'
import { AppBar, Avatar, Breadcrumbs, Link, List, ListItem, ListItemAvatar, ListItemButton, ListItemText, Toolbar, Typography } from '@mui/material'

const chapters = [
  {
    id: 0,
  }, {
    id: 1,
  }, {
    id: 2,
  },
  {
    id: 3
  }
];

export default function Page() {
  return (
    <>
    <AppBar color="inherit" position="sticky">
      <Image
        src="/teenage-mercenary/landingpage.png"
        alt="Teenage Mercenary Landing Page"
        width={1200}
        height={240}
        priority
      />

      <Toolbar sx={{ position: "absolute", bottom: 0, width: "100%", flexDirection: "column", pb: 1 }}>
        <Typography variant="h6" sx={{ mr: 2, flexGrow: 1 }}>{data.title}</Typography>
        <Typography>By {data.author} & {data.artist}</Typography>
      </Toolbar>
    </AppBar>

    <main className="flex min-h-screen flex-col items-start justify-start p-10">
      <Breadcrumbs aria-label="breadcrumb">
        <Link underline="hover" color="inherit" href="/">
          Home
        </Link>
        <Typography color="text.primary">{data.title}</Typography>
      </Breadcrumbs>

      <List sx={{ width: "100%" }}>
        {chapters.map((chapter) => (
          <ListItem disablePadding key={chapter.id}>
            <ListItemButton 
              sx={{ borderRadius: "4px" }} 
              // className="group flex items-center px-5 py-4 mb-2 transition-colors bg-gray-200"
              component={Link}
              href={`/teenage_mercenary/${chapter.id}`}
            >
              <ListItemAvatar>
                <Avatar 
                  alt={`Episode ${chapter.id} Thumbnail`} 
                  src={`/teenage-mercenary/${chapter.id}/thumb.png`} 
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
    </main>
    </>
  )
}