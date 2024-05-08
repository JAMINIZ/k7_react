import MyListData from "./MyListData.json";
import MyListitem from "./MyListitem";

export default function MyList() {
    console.log(MyListData)
    
    // 이미지를 한 번에 묶어서 tags 함수로 만들어 사용
  const tags = MyListData.map(item => 
                            <MyListitem key = {item.title} // 동적으로 만들 때에 key 값 꼭 작성해줘야 함
                                        title ={item.title}
                                        imgUrl={item.imgUrl} 
                                        content={item.content}/>)
  return (
    <div className="w-full grid grid-cols-2 gap-4">
        {tags}
    </div>
  )
}


