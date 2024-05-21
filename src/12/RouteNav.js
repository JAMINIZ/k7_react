import ButtonC from "../UI/ButtonC";
import { useNavigate } from "react-router-dom";

export default function RouteNav() {
    const navigate = useNavigate();
  return (
    <div className="grid grid-cols-7 justify-between m-10 text-xl">
      <ButtonC caption = "시계"
                bcolor = "orange"
                handleClick = {()=>{navigate('/clock')}}/>
      <ButtonC caption = "로또"
                bcolor = "orange"
                handleClick = {()=>{navigate('/lotto')}}/>
      <ButtonC caption = "박스오피스"
                bcolor = "orange"
                handleClick = {()=>{navigate('/boxoffice')}}/>
      <ButtonC caption = "푸드메인"
                bcolor = "orange"
                handleClick = {()=>{navigate('/foodmain')}}/>
      <ButtonC caption = "교통사고통계"
                bcolor = "orange"
                handleClick = {()=>{navigate('/traffic')}}/>
      <ButtonC caption = "갤러리"
                bcolor = "orange"
                handleClick = {()=>{navigate('/Gallery')}}/>
      <ButtonC caption = "축제"
                bcolor = "orange"
                handleClick = {()=>{navigate('/Festival')}}/>
    </div>
  )
}
