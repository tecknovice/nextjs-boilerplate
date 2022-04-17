import { ThemeProvider, CssBaseline, createTheme } from '@mui/material'
import React from 'react'
import useUser from '../hooks/useUser'

export default function Wrapper({ children }: { children: React.ReactNode }) {
  const { loading } = useUser()
  if (loading) return null
  const mdTheme = createTheme()
  return (
    <ThemeProvider theme={mdTheme}>
      <CssBaseline />
      {children}
    </ThemeProvider>
  )
}
