"use client"
import { usePathname } from 'next/navigation'
import { Breadcrumbs, Link, Toolbar, Typography } from '@mui/material'

export default function Breadcrumb({ series }) {
  const pathname = usePathname()
  const id = pathname.split("/")[2]

  if(!series) return <p>Not Found</p>

  return (
    <Toolbar
      variant="dense"
      sx={{ 
        // mb: 2,
        // position: "absolute", 
        // bottom: -48, 
        width: "100%",
        // backgroundColor: "rgb(var(--background-start-rgb))"
      }}
    >
      <Breadcrumbs 
        aria-label="breadcrumb" 
        sx={{ color: "rgb(var(--text-secondary))" }}
      >
        <Link 
          underline="hover" 
          color="inherit" 
          href="/" 
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
        <Typography 
          // color="text.primary"
          sx={{ color: "rgb(var(--text-primary))" }}
        >
          {id ? id : series.title}
        </Typography>
      </Breadcrumbs>
    </Toolbar>
  )
}