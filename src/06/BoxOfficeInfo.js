
export default function BoxOfficeInfo({ selMv }) {
    return (
        <div className="w-11/12 h-20 flex flex-col justify-center items-center bg-slate-700 text-white font-bold">
            <div className="text-3xl">
                [{selMv.movieCd}-{selMv.movieNm}]
            </div>
            <div className="">
                개봉일 : [{selMv.openDt}] [{(selMv.rankOldAndNew) === "OLD" ? <span className="text-white">{selMv.rankOldAndNew}</span> : 
                <span className="text-yellow-400">{selMv.rankOldAndNew}</span>}]
            </div>
        </div>
    )
}
