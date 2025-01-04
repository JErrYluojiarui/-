const express = require('express')
const bodyParser = require('body-parser')
const cors = require('cors')

const app = express()

// Middleware
app.use(cors())
app.use(bodyParser.json())
app.use(express.static('dist'))

// In-memory data store
let articles = []
let idCounter = 0

// API Routes
app.get('/api/articles', (req, res) => {
  res.json(articles.map((article, index) => ({
    id: index,
    title: article.title,
    summary: article.content.substring(0, 100),
    createdAt: article.createdAt
  })))
})

app.get('/api/articles/:id', (req, res) => {
  const id = parseInt(req.params.id)
  if (id >= 0 && id < articles.length) {
    res.json(articles[id])
  } else {
    res.status(404).json({ error: 'Article not found' })
  }
})

app.post('/api/articles', (req, res) => {
  const { title, content } = req.body
  if (!title || !content) {
    return res.status(400).json({ error: 'Title and content are required' })
  }

  const newArticle = {
    id: idCounter++,
    title,
    content,
    createdAt: new Date().toISOString()
  }
  articles.push(newArticle)
  res.status(201).json(newArticle)
})

// Serve Vue app
app.get('*', (req, res) => {
  res.sendFile('index.html', { root: 'dist' })
})

// Start server
const PORT = 3000
app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`)
})
