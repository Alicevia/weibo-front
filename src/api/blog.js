import request from '@/utils/request'

export const createWeiBo = (config) =>
  request({
    url: '/blog/createWeiBo',
    method: 'post',
    ...config,
  })
export const getBlogList = (config) =>
  request({
    url: '/blog/blogList',
    method: 'get',
    ...config,
  })
