# Park Jee Hoon Portfolio

**Version**: 0.1.0  
**Node.js Version**: 20.x

---

## 프로젝트 소개
`parkjeehoon-portfolio`는 박지훈 개인 포트폴리오를 위한 웹 애플리케이션 프로젝트입니다.  
[Next.js](https://nextjs.org/)와 최신 프론트엔드 기술 스택을 활용하여 설계되었으며,  
i18n(다국어 지원), 스타일 관리, 코드 정리를 통해 유지보수성과 확장성을 극대화했습니다.

---

## 주요 기술 스택

- **Framework**: Next.js, React.js
- **State Management**: React Redux
- **Styling**: SCSS, CSS Modules
- **Form Handling**: React Hook Form
- **i18n**: react-i18next
- **Type Checking**: TypeScript
- **Validation**: Yup
- **Linting & Formatting**: ESLint, Stylelint, Prettier

---

## 프로젝트 실행

### 개발 환경 설정

1. **Node.js 설치**:  
   이 프로젝트는 `Node.js 20.x` 버전을 요구합니다.  
   [Node.js 공식 웹사이트](https://nodejs.org/)에서 해당 버전을 설치하세요.

2. **Dependencies 설치**:  
   프로젝트 루트 디렉토리에서 다음 명령어를 실행하세요:
   ```bash
   npm install

```bash
개발 서버 실행:
npm run dev
```

```bash
프로덕션 빌드:
npm run build
```

```bash
프로덕션 서버 시작:
npm run start
```

```bash
Lint & Style Validation:
npm run lint
```

```bash
i18n 리소스 스캔:
npm run i18n-scan
```

## 프로젝트 구조
.
├── public/                # Static assets
├── src/
│   ├── components/        # Reusable components
│   ├── pages/             # Next.js pages
│   ├── styles/            # Global styles
│   └── utils/             # Utility functions
├── tools/                 # Project-specific tools (e.g., i18n scanner)
├── package.json           # Dependencies and scripts
└── README.md              # Project documentation

## 주요 의존성
### Dependencies
* React.js: 18.2.0
* Next.js: 14.2.1
* React Redux: 7.2.6
* React Hook Form: 7.47.0
* i18next/react-i18next: 21.6.6 / 11.18.6
* Yup: 1.5.0
* Lodash: 4.17.21
* Dev Dependencies
* TypeScript: ^5.4.5
* ESLint: ^8.x
* Stylelint: ^14.2.0
* Prettier: Integration with Stylelint and ESLint

## 기타 정보
### 라이센스: 개인 포트폴리오 용도로 제작된 프로젝트로, 무단 복제 및 사용을 금합니다.
### 문의: gkstj8300@naver.com