// https://pinia.esm.dev/introduction.html
import { defineStore } from 'pinia'
import { ref } from 'vue'

interface Userinfo {
  id: number
  username: string
  avatar: string
  city?: any
  gender?: any
  register_date: string
  last_login_date?: any
  status?: any
  avatar_pendant?: any
}
type User =
  | {
      isLogin: false
      userinfo?: {}
    }
  | {
      isLogin: true
      userinfo: Userinfo
    }
export const userStore = defineStore('counter', () => {
  const user = ref<User>({
    isLogin: false,
    userinfo: {}
  })

  return { user }
})
