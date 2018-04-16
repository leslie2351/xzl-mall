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
                <div class="sidebar">
                    <ul>
                        <li class='side_title'>订单中心</li>
                        <router-link tag="li" to="/myOrder">我的订单</router-link>
                        <router-link tag="li" to="/orderEvaluate">晒单评价</router-link>
                        <li class='side_title'>关注中心</li>
                        <router-link tag="li" to="/focusGoods">关注的商品</router-link>
                        <router-link tag="li" to="/focusStore">关注的店铺</router-link>
                        <router-link tag="li" to="/focusActivity">关注的活动</router-link>
                        <li class='side_title'>资产中心</li>
                        <router-link tag="li" to="/balance">余额</router-link>
                        <router-link tag="li" to="/coupons">优惠券</router-link>
                        <router-link tag="li" to="/records">消费记录</router-link>
                        <router-link tag="li" to="/myPoints">我的积分</router-link>
                        <!-- <li class='side_title'>特色业务</li>
                        <li>出国留学</li>
                        <li>医疗服务</li>
                        <li>海外房产</li> -->
                        <li class='side_title'>客户服务</li>
                        <router-link tag="li" to="/goodsReturn">商品退换货</router-link>
                        <router-link tag="li" to="/tradeDisputes">交易纠纷</router-link>
                        <router-link tag="li" to="/myInvoice">我的发票</router-link>
                        <li class='side_title'>设置</li>
                        <li>个人信息</li>
                        <li>收货地址</li>
                    </ul>
                </div>
                <router-view></router-view>
          </div>
          <img src="./image/pict5.png" alt="" class="img-right">
      </div>
    </div>
</template>
<script>
export default {
  
}
</script>
<style scoped lang="less">
    @import "./style/personal-center.less";
</style>
