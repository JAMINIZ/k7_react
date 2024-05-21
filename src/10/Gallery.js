import GalleryCard from "./GalleryCard"
import { useState, useEffect, useRef } from "react"
import ButtonC from "../UI/ButtonC";
export default function Gallery() {
    const [gdata, setGdata] = useState();
    const [cards, setCards] = useState();
    const inRef = useRef();
    // const keywords = (keyword.includes(',') ? keyword.split(',') : [keyword])
    //                 .map(item => 
    //                         <span href="#" className="inline-flex items-center mx-1 my-2 p-1 text-sm font-medium text-center
    //                          text-white bg-blue-700 rounded-lghover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300
    //                           dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800 rounded-2xl"
    //                         key={item}>
    //                         {item}
    //                         </span>)
    // const imgUrl = 'http://tong.visitkorea.or.kr/cms2/website/21/2988721.jpg'
    // const content = '부산광역시 영도구 동삼동'
    // const title = '태종대유원지'
    // const keyword = '태종대유원지, 부산광역시 영도구, 명승 제17호, 태종사, 절, 사찰, 종교, 불교'

    // data fetch
    const getFetchData = (url) => {
        fetch(url)
            .then(resp => resp.json())
            .then(data => {
                console.log("fetch", data)
                setGdata(data.response.body.items.item)
            })

        console.log("getFetchData", url)
    }
    const handleOk = (e) => {
        e.preventDefault();
        console.log(inRef.current.value)
        if (inRef.current.value === '') {
            alert('키워드를 입력하세요.')
            inRef.current.focus()
            return;
        }
        let url = `https://apis.data.go.kr/B551011/PhotoGalleryService1/gallerySearchList1?`
        url = url + `serviceKey=${process.env.REACT_APP_GL_KEY}`
        url = url + `&numOfRows=10&pageNo=1&MobileOS=ETC&MobileApp=AppTest&arrange=A`
        url = url + `&keyword=${encodeURI(inRef.current.value)}&_type=json`
        getFetchData(url)
    }
    const handleClear = (e) => {
        e.preventDefault();
        inRef.current.value = ' '
        setCards('');
        setGdata('');
        
    }
    const handleKeyCheck = (e) => {
        if(e.key === 'Enter') {
            console.log('엔터')
            handleOk(e);
        }
    }

    //컴포넌트 생성시
    useEffect(() => {
        let url = `https://apis.data.go.kr/B551011/PhotoGalleryService1/gallerySearchList1?`
        url = url + `serviceKey=${process.env.REACT_APP_GL_KEY}`
        url = url + `&numOfRows=10&pageNo=1&MobileOS=ETC&MobileApp=AppTest&arrange=A&keyword=%ED%83%9C%EC%A2%85%EB%8C%80&_type=json`

        getFetchData(url);
    }, []);

    //gdata 만들어질때
    useEffect(() => {
        if (!gdata) return;
        console.log("gdata", gdata)

        let tm = gdata.map(item => <GalleryCard imgUrl={item.galWebImageUrl}
            content={item.galPhotographyLocation}
            title={item.galTitle}
            keyword={item.galSearchKeyword}
            key={item.galContentId} />)
        setCards(tm)
    }, [gdata]);

    return (
        <div className="w-full h-full flex flex-col justify-start items-start">
            <form className="w-full">
                <div className="flex justify-center items-center mt-6">
                    <p className="text-2xl font-bold">한국관광공사_관광사진 정보🚌</p>
                </div>
                <div className="w-full flex justify-center items-center h-20">
                    <input type="text" id="textId" ref={inRef} onKeyDown={handleKeyCheck}
                    className="border border-y-orange-500 w-2/4"/>
                    <div className="mx-3"><ButtonC caption={'확인'} bcolor={"orange"} handleClick={handleOk}/></div>
                    <div ><ButtonC caption={'취소'} bcolor={"orange"} handleClick={handleClear}/></div>
                </div>
            </form>
            <div className="w-full grid grid-cols-3 justify-between">
                {cards}
            </div>
        </div>
    )
}
