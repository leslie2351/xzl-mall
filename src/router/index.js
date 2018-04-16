import Vue from 'vue'
import Router from 'vue-router'
// import Home from '@/components/home-page/home-page.vue'
import Personal from "@/components/personal-center/personal-center.vue";

Vue.use(Router)

export default new Router({
  routes: [
    // {
    //   path: '/',
    //   name: 'Home',
    //   component: Home
    // },
    { path: '/', title: '首页', name: 'Home', component: () => import('@/components/home-page/home-page.vue') },
    { path: '/personal', title: '个人中心', name: 'personal', component: () => import('@/components/personal-center/personal-center.vue'),children:[
      { path: '/myOrder', title: '我的订单', name: 'myOrder', component: () => import('@/components/personal-center/order-center/my-order/my-order.vue') },
      { path: '/orderEvaluate', title: '我的订单', name: 'orderEvaluate', component: () => import('@/components/personal-center/order-center/order-evaluate/order-evaluate.vue') },
      { path: '/focusGoods', title: '关注商品', name: 'focusGoods', component: () => import('@/components/personal-center/focus-center/focus-goods/focus-goods.vue') },
      { path: '/focusStore', title: '关注店铺', name: 'focusStore', component: () => import('@/components/personal-center/focus-center/focus-store/focus-store.vue') },
      { path: '/focusActivity', title: '关注活动', name: 'focusStore', component: () => import('@/components/personal-center/focus-center/focus-activity/focus-activity.vue') },
      { path: '/balance', title: '余额', name: 'balance', component: () => import('@/components/personal-center/asset-center/balance/balance.vue') },
      { path: '/coupons', title: '优惠券', name: 'coupons', component: () => import('@/components/personal-center/asset-center/coupons/coupons.vue') },
      { path: '/records', title: '消费记录', name: 'record', component: () => import('@/components/personal-center/asset-center/consumption-records/consumption-records.vue') },
      { path: '/myPoints', title: '我的积分', name: 'myPoints', component: () => import('@/components/personal-center/asset-center/my-points/my-points.vue') },
      { path: '/goodsReturn', title: '商品退换货', name: 'goodsReturn', component: () => import('@/components/personal-center/customer-service/goods-return/goods-return.vue') },
      { path: '/tradeDisputes', title: '交易纠纷', name: 'tradeDisputes', component: () => import('@/components/personal-center/customer-service/trade-disputes/trade-disputes.vue') },
      { path: '/myInvoice', title: '我的发票', name: 'myInvoice', component: () => import('@/components/personal-center/customer-service/my-invoice/my-invoice.vue') },
    ] },
    { path: '/Details', title: '详情', name: 'Details', component: () => import('@/components/personal-center/details.vue') },
    { path: '/Cancel', title: '详情', name: 'Cancel', component: () => import('@/components/personal-center/details.vue') },
  ]
})
// export const otherRouter = {
//   path: '/',
//   name: 'otherRouter',
//   redirect: '/home',

//   component: Personal,
//   children: [
//     { path: '/orderCenter', title: '订单中心', name: 'orderCenter', component: () => import('@/components/personal-center/order-center/order-center.vue') }
//   ]
// }