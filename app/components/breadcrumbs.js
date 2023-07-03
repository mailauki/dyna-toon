"use client"
import { usePathname } from 'next/navigation'
import { Breadcrumbs, Link, Toolbar, Typography } from '@mui/material'
import supabase from '../api/supabase'

export default async function Breadcrumb() {
  const pathname = usePathname()
  const slug = pathname.split("/")[1]
  const id = pathname.split("/")[2]

  const { data: series } = await supabase.from('series').select('*').eq('slug', slug).single()

  if(!series) return <p>Not Found</p>

  return (
    <Toolbar 
      variant="dense"
      sx={{ mb: 2, position: "absolute", bottom: -64, width: "100%" }}
    >
    <Breadcrumbs aria-label="breadcrumb">
      <Link 
        underline="hover" 
        color="inherit" 
        href="/" 
        // sx={{ color: "rgb(var(--foreground-rgb))" }}
      >
        Home
      </Link>
      {id ? (
        <Link 
          underline="hover" 
          color="inherit" 
          href={`/${series.slug}`} 
        >
          {series.title}
        </Link>
      ) : (
        null
      )}
      <Typography color="text.primary">{id ? id : series.title}</Typography>
    </Breadcrumbs>
    </Toolbar>
  )
}