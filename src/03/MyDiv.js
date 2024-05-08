import MyDiv2 from "./MyDiv2"
//1. useStagte import
import { useState } from "react";

export default function MyDiv() {
  //2. state 변수 선언 [변수명, set변수명] = useState(초기값);
  const [n, setN] = useState(0);
  const dname1 = "vdiv1";
  const dname2 = "vdiv2";
  const dname3 = "vdiv3";
  let cnt = 0;

  const handleCount = () => {
    cnt = cnt + 1;
    setN(n + 1);
    console.log("handlecount", cnt);
  }

  return (
    <div className="flex flex-col w-2/3 h-2/3 text-2xl bg-lime-950 text-neutral-50 justify-center items-center rounded-sm m-10 p-5">
      <div className="w-full h-20  border p-10 flex justify-end items-center">
        <span className="inline-flex p-5 mx-5 " onClick={handleCount}>
          💛
        </span>
        <span >
          {n}
        </span >
      </div>
      <div className="w-full">
        {dname1}
      </div>
      <MyDiv2 dn1={dname1} dn2={dname2} dn3={dname3} />
    </div>
  )
}
