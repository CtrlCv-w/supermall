import {request} from './request'


export function getDetail() {
  return request({
    url: '/detail',
  })
}