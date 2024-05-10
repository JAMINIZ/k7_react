
export default function Ball({n}) {
  const colorN = {
    "b0" : "bg-red-600",
    "b1" : "bg-orange-600",
    "b2" : "bg-lime-600",
    "b3" : "bg-sky-600",
    "b4" : "bg-violet-600",
  }
  // 백틱 문자열은 중괄호로 시작 {``}
  return (
    <div className={`inline-flex w-16 h-16 rounded-full 
    text-white justify-center items-center text-3xl mx-2 ${colorN["b"+Math.floor(n / 10)]}`}>
      {n}
    </div>
  )
}
