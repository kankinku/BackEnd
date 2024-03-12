// server.js

const http = require('http');

const hostname = '0.0.0.0'; // 모든 IP 주소에서 접속 허용
const port = 3000; // 포트 번호 변경 가능

const server = http.createServer((req, res) => {
  res.statusCode = 200;
  res.setHeader('Content-Type', 'text/plain');
  res.end('Hello, world!\n');
});

server.listen(port, hostname, () => {
  console.log(`Server running at http://${hostname}:${port}/`);
});