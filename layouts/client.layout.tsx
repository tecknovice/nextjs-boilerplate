import * as React from 'react'
import Container from '@mui/material/Container'
import Header from '../components/header'
import Footer from '../components/footer'
import Box from '@mui/material/Box'

export default function ClientLayout({ children }: { children?: React.ReactNode }) {
  return (
    <Box
      sx={{
        display: 'flex',
        flexGrow: 1,
        flexDirection: 'column',
        minHeight: '100vh',
      }}
    >
      <Header />
      <Container component="main" sx={{ flexGrow: 1 }}>
        {children}
      </Container>
      <Footer title="Footer" description="Something here to give the footer a purpose!" />
    </Box>
  )
}
