import request from '@/utils/request'

export const uploadFile = (config) =>
  request({
    url: '/utils/upload',
    method: 'post',
    ...config,
  })
