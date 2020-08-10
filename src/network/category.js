import {request} from './request'
// menu(类型)
export function getCategory() {
  return request({
    url: '/category',
  })
}
// 获取商品列表
export function getSubCategory(maitKey) {
  return request({
    url: '/subcategory',
    params: {
      maitKey
    }
  })
}
// 推荐商品列表
export function getRecommends(miniWallkey, type) {
  return request({
    url: '/subcategory/detail',
    params: {
      miniWallkey,
      type
    }
  })
}