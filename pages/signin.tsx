import * as React from 'react'
import Avatar from '@mui/material/Avatar'
import Button from '@mui/material/Button'
import TextField from '@mui/material/TextField'
import Link from '@mui/material/Link'
import Grid from '@mui/material/Grid'
import Box from '@mui/material/Box'
import LockOutlinedIcon from '@mui/icons-material/LockOutlined'
import Typography from '@mui/material/Typography'
import Container from '@mui/material/Container'
import Copyright from '../components/copyright'
import { useState, useEffect, useContext } from 'react'
import httpClient from '../lib/httpclient'
import Alert from '@mui/material/Alert'
import { useRouter } from 'next/router'
import { StateContext } from '../store/context'

interface Token {
  access_token: string
}

function SignIn() {
  const router = useRouter()

  const { user } = useContext(StateContext)
  const [credential, setCredential] = useState({
    email: '',
    password: '',
  })

  const [errors, setErrors] = useState({
    auth: '',
    email: '',
    password: '',
  })

  useEffect(() => {
    if (user) router.push('/admin')
  }, [user, router])

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = event.target
    switch (name) {
      case 'email':
      case 'password':
        if (!value) setErrors({ ...errors, [name]: 'Field is required' })
        else setErrors({ ...errors, [name]: '' })
        break
      default:
        break
    }
    setCredential({ ...credential, [name]: value })
  }
  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault()
    const response = await httpClient.post<Token>('/auth/login', {
      email: credential.email,
      password: credential.password,
    })
    if (response.data) {
      localStorage.setItem('jwt', response.data.access_token)
      router.push('/admin')
    } else if (response.error) {
      setErrors({ ...errors, auth: response.error })
    }
  }

  const handleCloseAlert = () => {
    setErrors({ ...errors, auth: '' })
  }

  return (
    <Container component="main" maxWidth="xs">
      <Box
        sx={{
          marginTop: 8,
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
        }}
      >
        <Avatar sx={{ m: 1, bgcolor: 'secondary.main' }}>
          <LockOutlinedIcon />
        </Avatar>
        <Typography component="h1" variant="h5">
          Sign in
        </Typography>
        <Box component="form" onSubmit={handleSubmit} noValidate sx={{ mt: 1 }}>
          <TextField
            margin="normal"
            required
            fullWidth
            id="email"
            label="Email Address"
            name="email"
            autoComplete="email"
            autoFocus
            value={credential.email}
            onChange={handleChange}
            error={Boolean(errors.email)}
            helperText={!!errors.email && errors.email}
          />
          <Typography>{errors.email}</Typography>
          <TextField
            margin="normal"
            required
            fullWidth
            name="password"
            label="Password"
            type="password"
            id="password"
            autoComplete="current-password"
            value={credential.password}
            onChange={handleChange}
            error={Boolean(errors.password)}
            helperText={!!errors.password && errors.password}
          />
          {errors.auth && (
            <Alert severity="error" onClose={handleCloseAlert}>
              {errors.auth}
            </Alert>
          )}
          <Button
            type="submit"
            fullWidth
            variant="contained"
            sx={{ mt: 3, mb: 2 }}
            disabled={!credential.email || Boolean(errors.email) || !credential.password || Boolean(errors.password)}
          >
            Sign In
          </Button>
          <Grid container>
            <Grid item xs>
              <Link href="/forgot-password" variant="body2">
                Forgot password?
              </Link>
            </Grid>
            <Grid item>
              <Link href="/signup" variant="body2">
                {"Don't have an account? Sign Up"}
              </Link>
            </Grid>
          </Grid>
        </Box>
      </Box>
      <Copyright sx={{ mt: 8, mb: 4 }} />
    </Container>
  )
}

export default SignIn
