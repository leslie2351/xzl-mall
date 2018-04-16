<template>
 <div class="Section">
        <div class="sect_box">
            <div class="section_nav">
                <ul>
                    <li>消费记录</li>
                    <li><select name="" id=""><option value="">近一年的消费记录</option></select></li>
                </ul>
            </div>
            <table class="table_content">
                <tr>
                    <td>时间</td>
                    <td>订单编号</td>
                    <td>订单实际金额</td>
                    <td>备注</td>
                </tr>
                <tr>
                    <td>2017-09-12  16:22:33</td>
                    <td>1000积分</td>
                    <td>109.00</td>
                    <td></td>
                </tr>
                <tr>
                    <td>2017-09-12  16:22:33</td>
                    <td>1000积分</td>
                    <td>109.00</td>
                    <td></td>
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
}
</script>
<style lang="less" scoped>
@import "./consumption-records.less";
</style>
