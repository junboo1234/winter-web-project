# frontend
## react 동작 과정  

### 1. package.json 
npm start를 입력 하면 package.json에서 start에 해당하는 명령어가 실행 됨 

### 2. index.js
index.js의 코드 실행

```js
import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);  

reportWebVitals();
``` 
```js 
import App from './App';
```
를 통해서 App을 파일을 불러오고 
```js
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);  
```
을 통해서 App 파일을 실행한다.    

index.html 파일의 root를 찾아서 ReactDOM.createRoot로 react 전용 구역으로 만든다. 

root.render() 을 통해서 리엑트 컴포넌트를 실제로 화면에 넣는다. 


#### 실제 동작
start 누르면 "react-scripts start" 가 시작되며 내 컴퓨터에 임시 웹 서버를 띄우게 해줌

