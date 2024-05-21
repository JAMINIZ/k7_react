import box from "./BoxOffice.json"
import BoxOfiiceTbody from "./BoxOfiiceTbody";
import BoxOfficeThead from "./BoxOfficeThead";
import BoxOfficeInfo from "./BoxOfficeInfo";

import { useState, useEffect } from "react";

//부모 노드인 BoxOffice 가 hook 애들을 가질 수 있고 함수, 속성도 전달할 수 있다
export default function BoxOffice() {
    //Object에서 . 연산자 사용하여 필요한 거 뽑아오기
    //필요했던 정보를 ul 태그의 li 10개를 만든 과정
    // const mi = dailyList.map(item =>
    //     <tr key={item.movieCd}>
    //         [{item.rank}] : {item.movieNm}
    //     </tr>);
    const [dailyList, setDailylist] = useState([]);
    const [selMv, setSelMv] = useState();

    useEffect(() => {
        setDailylist(box.boxOfficeResult.dailyBoxOfficeList);
    }, []);

    useEffect(() => {
        setSelMv(dailyList[0])
    }, [dailyList]);


    return (
        <div className="w-full h-full">
            <div className="w-full flex flex-col justify-start items-center mt-10">
                <form>
                <div>
                    <input type="date" />
                </div>
                </form>
                <table className="w-11/12 text-left text-sm font-light text-surface">
                    <BoxOfficeThead />
                    <BoxOfiiceTbody dailyList={dailyList} setSelMv={setSelMv} />
                                            {/*Tbody에서 setSelMv로 바뀌게 되면 Info에서 selMv가 실행*/}
                </table>
               {selMv && <BoxOfficeInfo selMv={selMv} />}
            </div>
        </div>
    )
}
