# ✅ 트위터 클론 코딩
Firebase를 활용하여 이메일 & Github 로그인, 이미지 첨부, 편집 등 다양한 기능을 만들어보겠습니다.

배포 URL : X

## 🎇프로젝트 개요

미정 <br />

## 📃목차

- [프로젝트 개요](#프로젝트-개요)
- [프로젝트 구성원](#프로젝트-구성원)
- [주요 기능](#주요-기능)
- [기술 스택](#기술-스택)
- [폴더 구조](#폴더-구조)
- [설치 및 실행 방법](#설치-및-실행-방법)
- [개발 기간](#개발-기간)
- [트러블 슈팅](#트러블-슈팅)
- [향후 개선 사항](#향후-개선-사항)
- [느낀점](#느낀점)

## 👩🏻‍💻프로젝트 구성원
|                                                   Frontend                                                   |
| :-----------------------------------------------------------------------------------------------------------:| 
|                                                  **이주환**                                                  |
| [<img src="https://github.com/LeeJuHwan777.png" width="300"> <br/> @juhwan](https://github.com/LeeJuHwan777) |

## 💡주요 기능

미정

## 🛠기술 스택

### 📌Frond-end

<div style={{display: "flex"}}>
<img src="https://img.shields.io/badge/React-61DAFB?style=for-the-badge&logo=React&logoColor=black">
<img src="https://img.shields.io/badge/TypeScript-3178C6?style=for-the-badge&logo=TypeScript&logoColor=white">
<img src="https://img.shields.io/badge/Styled--Components-DB7093?style=for-the-badge&logo=styled-components&logoColor=white">
<img src="https://img.shields.io/badge/React--Query-FF4154?style=for-the-badge&logo=React-Query&logoColor=white">
</div>

### 📌Frond-end
<div style={{display: "flex"}}>
<img src="https://img.shields.io/badge/Firebase-111111?style=for-the-badge&logo=Firebase&logoColor=red">
</div>

### 📌버전 관리 및 협업 도구

<div style={{display: "flex"}}>
<img src="https://img.shields.io/badge/Git-F05032?style=for-the-badge&logo=Git&logoColor=white">
<img src="https://img.shields.io/badge/GitHub-181717?style=for-the-badge&logo=GitHub&logoColor=white">
<img src="https://img.shields.io/badge/Notion-000000?style=for-the-badge&logo=Notion&logoColor=white">
</div>

<br />

## 📁폴더 구조

<details>
  <summary>최상위 구조</summary>
  <pre><code>
  NFE1-1-3-techLog/
  ├──.github
  ├──BackEnd
  ├──frontend
  ├──.gitignore
  ├──.prettierrc
  ├──.package-lock.json
  ├──.package.json
  └──README.md
  </code></pre>
</details>
<details>
  <summary>프론트엔드 디렉토리 구조</summary>
<pre><code>
src/
│
├── components/
│   ├── common/
│   │   ├── Button.js
│   │   ├── Input.js
│   │   └── ...
│   │
│   ├── layout/
│   │   ├── Header.js
│   │   ├── Footer.js
│   │   └── ...
│   │
│   └── feature/
│       ├── UserProfile.js
│       ├── ProductList.js
│       └── ...
│
├── pages/
│   ├── Home.js
│   ├── About.js
│   ├── Contact.js
│   └── ...
│
├── hooks/
│   ├── useForm.js
│   ├── useAPI.js
│   └── ...
│
│
├── api/
│   ├── auth.js
│   └── ...
│
│
├── styles/
│   ├── global.css
│   ├── variables.css
│   └── ...
│
├── assets/
│   ├── images/
│   ├── fonts/
│   └── ...
│
└── App.js
</code></pre>
</details>

<br />

## 🔄 User Flow

<img src="https://ifh.cc/g/QCJzpv.jpg" />

**주요 사용자 흐름**<br />

1. 비로그인 사용자: 카드 열람 및 회원가입 가능
2. 로그인 사용자: 카드 작성/수정/삭제, 실시간 채팅 참여, 마이페이지 이용 가능
3. 마이페이지: 자신이 작성한 카드 관리 가능

<br />

## 📊 Database Schema

<img src="https://ifh.cc/g/aasd7P.png" />

**Collection**<br />

1. user
   - 사용자 정보 관리
   - 사용자 id(username), 비밀번호(password) 저장
2. post
   - 질문과 답변 정보 관리
   - 제목(title), 카테고리(category), 짧은 답변(shortAnswer), 긴 답변(detailedAnswer), 작성자 id(user 스키마의 objectId), 작성 시간(createdAt), 수정시간(updatedAt) 저장
3. comment
   - 실시간 채팅 메세지 저장
   - 작성자id(userId), 글id(postId), 댓글내용(content), 댓글 업로드 시간(createdAt) 저장

<br />

## 🚀설치 및 실행 방법

### 설치

1. **저장소 복제하기**

```
git clone https://github.com/prgrms-fe-devcourse/NFE1-1-3-techLog.git
```

2. **프론트엔드, 백엔드, 그리고 루트 디렉토리에 대한 종속성 설치**

```
// 루트 디렉토리
npm install

// 프론트엔드 디렉토리
cd frontend
npm install

// 백엔드 디렉토리
cd Backend
npm install
```

3. **환경 변수 설정**

- frontend, Backend 상단 디렉토리에 .env 파일 생성
- Backend: mongoDB 주소, secretKey
- frontend: 백엔드 도메인 주소

4. **개발 서버 시작**

```
// 프론트엔드 디렉토리
npm run start

// 백엔드 디렉토리
nodemon server.js or node server.js or npm run server
```

<br />

## 📆개발 기간

- 기획: 2024.10.17~2024.10.24
- 개발: 2024.10.25~2024.11.6

<br />

## 🛠트러블 슈팅

[Notion 참고](https://www.notion.so/13d5dca8300181ba9da2caacecdb9cfa)

<br />

## 🔧향후 개선 사항

- 카테고리 추가
- 예외 처리 보강
- 스크랩 기능 추가 -> 다른 사용자들의 질문 관리

<br />

## 👥느낀점

<details>
  <summary>이주환 (프론트엔드)</summary>
    <div markdown="1">
    <ul>
      <li>작성 예정</li>
      <li></li>
    </ul>
  </div>
</details>

