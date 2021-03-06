import type { ReactElement } from 'react'
import Typography from '@mui/material/Typography'
import ClientLayout from '../layouts/client.layout'

export default function Index() {
  return <Typography align="center">Client</Typography>
}

Index.getLayout = function getLayout(page: ReactElement) {
  return <ClientLayout>{page}</ClientLayout>
}
