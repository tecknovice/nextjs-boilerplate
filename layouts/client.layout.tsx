import * as React from 'react'
import Container from '@mui/material/Container'
import Header from '../components/header'
import Footer from '../components/footer'
import Box from '@mui/material/Box'

const sections = [
  { title: 'Technology', url: '#' },
  { title: 'Design', url: '#' },
  { title: 'Culture', url: '#' },
  { title: 'Business', url: '#' },
  { title: 'Politics', url: '#' },
  { title: 'Opinion', url: '#' },
  { title: 'Science', url: '#' },
  { title: 'Health', url: '#' },
  { title: 'Style', url: '#' },
  { title: 'Travel', url: '#' },
]
interface ClientProps {
  children?: React.ReactNode
}

export default function ClientLayout(props: ClientProps) {
  return (
    <Container
      sx={{
        display: 'flex',
        flexGrow: 1,
        flexDirection: 'column',
        minHeight: '100vh',
      }}
    >
      <Header title="Website" sections={sections} />
      <Box component="main" maxWidth="lg">
        {props.children}
      </Box>
      <Footer title="Footer" description="Something here to give the footer a purpose!" />
    </Container>
  )
}
