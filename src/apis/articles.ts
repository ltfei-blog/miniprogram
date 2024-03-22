import { request } from './request'
import { Articles } from './types'

export const list = () => {
  return request<Articles[]>({
    url: '/articles/list',
    method: 'POST'
  })
}

export const details = (id: number | string) => {
  return request<Articles>({
    url: `/articles/details/${id}`,
    method: 'POST'
  })
}
