import { request } from './request'

export const init = () => {
  return request<{
    uuid: string
  }>({
    url: '/login/wxLogin/init',
    method: 'POST'
  })
}

export const login = (code: string, scene: string) => {
  return request<{
    token: string
    type: 'login' | 'register'
  }>({
    url: '/login/wxLogin/login',
    method: 'POST',
    data: {
      code,
      uuid: scene
    }
  })
}

export const checkScene = (scene: string) => {
  return request({
    url: '/login/wxLogin/checkScene',
    method: 'POST',
    data: {
      uuid: scene
    }
  })
}
