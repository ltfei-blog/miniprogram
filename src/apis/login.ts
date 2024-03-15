import { request } from './request'

export const init = () => {
  return request<{
    uuid: string
  }>({
    url: '/users/wxLogin/init',
    method: 'POST'
  })
}

export const login = (code: string, scene: string) => {
  return request<{
    token: string
    type: 'login' | 'register'
  }>({
    url: '/users/wxLogin/login',
    method: 'POST',
    data: {
      code,
      uuid: scene
    }
  })
}

export const checkScene = (scene: string) => {
  return request({
    url: '/users/wxLogin/checkScene',
    method: 'POST',
    data: {
      uuid: scene
    }
  })
}
