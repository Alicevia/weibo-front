import axios from 'axios'
import config from '../config'
import router from '../router/index'

const service = axios.create({
  timeout: 15000,
  baseURL: config.VITE_BASE_API,
})
service.interceptors.request.use(
  (cfg) => {
    // const user = userStore()
    // if (user.token) {
    //   if (isCheckTimeout()) {
    //     user.logout() // token主动设置超时
    //     return Promise.reject(cfg)
    //   }
    //   cfg.headers.Authorization = `Bearer ${user.token}`
    // }
    return cfg
  },
  (err) => {
    console.dir(err, 'configerr')
    return Promise.reject(err)
  }
)

service.interceptors.response.use(
  (response) => {
    const { $message } = window
    const { code, message, data } = response.data
    if (code === 0) {
      if (message) {
        $message.success(message)
      }
      return data
    }
    if (message) {
      $message.error(message)
    }
    if (code === 10005) {
      router.push('/login')
    }
    return Promise.reject(response)
  },
  (error) => {
    const { $message } = window
    const { response, message } = error
    $message.error(response.data?.message || response.data || message)
    return Promise.reject(error)
  }
)

export default service
