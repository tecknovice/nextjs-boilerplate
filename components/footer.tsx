import * as React from 'react'
import Box from '@mui/material/Box'
import Container from '@mui/material/Container'
import Typography from '@mui/material/Typography'

interface FooterProps {
  title: string
  description: string
}

export default function Footer(props: FooterProps) {
  const { title, description } = props

  return (
    <Box component="footer" sx={{ bgcolor: 'background.paper', py: 3, px: 2, mt: 'auto' }}>
      <Container>
        <Typography variant="h6" align="center" gutterBottom>
          {title}
        </Typography>
        <Typography variant="subtitle1" align="center" color="text.secondary" component="p">
          {description}
        </Typography>
      </Container>
    </Box>
  )
}
