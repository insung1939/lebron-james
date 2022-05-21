import "./styles/App.css"

export default function App() {
  return (
    <div className="lebron-Page">
      <h1 className="main-text">KING Lebron James!!</h1>
      <div className="lebron-gallery">
        <img src="img/lebron1.jpg" alt="lebronImg1" className="lebron-img" />
        <img src="img/lebron2.jpg" alt="lebronImg2" className="lebron-img" />
        <img src="img/lebron3.jpg" alt="lebronImg3" className="lebron-img" />
        <img src="img/lebron4.jpg" alt="lebronImg4" className="lebron-img" />
        <img src="img/lebron5.jpg" alt="lebronImg5" className="lebron-img" />
        <img src="img/lebron6.jpg" alt="lebronImg6" className="lebron-img" />
        <img src="img/lebron7.webp" alt="lebronImg7" className="lebron-img" />
        <img src="img/lebron8.png" alt="lebronImg8" className="lebron-img" />
        <img src="img/lebron9.jpg" alt="lebronImg9" className="lebron-img" />
      </div>
    </div>
  );
}


//리액트에서 라우터 작동하는 법
// 먼저 리액트 라우터 돔 설치하고
// index.tsx에서 브라우저라우터로 감싸주고
// App.tsx에서 링크로 라우터 설정
