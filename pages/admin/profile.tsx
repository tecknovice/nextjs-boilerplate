import type { ReactElement } from 'react'
import Typography from '@mui/material/Typography'
import AdminLayout from '../../layouts/admin.layout'

export default function Profile() {
  return <Typography align="center">Profile</Typography>
}

Profile.getLayout = function getLayout(page: ReactElement) {
  return <AdminLayout>{page}</AdminLayout>
}
