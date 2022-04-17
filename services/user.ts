import { AxiosRequestConfig } from 'axios'
import User from '../interfaces/user.interface'
import { HttpClient } from '../lib/httpclient'

const UserService = {
  async getProfile(token?: string) {
    let config: AxiosRequestConfig = {}
    if (token) {
      config = {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      }
    }
    const response = await HttpClient.get<User>('/users/profile', config)
    return response
  },
  async updateUser(user: User) {
    const response = await HttpClient.put<User>(`/users/${user.id}`, user)
    return response
  },
}

export default UserService
