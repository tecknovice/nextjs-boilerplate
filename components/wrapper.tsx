import { CircularProgress } from '@mui/material'
import React from 'react'
import useUser from '../hooks/useUser'

export default function Wrapper({ children }: { children: React.ReactNode }) {
  const { user, loading, error } = useUser()
  if (loading) return <CircularProgress />
  return <React.Fragment>{children}</React.Fragment>
}
