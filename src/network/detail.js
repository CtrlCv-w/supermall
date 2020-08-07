import {request} from './request'


export function getDetail(iid) {
  return request({
    url: '/detail',
    params:{
      iid
    }
  })
}
// 获取推荐商品
export function getRecommend(){
  return request({
    url:"/recommend"
  })
}
/**
 * 创建类保存不同地址的信息
 */
// 商品基本信息
export class BaseInfo {
  constructor(itemInfo, columns, services) {
    this.title = itemInfo.title;
    this.desc = itemInfo.desc;
    this.newPrice = itemInfo.price;
    this.oldPrice = itemInfo.oldPrice;
    this.discount = itemInfo.discountDesc;
    this.columns = columns;
    this.services = services;
    this.nowPrice = itemInfo.highNowPrice;
  }
}
// 店家信息
export class ShopInfo {
  constructor(shopInfo) {
    this.logo = shopInfo.shopLogo;
    this.name = shopInfo.name;
    this.fans = shopInfo.cFans;
    this.sells = shopInfo.cSells;
    this.score = shopInfo.score;
    this.goodsCount = shopInfo.cGoods
  }
}
// 商品详情
export class GoodsInfo{
  constructor(detailInfo){
    this.info=detailInfo.desc;
    this.key=detailInfo.detailImage[0].key;
    this.detailImage=detailInfo.detailImage ? detailInfo.detailImage[0].list : '';
  }
}
// 商品数据
export class GoodsParams {
  constructor(info, rule) {
    // 注: images可能没有值(某些商品有值, 某些没有值)
    this.image = info.images ? info.images[0] : '';
    this.infos = info.set;
    this.sizes = rule.tables[0];
  }
}