<template>
  <div class="commentInfo">
    <div class="info-header">
      <div class="header-title" v-if="commentNum">宝贝评价 ({{commentNum}})</div>
      <div class="header-more">
        查看全部
        <i class="arrow-right"></i>
      </div>
    </div>
    <div v-if="commentInfo.length !==0">
      <div class="info-user">
        <img :src="commentInfo[0].user.avatar"/>
        <span>{{commentInfo[0].user.uname}}</span>
      </div>
      <div class="info-detail">
        <p>{{commentInfo[0].content}}</p>
        <div class="info-imgs" >
          <img :src="item" v-for="(item, index) in commentInfo[0].images" :key="index"/>
        </div>
        <div class="info-other">
          <span class="date">{{commentInfo[0].created | showDate}}</span>
          <span>{{commentInfo[0].style}}</span>
        </div>
      </div>
    </div>
    <div v-else class="noComment">
      <span>暂无评论~</span>
    </div>
  </div>
</template>

<script>
import {formatDate} from "@/common/utils";

export default {
  name: "DetailCommentInfo",
  props: {
    commentInfo: {
      type: Array,
    },
  },
  data() {
    return {
      commentNum:0
    }
  },
  mounted() {
    setTimeout(() => {
      this.commentNum=this.commentInfo.length;
    }, 500); 
  },
  filters: {
    showDate(value) {
      let date = new Date(value * 1000);
      return formatDate(date, "yyyy-MM-dd");
    },
  },
};
</script>

<style scoped>
.commentInfo {
    padding: 5px 12px;
    color: #333;
    background-color: #fff;
    margin: 5px 1%;
    margin-bottom: 8px;
    border-radius: 10px;
  }

  .info-header {
    box-sizing: content-box;
    height: 40px;
    line-height: 40px;
    font-weight: bold ;
    border-bottom: 1px solid rgba(0,0,0,.1);
    padding: 0px 4px;
  }

  .header-title {
    float: left;
    font-size: 15px;
  }

  .header-more {
    float: right;
    margin-right: 10px;
    font-size: 13px;
  }

  .info-user {
    padding: 10px 0 5px;
  }

  .info-user img {
    width: 42px;
    height: 42px;
    border-radius: 50%;
  }

  .info-user span {
    position: relative;
    font-size: 15px;
    top: -15px;
    margin-left: 10px;
  }

  .info-detail {
    padding: 0 5px 10px;
  }

  .info-detail p {
    font-size: 14px;
    color: rgb(66, 66, 66);
    line-height: 1.5;
  }

  .info-detail .info-other {
    font-size: 12px;
    color: #999;
    margin-top: 10px;
  }

  .info-other .date {
    margin-right: 8px;
  }

  .info-imgs {
    margin-top: 10px;
  }

  .info-imgs img {
    width: 70px;
    height: 70px;
    margin-right: 5px;
  }
  .noComment{
    text-align: center;
    line-height: 80px;
  }
</style>