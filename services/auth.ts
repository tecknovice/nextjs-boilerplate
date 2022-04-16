import User from '../interfaces/user.interface'
import httpclient from '../lib/httpclient'
import { sleep } from '../lib/sleep'

export default {
  async getProfile() {
    const response = await httpclient.get<User>('/auth/profile')
    return response
  },
}
