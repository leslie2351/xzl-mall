<template>
 <div class="Section">
    <div class="section-title">
        <img src="../../image/pict17.png" alt="" class="img-left">
        <div class="section-content">
            <div>
                <p>可用积分：82943</p>
                <p>我的积分:<span>965841</span>即将过期积分:<span>65841</span></p>
            </div>
        </div>
        <img src="../../image/pict18.png" alt="" class="dui_h">
        <img src="../../image/pict15.png" alt="" class="img-right">
    </div>
        <div class="sect_box">
            <div class="section_nav">
                <ul>
                    <li @click="name=1">积分明细</li>
                    <li @click="name=2">兑换明细</li>
                </ul>
            </div>
            <table class="table_content" v-if="name==1">
                <tr>
                    <td>时间</td>
                    <td>收入/支出</td>
                    <td>详细说明</td>
                </tr>
                <tr>
                    <td>2017-09-12  16:22:33</td>
                    <td class="money">1000积分</td>
                    <td>购物送积分（订单号：252363225412）</td>
                </tr>
                <tr>
                    <td>2017-09-12  16:22:33</td>
                    <td class="money">1000积分</td>
                    <td>购物送积分（订单号：252363225412）</td>
                </tr>
            </table>
             <table class="table_content table_content1" v-if="name==2">
                <tr>
                    <td>时间</td>
                    <td>商品名称</td>
                    <td>支出</td>
                    <td>详细说明</td>
                </tr>
                <tr>
                    <td>2017-09-12  16:22:33</td>
                    <td>山西特产 晋贡 红枣夹核桃仁 450g袋新疆和田枣 坚果零食包邮</td>
                    <td class="money">1000积分</td>
                    <td>积分购物（订单号：252363225412）</td>
                </tr>
                <tr>
                    <td>2017-09-12  16:22:33</td>
                    <td>山西特产 晋贡 红枣夹核桃仁 450g袋新疆和田枣 坚果零食包邮</td>
                    <td class="money">1000积分</td>
                    <td>积分购物（订单号：252363225412）</td>
                </tr>
            </table>
        <!-- <div class="page">
            <button>上一页</button>
        </div> -->
         <!-- <Rate v-model="value"></Rate> -->
        </div>
    </div>
</template>
<script>
export default {
  data () {
      return{
          name:1
      }
  }
}
</script>
<style lang="less" scoped>
@import "./my-points.less";
</style>
