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

export const getUserInfo = () =>
  request({
    url: '/user/userInfo',
    method: 'get',
  })

export const changeUserInfo = (config) =>
  request({
    url: '/user/changeUserInfo',
    method: 'patch',
    ...config,
  })

export const changePassword = (config) =>
  request({
    url: '/user/changePassword',
    method: 'patch',
    ...config,
  })

export const logout = () =>
  request({
    url: '/user/logout',
    method: 'post',
  })
