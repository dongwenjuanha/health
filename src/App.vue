<template>
  <div class="app-container">
    <!-- 顶部导航栏 -->
    <el-menu
      :default-active="activeIndex"
      class="nav-bar"
      mode="horizontal"
      :router="true"
      active-text-color="#8b0000"
    >
      <!-- router-link 会自动匹配上面配置的路由路径 -->
      <el-menu-item index="/health">💪 健康打卡</el-menu-item>
      <el-menu-item index="/knowledge">📜 国学经典</el-menu-item>
    </el-menu>

    <!-- 路由出口：点击导航后，对应的页面就会显示在这里 -->
    <main class="main-content">
      <router-view />
    </main>
  </div>
</template>

<script setup>
import { ref, computed } from 'vue'
import { useRoute } from 'vue-router'

const route = useRoute()
// 根据当前路由路径，高亮对应的导航菜单
const activeIndex = computed(() => route.path)
</script>

<style>
body { margin: 0; padding: 0; background-color: #f5f7fa; }
.app-container { min-height: 100vh; }
.nav-bar { max-width: 1200px; margin: 0 auto; border-bottom: none !important; }
.main-content { max-width: 1200px; margin: 0 auto; padding: 20px; }
</style>