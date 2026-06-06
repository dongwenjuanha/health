import { createRouter, createWebHistory } from 'vue-router'
// 引入刚才准备好的两个页面组件
import HealthPage from '@/views/HealthPage.vue'
import ChineseKnowledge from '@/views/ChineseKnowledge.vue'

// 定义路由规则
const routes = [
  { path: '/', redirect: '/health' }, // 访问根路径时，默认跳转到健康页面
  { path: '/health', name: 'Health', component: HealthPage, meta: { title: '健康打卡' } },
  { path: '/knowledge', name: 'Knowledge', component: ChineseKnowledge, meta: { title: '国学经典' } }
]

// 创建路由实例
const router = createRouter({
  history: createWebHistory(), // 使用 HTML5 历史模式（路径不带 # 号）
  routes
})

export default router