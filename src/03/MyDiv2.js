import MyDiv3 from "./MyDiv3"

export default function MyDiv2({dn1, dn2, dn3}) {
  return (
    <div className="flex flex-col w-2/3 h-2/3 bg-lime-500 text-neutral-50 items-center justify-center rounded-sm m-10 p-5">
    {`${dn1} > ${dn2}`} 
    <MyDiv3 dn1={dn1} dn2={dn2} dn3={dn3}/>
    </div>
  )
}
