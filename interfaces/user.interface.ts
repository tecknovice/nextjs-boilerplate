export default interface User {
  id?: number
  email?: string
  password?: string
  passwordConfirm?: string
  name?: string
  isActive?: boolean
  createdAt?: string
  updatedAt?: string
  deletedAt?: string
}
