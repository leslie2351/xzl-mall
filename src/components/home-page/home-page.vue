<template>
  <div>
      <div class="Header">
          <div class="BOX">
            <div class="Nav">
                <div class="nav-left">
                    <img src="./image/circle1.png" alt="">
                    <ul class="nav-title">
                        <router-link tag="li" to="/"><a>小杂粮店主</a></router-link>
                        <router-link tag="li" to="/"><a>首页</a></router-link>
                        <router-link tag="li" to="/"><a>我的订单</a></router-link>
                        <router-link tag="li" to="/"><a>会员专属</a></router-link>
                        <router-link tag="li" to="/personal"><a>个人中心</a></router-link>
                        <router-link tag="li" to="/"><a>客户服务</a></router-link>
                    </ul>
                </div>
                <div class="nav-right">
                    <div><img src="./image/icon3.png" alt=""></div>
                    <div><img src="./image/icon2.png" alt=""></div>
                    <div><span>太原</span><img src="./image/icon1.png" alt=""></div>
                </div>
            </div>
            <div class="header-image1"><img src="./image/pict1.png" alt="" ></div>
            <div class="header-image2"><img src="./image/pict2.png" alt=""></div>
        </div>
      </div>

      <div class='Content1'>
            <div class="content1-title">
                <img src="./image/circle2.png" alt="" class="content1-image">
                <div style="text-align:center">
                    <ul class="content1-nav">
                        <router-link tag="li" to="/"><a>国内品牌</a></router-link>
                        <router-link tag="li" to="/"><a>进口品牌</a></router-link>
                        <router-link tag="li" to="/"><a>杂粮伴侣</a></router-link>
                        <router-link tag="li" to="/"><a>积分商城</a></router-link>
                        <li class="logo">
                            <p>中国小杂粮 · 商城</p>
                            <div class="logo_a"><div class="line"></div><span>粮乃行者之干食</span><div class="line"></div></div>
                        </li>
                        <router-link tag="li" to="/"><a>团购/良友会</a></router-link>
                        <router-link tag="li" to="/"><a>专卖店</a></router-link>
                        <router-link tag="li" to="/"><a>膳食百科</a></router-link>
                        <router-link tag="li" to="/"><a>体验交流</a></router-link>
                    </ul>
                </div>
            </div>
            <ul class="image-list">
                <li><img src="./image/gulei.png" alt=""></li>
                <li><img src="./image/mailei.png" alt=""></li>
                <li><img src="./image/doulei.png" alt=""></li>
                <li><img src="./image/youzilei.png" alt=""></li>
                <li><img src="./image/shulei.png" alt=""></li>
                <li><img src="./image/mianlei.png" alt=""></li>
            </ul>
      </div>
      <div class="Content2">
          <div class="BOX">
            <ul class="content2-active">
                <router-link tag="li" to="/"><img :src="img1" alt="" @click="toggleImg"></router-link>
                <router-link tag="li" to="/"><img src="./image/tog1.png" alt=""></router-link>
                <router-link tag="li" to="/"><img src="./image/pict4.png" alt=""></router-link>
                <router-link tag="li" to="/"><img src="./image/pict6.png" alt=""></router-link>
            </ul>
            <ul class="content2-list">
                <li>
                    <div class="list-box">
                        <img src="./image/pict5.png" alt="" class='commod_image'>
                        <div class="fenge"><img src="./image/pict9.png" alt="" class="rule"></div>
                        <div class="import_content">
                            <p>山西特产 晋贡 红枣夹核桃仁 450g袋新疆和田枣 坚果零食包邮</p>
                            <p>商城价：￥36.00</p>
                            <div class="progress"><div class="success"></div></div>
                            <p>已售23%</p>
                            <p><span>200</span>积分</p>
                        </div>
                    </div>
                </li>
                <li>
                    <div class="list-box">
                        <img src="./image/pict5.png" alt="" class='commod_image'>
                        <div class="fenge"><img src="./image/pict9.png" alt="" class="rule"></div>
                        <div class="import_content">
                            <p>山西特产 晋贡 红枣夹核桃仁 450g袋新疆和田枣 坚果零食包邮</p>
                            <p>商城价：￥36.00</p>
                            <div class="progress"><div class="success"></div></div>
                            <p>已售23%</p>
                            <p><span>200</span>积分</p>
                        </div>
                    </div>
                </li>
                <li>
                    <div class="list-box">
                        <img src="./image/pict5.png" alt="" class='commod_image'>
                        <div class="fenge"><img src="./image/pict9.png" alt="" class="rule"></div>
                        <div class="import_content">
                            <p>山西特产 晋贡 红枣夹核桃仁 450g袋新疆和田枣 坚果零食包邮</p>
                            <p>商城价：￥36.00</p>
                            <div class="progress"><div class="success"></div></div>
                            <p>已售23%</p>
                            <p><span>200</span>积分</p>
                        </div>
                    </div>
                </li>
            </ul>
            <div class="content1_more"><p>更多推荐 > > </p></div>
      </div>
      </div>
      <div class="Recommended">
          <div class="BOX">
              <div class="head_title"><img src="./image/pict11.png" alt="" class=""></div>
              <ul class="recommended_content">
                  <li>
                      <div class="list-box">
                        <img src="./image/pict5.png" alt="">
                        <p>山西特产 晋贡 红枣夹核桃仁（特惠）450g/袋 </p>
                        <p>168.00<span>￥199.00</span></p>
                      </div>
                  </li>
                  <li>
                      <div class="list-box">
                        <img src="./image/pict5.png" alt="">
                        <p>山西特产 晋贡 红枣夹核桃仁（特惠）450g/袋 </p>
                        <p>168.00<span>￥199.00</span></p>
                      </div>
                  </li>
                  <li>
                      <div class="list-box">
                        <img src="./image/pict5.png" alt="">
                        <p>山西特产 晋贡 红枣夹核桃仁（特惠）450g/袋 </p>
                        <p>168.00<span>￥199.00</span></p>
                      </div>
                  </li>
              </ul>
              <div class="content1_more"><p>更多推荐 > > </p></div>
          </div>
      </div>
      <div class="Discount">
          <div class="BOX">
            <div class="head_title"><img src="./image/pict14.png" alt="" class=""></div>
            <ul class="discount-list">
                <li>
                    <div><p>￥<span>10</span></p></div>
                    <div>
                        <p>满120元可用</p>
                        <p>干食系列部分商品</p>
                        <p>立即领取</p>
                    </div>
                </li>
                <li>
                    <div><p>￥<span>10</span></p></div>
                    <div>
                        <p>满120元可用</p>
                        <p>干食系列部分商品</p>
                        <p>立即领取</p>
                    </div>
                </li>
                <li>
                    <div><p>￥<span>10</span></p></div>
                    <div>
                        <p>满120元可用</p>
                        <p>干食系列部分商品</p>
                        <p>立即领取</p>
                    </div>
                </li>
            </ul>
            <div class="content1_more"><p>立即领取</p></div>
          </div>
      </div>
      <Footer id="footer"></Footer>
  </div>
</template>
<script>
    import Footer from "../common-components/footer/footer.vue"
export default {
  components:{
      Footer
  },
  data () {
      return {
          img1: './image/tog1.png'
      }
  },
  methods: {
      toggleImg() {
          this.img1 = './image/pict5.png'
      }
  }
}
</script>
<style scoped lang='less'>
    @import './style/home-page.less';
</style>
