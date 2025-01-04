<template>
  <div class="new-article">
    <h1>新建文章</h1>
    <form @submit.prevent="submitArticle">
      <div class="form-group">
        <label for="title">标题</label>
        <input
          type="text"
          id="title"
          v-model="article.title"
          required
          placeholder="请输入文章标题"
        />
      </div>

      <div class="form-group">
        <label for="content">内容</label>
        <textarea
          id="content"
          v-model="article.content"
          required
          placeholder="请输入文章内容"
          rows="10"
        ></textarea>
      </div>

      <button type="submit" :disabled="submitting">
        {{ submitting ? '提交中...' : '提交' }}
      </button>
    </form>
  </div>
</template>

<script>
import axios from 'axios'

export default {
  name: 'NewArticle',
  data() {
    return {
      article: {
        title: '',
        content: ''
      },
      submitting: false
    }
  },
  methods: {
    async submitArticle() {
      this.submitting = true
      try {
        const response = await axios.post('/api/articles', this.article)
        this.$router.push({ name: 'ArticleDetail', params: { id: response.data.id } })
      } catch (error) {
        console.error('提交文章失败:', error)
        alert('提交文章失败，请稍后重试')
      } finally {
        this.submitting = false
      }
    }
  }
}
</script>

<style scoped>
.new-article {
  max-width: 800px;
  margin: 0 auto;
  padding: 20px;
}

.form-group {
  margin-bottom: 20px;
}

label {
  display: block;
  margin-bottom: 5px;
  font-weight: bold;
}

input,
textarea {
  width: 100%;
  padding: 10px;
  border: 1px solid #ddd;
  border-radius: 4px;
  font-size: 16px;
}

textarea {
  resize: vertical;
}

button {
  background-color: #42b983;
  color: white;
  padding: 10px 20px;
  border: none;
  border-radius: 4px;
  cursor: pointer;
  font-size: 16px;
}

button:disabled {
  background-color: #ccc;
  cursor: not-allowed;
}
</style>
