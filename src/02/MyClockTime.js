import './MyClock.css';
import style from './My.module.css';
import { useState, useEffect } from 'react';
function MyClockTime () {
const [ctime, setCtime] = useState(new Date( ));
useEffect(()=>{
    const tm = setInterval(()=>{
        setCtime(new Date())
    },1000)
    return()=>{
        clearInterval(tm);
    }
})
//    let divStyle;
//    if (gubun == "오전") divStyle = "div1";
//    else divStyle = "div2";

    //return에 {} 열면 수식을 쓸 수 있음
    //삼항연산자 이용해서 조건에 맞으면 div1 스타일 거짓이면 div2 스타일 적용
    //Instyle로 하려면 오브젝트로 사용해야함 {{}}
    return (
        <>
        {/* {
            gubun === "오전" ? <div className="div1">{nowStr}</div>
                                : <div className="div2">{nowStr}</div> */}
        {/* <div className={gubun === "오전" ? "div1" : "div2"}> */}
        {/* <div style={{color:"yellow", fontWeight : "bold"}}> */}
        <div className={style.c1}>
           {ctime.toLocaleTimeString()} 
        </div>
        </>
    );
}

export default MyClockTime;