# msw 확인순서

1. ./mock/brower.js 생성(내부 내용은 유지해도 됨)
2. ./mock/handler.js 생성 (메서드, url, 불러올 내용 작성)
3. 터미널에 `npx msw init public/ --save` 입력 (`public/`은 정적 데이터폴더를 지칭)
4. index.js에서

```javascript
if (process.env.NODE_ENV === "development") {
  const { worker } = require("./mock/browser");
  worker.start();
}
```

추가

5. npm run start
6. 브라우저 콘솔창에서 `[MSW] Mocking enabled` 문구 확인
