# 인프런 강의 - 리액트로 나만의 블로그 만들기(MERN Stack)

---

# 04 Express, Babel, Mongoose Install

1. express - 서버 프레임워크

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

   src에서 assets, components, redux, routes 폴더 만듬

---

# 15 CRA & Redux(2)

1. 터미널에서 client로 이동한 후에,

   npm i redux react-redux redux-saga react-router-dom connected-react-router bootstrap reactstrap dotenv

2. redux, react-redux - 상태 관리

   redux-saga - 비동기식 상태 관리

   connected-react-router - 리덕스를 사용해서 라우터를 관리

3. npm i history@^4.7.2 

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

---

# 19 Header(1)

Container, Row, Col 레이아웃 컴포넌트

https://reactstrap.github.io/components/layout/

---

# 20 Header(2)

1. 크롬 브라우저 익스텐션 page ruler redux
   
   크롬 브라우저로 웹사이트의 레이아웃 크기를 확인할 수 있음

---

# 21 Header(3) - Reducer Setting

헤더에 로그인 모달을 달아서 로그인 구현

---

# 22 Header(4) - LoginModal(1)

터미널에서 client로 가서 npm i axios

---

# 23 Header(4) - LoginModal(2)

---

# 24 Header(5) - AppNavBar Auth

---

# 25 Header(6) - Register Modal(1)

---

# 26 Header(6) - Register Modal(2)

---

# 27 UserLoading

---

# 28 Header(7) / history@^4.7.2

로그인 에러

---

# 29 Router

---

# 30 PostCardList(1)

---

# 31 PostCardList(2)

1. 터미널에서 client로 가서

   npm i react-helmet

2. npm i @fortawesome/react-fontawesome

   @font가 아니라 @fort

3. npm i @fortawesome/free-solid-svg-icons

4. @fortawesome/fontawesome-svg-core 가 없다는 에러가 떠서 설치

---

# 32 CKEditor5 Webpack Setting(1)

cd client

npm run eject

---

# 33 CKEditor5 Webpack Setting(2)

npm i @babel/plugin-transform-react-jsx @babel/plugin-transform-react-jsx-self

npm i raw-loader@3 @ckeditor/ckeditor5-dev-utils @ckeditor/ckeditor5-theme-lark @ckeditor/ckeditor5-react

npm i @ckeditor/ckeditor5-editor-classic @ckeditor/ckeditor5-essentials @ckeditor/ckeditor5-paragraph

npm i @ckeditor/ckeditor5-basic-styles

npm uninstall style-loader 하고 npm i style-loader

---

# 34 CKEditor5 EditorConfig

---

# 35 AWS Setting

aws s3 사용

---

# 36 Server Image Router

1. npm i multer multer-s3 path aws-sdk

2. multer는 파일들을 주고 받을 수 있게 도와주는 라이브러리
   
   multer-s3는 aws s3와 주고 받을게 있게 도와줌

3. path는 지금 경로를 파악할 수 있도록 도와주는 라이브러리

4. aws-sdk는 aws를 사용할 수 있게 도와주는 개발자 도구

---

# 37 CKEditor Final Setting

---

# 38 CKEditor5 For React

CKeditor 퉅바 아이콘들 엄청 크게 나오는 현상

해결방법은 현재 설치된 style-loader 2.0.0 버전을 지우고 1.2.1버전으로 설치

npm i style-loader@1.2.1

---

# 39 CKEditor GetDataFromCKeditor5

---

# 40 Post Route

---

# 41 Post Upload Saga

---

# 42 Post Detail(1)

---

# 43 Post Detail(2)