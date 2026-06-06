<template>
  <div class="chinese-page">
    <!-- 顶部卷轴标题 -->
    <header class="scroll-header">
      <h1 class="main-title">国学 · 经典</h1>
      <p class="sub-title">传承千年智慧，品味东方美学</p>
    </header>

    <!-- 诗词知识卡片展示区 -->
    <main class="content-grid">
      <div v-for="(poem, index) in poems" :key="index" class="knowledge-card">
        <div class="card-decoration">❖</div>
        <h2 class="poem-title">{{ poem.title }}</h2>
        <p class="poem-author">【{{ poem.dynasty }}】{{ poem.author }}</p>
        <div class="poem-content">
          <p v-for="(line, i) in poem.content" :key="i">{{ line }}</p>
        </div>
        <div class="card-footer">
          <span class="tag">{{ poem.category }}</span>
        </div>
      </div>
    </main>

    <div class="knowledge-list">
    <!-- 遍历从后端获取到的知识列表 -->
    <div v-for="item in knowledgeList" :key="item._id" class="card">
      <h2>{{ item.title }}</h2>
      <p><strong>核心总结：</strong>{{ item.coreSummary }}</p>
      
      <!-- 渲染复杂的 stages 数组 -->
      <ul>
        <li v-for="stage in item.stages" :key="stage.stage">
          【{{ stage.name }}】- {{ stage.content }}
        </li>
      </ul>
      
      <p><strong>结论：</strong>{{ item.conclusion }}</p>
    </div>
  </div>
  </div>
</template>

<script setup>
import { ref, onMounted } from 'vue'
import axios from 'axios'

const poems = ref([])
const knowledgeList = ref([]);

// 页面加载时自动获取所有知识
const fetchKnowledgeList = async () => {
  try {
    const response = await axios.get('http://localhost:3000/api/knowledge/list');
    if (response.data.code === 200) {
      knowledgeList.value = response.data.data;
    }
  } catch (error) {
    console.error('获取列表失败:', error);
  }
};

onMounted(async () => {
  try {
    const res = await axios.get('/api/poems')
    if (res.data.code === 200) {
      poems.value = res.data.data
    }
  } catch (error) {
    console.error('获取诗词失败:', error)
  }

  fetchKnowledgeList();
})
</script>

<style scoped>
/* 页面整体背景：仿古宣纸米黄色 */
.chinese-page {
  min-height: 100vh;
  background-color: #f7f4ed;
  background-image: url("data:image/svg+xml,%3Csvg width='100' height='100' viewBox='0 0 100 100' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M11 18c3.866 0 7-3.134 7-7s-3.134-7-7-7-7 3.134-7 7 3.134 7 7 7zm48 25c3.866 0 7-3.134 7-7s-3.134-7-7-7-7 3.134-7 7 3.134 7 7 7zm-43-7c1.657 0 3-1.343 3-3s-1.343-3-3-3-3 1.343-3 3 1.343 3 3 3zm63 31c1.657 0 3-1.343 3-3s-1.343-3-3-3-3 1.343-3 3 1.343 3 3 3z' fill='%23d4c5a9' fill-opacity='0.2' fill-rule='evenodd'/%3E%3C/svg%3E");
  padding: 40px 20px;
  font-family: 'Noto Serif SC', serif;
  color: #3e3c3a;
}

/* 顶部卷轴样式 */
.scroll-header {
  text-align: center;
  margin-bottom: 50px;
  padding: 30px;
  border-top: 3px double #8b4513;
  border-bottom: 3px double #8b4513;
  max-width: 800px;
  margin-left: auto;
  margin-right: auto;
}

.main-title {
  font-family: 'Ma Shan Zheng', cursive;
  font-size: 3.5rem;
  margin: 0;
  color: #8b0000; /* 朱砂红 */
  text-shadow: 2px 2px 4px rgba(0,0,0,0.1);
}

.sub-title {
  font-size: 1.2rem;
  color: #5d5c5a;
  margin-top: 10px;
  letter-spacing: 5px;
}

/* 卡片网格布局 */
.content-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  gap: 30px;
  max-width: 1200px;
  margin: 0 auto;
}

/* 知识卡片样式 */
.knowledge-card {
  background: #fffbf0;
  border: 1px solid #d4c5a9;
  padding: 30px;
  position: relative;
  box-shadow: 5px 5px 15px rgba(0,0,0,0.05);
  transition: transform 0.3s ease;
}

.knowledge-card:hover {
  transform: translateY(-5px);
  box-shadow: 8px 8px 20px rgba(139, 69, 19, 0.15);
}

.card-decoration {
  position: absolute;
  top: 10px;
  right: 15px;
  font-size: 24px;
  color: #d4c5a9;
}

.poem-title {
  font-family: 'Ma Shan Zheng', cursive;
  font-size: 2rem;
  margin: 10px 0;
  color: #3e3c3a;
  text-align: center;
}

.poem-author {
  text-align: center;
  color: #8b4513;
  font-weight: bold;
  margin-bottom: 25px;
  border-bottom: 1px dashed #d4c5a9;
  padding-bottom: 10px;
  display: inline-block;
  width: 100%;
}

.poem-content {
  font-size: 1.1rem;
  line-height: 2;
  text-align: center;
  color: #555;
}

.card-footer {
  margin-top: 20px;
  text-align: right;
}

.tag {
  font-size: 0.8rem;
  padding: 4px 12px;
  border: 1px solid #8b0000;
  color: #8b0000;
  border-radius: 20px;
}
</style>