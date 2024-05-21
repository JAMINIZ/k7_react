import { useState, useEffect } from "react";
import ButtonC from "../UI/ButtonC";
// 환경변수 설정
export default function TrafficMain() {
    const [tdata, setTdata] = useState([]);  //전체 fetch 데이터
    //  호출시 구조분해할당 [c1(변수), setC1(set함수)] = useState();  ==> 여기까지는 선언
    const [c1, setC1] = useState();         //대분류
    const [c1Tag, setC1Tag] = useState();   //대분류 버튼
    const [c1Sel, setC1Sel] = useState();   //선택된 대분류

    const [c2, setC2] = useState();         //중분류
    const [c2Tag, setC2Tag] = useState();   //중분류 버튼
    const [c2Sel, setC2Sel] = useState();   //선택된 중분류

    const [info, setInfo] = useState();   //선택된 상세자료

    //대분류를 선택할 때 실행
    const handleC1Select = (item) => {
        setC1Sel(item)
    }
    
    //대분류를 선택할 때 실행
    const handleC2Select = (item) => {
        setC2Sel(item)
    }

    //fetch(자바 스크립트 기본 함수) 함수로 데이터 가져오기
    const getFetchData = (url) => {
        fetch(url)
            .then(resp => resp.json()) // 비동기 방식으로 데이터 가공
            .then(data => setTdata(data.data))
            .catch(err => console.log(err));
    }

    //useEffect(); 호출하지 않아도 실행 됨 (인수) 인수에따라서 달라진다. 
    // 기본적으로 인수에 '()=>{} (화면 변경(state 변수가 변경 되면)이 되면 무조건)' 콜백함수가 들어감 '()=>{},[]'(맨처음 한 번 실행)
    // '()=>{}.[변수]'(특정 변수가 바뀔 때)

    //컴포넌트 생성 시 한 번 실행
    useEffect(() => {
        let url = 'https://api.odcloud.kr/api/15070282/v1/uddi:00e5cb5a-ecdf-4190-a499-ba3a6b2a8db9?'
        url = `${url}page=1&perPage=17&returnType=json`;
        url = `${url}&serviceKey=${process.env.REACT_APP_API_KEY}`;
        getFetchData(url);
    }, []);

    //tdata가 변경 되면 실행
    useEffect(() => {
        if (tdata.length === 0) return;

        let tm = tdata.map(item => item["사고유형_대분류"])
        tm = [...new Set(tm)];

        setC1(tm);

    }, [tdata]);

    ///대분류 생성 후
    useEffect(() => {
        if (!c1) return;
        let tm = c1.map(item => <ButtonC caption={item}
            key={item}
            bcolor={'blue'}
            handleClick={() => { handleC1Select(item) }} />)
        setC1Tag(tm);
    }, [c1]);
    
    //대분류 선택 => 중분류
    useEffect(() => {
        console.log("대분류선택 : ", c1Sel)
        let tm = tdata.filter(item => item['사고유형_대분류'] === c1Sel)
        .map(item => item['사고유형_중분류']);
        console.log("중분류선택 후", tm)
        setC2(tm);
        
    }, [c1Sel]);
    
    //중분류가 만들어 졌을때
    useEffect(() => {
        if (!c2) return;
        let tm = c2.map(item => <ButtonC caption={item}
            key={item}
            bcolor={'blue'}
            handleClick={() => { handleC2Select(item) }} />)
        setC2Tag(tm);
    }, [c2]);

    useEffect(()=>{
        console.log("대분류선택 :", c1Sel)
        console.log("중분류선택 :", c2Sel)

        let tm = tdata.filter(item => item['사고유형_대분류']===c1Sel && item['사고유형_중분류'] === c2Sel)
        tm = tm[0];
        setInfo(tm['사고건수']);
        console.log("상세",tm)
    },[c2Sel]);



    return (
        <div className="w-10/12 h-full flex flex-col  justify-start items-start">
            <div className="w-full flex justify-between items-center my-10 ">
                <div className="flex w-1/4 justify-start items-center">교통사고 대분류</div>
                <div className="w-3/4 flex">
                    {c1Tag}
                </div>
            </div>
            <div className="w-full flex justify-between items-center my-10 ">
                <div className="flex w-1/4 justify-start items-center">교통사고 중분류</div>
                <div className="w-3/4 flex">
                    {c2Tag}
                </div>
            </div>
            <div className="w-full flex justify-between items-center my-10 ">
                
            </div>
        </div>
    )
}
