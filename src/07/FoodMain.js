import fooddata from "./fooddata.json"
import ButtonC from "../UI/ButtonC"
import FoodCard from "./FoodCard"
import { useState } from "react";



export default function FoodMain() {
    const [c1List, setC1List] = useState([]);

    // 배열 이용하여 운영주체 분류 부분만 가져오기
    let c1 = fooddata.map(item => (item["운영주체 분류"]));
    // 가져오는 배열에서 중복 제거
    c1 = new Set(c1);
    // new Set을 하면 배열이 잘리는데 그것을 다시 배열로 하는 함수
    c1 = [...c1];

    // 버튼이 클릭되면 일어나는 함수
    const handleC1 = (c) => {
        // 데이터 중 조건에 맞는 것을 필터링
        let tm = fooddata.filter(item => item["운영주체 분류"] === c)
        // 다시 그것을 재배열 해서 자식 노드에게 probs 
        // tags == 클릭한 버튼에 나와있는 글자와 데이터의 배열중 운영주체 분류에 있는 데이터와 같은 것들만 필터링이 된 데이터
                         .map(item => <FoodCard tags={item} key={item["사업장명"]}/>)
        setC1List(tm)
    }

                            // let c1list = fooddata.map(item => <FoodCard key={item} tags={item}/>)

    // 가져왔던 배열에 버튼을 씌워 함수화
    const c1Bts = c1.map(item =>
        <ButtonC caption={item} key={item} bcolor={"gray"} handleClick={() => { handleC1(item) }} />
    );

    return (
        <div className="flex flex-col w-full h-full justify-start items-center">
            <div className="w-full grid grid-cols-2 md:grid-cols-5 gap-4 py-2 text-1.5xl">
                {c1Bts}
            </div>
            <div className="w-full grid grid-cols-1 md:grid-cols-2 gap-4">
                {c1List}
            </div>
        </div>
    )
}
