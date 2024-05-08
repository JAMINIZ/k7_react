
export default function MyDiv3(probs) {
  return (
    <div className="flex flex-col w-2/3 h-2/3 bg-lime-200 text-neutral-50 items-center justify-center rounded-sm m-10 p-5">
    {`${probs.dn1} > ${probs.dn2} > ${probs.dn3}`} 
    </div>
  )
}
