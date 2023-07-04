// "use client"
// import { ImageList, Stack } from '@mui/material'
import Series from './components/series'

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-10">
      {/* <Stack direction="row" flexWrap="wrap" justifyContent="center"> */}
      <Series />
      {/* </Stack> */}
    </main>
  )
}
