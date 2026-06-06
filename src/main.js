import { createApp } from 'vue'
import App from './App.vue'
import router from './router' // 引入刚才配置好的路由
// 引入 Element Plus 的全局样式
import 'element-plus/dist/index.css' 

const app = createApp(App)
app.use(router) // 挂载路由
app.mount('#app')
