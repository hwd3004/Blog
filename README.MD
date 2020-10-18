# 인프런 강의 - 리액트로 나만의 블로그 만들기(MERN Stack)

---

# 04 Exporess, Babel, Mongoose Install

1. npm iexpress - 서버 프레임워크

   cors - 교차 출처 리소스 공유

   hpp, helmet - 서버 보안 라이브러리

2. npm i mongoose moment

   mongoose - 자바스크립트만으로 몽고db 사용 가능

   moment - 세계 시간대 기준 한국 시간 조정

3. npm i @babel/cli @babel/core @babel/node @babel/preset-env babel-loader @babel/polyfill -D

   -D는 개발단계에서만 사용

4. npm i morgan nodemon -D

   morgan - 서버에서 로그 기록을 보여줌

   nodemon - 서버 즉각 재실행해주게 하는 라이브러리

---

# 05 Express Start

1. nodemon, babel-node 충돌

   nodemon은 지우고, npm i babel-watch

   package.json에

   "dev-watch" : "babel-watch server/server.js --ignore'./client'"

   추가

   이후 서버 실행은 npm run dev-watch

2. server 폴더에 .babelrc 만들어서

   {
   "presets": ["@babel/preset-env"]
   }

---

# 06 MongoDB Modeling(1)

몽고DB 모델 구축

---

# 08 MongoDB Cluster Connect

몽고DB 아틀라스를 이용하여 클러스터 연결

---

# 09 Router(1)

1. npm run dev-watch 하니 뜨는 에러

   webprograming\Nomad\Blog\server\routes\api\post.js:9
   router.get("/", async (req, res) => {
   ^
   ReferenceError: regeneratorRuntime is not defined

2. 에러가 뜬 파일 상단에 import "@babel/polyfill"; 해주니 해결됨

---

# 10 Router(2)

postman 가입, 설치, 테스트

---

# 11 UserRoutes

1. npm i bcryptjs jsonwebtoken

2. bcrypt
   
   비크립트가 뭐하는 것인지 알려면 우선 해쉬를 알아야한다

   해쉬는 어떤 값이 있다면, 문장 길이에 관계없이 이것을 어떤 일정한 길이의 값으로 변경할수 있는 코드

   비크립트는 이런 해쉬값을 쉽게 만들어준다

---

# 12 Auth Middleware

---

# 13 Auth Routes

---

# 14 CRA & Redux(1)

1. 터미널에서 client 폴더로 이동한 후에
   
   npx create-react-app .

   src에서 assetsm components, redux, routes 폴더 만듬

---

# 15 CRA & Redux(2)

1. 터미널에서 client로 이동한 후에,

   npm i redux react-redux redux-saga react-router-dom connected-react-router bootstrap reactstrap dotenv

2. redux, react-redux - 상태 관리

   redux-saga - 비동기식 상태 관리

   connected-react-router - 리덕스를 사용해서 라우터를 관리

3. npm i history

   history 설치 관련하여 강의 참고

---

# 16 CRA & Redux(3)

1. 리액트는 처음에는 배우기 쉽지만, 갑자기 어려워진다

   그 이유는 상태 관리를 하기 위한 라이브러리로 리덕스를 써야하는데,

   사용하기 어렵기 때문

   1. 리덕스를 사용하지 않고 상태 관리를 할 수 있다

      대표적으로 graphql

   2. 하지만 현 시점에 웹을 개발하거나 배운다고 하면 대부분의 서버는

      REST API 서버로 되어있기 때문에, 리덕스를 배워야한다

   3. 옛날보단 리덕슬르 배우기가 그나마 조금 쉬워졌다

2. redux 폴더에 reducers, sagas 폴더 만들고 기본세팅

---

# 17 Router Basic Setting

리덕스 설정 파일들 오타 수정, 라우터 기초 세팅

---

# 18 Footer

npm i node-sass sass-loader

서버 재실행