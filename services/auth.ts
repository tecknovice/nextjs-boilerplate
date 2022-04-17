import { Token } from '../interfaces/token.interface'
import User from '../interfaces/user.interface'
import { HttpClient } from '../lib/httpclient'
import { sleep } from '../lib/sleep'

const AuthService = {
  async login(user: User) {
    const response = await HttpClient.post<Token>('/auth/login', user)
    if (response.data) {
      localStorage.setItem('jwt', response.data.access_token)
    }
    return response
  },
  async logout() {
    const response = await HttpClient.post<any>('/auth/logout')
    if (response.data) {
      localStorage.removeItem('jwt')
    }
    return response
  },
}

export default AuthService
