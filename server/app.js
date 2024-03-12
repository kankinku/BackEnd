const express = require('express');
const multer = require('multer');
const path = require('path');

const app = express();

// 파일 업로드를 위한 multer 설정
const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, 'uploads/'); // 파일이 저장될 디렉토리 설정
  },
  filename: function (req, file, cb) {
    cb(null, file.originalname); // 파일 이름 설정
  }
});

const upload = multer({ storage: storage });

// 루트 페이지
app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, 'index.html')); // 파일 업로드를 할 HTML 페이지 제공
});

// 파일 업로드 처리
app.post('/upload', upload.single('file'), (req, res) => {
  res.send('파일이 업로드 되었습니다.');
});

// 서버 시작
const port = 3000;
app.listen(port, () => {
  console.log(`서버가 http://localhost:${port} 에서 실행 중입니다.`);
});