<template>
    <div>
        <div class="Header">
          <div class="image-top"><img src="./image/pict1.png" alt=""></div>
          <div class="BOX">
            <div class="Nav">
                <div class="nav-left">
                    <img src="../home-page/image/circle1.png" alt="">
                    <ul class="nav-title">
                        <router-link tag="li" to="/"><a>小杂粮店主</a></router-link>
                        <router-link tag="li" to="/"><a>首页</a></router-link>
                        <router-link tag="li" to="/"><a>国内品牌</a></router-link>
                        <router-link tag="li" to="/"><a>进口品牌</a></router-link>
                        <router-link tag="li" to="/"><a>杂粮伴侣</a></router-link>
                        <router-link tag="li" to="/"><a>积分商城</a></router-link>
                        <router-link tag="li" to="/"><a>团购/良友会</a></router-link>
                        <router-link tag="li" to="/"><a>专卖店</a></router-link>
                        <router-link tag="li" to="/"><a>膳食百科</a></router-link>
                        <router-link tag="li" to="/"><a>体验交流</a></router-link>
                    </ul>
                </div>
                <div class="nav-right">
                    <div><span>太原</span><img src="../home-page/image/icon1.png" alt=""></div>
                </div> 
            </div>
            <div class="Nav-bar">
                <div class="nav_bar_left">
                    <div class="logo">
                        <img src="./image/pict3.png" alt="">
                        <p>中国小杂粮 · 商城</p>
                    </div>
                    <ul class="nav_bar_title">
                        <li>个人中心</li>
                        <router-link tag="li" to="/"><a>首页</a></router-link>
                        <router-link tag="li" to="/"><a>账户设置</a></router-link>
                        <router-link tag="li" to="/"><a>社区</a></router-link>
                        <router-link tag="li" to="/"><a>消息</a></router-link>
                    </ul>
                </div>
                <div class="nav_bar_right">
                    <div class="search">
                        <input type="text">
                        <img src="../home-page/image/icon3.png" alt="">
                    </div>
                    <img src="../home-page/image/icon2.png" alt="">
                </div>
            </div>
        </div>
        <div class="image-bottom"><img src="./image/pict2.png" alt=""></div>
      </div>
      <div class="Content">
          <img src="./image/pict6.png" alt="" class="img-left">
          <div class="BOX">
              <!-- <detail></detail>     -->
              <!-- <iview></iview> -->
              <cancel></cancel>
          </div>
          <img src="./image/pict5.png" alt="" class="img-right">
      </div>
    </div>
</template>
<script>
import detail from "./order-center/details-page/details-page"
import cancel from "./order-center/cancel-details/cancel-details.vue"
export default {
    components: {
        detail,
        cancel
    }
}
</script>
<style scoped lang="less">
    @import "./style/personal-center.less";
</style>
