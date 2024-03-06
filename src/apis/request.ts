import Taro from '@tarojs/taro'
// import type {request } from '@tarojs/taro'

const baseUrl = process.env.TARO_APP_API

export const request = async <T>(option: Taro.request.Option) => {
  // todo: 拦截加上token
  const res = await Taro.request<{
    status: number
    data: T
  }>({
    ...option,
    ...{
      url: baseUrl + option.url
    }
  })
  return res.data
}
