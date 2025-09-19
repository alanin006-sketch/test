// app.js
const http = require('http');

// Получаем порт из переменной окружения или используем порт 10000 по умолчанию
const port = process.env.PORT || 10000;

const server = http.createServer((req, res) => {
  res.statusCode = 200;
  res.setHeader('Content-Type', 'text/plain');
  res.end('Hello, World!\n');
});

// Слушаем на всех интерфейсах (0.0.0.0) и указанном порту
server.listen(port, '0.0.0.0', () => {
  console.log(`Server running at http://0.0.0.0:${port}/`);
});
