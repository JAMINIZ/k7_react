import { GoTriangleUp } from "react-icons/go";
import { GoTriangleDown } from "react-icons/go";
export default function BoxOfiiceTbody({ dailyList, setSelMv }) {
    // console.log(dailyList)
    const handleMvSelect = (mv) => {
        // console.log("handleMvSelect",mv)
        setSelMv(mv);
    }
    // tags 라는 변수를 만드는데 dailyList라는 배열을 통해서 만듦 map을 통해 필요한 자료를 가져와서 tr에 집어 넣음
    const tags = dailyList.map(item =>
        <tr key={item.movieCd}
            // 배열마다 다르게 클릭정보를 전달 받아야 하기 때문에 콜백함수를 사용해야 함
            onClick={()=>{handleMvSelect(item)}}
            className="border-b border-neutral-200 ease-in-out hover:bg-neutral-100">
            <td className="whitespace-nowrap px-6 py-2 font-medium text-center">{item.rank}</td>
            <td className="whitespace-nowrap px-6 py-2 text-center">{item.movieNm}</td>
            {/* <td className="whitespace-nowrap px-6 py-2">{item.salesAcc.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",")}원</td> */}
            <td className="whitespace-nowrap px-6 py-2 text-center">{parseInt(item.salesAcc).toLocaleString("ko-KR")}원</td>
            <td className="whitespace-nowrap px-6 py-2 text-center">{item.audiAcc.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",")}명</td>
            <td className="whitespace-nowrap px-2 py-2 flex justify-center text-center">
                <span>{(item.rankInten) > 0 ? <GoTriangleUp className="text-red-600"/> : (item.rankInten) < 0 ? <GoTriangleDown className="text-blue-600"/> : "-"}</span>
                <span>
                    {Math.abs(item.rankInten)}
                </span>
                </td>
        </tr>
    );
    return (
        <tbody>
            {tags}
        </tbody>
    )
}
