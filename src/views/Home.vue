<template>
  <div class="home">
    <h1>文章列表</h1>
    <div v-if="loading">加载中...</div>
    <div v-else>
      <div v-for="article in articles" :key="article.id" class="article-item">
        <h2 @click="viewArticle(article.id)">{{ article.title }}</h2>
        <p>{{ article.summary }}</p>
        <small>{{ formatDate(article.createdAt) }}</small>
      </div>
    </div>
  </div>
</template>

<script>
import axios from 'axios'

export default {
  name: 'Home',
  data() {
    return {
      articles: [],
      loading: true
    }
  },
  async created() {
    try {
      const response = await axios.get('/api/articles')
      this.articles = response.data
    } catch (error) {
      console.error('获取文章失败:', error)
    } finally {
      this.loading = false
    }
  },
  methods: {
    viewArticle(id) {
      this.$router.push({ name: 'ArticleDetail', params: { id } })
    },
    formatDate(dateString) {
      return new Date(dateString).toLocaleDateString()
    }
  }
}
</script>

<style scoped>
.home {
  max-width: 800px;
  margin: 0 auto;
  padding: 20px;
}

.article-item {
  margin-bottom: 30px;
  padding: 20px;
  border: 1px solid #eee;
  border-radius: 4px;
  cursor: pointer;
  transition: all 0.3s ease;
}

.article-item:hover {
  box-shadow: 0 2px 12px rgba(0, 0, 0, 0.1);
}

h2 {
  color: #2c3e50;
  margin-bottom: 10px;
}

p {
  color: #666;
  margin-bottom: 10px;
}

small {
  color: #999;
}
</style>
