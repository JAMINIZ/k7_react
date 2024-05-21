
export default function GalleryCard({imgUrl, content, title, keyword}) {
    const keywords = (keyword.includes(',') ? keyword.split(',') : [keyword])
                    .map(item => 
                            <span href="#" className="inline-flex items-center mx-1 my-2 p-1 text-sm font-medium text-center
                             text-white bg-blue-700 rounded-lghover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300
                              dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800 rounded-2xl"
                            key={item}>
                            {item}
                            </span>)
    // https://apis.data.go.kr/B551011/PhotoGalleryService1/gallerySearchList1?
    // serviceKey=UfXE52pJfUTOv%2FOJItgQ5L8JwPzsd97J5hwNP4t4ph66lOIIvspVyZPQ0t2pnJI53cbJ4XeKaiW56JPLI7gHlA%3D%3D
    // &numOfRows=10&pageNo=1&MobileOS=ETC&MobileApp=AppTest&arrange=A&keyword=%ED%83%9C%EC%A2%85%EB%8C%80&_type=json
    
    // // 데이터 가져오기
    // const getFetchData = (url) => {
    //     fetch(url)
    //     .then(resp => resp.json())
    //     .then(data => getFetchData(data.body.items.item))
    //     .catch(err => console.log(err))
    // }
    
    // // 컴포넌트 생성 시
    // useEffect(()=> {
    //     let url = `https://apis.data.go.kr/B551011/PhotoGalleryService1/gallerySearchList1?`
    //     url = url + `servicekey=${process.env.REACT_APP_GL_KEY}`;
    //     url = url + `%2FOJItgQ5L8JwPzsd97J5hwNP4t4ph66lOIIvspVyZPQ0t2pnJI53cbJ4XeKaiW56JPLI7gHlA%3D%3D&numOfRows=10&pageNo=1&MobileOS=ETC&MobileApp=AppTest&arrange=A&keyword=%ED%83%9C%EC%A2%85%EB%8C%80&_type=json`
    //     getFetchData(url)
    //     console.log(url)
    // })


  return (
    

<div className="max-w-sm bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
    <a href="#">
        <img className="rounded-t-lg" src={imgUrl.includes('http:') 
                                                    ? imgUrl.replace('http:', 'https:') 
                                                    : imgUrl} alt={title} />
    </a>
    <div className="p-5">
        <a href="#">
            <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">{title}</h5>
        </a>
        <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">{content}</p>
        <div>
            {keywords}
        </div>
    </div>
</div>

  )
}
