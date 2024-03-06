import { request } from './request'

export const login = (code: string) => {
  return request<{
    token: string
    type: 'login' | 'register'
  }>({
    url: '/users/wxLogin/login',
    method: 'POST',
    data: {
      code
    }
  })
}
