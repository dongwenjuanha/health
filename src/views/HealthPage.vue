<template>
  <div class="health-container">
    <header class="header">
      <h1> 五字健康经</h1>
      <p class="subtitle">心态 · 吃喝 · 拉撒 · 睡 · 手脚暖</p>
    </header>

    <!-- 分类筛选按钮 -->
    <div class="filter-buttons">
      <button v-for="category in categories" :key="category"
        :class="['filter-btn', { active: currentCategory === category }]" @click="currentCategory = category">
        {{ category }}
      </button>
    </div>

    <!-- 知识卡片列表 -->
    <div class="knowledge-list">
      <div v-for="item in filteredKnowledge" :key="item.id" class="knowledge-card">
        <div class="card-header">
          <span class="card-icon">{{ item.icon }}</span>
          <h3 class="card-title">{{ item.title }}</h3>
        </div>
        <div class="card-category">【{{ item.category }}】</div>
        <p class="card-content">{{ item.content }}</p>
      </div>
    </div>
  </div>
</template>

<script setup>
  import { ref, computed } from 'vue'

  // 1. 按照“心态、吃喝、拉撒、睡、手脚暖”重新梳理的中式健康知识
  const knowledgeData = [
    {
      id: 1,
      category: '心态',
      title: '心宽一寸，病退一丈',
      content: '中医讲“怒伤肝、思伤脾”。心态平和，血糖才稳。遇到烦心事别钻牛角尖，多听听戏曲、找老友聊聊天，心情舒畅了，身体的气机就通畅了。',
      icon: ''
    },
    {
      id: 2,
      category: '心态',
      title: '难得糊涂，少操闲心',
      content: '儿孙自有儿孙福，爸妈少为儿女的小事操心。保持“慢生活”的心态，不急躁、不生气，这对稳定血压和血糖至关重要。',
      icon: ''
    },
    {
      id: 3,
      category: '吃喝',
      title: '先菜后饭，细嚼慢咽',
      content: '吃饭顺序：先喝清汤 -> 再吃绿叶菜 -> 再吃肉蛋 -> 最后吃主食。每口饭嚼20下，让唾液充分混合食物，减轻脾胃负担，延缓血糖上升。',
      icon: ''
    },
    {
      id: 4,
      category: '吃喝',
      title: '主食粗细搭配',
      content: '白米饭升糖快，建议掺入1/3的糙米、燕麦或红豆。做菜少红烧、少糖醋，多清蒸、凉拌。苦瓜、黑木耳、洋葱是餐桌上的“稳糖好帮手”。',
      icon: ''
    },
    {
      id: 5,
      category: '拉撒',
      title: '大便通畅，毒素不积',
      content: '保持每天定时排便的习惯。多吃富含膳食纤维的蔬菜（如芹菜、菠菜），早起喝一杯温开水，帮助肠道蠕动。便秘用力容易导致血压飙升，一定要重视。',
      icon: ''
    },
    {
      id: 6,
      category: '拉撒',
      title: '小便清亮，水分充足',
      content: '白天少量多次喝温水，不要等渴了再喝。观察小便颜色，清亮淡黄说明水分充足；如果颜色深黄，说明该补水了。睡前1小时少喝水，避免起夜影响睡眠。',
      icon: ''
    },
    {
      id: 7,
      category: '睡',
      title: '子午觉，养气血',
      content: '晚上11点前务必入睡（养肝血），中午11点-1点之间小憩20分钟（养心气）。高质量的睡眠是身体自我修复、平稳血糖的最佳良药。',
      icon: ''
    },
    {
      id: 8,
      category: '睡',
      title: '睡前泡脚，胜吃补药',
      content: '睡前用40度左右温水泡脚15-20分钟，微微出汗即可。泡脚能引血下行，不仅助眠，还能改善末梢循环。（注意：糖友泡脚一定要家人先试水温，防烫伤！）',
      icon: ''
    },
    {
      id: 9,
      category: '手脚暖',
      title: '寒从脚下起，保暖护关节',
      content: '手脚冰凉说明气血循环不好。天冷时一定要穿长袜、护住脚踝和膝盖。白天可以多做“踮脚尖”的动作，促进下肢血液回流，让脚底暖起来。',
      icon: ''
    },
    {
      id: 10,
      category: '手脚暖',
      title: '常搓手心，疏通经络',
      content: '没事的时候，两只手掌心对搓，搓热为止。手心有劳宫穴，经常搓热可以安神、促进血液循环，让手脚不再冰凉。',
      icon: ''
    }
  ]

  // 2. 定义分类和当前选中的分类
  const categories = ['全部', '心态', '吃喝', '拉撒', '睡', '手脚暖']
  const currentCategory = ref('全部')

  // 3. 使用计算属性实现分类筛选
  const filteredKnowledge = computed(() => {
    if (currentCategory.value === '全部') {
      return knowledgeData
    }
    return knowledgeData.filter(item => item.category === currentCategory.value)
  })
</script>

<style scoped>
  /* 4. 适老化样式设计 */
  .health-container {
    max-width: 800px;
    margin: 0 auto;
    padding: 20px;
    background-color: #fdfbf7;
    /* 换成了更温暖的米色背景 */
    min-height: 100vh;
    font-family: "Microsoft YaHei", sans-serif;
  }

  .header {
    text-align: center;
    margin-bottom: 30px;
    padding-bottom: 20px;
    border-bottom: 2px solid #e0d8c8;
  }

  .header h1 {
    color: #8b4513;
    /* 换成了稳重的中式棕色 */
    font-size: 32px;
    margin-bottom: 10px;
  }

  .subtitle {
    color: #666;
    font-size: 18px;
  }

  /* 筛选按钮样式 */
  .filter-buttons {
    display: flex;
    justify-content: center;
    gap: 12px;
    margin-bottom: 30px;
    flex-wrap: wrap;
  }

  .filter-btn {
    padding: 10px 22px;
    font-size: 18px;
    border: 2px solid #8b4513;
    background-color: white;
    color: #8b4513;
    border-radius: 25px;
    cursor: pointer;
    transition: all 0.3s;
  }

  .filter-btn.active {
    background-color: #8b4513;
    color: white;
  }

  /* 知识卡片样式 */
  .knowledge-list {
    display: grid;
    gap: 20px;
  }

  .knowledge-card {
    background: white;
    padding: 25px;
    border-radius: 15px;
    box-shadow: 0 4px 10px rgba(0, 0, 0, 0.05);
    border-left: 8px solid #d2b48c;
    /* 卡其色边框点缀 */
  }

  .card-header {
    display: flex;
    align-items: center;
    margin-bottom: 10px;
  }

  .card-icon {
    font-size: 36px;
    margin-right: 15px;
  }

  .card-title {
    font-size: 24px;
    color: #333;
    margin: 0;
  }

  .card-category {
    display: inline-block;
    background-color: #f5f0e6;
    color: #8b4513;
    padding: 4px 12px;
    border-radius: 10px;
    font-size: 16px;
    margin-bottom: 15px;
    font-weight: bold;
  }

  .card-content {
    font-size: 20px;
    color: #444;
    line-height: 1.6;
    margin: 0;
  }
</style>