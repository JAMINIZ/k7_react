import './02/colock.png';
import './App.css';
import MyClock from './02/MyClock';
// import MyDiv from './03/MyDiv';
import { IoHome } from "react-icons/io5";
// import MyList from './04/MyList';
// import Lotto from './05/Lotto';
// import BoxOffice from './06/BoxOffice';
// import MyClockTime from './02/MyClockTime';
import FoodMain from './07/FoodMain';

function App() {
  return (
    <div className="flex flex-col w-full max-w-screen-xl mx-auto h-screen overscroll-y-auto">
      <header className='flex justify-between items-center text-xl font-bold h-20 p-10 bg-yellow-300'>
        <p>header</p>
        <p>k-digital</p>
        <p><IoHome className='text-3xl text-blue-950'/></p>
      </header>
      <main className='grow flex justify-center items-center'>
        {/* <div className='flex justify-center items-center'>
          <img src={cimg} className='App-logo' alt="logo"/>
        </div> */}
        {/* <MyDiv /> */}
        {/* <MyList /> */}
        {/* <Lotto /> */}
        {/* <BoxOffice /> */}
        {/* <MyClock/> */}
        <FoodMain/>
      </main>
      <footer className='flex justify-center items-center text-1xl font-bold text-white bg-slate-800 h-20'> 
        ⓒ 2024 ParkJeongWoo. All right reserved.
      </footer>
    </div>
  );
}

export default App;
// react는 사용자 ui를 만드는 라이브러리
// react는 자바스크립트를 짤 때 반드시 return 을 짠다 
// ＃ .js 파일에는 function 하나만 들어가게  
// ＃ function 이름은 반드시 대문자로 시작
// return 에는 우리가 아는 태그를 쓴다. (js x문법이 적용됨)
// ＃ 부모노드 (태그 하나만) return 한다  
// 자식노드에는 태그 여러개 해도 상관 없다.
// import를 했으면 export deafault 를 해줘야 함 index에서 받아온 App 를 export!
// class 가 아닌 className 으로 작성 카멜 표기법 사용
// 새로 만든 컴포넌트(.js 하나하나를 의미함)를 재사용 가능함
// 전역 스타일 시트로 쓰면 각각의 컴포넌트에 스타일 시트를 넣어도 전체로 스타일시트가 다 적용 된다.
// # probs 값 전달
// 원하는 시점에 화면이 바껴야함 그러려면 hook state가 필요함
// 바뀌고 나면
// ## [Use state 변수] 굉장히 중요 (함수이고 호출안해도 리액트가 제어함 컴포넌트 실행될 때 한 번만 실행됨)
// img 파일 public 폴더에 넣기 (json 파일에 경로에 돼있음)
// 함수형태가 된다는 것은 'react 기준' = function 함수명 ([입력]) {return([출력]);} 모든 프로그램들은 입력 -> 가공(프로그램) -> 출력
// tag는 속성을 가질 수 있다 <함수명 속성=값 / >