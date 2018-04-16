<template>
    <div>
        <div class="Box">
            <div class="small_box">
                <Breadcrumb separator=">">
                    <BreadcrumbItem to="/personal">订单中心</BreadcrumbItem>
                    <BreadcrumbItem to="/myOrder">我的订单</BreadcrumbItem>
                    <BreadcrumbItem>订单：1563156321563215</BreadcrumbItem>
                </Breadcrumb>
                <div class="order_message_top">
                    <div class="img-lt"></div>
                    <ul>
                        <li>
                            <p class="message_title">订单状态</p>
                            <p class="font-p">等待收货</p>
                            <p class="time">剩余时间23时50分33秒</p>
                        </li>
                        <li>
                            <p class="message_title">订单金额</p>
                            <p class="font-p"><span>￥</span>2000</p>
                        </li>
                        <li>
                            <p class="message_title">配送方式</p>
                            <p class="font-p">普通快递</p>
                        </li>
                    </ul>
                    <div class="img-rt"></div>
                </div>
                <div class="order_message_btm">
                    <div class="img-lb"></div>
                    <div class="img-rb"></div>
                    <div class="Btn">
                        <button>再次购买</button>
                        <button>确认收货</button>
                        <button>申请售后</button>
                    </div>
                </div>
                <div class="Steps">
                    <div class="liner"></div>
                    <ul>
                        <li>
                            <img src="../../image/lantern2.png" alt="">
                            <p>订单已提交</p>
                            <p class="time">2017-09-21  08:24:30</p>
                        </li>
                        <li>
                            <img src="../../image/lantern2.png" alt="">
                            <p>付款成功</p>
                            <!-- <p class="time">2017-09-21  08:24:30</p> -->
                        </li>
                        <li>
                            <img src="../../image/lantern2.png" alt="">
                            <p>卖家发货</p>
                            <!-- <p class="time">2017-09-21  08:24:30</p> -->
                        </li>
                        <li>
                            <img src="../../image/lantern2.png" alt="">
                            <p>商品评价</p>
                        </li>
                    </ul>
                </div>
                 <div class="trip">
                    <!-- <el-row style="padding:16px 16px;">
                        <el-col :span="24">
                            <EasyScrollbar :barOption="opt">
                                <div id="wrapper" style="height: 300px;">
                                    <div style="height: 500px;background-color: greenyellow;text-align: center;">
                                    改变颜色和尺寸
                                    </div>
                                </div>
                            </EasyScrollbar>
                        </el-col>
                    </el-row> -->
                    <div class="img-lt"></div>
                    <div class="img-rt"></div>
                    <ul>
                        <li>
                            <span class="time">2017-08- 09  18:22:19</span>
                            <img src="../../image/dl1.png" alt="">
                            <div class="liner"></div>
                            <span class="content">【太原市】您的订单已电子签收，感谢您在中国小杂粮购物，欢迎再次光临。</span>
                        </li>
                        <li>
                            <span class="time">18:22:19</span>
                            <img src="../../image/dl2.png" alt="">
                            <div class="liner"></div>
                            <span class="content">【太原市】您的订单已电子签收，感谢您在中国小杂粮购物，欢迎再次光临。</span>
                        </li>
                        <li>
                            <span class="time">2017-08- 09  18:22:19</span>
                            <img src="../../image/dl2.png" alt="">
                            <div class="liner"></div>
                            <span class="content">【太原市】您的订单已电子签收，感谢您在中国小杂粮购物，欢迎再次光临。</span>
                        </li>
                    </ul>
                </div>
                <div style="margin-bottom:180px;">
                    <div class="img-lb"></div>
                    <div class="img-rb"></div>
                </div>
                <div class="det_information">
                    <div class="img-lt"></div>
                    <ul>
                        <li>
                            <div>
                                <p class="infor_title">订单信息</p>
                                <p>订单编号:1563215632153</p>
                                <p>支付方式:在线支付</p>
                                <P>收货时间：2017-10-09  18:20:00</P>
                            </div>
                            <img src="../../image/pict23.png" alt="">
                        </li>
                        <li>
                            <div>
                                <p class="infor_title">在线支付</p>
                                <P>商品总额：<span>￥</span>36.00</P>
                                <P>运 费：<span>￥</span>6.00</P>
                                <P>应付总额：<span>￥</span>42.00</P>
                            </div>
                            <img src="../../image/pict23.png" alt="">
                        </li>
                        <li>
                            <div>
                                <p class="infor_title">配送信息</p>
                                <p>配送方式：普通快递</p>
                                <p>收货地址：山西省太原市迎泽区桥东街道东岗巷95号</p>
                                <p>手机号码: 152****6655</p>
                            </div>
                            <img src="../../image/pict23.png" alt="">
                        </li>
                        <li>
                            <div>
                                <p class="infor_title" style="margin-bottom:18px;">发票信息</p>
                                <p>发票类型：电子发票</p>
                                <p>发票抬头：个人</p>
                                <p>发票内容：明细</p>
                                <p>查看发票详情</p>
                            </div>
                        </li>
                    </ul>
                     <div class="img-rt"></div>
                </div>
                <div style="margin-top:-50px;margin-bottom:100px">
                    <div class="img-lb"></div>
                    <div class="img-rb"></div>
                </div>
                <div class="settlement">
                     <div class="img-lt"></div>
                     <div class="img-rt"></div>
                     <div class="list_box">
                        <div class="list_top">
                            <p>商品</p>    
                            <p>单价</p>    
                            <p style="margin-left:10px;">数量</p>    
                            <p>小计</p>
                            <p>操作</p>
                        </div> 
                        <table class="section_list">
                            <tr>
                                <td class="list_im repeat">
                                    <div>
                                        <img src="../../image/pict8.png" alt="">
                                        <div>
                                            <p>苦荞米 农家杂粮米山西杂粮沃丰百谷500g</p>
                                            <p class="price"><span>￥</span>28.00</p>
                                        </div> 
                                    </div>
                                </td>
                                <td class="list_name repeat"><span>￥</span>6119.00</td>
                                <td class="list_price repeat">1222</td>
                                <td class="list_state repeat"><span>￥</span>6911.00</td>
                                <td class="operation repeat">
                                    <!-- <button class="button1" type="submit">立即支付</button>
                                    <button class="button1" type="submit">取消订单</button> -->
                                </td>
                            </tr>
                        </table>
                     </div>
                     <div class="img-lb"></div>
                     <div class="img-rb"></div>
                </div>
            </div>
        </div>
    </div>
</template>
<script>
export default { 
  data () {
      return{
            opt:{
                barColor:"#959595",   //滚动条颜色
                barWidth:6,           //滚动条宽度
                railColor:"#eee",     //导轨颜色
                barMarginRight:0,     //垂直滚动条距离整个容器右侧距离单位（px）
                barMaginBottom:0,     //水平滚动条距离底部距离单位（px)
                barOpacityMin:0.3,      //滚动条非激活状态下的透明度
                zIndex:"auto",        //滚动条z-Index
                autohidemode:true,     //自动隐藏模式
                horizrailenabled:true,//是否显示水平滚动条
            },
            colorSizeOption:{
                barColor:"red",
                barWidth:10
            }
        }
    }
}
</script>
<style lang="less" scoped>
    @import "./details-page.less";
</style>
