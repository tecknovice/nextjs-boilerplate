import { ReactElement, useContext, useEffect, useState } from 'react'
import AdminLayout from '../../../layouts/admin.layout'
import React from 'react'
import { Box } from '@mui/system'
import User from '../../../interfaces/user.interface'
import UserForm from '../../../components/userForm'
import UserService from '../../../services/user'
import { Snackbar } from '@mui/material'
import { useRouter } from 'next/router'

export default function UpdateUser() {
  const router = useRouter()
  const { id } = router.query
  if (!Number(id)) {
    router.push('/admin/users')
  }

  const [user, setUser] = useState<User>()
  const [status, setStatus] = useState({
    open: false,
    message: '',
  })

  useEffect(() => {
    async function getUser() {
      if (id && Number(id)) {
        const response = await UserService.getUser(Number(id))
        if (response.data) setUser(response.data)
        if (response.error) {
          setStatus({ ...status, open: true, message: response.error })
        }
      }
    }
    getUser()
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  const handleClose = (event: React.SyntheticEvent | Event, reason?: string) => {
    if (reason === 'clickaway') {
      return
    }

    setStatus({ ...status, open: false, message: '' })
  }

  const onSubmit = async (data: User) => {
    const response = await UserService.updateUser(data)
    if (response.data) router.push('/admin/users')
    if (response.error) setStatus({ ...status, open: true, message: response.error })
  }

  return (
    <Box sx={{ maxWidth: '500px', margin: 'auto' }}>
      <UserForm mode="UPDATE" user={user} onSubmit={onSubmit} />
      <Snackbar
        anchorOrigin={{ vertical: 'bottom', horizontal: 'right' }}
        open={status.open}
        autoHideDuration={6000}
        onClose={handleClose}
        message={status.message}
      />
    </Box>
  )
}

UpdateUser.getLayout = function getLayout(page: ReactElement) {
  return <AdminLayout>{page}</AdminLayout>
}
