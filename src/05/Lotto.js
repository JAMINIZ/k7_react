import Ball from "./Ball";
import ButtonC from "../UI/ButtonC";
import { useState } from "react";

// 입력값이 들어가는 Lotto function
export default function Lotto() {
    //Ball의 숫자가 바뀌어야 하므로 tag 부분에 useState를 사용
    const [tags, setTags] = useState();
    
    const handleOK = () => {
        setTags(Math.floor(Math.random()*45)+1);
        // 버튼 누를때마다 배열 생성
        let arr = [] ;
        // 배열안에 중복되지 않는 숫자 7개 생성
        while(arr.length < 7){
          let n = Math.floor(Math.random() * 45) + 1 ;
    
          if (!arr.includes(n)) arr.push(n)
        }
        // 배열은 오름차순으로 정렬
        arr.sort();
        // map의 결과는 tm == 배열 => 그 배열로 Ball을 만듦 7개의 Ball이 생성
        let tm = arr.map(item => <Ball n={item} key={item}/>);
        // 배열 6번째에 span 을 추가
        tm.splice(6, 0, <span className="text-3xl mx-2" key="sp">+</span>);
        // setTags에는 배열 7개 6개의 숫자 + 가 생성
        setTags (tm);
        
    };
    // 출력값이 나오는 return
    return (
        <div className="w-full flex flex-col items-center justify-center">
            <div className="m-10">
                 {tags}
            </div>
            <div>
                <ButtonC caption={"로또번호생성"} bcolor={"orange"} handleClick={handleOK} />
            </div>
        </div>
    )
}
