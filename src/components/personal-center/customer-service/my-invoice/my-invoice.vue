<template>
    <div class="Section">
        <div class="sect_box">
            <div class="section_title">
                <p>交易纠纷</p>
                <div class="search">
                    <input type="text" placeholder="店铺名称">
                    <img src="../../../home-page/image/icon3.png" alt="">
                </div>
            </div>
            <div class="tab_toggle">
                <img src="../../image/icon5.png"  alt="" @click='name=0' >
                <img src="../../image/icon6.png" alt="" @click='name=1'>
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
@import "../goods-return/goods-return.less";
</style>
