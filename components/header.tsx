import * as React from 'react'
import AppBar from '@mui/material/AppBar'
import Toolbar from '@mui/material/Toolbar'
import IconButton from '@mui/material/IconButton'
import Typography from '@mui/material/Typography'
import MenuIcon from '@mui/icons-material/Menu'
import Container from '@mui/material/Container'
import Button from '@mui/material/Button'
import { useRouter } from 'next/router'

const Header = () => {
  const router = useRouter()

  const handleLogin = () => {
    router.push('/signin')
  }

  return (
    <AppBar component="header" position="static">
      <Container>
        <Toolbar>
          <IconButton size="large" edge="start" color="inherit" aria-label="menu" sx={{ mr: 2 }}>
            <MenuIcon />
          </IconButton>
          <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
            LOGO
          </Typography>
          <Button color="inherit" onClick={handleLogin}>
            Signin
          </Button>
        </Toolbar>
      </Container>
    </AppBar>
  )
}
export default Header
