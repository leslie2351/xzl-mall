<template>
    <div>
        <div class="section_nav">
                <ul>
                    <li><select name="" id=""><option value="">时间</option></select></li>
                    <li>商品信息</li>
                    <li>联系人</li>
                    <li>金额</li>
                    <li>操作</li>
                </ul>
        </div>
          <ul class="section_list">
                <li>
                    <div class="list_top">
                        <p>下单时间：<span>2017-11-11 08:11:20</span></p>    
                        <p>订单号：<span>25252325236</span></p>    
                        <p style="margin-left:10px;"><span>店铺名称...</span></p>
                        <p></p>
                    </div> 
                    <div class="list_content">
                        <ul>
                            <li class="list_im repeat">
                                <img src="../../../image/pict8.png" alt="">
                                <div>
                                    <p>苦荞米 农家杂粮米山西杂粮沃丰百谷500g</p>
                                    <p class="price"><span>￥</span>28.00</p>
                                </div>
                            </li>
                            <li class="list_name repeat">王某某</li>
                            <li class="list_price repeat"><span>￥</span>1280</li>
                            <li class="operation repeat">
                                <button class="button1" type="submit">申请纠纷</button>
                            </li>
                        </ul>
                    </div>    
                </li>
            </ul>
    </div>
</template>
<script>
export default {
  
}
</script>
<style lang="less" scoped>
@import "./tab1.less";
</style>

