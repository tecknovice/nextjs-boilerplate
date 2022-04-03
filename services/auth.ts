import User from '../interfaces/user.interface'
import httpclient from '../lib/httpclient'

export default {
  async getProfile() {
    const response = await httpclient.get<User>('/auth/profile')
    return response
  },
}
