
export default function ButtonC({caption, bcolor, handleClick}) {
  const colorB = {
    "blue" : "bg-blue-500",
    "orange" : "bg-orange-600",
    "pink" : "bg-pink-400",
    "gray" : "bg-gray-950",
  }

  const colorBHover = {
    "blue" : "hover:bg-blue-800",
    "orange" : "hover:bg-orange-800",
    "pink" : "bg-pink-600",
    "gray" : "bg-gray-950"
  }
  return (
    <button className={`inline-flex p-2 rounded-md text-base
                        justify-center items-center m-1
                        text-white font-bold
                        ${colorB[bcolor]}
                        ${colorBHover[bcolor]}`} onClick={handleClick}>
      {caption}
    </button>
  )
}
