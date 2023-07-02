"use client"
import Image from 'next/image'
// import { usePathname } from 'next/navigation'
// import data from '../api/data.json'
import { AppBar, Toolbar, Typography } from '@mui/material'

export default function NavBar({ series }) {
  // const pathname = usePathname()
  // const slug = pathname.replace("/", "")
  // const series = data.find(series => series.slug == slug)
  // console.log(series)
  return (
    <AppBar color="inherit" position="sticky" sx={{ alignItems: "center" }}>
      <Image
        src={`/${series.slug}/landingpage.png`}
        alt={`${series.title} Landing Page`}
        width={1200}
        height={240}
        priority
      />

      <Toolbar sx={{ position: "absolute", bottom: 0, width: "100%", flexDirection: "column", pb: 1 }}>
        <Typography variant="h5" sx={{ flexGrow: 1 }}>{series.title}</Typography>
        <Typography>{`By  ${series.author} ${series.artist ? "& " + series.artist : ""}`}</Typography>
      </Toolbar>
    </AppBar>
  )
}