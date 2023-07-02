"use client"
// import { usePathname } from 'next/navigation'
// import { useEffect, useState } from 'react'
// import data from '../api/data.json'
// import supabase from '../api/supabase'
import Chapters from '../components/chapters'

// const chapters = [
//   {
//     id: 1,
//   }, {
//     id: 2,
//   }, {
//     id: 3,
//   }
// ];

export default function Page() {
  // const pathname = usePathname()
  // const slug = pathname.split("/")[1]
  // const series = data.find(series => series.slug == slug)

  return (
    <>
      <Chapters />
    </>
  )
}