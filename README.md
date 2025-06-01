# Notification Center Design

청소연구소(Cleaning Lab) 디자인 시스템을 따르는 알림센터 페이지입니다.

## 주요 기능

- 반응형 디자인
- 알림 상태 표시 (읽음/안읽음)
- 에러 상태 표시
- 변경 이력 토글 지원
- 다양한 알림 타입 지원 (배송, 포인트, 쿠폰 등)
- 빈 상태(Empty State) 처리

## 기술 스택

- HTML5
- CSS3
- JavaScript
- Pretendard 폰트

## 시작하기

1. 저장소 클론
```bash
git clone [repository-url]
cd my-react-app
```

2. 웹 서버로 실행
```bash
# Python 3
python -m http.server 8000

# 또는 Node.js
npx http-server
```

3. 브라우저에서 열기
```
http://localhost:8000/src/new-landing.html
```

## 디자인 시스템

- 시멘틱 컬러 시스템 사용
- 일관된 타이포그래피
- 표준화된 간격과 정렬
- 접근성 고려한 마크업

# React + TypeScript + Vite

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react) uses [Babel](https://babeljs.io/) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh

## Expanding the ESLint configuration

If you are developing a production application, we recommend updating the configuration to enable type-aware lint rules:

```js
export default tseslint.config({
  extends: [
    // Remove ...tseslint.configs.recommended and replace with this
    ...tseslint.configs.recommendedTypeChecked,
    // Alternatively, use this for stricter rules
    ...tseslint.configs.strictTypeChecked,
    // Optionally, add this for stylistic rules
    ...tseslint.configs.stylisticTypeChecked,
  ],
  languageOptions: {
    // other options...
    parserOptions: {
      project: ['./tsconfig.node.json', './tsconfig.app.json'],
      tsconfigRootDir: import.meta.dirname,
    },
  },
})
```

You can also install [eslint-plugin-react-x](https://github.com/Rel1cx/eslint-react/tree/main/packages/plugins/eslint-plugin-react-x) and [eslint-plugin-react-dom](https://github.com/Rel1cx/eslint-react/tree/main/packages/plugins/eslint-plugin-react-dom) for React-specific lint rules:

```js
// eslint.config.js
import reactX from 'eslint-plugin-react-x'
import reactDom from 'eslint-plugin-react-dom'

export default tseslint.config({
  plugins: {
    // Add the react-x and react-dom plugins
    'react-x': reactX,
    'react-dom': reactDom,
  },
  rules: {
    // other rules...
    // Enable its recommended typescript rules
    ...reactX.configs['recommended-typescript'].rules,
    ...reactDom.configs.recommended.rules,
  },
})
```
