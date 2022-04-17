import { AxiosRequestConfig } from 'axios'
import User from '../interfaces/user.interface'
import { HttpClient } from '../lib/httpclient'
import { sleep } from '../lib/sleep'

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
}

export default UserService
