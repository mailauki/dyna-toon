"use client"
import { usePathname } from 'next/navigation'
import { Breadcrumbs, Link, Typography } from '@mui/material'
import supabase from '../api/supabase'

export default async function Breadcrumb() {
  const pathname = usePathname()
  const slug = pathname.split("/")[1]
  const id = pathname.split("/")[2]

  const { data: series } = await supabase.from('series').select('*').eq('slug', slug).single()

  if(!series) return <p>Not Found</p>

  return (
    <Breadcrumbs aria-label="breadcrumb">
    <Link 
      underline="hover" 
      color="inherit" 
      href="/" 
      sx={{ color: "rgb(var(--foreground-rgb))" }}
    >
      Home
    </Link>
    {id ? (
      <Link 
        underline="hover" 
        color="inherit" 
        href={`/${series.slug}`} 
        sx={{ color: "rgb(var(--foreground-rgb))" }}
      >
        {series.title}
      </Link>
    ) : (
      null
    )}
    <Typography color="text.primary">{id ? id : series.title}</Typography>
  </Breadcrumbs>
  )
}