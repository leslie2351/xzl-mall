<template>
 <div class="Section">
    <div class="section-title">
       <img src="../../image/pict17.png" alt="" class="img-left">
        <div class="section-content">
           <div>
               <p>可用余额：82943<span>（冻结：1002.00?）？</span></p>
               <p>用户名<b>卟说抱歉</b><span><img src="../../image/icon2.png" alt="">已认证</span><span><img src="../../image/icon1.png" alt="">账号正常</span></p>
           </div>
        </div>
        <div class="chong_z"><p>充值</p></div>
            <img src="../../image/pict16.png" alt="" class="img-right">
        </div>
        <div class="recharge">
            <div class="Steps">
                <div class="top">
                    <!-- <div class="circle"></div> -->
                    <div class="liners"></div>
                    <!-- <div class="circle"></div> -->
                </div>
                    <ul>
                    <li>
                        <div></div>
                        <img src="../../image/lantern2.png" alt="">
                        <p>充值金额</p>
                        <!-- <p class="time">2017-09-21  08:24:30</p> -->
                    </li>
                    <li>
                        <div></div>
                        <img src="../../image/lantern2.png" alt="">
                        <p>充值方式</p>
                        <!-- <p class="time">2017-09-21  08:24:30</p> -->
                    </li>
                    <li>
                        <div></div>
                        <img src="../../image/lantern2.png" alt="">
                        <p>充值成功</p>
                        <!-- <p class="time">2017-09-21  08:24:30</p> -->
                    </li>
                </ul>
            </div>
            <div class="chongzhi">
                <p>充值用户:<span>不离不弃</span></p>
                <p>充值金额:<input type="text"></p>
                <button>下一步</button>
            </div>
            <div class="remind">
                <p>温馨提醒</p>
                <p>1.充值成功后，余额可能存在延迟现象，一般1—5分钟内到账，如有问题，请咨询客服：</p>
                <p>2.充值金额输入值必须大于10且不大于50000的正整数</p>
                <p>3.您只能有储蓄卡进行充值，如遇到任何支付问题可以查看在线支付帮助</p>
                <p>4.充值完成后，您可以进入账户充值记录页面进行查看账户余额充值状态</p>
                <p>5.充值以后不可提现</p>
            </div>
        </div>
        <div class="sect_box">
            <div class="section_nav">
                <ul>
                    <li>分类</li>
                    <li>全部</li>
                    <li>充值</li>
                    <li>余额消费</li>
                    <li>第三方支付消费</li>
                    <li>订单退款</li>
                </ul>
                <ul>
                    <li>时间</li>
                    <li>今天</li>
                    <li>近一月</li>
                    <li>近三月</li>
                    <li>近一年</li>
                </ul>
            </div>
            <table class="table_content">
                <tr>
                    <td>时间</td>
                    <td>交易类型</td>
                    <td>金额</td>
                    <td>状态</td>
                    <td>备注</td>
                </tr>
                <tr>
                    <td>2017-09-12  16:22:33</td>
                    <td>充值</td>
                    <td class="money">1000.00</td>
                    <td>成功</td>
                    <td>查看记录</td>
                </tr>
                <tr>
                    <td>2017-09-12  16:22:33</td>
                    <td>充值</td>
                    <td class="money">1000.00</td>
                    <td>成功</td>
                    <td>查看记录</td>
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
@import "./balance.less";
</style>
