import ReactDOM from 'react-dom/client';
import App from './App';
import { BrowserRouter } from 'react-router-dom';
import Layout from './layout/Layout';
import { Routes, Route } from 'react-router-dom';
import LebronIntro from './pages/LebronIntro';
import LebronData from './pages/LebronData';
import './styles/index.css'

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(
  <BrowserRouter>
    <Layout>
      <Routes>
        <Route path='/' element={<App />} />
        <Route path='/lebronIntro' element={<LebronIntro />} />
        <Route path='/lebronData' element={<LebronData />} />
      </Routes>
    </Layout>
  </BrowserRouter>
);
//npx create-react-app project-name --template typescript 로 리액트 타입스크립트 프로젝트 시작
//app.css, app.test.tsx, index.css, logo.svg, reportWebVitals.ts, setupTest.ts 삭제(필요없음)
//index.tsx 에 있는 react.strictMode 삭제-> 애플리케이션 내의 잠재적인 문제를 알아내기 위한 도구이다.
//npm install react-router-dom@6 리액트 라우터 돔 설치