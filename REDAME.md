# 포트폴리오

> 개인 포트폴리오 웹사이트 입니다. Next.js와 TypeScript를 사용하여 개발했습니다.

## 시작하기

1. Repository 클론

   ```
   $ git clone https://github.com/eunjios/me
   ```

2. 노드 버전 설정

   ```
   $ nvm use
   ```

3. 패키지 설치

   ```
   $ pnpm install
   ```

4. 환경 변수 설정 (.env.local)

   ```
    NEXT_PUBLIC_FIREBASE_API_KEY=<your api>
    NEXT_PUBLIC_FIREBASE_AUTH_DOMAIN=<your auth domain>
    NEXT_PUBLIC_FIREBASE_PROJECT_ID=<your project id>
    NEXT_PUBLIC_FIREBASE_STORAGE_BUCKET=<your storage bucket>
    NEXT_PUBLIC_FIREBASE_MESSAGING_SENDER_ID=<your messaging sender id>
    NEXT_PUBLIC_FIREBASE_APP_ID=<your app id>
    NEXT_PUBLIC_FIREBASE_MEASUREMENT_ID=<your measurement>
   ```

5. 개발 서버 실행

   ```
   $ pnpm dev
   ```

## 프로젝트 구조

```
.
├── app
│   └── project
├── public
│   ├── assets
│   └── fonts
└── src
    ├── api
    ├── components
    ├── constants
    ├── css
    ├── firebase
    ├── types
    └── utils
```

## 기술 스택

### Frontend

- Next.js (App Router)
- TypeScript
- Context API
- Vanilla Extract

### Database

- Firebase
