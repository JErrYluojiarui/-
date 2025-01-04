<template>
  <div class="article-detail">
    <div v-if="loading">加载中...</div>
    <div v-else-if="error" class="error-message">
      {{ error }}
    </div>
    <div v-else>
      <h1>{{ article.title }}</h1>
      <div class="meta">
        <small>创建时间：{{ formatDate(article.createdAt) }}</small>
      </div>
      <div class="content">
        <pre>{{ article.content }}</pre>
      </div>
    </div>
  </div>
</template>

<script>
import axios from 'axios'

export default {
  name: 'ArticleDetail',
  props: ['id'],
  data() {
    return {
      article: null,
      loading: true,
      error: null
    }
  },
  async created() {
    try {
      const response = await axios.get(`/api/articles/${this.id}`)
      this.article = response.data
    } catch (error) {
      console.error('获取文章详情失败:', error)
      this.error = '获取文章详情失败，请稍后重试'
    } finally {
      this.loading = false
    }
  },
  methods: {
    formatDate(dateString) {
      return new Date(dateString).toLocaleString()
    }
  }
}
</script>

<style scoped>
.article-detail {
  max-width: 800px;
  margin: 0 auto;
  padding: 20px;
}

h1 {
  color: #2c3e50;
  margin-bottom: 20px;
}

.meta {
  margin-bottom: 30px;
  color: #666;
}

.content {
  line-height: 1.6;
  font-size: 16px;
}

pre {
  white-space: pre-wrap;
  word-wrap: break-word;
}

.error-message {
  color: #ff4444;
  padding: 20px;
  border: 1px solid #ff4444;
  border-radius: 4px;
  background-color: #ffeeee;
}
</style>
