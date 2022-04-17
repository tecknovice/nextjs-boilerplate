import { TextField, Button, Stack, Paper } from '@mui/material'
import { Box } from '@mui/system'
import { useEffect } from 'react'
import { useForm, Controller } from 'react-hook-form'
import User from '../interfaces/user.interface'

export default function UserForm({
  mode,
  user,
  onSubmit,
}: {
  mode: 'CREATE' | 'UPDATE'
  user: User | null | undefined
  onSubmit: (data: User) => void
}) {
  const {
    control,
    reset,
    handleSubmit,
    formState: { isValid },
  } = useForm<User>({
    defaultValues: user ?? { id: 0, name: '', email: '', passwordConfirm: '', password: '' },
  })

  useEffect(() => {
    reset({ ...user, passwordConfirm: user?.password })
  }, [reset, user])

  return (
    <Box component="form" noValidate onSubmit={handleSubmit(onSubmit)}>
      <Paper sx={{ p: 2 }}>
        <Stack spacing={2}>
          <Controller
            control={control}
            rules={{ required: true }}
            name="name"
            render={({ field }) => <TextField required fullWidth id="name" label="Name" {...field} />}
          />
          <Controller
            control={control}
            rules={{ required: true, pattern: /\S+@\S+\.\S+/ }}
            name="email"
            render={({ field }) => <TextField required fullWidth id="email" label="email" {...field} />}
          />
          <Controller
            control={control}
            rules={{ required: true }}
            name="password"
            render={({ field }) => (
              <TextField required fullWidth id="password" label="password" type="password" {...field} />
            )}
          />
          <Controller
            control={control}
            rules={{ required: true }}
            name="passwordConfirm"
            render={({ field }) => (
              <TextField required fullWidth id="passwordConfirm" label="passwordConfirm" type="password" {...field} />
            )}
          />
        </Stack>
        <Button type="submit" disabled={!isValid} variant="contained" sx={{ mt: 3, mb: 2 }}>
          {mode}
        </Button>
      </Paper>
    </Box>
  )
}
