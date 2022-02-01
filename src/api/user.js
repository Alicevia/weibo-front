import request from '@/utils/request'

export const registerUser = (config) =>
  request({
    url: '/user/register',
    method: 'post',
    ...config,
  })
export const login = (config) =>
  request({
    url: '/user/login',
    method: 'post',
    ...config,
  })
