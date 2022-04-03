import type { ReactElement } from 'react'
import Typography from '@mui/material/Typography'
import AdminLayout from '../../layouts/admin.layout'

export default function Index() {
  return <Typography align="center">Admin Dashboard</Typography>
}

Index.getLayout = function getLayout(page: ReactElement) {
  return <AdminLayout>{page}</AdminLayout>
}
