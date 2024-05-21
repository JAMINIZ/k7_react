import { Link } from "react-router-dom"
export default function RouteHome() {
    return (
        <div className="flex flex-col justify-center items-center">
            <h1 className="w-full flex text-2x1 font-bold justify-center items-center">
                RouteHome
            </h1>
            <div className="w-full grid grid-cols-2 m-10">
                <div className="w-full flex flex-col justify-center items-center text-xl m-2 p-2">
                    <h2 className="font-bold my-5">Page1</h2>
                        <ul>
                            <li><Link to='p1/🍎'>사과🍎</Link></li>
                            <li><Link to='p1/🍌'>바나나🍌</Link></li>
                            <li><Link to='p1/🥕'>당근🥕</Link></li>
                        </ul>
                </div>
                <div className="w-full flex  flex-col justify-center items-center text-xl m-2 p-2">
                    <h2 className="font-bold my-5">Page2</h2>
                        <ul>
                            {/* <li><Link to='p2?item=🍎'>사과🍎</Link></li>
                            <li><Link to='p2?item=🍌'>바나나🍌</Link></li>
                            <li><Link to='p2?item=🥕'>당근🥕</Link></li> */}
                            <li><Link to='p2?item1=🍎&item2=🍌&item3=🥕'>사과🍎,바나나🍌,당근🥕</Link></li>
                        </ul>
                </div>
            </div>
        </div>
    )
}
