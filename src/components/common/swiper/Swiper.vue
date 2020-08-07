<template>
  <div id="swiper-box">
    <div id="swiper" @touchstart="touchStart" @touchmove="touchMove" @touchend="touchEnd">
      <slot></slot>
    </div>
    <div class="indicator">
      <slot name="indicator">
        <div
          v-for="(item,index) in swiperCounts"
          class="indi-item"
          :class="{active:index==indiIndex-1}"
          :key="index"
        ></div>
      </slot>
    </div>
  </div>
</template>

<script>
export default {
  name: "Swiper",

  props: {
    // 滚动间隔时间
    interval: {
      type: Number,
      default: 3000,
    },
    // 滚动持续时间
    duration: {
      type: Number,
      default: 500,
    },
    // 拖动滚动距离
    moveRatio: {
      type: Number,
      default: 0.25,
    },
    // 是否开启indicator导航
    showIndicator: {
      type: Boolean,
      default: true,
    },
  },

  data() {
    return {
      swiperCounts: 0, //元素个数
      currentIndex: 1, // 当前的index
      indiIndex: 1, // 当前活跃的indicator标签
      swiperWidth: 0, // swiper的宽度
      swiperStyle: {}, // swiper样式
      scrolling: false, // 是否正在滚动
    };
  },

  mounted() {
    // 加入循环图片
    this.cycleImg();
    this.startTimer();
  },

  methods: {
    /**
     *在图组前后插入循环图片
     */
    cycleImg() {
      // 绑定图片
      let swiperEl = document.getElementById('swiper');
      let swiperEls = swiperEl.getElementsByClassName("swiper-items");
      // console.log(swiperEls);
      // 获取图片个数
      this.swiperCounts = swiperEls.length;
      // 如果图片数量大于1则在前后插入循环图片
      if (this.swiperCounts > 1) {
        let cloneFirst = swiperEls[0].cloneNode(true);
        // console.log(cloneFirst);
        let cloneLast = swiperEls[this.swiperCounts - 1].cloneNode(true);
        // console.log(cloneLast);
        swiperEl.insertBefore(cloneLast, swiperEls[0]);
        swiperEl.appendChild(cloneFirst);

        this.swiperWidth = swiperEl.offsetWidth;
        this.swiperStyle = swiperEl.style;
      }
      this.imgTransform(-this.swiperWidth);
    },

    /**
     * 图片移动位置
     */
    imgTransform(position) {
      // this.swiperStyle.transform='translateX('+position+'px)'
      this.swiperStyle.transform = `translateX(${position}px)`;
      // 适配不同设备
      this.swiperStyle["-webkit-transform"] = `translateX(${position}px)`;
      this.swiperStyle["-ms-transform"] = `translateX(${position}px)`;
    },

    /**
     * 图片移动函数
     */
    imgScroll(targetPosition) {
      // 设置正在滚动
      this.scrolling = true;
      // 开始滚动动画
      this.swiperStyle.transition = "transform " + this.duration + "ms";
      this.imgTransform(targetPosition);

      // 解决indicator活跃与动画绑定延迟
      this.indiIndex = this.currentIndex;
      if (this.indiIndex >= this.swiperCounts + 1) {
        this.indiIndex = 1;
      } else if (this.indiIndex <= 0) {
        this.indiIndex = this.swiperCounts;
      }
      // 校检滚动后的位置
      this.checkPosition();
      // 滚动完成
      this.scrolling = false;
    },

    /**
     * 开启图片循环滚动(设置currentIndex循环)
     */
    checkPosition() {
      window.setTimeout(() => {
        // 取消滚动延迟动画
        this.swiperStyle.transition = "0ms";
        // 开始校检滚动位置
        if (this.currentIndex >= this.swiperCounts + 1) {
          this.currentIndex = 1;
          this.imgTransform(-this.currentIndex * this.swiperWidth);
        } else if (this.currentIndex <= 0) {
          this.currentIndex = this.swiperCounts;
          this.imgTransform(-this.currentIndex * this.swiperWidth);
        }
      }, this.duration);
    },

    /**
     *定时器
     */
    startTimer() {
      this.timePlayer = window.setInterval(() => {
        this.currentIndex++;
        this.imgScroll(-this.currentIndex * this.swiperWidth);
      }, this.interval);
    },
    stopTimer() {
      window.clearInterval(this.timePlayer);
    },

    /*******/
    /**
     * 拖动事件
     */
    touchStart(event) {
      // 如果正在滚动,则不可拖动
      if (this.scrolling) {
        return;
      }
      // 关闭定时器
      this.stopTimer();
      // 记录开始touch的水平位置
      this.startX = event.touches[0].pageX;
    },
    touchMove(event) {
      // 计算滑动的距离
      this.endX = event.touches[0].pageX;
      this.moveDistance = this.endX - this.startX;
      // 加入滑动动画
      this.distance = this.moveDistance - this.currentIndex * this.swiperWidth;
      this.imgTransform(this.distance);
    },
    touchEnd(event) {
      // 判断最后移动的距离是否超出设定值
      if (this.moveDistance == 0) {
        return;
      } else if (
        this.moveDistance > 0 && this.moveDistance > this.swiperWidth * this.moveRatio
      ) {
        this.currentIndex--;
      } else if (
        this.moveDistance < 0 && -this.moveDistance > this.swiperWidth * this.moveRatio
      ) {
        this.currentIndex++;
      }
      // 移动至正确的位置
      this.imgScroll(-this.currentIndex * this.swiperWidth);
      // 重新开始定时器
      this.startTimer();
    },
  },
};
</script>

<style scoped>
#swiper-box {
  overflow: hidden;
  position: relative;
  
}

#swiper {
  display: flex;
  height: 100%;
}

.indicator {
  display: flex;
  width: 100%;
  justify-content: center;
  align-content: center;
  /*background-color: rgba(100, 100, 100, .4);*/
  position: absolute;
  bottom: 8px;
  left: 0;
  right: 0;
}

.indicator .indi-item {
  box-sizing: border-box;
  width: 8px;
  height: 8px;
  line-height: 8px;
  border-radius: 4px;
  background-color: #fff;
  text-align: center;
  margin: 0 5px;
}
.indi-item.active {
  background-color: #e4405e;
}
</style>