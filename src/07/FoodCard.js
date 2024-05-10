import bank from "./img/bank.png"
import busan from "./img/busan.png"
import market from "./img/market.png"
import { useState } from "react"

// 부모 노드에서 tags라는 배열을 받아옴
export default function FoodCard({tags}) {
    // 변화를 주기 위한 useState 선언
    const [isShow, setIsShow] = useState(false);
    const handleShow = () => {
        setIsShow(!isShow);
    }
    return (
        <div className="flex w-full h-40 justify-start mt-10 border">
            <div className="flex w-30 h-30 justify-start">
                <img src={tags["구분"] ==="광역지원센터" ? busan : 
                          tags["구분"] ==="기초푸드뱅크" ? market : bank} />
            </div>
            <div className="flex flex-col justify-between w-full items-end ml-2">
                <p className="font-bold text-2xl">{tags.사업장명}</p>
                <p className="text-1xl font-bold text-gray-500">{tags.운영주체명}</p>
                <p>{tags["사업장 소재지"]}</p>
                <div className="flex w-full h-10 justify-end items-center text-white font-bold bg-slate-500" onClick={handleShow}>
                    {isShow && <p>Tel. {tags["연락처(대표번호)"]}</p>}
                </div>
            </div>
        </div>
    )
}
