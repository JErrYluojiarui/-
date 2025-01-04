const express = require('express');
const bodyParser = require('body-parser');
const app = express();

// 设置模板引擎
app.set('view engine', 'ejs');

// 静态文件目录
app.use(express.static('public'));

// 解析表单数据
app.use(bodyParser.urlencoded({ extended: true }));

// 临时存储文章
let articles = [];

// 首页 - 显示所有文章
app.get('/', (req, res) => {
  res.render('index', { articles });
});

// 显示创建文章页面
app.get('/articles/new', (req, res) => {
  res.render('new');
});

// 创建新文章
app.post('/articles', (req, res) => {
  const { title, content } = req.body;
  articles.push({ title, content });
  res.redirect('/');
});

// 查看单个文章
app.get('/articles/:id', (req, res) => {
  const id = req.params.id;
  const article = articles[id];
  res.render('show', { article });
});

// 启动服务器
const PORT = 3000;
app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});
