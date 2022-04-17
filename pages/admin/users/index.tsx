import * as React from 'react'
import AdminLayout from '../../../layouts/admin.layout'
import Table from '@mui/material/Table'
import TableBody from '@mui/material/TableBody'
import TableCell from '@mui/material/TableCell'
import TableContainer from '@mui/material/TableContainer'
import TableHead from '@mui/material/TableHead'
import TableRow from '@mui/material/TableRow'
import Paper from '@mui/material/Paper'
import UserService from '../../../services/user'
import User from '../../../interfaces/user.interface'
import Box from '@mui/material/Box'
import { Button } from '@mui/material'
import Router from 'next/router'

export default function Users() {
  const [users, setUsers] = React.useState<User[]>([])
  React.useEffect(() => {
    async function getUsers() {
      const response = await UserService.getUsers()
      if (response.data) {
        setUsers(response.data)
      }
    }
    getUsers()
  }, [])
  const handleUpdate = (id?: number) => {
    if (id) Router.push(`/admin/users/${id}`)
  }
  const handleDelete = async (id?: number) => {
    if (!id) return
    const response = await UserService.deleteUser(id)
    if (response.data) {
      const newUsers = [...users]
      const index = newUsers.findIndex((user) => user.id === id)
      if (index !== -1) {
        newUsers.splice(index, 1)
        setUsers(newUsers)
      }
    }
  }
  return (
    <TableContainer component={Paper}>
      <Table>
        <TableHead>
          <TableRow>
            <TableCell width="10%">ID</TableCell>
            <TableCell>Name</TableCell>
            <TableCell>Email</TableCell>
            <TableCell width="20%">Actions</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {users.map((user) => (
            <TableRow key={user.id}>
              <TableCell>{user.id}</TableCell>
              <TableCell>{user.name}</TableCell>
              <TableCell>{user.email}</TableCell>
              <TableCell>
                <Box sx={{ display: 'flex', justifyContent: 'space-between' }}>
                  <Button variant="contained" onClick={() => handleUpdate(user?.id)}>
                    Update
                  </Button>
                  <Button variant="contained" color="error" onClick={() => handleDelete(user?.id)}>
                    Delete
                  </Button>
                </Box>
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  )
}

Users.getLayout = function getLayout(page: React.ReactElement) {
  return <AdminLayout>{page}</AdminLayout>
}
