<template>
    <div class="Section">
        <div class="sect_box">
            <div class="section_title">
                <p>我的订单</p>
                <div class="search">
                    <input type="text" placeholder="订单编号">
                    <img src="../../../home-page/image/icon3.png" alt="">
                </div>
            </div>
            <div style="overflow:hidden">
                <div class="tab_toggle" style="float:left">
                    <img src="../../image/icon5.png"  alt="" @click='name=0' >
                    <img src="../../image/icon6.png" alt="" @click='name=1'>
                </div>
                <p style="float:right;margin-top:95px;font-size:14px;color:RGBA(114, 85, 14, 1);">一键好评>></p>
            </div>
            <tab1 v-if="name==0"></tab1>
            <tab2 v-if="name==1"></tab2>
        <!-- <div class="page">
            <button>上一页</button>
        </div> -->
        </div>
    </div>
</template>
<script>
 import tab1 from './tab1/tab1.vue';
 import tab2 from './tab2/tab2.vue';
export default {
  components: {
      tab1,
      tab2
  },
  data () {
    return{
        name:0,
        Img:[
            {
                imgurl: "../../image/icon5.png"
            },
            {
                imgurl: "../../image/icon6.png"
            },
            {
                imgurl: "../../image/icon7.png"
            }
        ]
    }
  },
  methods: {
        btn (val) {
                this.name = val;
                // console.log(val);
        }
  }
}
</script>
<style lang="less" scoped>
@import "../../customer-service/goods-return/goods-return.less";
</style>
