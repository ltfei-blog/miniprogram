import { request } from './request'
import { Articles } from './types'

export const list = () => {
  return request<Articles[]>({
    url: '/articles/list',
    method: 'POST'
  })
}
