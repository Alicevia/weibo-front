import request from '@/utils/request'

export const createWeiBo = (config) =>
  request({
    url: '/blog/createWeiBo',
    method: 'post',
    ...config,
  })
