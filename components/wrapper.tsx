import { Box, CircularProgress, ThemeProvider, CssBaseline, createTheme } from '@mui/material'
import React from 'react'
import useUser from '../hooks/useUser'

export default function Wrapper({ children }: { children: React.ReactNode }) {
  const { loading } = useUser()
  if (loading)
    return (
      <Box sx={{ display: 'flex', height: '100vh', alignItems: 'center', justifyContent: 'center' }}>
        <CircularProgress />
      </Box>
    )
  const mdTheme = createTheme()
  return (
    <ThemeProvider theme={mdTheme}>
      <CssBaseline />
      {children}
    </ThemeProvider>
  )
}
