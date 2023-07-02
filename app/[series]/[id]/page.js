"use client"
import { usePathname } from 'next/navigation'
import Image from 'next/image'
import data from '../../api/data.json'
import { Breadcrumbs, Link, Typography } from '@mui/material'

export default function Chapter({ params }) {
  const pathname = usePathname()
  const slug = pathname.split("/")[1]
  const series = data.find(series => series.slug == slug)
  console.log({params})
  return (
    <>
      <Breadcrumbs aria-label="breadcrumb">
        <Link underline="hover" color="inherit" href="/">
          Home
        </Link>
        <Link underline="hover" color="inherit" href={`/${series.slug}`}>
          {series.title}
        </Link>
        <Typography color="text.primary">Chapter {params.id}</Typography>
      </Breadcrumbs>

      <Image
        src={`/${series.slug}/${params.id}/thumb.png`}
        alt={`Episode ${params.id} Thumbnail`}
        width={100}
        height={100}
        priority
      />
    </>
  )
}