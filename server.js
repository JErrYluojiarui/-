const express = require('express')
const cors = require('cors')
const bodyParser = require('body-parser')

const app = express()
app.use(cors())
app.use(bodyParser.json())

let articles = []
let nextId = 1

// 获取文章列表
app.get('/api/articles', (req, res) => {
  res.json(articles.map(article => ({
    id: article.id,
    title: article.title,
    summary: article.content.substring(0, 100),
    createdAt: article.createdAt
  })))
})

// 创建新文章
app.post('/api/articles', (req, res) => {
  const newArticle = {
    id: nextId++,
    title: req.body.title,
    content: req.body.content,
    createdAt: new Date().toISOString()
  }
  articles.push(newArticle)
  res.status(201).json(newArticle)
})

// 获取文章详情
app.get('/api/articles/:id', (req, res) => {
  const article = articles.find(a => a.id === Number(req.params.id))
  if (article) {
    res.json(article)
  } else {
    res.status(404).json({ error: '文章未找到' })
  }
})

const PORT = 3001
app.listen(PORT, () => {
  console.log(`API服务运行在 http://localhost:${PORT}`)
})
