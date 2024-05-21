import ButtonC from "../UI/ButtonC"
import { useState, useEffect, useRef } from "react";
export default function MyRef() {
    let cVal = 0;
    const [sVal, setSval] = useState(0);
    const rVal = useRef(0);

    const x1 = useRef();
    const x2 = useRef();
    const x3 = useRef();

    const handleClickComp = () => {
        cVal++;

    }
    const handleClickState = () => {
        setSval(sVal + 1);
    }
    const handleClickRef = () => {
        rVal.current = rVal.current + 1;
    }
    const handleClick = () => {
        console.log("x1 =", x1.current.value);
        console.log("x2 =", x2.current.value);

        x3.current.value = parseInt(x1.current.value) + parseInt(x2.current.value)
    }

    //변수 변경시
    useEffect(() => {
        console.log("sVal", sVal)
    }, [sVal])
    return (
        <div className="flex flex-col justify-center items-center">
            <div className="h-20 p-5 m-5 font-bold text-xl">
                <span className="text-red-700"> 컴포넌트 변수 : {cVal} </span>
                <span className="text-blue-600 mx-5"> state 변수 : {sVal}</span>
                <span> ref 변수 : {rVal.current} </span>
            </div>
            <div>
                <span><ButtonC caption={"컴포넌트 변수"}
                    bcolor={'blue'}
                    handleClick={handleClickComp} />
                </span>
                <span className="mx-5"><ButtonC caption={"state 변수"}
                    bcolor={'blue'}
                    handleClick={handleClickState} />
                </span>
                <span><ButtonC caption={"ref 변수"}
                    bcolor={'blue'}
                    handleClick={handleClickRef} />
                </span>
            </div>
                <div className="flex justify-center items-center mt-5 bg-slate-400">
                    <input ref={x1} className="justify-center items-center bg-gray-100 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 cursor-not-allowed dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-gray-400 dark:focus:ring-blue-500 dark:focus:border-blue-500" type="number" id="txt1" />
                    <span>+</span>
                    <input ref={x2} className="justify-center items-center bg-gray-100 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 cursor-not-allowed dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-gray-400 dark:focus:ring-blue-500 dark:focus:border-blue-500" type="number" id="txt2" />
                    <ButtonC caption={"="}
                        bcolor={'orange'}
                        handleClick={handleClick} />
                    <input ref={x3} className="justify-center items-center  bg-gray-100 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 cursor-not-allowed dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-gray-400 dark:focus:ring-blue-500 dark:focus:border-blue-500" type="number" id="txt3" readOnly />
                </div>
        </div>
    )
}
