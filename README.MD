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

