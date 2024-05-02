import logo from './logo.svg';
import './App.css';
import Hello from './01/Hello';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <Hello />
      </header>
    </div>
  );
}

export default App;
// react는 자바스크립트를 짤 때 반드시 return 을 짠다 
//＃ .js 파일에는 function 하나만 들어가게  
//＃ function 이름은 반드시 대문자로 시작
// return 에는 우리가 아는 태그를 쓴다.
// ＃ 부모노드 (태그 하나만) return 한다  
// 자식노드에는 태그 여러개 해도 상관 없다.
// import를 했으면 export deafault 를 해줘야 함 index에서 받아온 App 를 export!
// class 가 아닌 className 으로 작성 카멜 표기법 사용
// 새로 만든 컴포넌트(.js 하나하나를 의미함)를 재사용 가능함
