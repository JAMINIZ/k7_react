// import box from "./BoxOffice.json"
import BoxOfiiceTbody from "./BoxOfiiceTbody";
import BoxOfficeThead from "./BoxOfficeThead";
import BoxOfficeInfo from "./BoxOfficeInfo";

import { useState, useEffect, useRef } from "react";

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
    const selDate = useRef();
    // const [tdata, setTdata] = useState();

    // 데이터 가져오기
    const getFetchData = (url) => {
        fetch(url)
        .then(resp => resp.json())
        .then(data => setDailylist(data.boxOfficeResult.dailyBoxOfficeList))
        .catch(err => console.log(err))
    }
    //날짜가 선택 되었을 때
    const handleSelect = (e) => {
        e.preventDefault();
        // console.log(selDate.current.value); // ref 변수 사용할 때
        // console.log(e.target.value); // ref 변수 사용하지 않을 때

        // http://kobis.or.kr/kobisopenapi/webservice/rest/boxoffice/searchDailyBoxOfficeList.json?key=f5eef3421c602c6cb7ea224104795888&targetDt=20120101
        let url = `http://kobis.or.kr/kobisopenapi/webservice/rest/boxoffice/searchDailyBoxOfficeList.json?`
        url = url + `key=${process.env.REACT_APP_MV_KEY}`;
        url = url + `&targetDt=${selDate.current.value.replaceAll('-', '')}`;
        getFetchData(url)
        console.log(url)
    }


    // useEffect(() => {
    //     setDailylist(box.boxOfficeResult.dailyBoxOfficeList);
    // }, []);

    useEffect(() => {
        setSelMv(dailyList[0])
    }, [dailyList]);


    return (
        <div className="w-full h-full">
            <div className="w-full flex flex-col justify-start items-center mt-10">
                <form className="w-full">
                    <div className="w-full mb-5 flex items-center justify-end">
                        <label htmlFor="dateId">날짜선택</label>
                        <input type="date"
                            ref={selDate}
                            onChange={handleSelect}
                            className="border-2 border-gray-300 rounded px-3 py-2 w-56 ml-5"
                            id="dateId" />
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
