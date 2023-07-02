"use client"
import Image from 'next/image'
// import Link from 'next/link'
import data from './api/data.json'
import Series from './components/series'

export default function Home() {

  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-10">
      <Series />
    </main>
  )
}
