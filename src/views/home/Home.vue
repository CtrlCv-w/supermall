<template>
  <div class="home">
    <nav-bar class="nav-home">
      <div slot="center"><span>购物街</span></div>
    </nav-bar>
    <home-swiper :homeBanners="homeBanners"></home-swiper>
    <home-recommend :homeRecommends="homeRecommends"></home-recommend>
    <popular-view :popularLink="[]"></popular-view>
    
    <tab-control :titleNav="['流行' , '新款' , '精选']" class="table-controls"></tab-control>

    <ul>
      <li>列表1</li>
      <li>列表2</li>
      <li>列表3</li>
      <li>列表4</li>
      <li>列表5</li>
      <li>列表6</li>
      <li>列表7</li>
      <li>列表8</li>
      <li>列表9</li>
      <li>列表10</li>
      <li>列表11</li>
      <li>列表12</li>
      <li>列表13</li>
      <li>列表14</li>
      <li>列表15</li>
      <li>列表16</li>
      <li>列表17</li>
      <li>列表18</li>
      <li>列表19</li>
      <li>列表20</li>
      <li>列表21</li>
      <li>列表22</li>
      <li>列表23</li>
      <li>列表24</li>
      <li>列表25</li>
      <li>列表26</li>
      <li>列表27</li>
      <li>列表28</li>
      <li>列表29</li>
      <li>列表30</li>
      <li>列表31</li>
      <li>列表32</li>
      <li>列表33</li>
      <li>列表34</li>
      <li>列表35</li>
      <li>列表36</li>
      <li>列表37</li>
      <li>列表38</li>
      <li>列表39</li>
      <li>列表40</li>
      <li>列表41</li>
      <li>列表42</li>
      <li>列表43</li>
      <li>列表44</li>
      <li>列表45</li>
      <li>列表46</li>
      <li>列表47</li>
      <li>列表48</li>
      <li>列表49</li>
      <li>列表50</li>
      <li>列表51</li>
      <li>列表52</li>
      <li>列表53</li>
      <li>列表54</li>
      <li>列表55</li>
      <li>列表56</li>
      <li>列表57</li>
      <li>列表58</li>
      <li>列表59</li>
      <li>列表60</li>
      <li>列表61</li>
      <li>列表62</li>
      <li>列表63</li>
      <li>列表64</li>
      <li>列表65</li>
      <li>列表66</li>
      <li>列表67</li>
      <li>列表68</li>
      <li>列表69</li>
      <li>列表70</li>
      <li>列表71</li>
      <li>列表72</li>
      <li>列表73</li>
      <li>列表74</li>
      <li>列表75</li>
      <li>列表76</li>
      <li>列表77</li>
      <li>列表78</li>
      <li>列表79</li>
      <li>列表80</li>
      <li>列表81</li>
      <li>列表82</li>
      <li>列表83</li>
      <li>列表84</li>
      <li>列表85</li>
      <li>列表86</li>
      <li>列表87</li>
      <li>列表88</li>
      <li>列表89</li>
      <li>列表90</li>
      <li>列表91</li>
      <li>列表92</li>
      <li>列表93</li>
      <li>列表94</li>
      <li>列表95</li>
      <li>列表96</li>
      <li>列表97</li>
      <li>列表98</li>
      <li>列表99</li>
      <li>列表100</li>
    </ul>
  </div>
</template>

<script>
// @ is an alias to /src
import NavBar from 'components/common/navbar/NavBar'
import HomeSwiper from './childrencomps/HomeSwiper'
import HomeRecommend from './childrencomps/HomeRecommendView'
import PopularView from './childrencomps/PopularView'

import TabControl from 'components/content/tabControl/TabControl'
import {getHomeMultidata} from 'network/home.js'

export default {
  name: 'Home',
  components:{
    NavBar,
    HomeSwiper,
    HomeRecommend,
    PopularView,
    TabControl,
  },

  data() {
    return {
      // 创建变量接收网络请求结果
      homeBanners:[],
      homeRecommends:[]
    }
  },
  // 首页组件完成发送网络请求
  created() {
    getHomeMultidata().then((result) => {
      // 接收需要的网路请求结果
      this.homeBanners=result.data.data.banner.list
      this.homeRecommends=result.data.data.recommend.list
    }).catch((err) => {
       
    });
  },
}
</script>

<style scoped>
.home{
  padding-bottom: 49px;
  padding-top: 46px;
  background-color: #f0eeee;
}
  .nav-home{
    background-color: #FF8198;
    box-sizing: content-box;
    color: white;
    letter-spacing: 2px;
    font-size: 22px;
  }

  .tab-controls{
    position: sticky;
    top: 46px;
  }
</style>
