"use client"
import data from '../api/data.json'
import { Avatar, Breadcrumbs, Link, List, ListItem, ListItemAvatar, ListItemButton, ListItemText, Typography } from '@mui/material'
import Layout from '../components/series/layout'

const chapters = [
  {
    id: 1,
  }, {
    id: 2,
  }, {
    id: 3,
  }
];

export default function Page({ params }) {
  console.log(params)
  return (
    <Layout slug={"slug"}>
      <Breadcrumbs aria-label="breadcrumb">
        <Link underline="hover" color="inherit" href="/">
          Home
        </Link>
        <Typography color="text.primary">{data[1].title}</Typography>
      </Breadcrumbs>

      <List sx={{ width: "100%" }}>
        {chapters.map((chapter) => (
          <ListItem disablePadding key={chapter.id}>
            <ListItemButton 
              sx={{ borderRadius: "4px" }}
              className="group"
              component={Link}
              href={`/lore-olympus/${chapter.id}`}
            >
              <ListItemAvatar>
                <Avatar 
                  alt={`Episode ${chapter.id} Thumbnail`} 
                  src={`/lore-olympus/${chapter.id}/thumb.png`} 
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
    </Layout>
  )
}