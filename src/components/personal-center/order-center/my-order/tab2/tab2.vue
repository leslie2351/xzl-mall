<template>
    <div>
        <div class="section_nav">
            <ul>
                <li><select name="" id=""><option value="">近三个月订单</option></select></li>
                <li>订单详情</li>
                <li>收货人</li>
                <li>总金额</li>
                <li><select name="" id=""><option value="">全部状态</option></select></li>
                <li>操作</li>
            </ul>
        </div>
        <div class="fixed List">
             <div class="list_top">
                <p>下单时间：<span>2017-11-11 08:11:20</span></p>    
                <p>订单号：<span>25252325236</span></p>    
                <p style="margin-left:10px;"><span>店铺名称...</span></p>    
                <p>剩余支付时间：<span>10:22:22</span></p>
            </div> 
            <table class="section_list">
                <tr>
                    <td class="list_im repeat">
                        <div>
                            <img src="../../../image/pict8.png" alt="">
                            <div>
                                <p>苦荞米 农家杂粮米山西杂粮沃丰百谷500g</p>
                                <p class="price"><span>￥</span>28.00</p>
                            </div> 
                        </div> 
                    </td>
                    <td class="list_name repeat">王某某</td>
                    <td class="list_price repeat"><span>￥</span>2000.00</td>
                    <td class="list_state repeat">
                        <p>待收货</p>
                        <p><router-link to="/Details">查看详情</router-link></p>
                        <p>跟踪</p>
                    </td>
                    <td class="operation repeat">
                        <button class="button1" type="submit"><router-link to="/Cancel">再次购买</router-link></button>
                        <button class="button1" type="submit">确认收货</button>
                        <button class="button1" type="submit">申请售后</button>
                    </td>
                </tr>
            </table>
            <div class="tracking">
                <p class="track_title">顺丰快递：4525222521452</p>
                <div class="box">
                    <Timeline>
                        <TimelineItem>
                            <p class="time">快件已到达【北京分拨中心】进行扫描</p>
                            <p class="content">2017-11-27  14：11</p>
                        </TimelineItem>
                        <TimelineItem>
                            <p class="time">快件已到达【北京分拨中心】进行扫描</p>
                            <p class="content">2017-11-27  14：11</p>
                        </TimelineItem>
                        <TimelineItem>
                            <p class="time">快件已到达【北京分拨中心】进行扫描</p>
                            <p class="content">2017-11-27  14：11</p>
                        </TimelineItem>
                        <TimelineItem>
                            <p class="time">【北京】快件员已收件</p>
                            <p class="content">2017-11-27  14：11</p>
                        </TimelineItem>
                        <TimelineItem>
                            <p class="time">已发货</p>
                            <p class="content">2017-11-27  14：11</p>
                        </TimelineItem>
                    </Timeline>
                </div>
            </div>
        </div>
    </div>
</template>
<script>
export default {
  
}
</script>
<style scoped lang="less">
@import "../tab1/tab1.less";
</style>
