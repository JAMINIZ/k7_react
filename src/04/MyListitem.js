import { useState } from "react";
export default function MyListitem({title, imgUrl, content}) {
    const [n, setN] = useState(0);
    let cnt = 0;

  const handleCount = () => {
    cnt = cnt + 1;
    setN(n + 1);
    console.log("handlecount", cnt);
  }
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
            <div className="flex pt-10 justify-end items-end">
                <span onClick={handleCount}>💚</span>
                <span className="inline-flex mx-0 font-bold">좋아요</span>
                <span className="font-bold ite">{n}</span>
            </div>
        </div>
    </div>
  )
}
