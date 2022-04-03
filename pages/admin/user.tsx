import type { ReactElement } from 'react'
import Typography from '@mui/material/Typography'
import AdminLayout from '../../layouts/admin.layout'

export default function User() {
  return <Typography align="center">User Dashboard</Typography>
}

User.getLayout = function getLayout(page: ReactElement) {
  return <AdminLayout>{page}</AdminLayout>
}
