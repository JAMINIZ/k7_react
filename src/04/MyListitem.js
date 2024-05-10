import { useState, useEffect } from "react";
export default function MyListitem({title, imgUrl, content}) {

// 현재는 비동기화 방식 (숫자를 바꾸는 동안 화면을 찍는 것)
  const [n, setN] = useState(0);
  const handleCount = () => {
    setN(n + 1);
    console.log(title, "n =", n);
  }
  // useEffect는 1.컴포넌트 생성시 최초 한번만 실행 2.함수가 콜백 함수가 들어감 
  useEffect(() => {
    console.log(title, "생성")
  }, []);

  // state 변수가 변경
  useEffect(() => {
    console.log(title, "변경 n = ", n);
  } , [n])

  // 컴포넌트가 변경되면 항상 실행
  useEffect(()=>{
    console.log(title, "변경됨");
  });
  return (
    <div className="flex h-50 w-full justify-center items-start p-5 bg-amber-50">
        <div className="flex w-1/3  h-full justify-center items-center">
            <img src={imgUrl} alt={title} />
        </div>
        <div className="flex flex-col w-2/3 m-2 p-2">
            <div className="font-bold text-4xl pt-10">
                {title}
            </div>
            <div className="text-1xl mt-4">
                {content}
            </div>
            <div className="flex pt-10 justify-end items-end ">
                {/* onClick을 누르면 handleCount 라는 함수를 호출하는 것 */}
                <span onClick={handleCount}>💖</span>
                <span className="inline-flex mx-0 font-bold">좋아요</span>
                <span className="font-bold ite">{n}</span>
            </div>
        </div>
    </div>
  )
}
