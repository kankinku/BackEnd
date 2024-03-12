# Linux - server.listen()

```jsx
server.listen(port, hostname, ()⇒{
	console.log(`server running a http://${hostname}:${port}/`);
});
```

→ listen은 port와 hostname을 

→ 서버를 시작하고 지정된 포트 및 호스트로 들어오는 연결을 수신 대기하는 데 사용됩니다. 

→ 서버를 포트 3000에서 localhost(즉, 현재 컴퓨터)에 연결하고 대기하도록 합니다. 

→ 요청이 수신되면 서버는 콜백 함수를 실행