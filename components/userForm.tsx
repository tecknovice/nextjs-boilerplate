import { TextField, Button, Stack, Paper } from '@mui/material'
import { Box } from '@mui/system'
import { useForm } from 'react-hook-form'
import User from '../interfaces/user.interface'

export default function UserForm({
  mode,
  user,
  onSubmit,
}: {
  mode: 'CREATE' | 'UPDATE'
  user: User | null
  onSubmit: (data: User) => void
}) {
  const {
    register,
    handleSubmit,
    formState: { errors, isValid },
  } = useForm<User>({
    defaultValues: user ?? {},
  })

  return (
    <Box component="form" noValidate onSubmit={handleSubmit(onSubmit)}>
      <Paper sx={{ p: 2 }}>
        <Stack spacing={2}>
          <TextField required fullWidth id="name" label="Name" autoFocus {...register('name', { required: true })} />
          <TextField
            required
            fullWidth
            id="email"
            label="Email"
            {...register('email', { required: true, pattern: /\S+@\S+\.\S+/ })}
          />
          <TextField
            required
            fullWidth
            id="password"
            label="Password"
            type="password"
            {...register('password', { required: true })}
          />
          <TextField
            required
            fullWidth
            id="passwordConfirm"
            label="Password Confirm"
            type="password"
            defaultValue={user?.password}
            {...register('passwordConfirm', { required: true })}
          />
        </Stack>
        <Button type="submit" disabled={!isValid} variant="contained" sx={{ mt: 3, mb: 2 }}>
          {mode}
        </Button>
      </Paper>
    </Box>
  )
}
