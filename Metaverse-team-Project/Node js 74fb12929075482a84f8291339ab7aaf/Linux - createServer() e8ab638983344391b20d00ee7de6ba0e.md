# Linux - createServer()

```jsx
const http = require('http');
const server = http.createServer((req, res) => {
  res.statusCode = 200;
  res.setHeader('Content-Type', 'text/plain');
  res.end('Hello, world!\n');
});
```

→ **`res.statusCode = 200;`**: HTTP 응답 상태 코드를 설정합니다. 여기서는 200을 사용하여 "OK"를 나타냅니다. 

→ **`res.setHeader('Content-Type', 'text/plain');`**: HTTP 응답 헤더를 설정합니다. 여기서는 'Content-Type' 헤더를 설정하여 응답의 콘텐츠 유형을 'text/plain'으로 지정합니다. 

→ **`res.end('Hello, world!\n');`**: 응답의 본문을 작성하고 응답을 완료합니다. 여기서는 "Hello, world!\n" 문자열을 클라이언트에게 반환합니다.