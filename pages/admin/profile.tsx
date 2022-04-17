import { ReactElement, useContext, useState } from 'react'
import AdminLayout from '../../layouts/admin.layout'
import React from 'react'
import { Box } from '@mui/system'
import User from '../../interfaces/user.interface'
import { useCurrentUser } from '../../hooks/useCurrentUser'
import UserForm from '../../components/userForm'
import UserService from '../../services/user'
import { Snackbar } from '@mui/material'
import { DispatchContext } from '../../store/context'
import { ActionTypes } from '../../interfaces/actionType.enum'

export default function Profile() {
  const user = useCurrentUser<false>()
  const dispatch = useContext(DispatchContext)
  const [status, setStatus] = useState({
    open: false,
    message: '',
  })

  const handleClose = (event: React.SyntheticEvent | Event, reason?: string) => {
    if (reason === 'clickaway') {
      return
    }

    setStatus({ ...status, open: false, message: '' })
  }

  const onSubmit = async (data: User) => {
    const response = await UserService.updateUser(data)
    if (response.data) {
      dispatch({ type: ActionTypes.UPDATE, payload: response.data })
      setStatus({ ...status, open: true, message: 'update successfully' })
    }
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

Profile.getLayout = function getLayout(page: ReactElement) {
  return <AdminLayout>{page}</AdminLayout>
}
