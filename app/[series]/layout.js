"use client"
import { usePathname } from 'next/navigation'
import data from '../api/data.json'
import NavBar from '../components/navbar'
import { useMemo } from 'react'
import useMediaQuery from '@mui/material/useMediaQuery'
import { createTheme, ThemeProvider } from '@mui/material/styles'
import CssBaseline from '@mui/material/CssBaseline'


export default function SeriesLayout({ children }) {
  const prefersDarkMode = useMediaQuery('(prefers-color-scheme: dark)')
  
  const theme = useMemo(
    () =>
      createTheme({
        palette: {
          mode: prefersDarkMode ? 'dark' : 'light',
        },
      }),
    [prefersDarkMode],
  )

  const pathname = usePathname()
  const slug = pathname.split("/")[1]
  const series = data.find(series => series.slug == slug)
  // const id = pathname.split("/")[2]
  // console.log(series)
  // console.log(pathname.split("/")[1])
  // console.log(pathname.split("/")[2])
  return (
    <>
      <ThemeProvider theme={theme}>
        {/* <CssBaseline /> */}
        <NavBar series={series} />
        <main className="flex min-h-screen flex-col items-start justify-start p-10">{children}</main>
      </ThemeProvider>
    </>
  )
}