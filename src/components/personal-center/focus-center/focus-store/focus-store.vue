<template>
<div class="Section">
        <div class="sect_box">
            <div class="section_title">
                <p>关注中心</p>
                <div class="search">
                    <input type="text" placeholder="订单编号">
                    <img src="../../../home-page/image/icon3.png" alt="">
                </div>
            </div>
            <ul class="store_list">
                <li>
                    <div class="more">更多>></div>
                    <div class="store_left">
                        <img src="../../image/pict3.png" alt="">
                        <div>
                            <p>兰考特产馆旗舰店</p>
                            <p>关注人数：2458</p>
                            <Rate disabled v-model="valueDisabled" class="rate"></Rate>
                        </div>
                    </div>
                    <div>
                        <p class="new"><span @click='name=1'>上新</span><span>|</span><span @click='name=2'>热销</span></p>
                    </div>
                    <ul class="store_right" v-if="name==1">
                        <li>
                            <img src="../../image/pict8.png" alt="">
                            <p>2017年山西新小米沁州黄小米5000克</p>
                            <span>￥88.00</span>
                        </li>
                        <li>
                            <img src="../../image/pict8.png" alt="">
                            <p>2017年山西新小米沁州黄小米5000克</p>
                            <span>￥88.00</span>
                        </li>
                        <li>
                            <img src="../../image/pict8.png" alt="">
                            <p>2017年山西新小米沁州黄小米5000克</p>
                            <span>￥88.00</span>
                        </li>
                    </ul>
                     <ul class="store_right" v-if="name==2">
                        <li>
                            <img src="../../image/pict8.png" alt="">
                            <p>2017年山西新小米沁州黄小米5000克</p>
                            <span>￥66.00</span>
                        </li>
                        <li>
                            <img src="../../image/pict8.png" alt="">
                            <p>2017年山西新小米沁州黄小米5000克</p>
                            <span>￥66.00</span>
                        </li>
                        <li>
                            <img src="../../image/pict8.png" alt="">
                            <p>2017年山西新小米沁州黄小米5000克</p>
                            <span>￥66.00</span>
                        </li>
                    </ul>
                   
                </li>
                <li>
                    <div class="more">更多>></div>
                    <div class="store_left">
                        <img src="../../image/pict3.png" alt="">
                        <div>
                            <p>兰考特产馆旗舰店</p>
                            <p>关注人数：2458</p>
                            <Rate disabled v-model="valueDisabled" class="rate"></Rate>
                        </div>
                    </div>
                    <div>
                        <p class="new"><span @click='name=1'>上新</span><span>|</span><span @click='name=2'>热销</span></p>
                    </div>
                    <ul class="store_right" v-if="name==1">
                        <li>
                            <img src="../../image/pict8.png" alt="">
                            <p>2017年山西新小米沁州黄小米5000克</p>
                            <span>￥88.00</span>
                        </li>
                        <li>
                            <img src="../../image/pict8.png" alt="">
                            <p>2017年山西新小米沁州黄小米5000克</p>
                            <span>￥88.00</span>
                        </li>
                        <li>
                            <img src="../../image/pict8.png" alt="">
                            <p>2017年山西新小米沁州黄小米5000克</p>
                            <span>￥88.00</span>
                        </li>
                    </ul>
                     <ul class="store_right" v-if="name==2">
                        <li>
                            <img src="../../image/pict8.png" alt="">
                            <p>2017年山西新小米沁州黄小米5000克</p>
                            <span>￥66.00</span>
                        </li>
                        <li>
                            <img src="../../image/pict8.png" alt="">
                            <p>2017年山西新小米沁州黄小米5000克</p>
                            <span>￥66.00</span>
                        </li>
                        <li>
                            <img src="../../image/pict8.png" alt="">
                            <p>2017年山西新小米沁州黄小米5000克</p>
                            <span>￥66.00</span>
                        </li>
                    </ul>
                   
                </li>
                <li>
                    <div class="more">更多>></div>
                    <div class="store_left">
                        <img src="../../image/pict3.png" alt="">
                        <div>
                            <p>兰考特产馆旗舰店</p>
                            <p>关注人数：2458</p>
                            <Rate disabled v-model="valueDisabled" class="rate"></Rate>
                        </div>
                    </div>
                    <div>
                        <p class="new"><span @click='name=1'>上新</span><span>|</span><span @click='name=2'>热销</span></p>
                    </div>
                    <ul class="store_right" v-if="name==1">
                        <li>
                            <img src="../../image/pict8.png" alt="">
                            <p>2017年山西新小米沁州黄小米5000克</p>
                            <span>￥88.00</span>
                        </li>
                        <li>
                            <img src="../../image/pict8.png" alt="">
                            <p>2017年山西新小米沁州黄小米5000克</p>
                            <span>￥88.00</span>
                        </li>
                        <li>
                            <img src="../../image/pict8.png" alt="">
                            <p>2017年山西新小米沁州黄小米5000克</p>
                            <span>￥88.00</span>
                        </li>
                    </ul>
                     <ul class="store_right" v-if="name==2">
                        <li>
                            <img src="../../image/pict8.png" alt="">
                            <p>2017年山西新小米沁州黄小米5000克</p>
                            <span>￥66.00</span>
                        </li>
                        <li>
                            <img src="../../image/pict8.png" alt="">
                            <p>2017年山西新小米沁州黄小米5000克</p>
                            <span>￥66.00</span>
                        </li>
                        <li>
                            <img src="../../image/pict8.png" alt="">
                            <p>2017年山西新小米沁州黄小米5000克</p>
                            <span>￥66.00</span>
                        </li>
                    </ul>
                   
                </li>
            </ul>
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
        return {
            valueDisabled: 2,
            name:1
        }
    }
}
</script>
<style lang="less" scoped>
    @import "../focus-center.less";
</style>
