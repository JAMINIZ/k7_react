import { useEffect, useRef, useState } from "react"
import GalleryCard from "../10/GalleryCard"
import TailSelect from "../UI/TailSelect";

export default function Festival() {

    const [fdata, setFdata] = useState();
    const [Opt, setOpt] = useState();
    const [cards, setCards] = useState();
    const selRef = useRef();
    const getFetchData = (url) => {
        fetch(url)
            .then(resp => resp.json())
            .then(data => {
                console.log("fetch", data)
                setFdata(data.getFestivalKr.item)
            });
        console.log("getfetchdata", url)
    }

    

    //구선택
    const handleSelect = () => {
        
        let tm = fdata.filter(item => item.GUGUN_NM == selRef.current.value).map(item => <GalleryCard imgUrl={item.MAIN_IMG_NORMAL}
            content={item.SUBTITLE}
            title={item.TITLE}
            keyword={item.MIDDLE_SIZE_RM1}
            key={item.UC_SEQ} />)
        console.log(tm)
        setCards(tm)
        
        }

    //컴포넌트 생성시
    useEffect(() => {
        let url = `https://apis.data.go.kr/6260000/FestivalService/getFestivalKr?`
        url = url + `serviceKey=${process.env.REACT_APP_GL_KEY}`
        url = url + `&pageNo=1&numOfRows=37&resultType=json`

        getFetchData(url)
    }, []);

    //데이터가 fetch 되었을 때
    useEffect(() => {
        if (!fdata) return;
        console.log('fdata', fdata)
        let tm = fdata.map(item => item.GUGUN_NM);
        tm = [...new Set(tm)].sort();
        setOpt(tm);


    }, [fdata]);




    return (
        <div className="w-full h-full flex flex-col justify-start items-start">
            <form className="w-full flex justify-center items-center">
                <div className="w-4/5 flex justify-center items-center h-20">
                    {Opt&&<TailSelect id="op" ops={Opt} selRef={selRef} initText="---부산 지역 구 선택"
                        handleChange={() => handleSelect()} />}
                </div>
            </form>
            <div className="w-full grid grid-cols-3 justify-between">
                {cards}
            </div>
        </div>
    )
}
