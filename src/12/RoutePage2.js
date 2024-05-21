import { useSearchParams, useLocation } from "react-router-dom";
export default function RoutePage2() {
    const fruits = ['🍎', '🍌'];
    const loc = useLocation();
    console.log(loc.pathname , loc.search)

    const [sParams] = useSearchParams();
    console.log('sParams =', sParams)
    // const item = sParams.get('item')

    let tm = [];
    sParams.forEach(item => fruits.includes(item) 
                            ? tm.push(`${item} : 과일`)
                            : tm.push(`${item} : 과일아님`)
                        )

    return (
        <div className="flex flex-col justify-center items-center">
            <h1 className="w-full flex text-2x1 font-bold justify-center items-center">
                RoutePage2
            </h1>
            <div>
                {/* {fruits.includes(item) ? `${item} : 과일입니다.` : `${item} : 과일이 아닙니다`} */}
                {tm.join(',')}
            </div>
        </div>
    )
}
