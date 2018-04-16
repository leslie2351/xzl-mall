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
                    <img src="../../image/icon6.png" alt="" @click='name=2'>
                    <img src="../../image/icon6.png" alt="" @click='name=3'>
                </div>
                <p style="float:right;margin-top:105px;font-size:12px">订单回收站>></p>
            </div>
            <tab4 v-if="name==0"></tab4>
            <tab1 v-if="name==1"></tab1>
            <tab2 v-if="name==2"></tab2>
            <tab3 v-if="name==3"></tab3>
        <!-- <div class="page">
            <button>上一页</button>
        </div> -->
        </div>
    </div>
</template>
<script>
 import tab1 from './tab1/tab1.vue';
 import tab2 from './tab2/tab2.vue';
 import tab3 from './tab3/tab3.vue';
 import tab4 from './tab4/tab4.vue';
export default {
  components: {
      tab1,
      tab2,
      tab3,
      tab4
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
