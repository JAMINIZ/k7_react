
export default function MyDiv3({dn1, dn2, dn3}) {
  return (
    <div className="flex flex-col w-2/3 h-2/3 bg-lime-200 text-neutral-50 items-center justify-center rounded-sm m-10 p-5">
    {`${dn1} > ${dn2} > ${dn3}`} 
    </div>
  )
}
// probs(오브젝트)는 {} 중괄호로 묶어야한다