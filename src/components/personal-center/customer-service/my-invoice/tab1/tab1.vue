<template>
    <div>
        <div class="section_nav">
                <ul>
                    <li><select name="" id=""><option value="">时间</option></select></li>
                    <li>订单详情</li>
                    <li>发票类型</li>
                    <li>状态</li>
                    <li>操作</li>
                </ul>
        </div>
          <ul class="section_list">
                <li>
                    <div class="list_top">
                        <p>订单编号：<span>25252325236</span></p>    
                        <p style="margin-left:200px;"><span>店铺名称...</span></p>
                        <p>2017—09—10 18:00:09</p>
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
                            <li class="list_name repeat">无</li>
                            <li class="list_price repeat">未开</li>
                            <li class="operation repeat">
                                <button class="button1" type="submit">补开发票</button>
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

