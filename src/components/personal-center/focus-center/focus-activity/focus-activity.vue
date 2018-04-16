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
            <div class="section_nav section1_nav">
                <ul>
                    <li>全部商品</li>
                    <li>进行中</li>
                    <li>即将开始</li>
                    <li>已结束</li>
                </ul>
            </div>
            <table class="table_content">
                <tr>
                    <td>活动名称</td>
                    <td>活动时间</td>
                    <td>活动状态</td>
                    <td>备注</td>
                </tr>
                <tr>
                    <td>杂粮限时活动秒杀开始</td>
                    <td>2017-09-12至2017-10-30</td>
                    <td>进行中</td>
                    <td>取消关注</td>
                </tr>
                 <tr>
                    <td>杂粮限时活动秒杀开始</td>
                    <td>2017-09-12至2017-10-30</td>
                    <td>进行中</td>
                    <td>取消关注</td>
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
