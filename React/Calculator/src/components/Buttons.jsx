
function Buttons({value , click , className}) {
 
  return (
    <button className={`p-4 rounded text-xl font-bold border-black border-[1px] ${className}`} onClick={()=>click(value)}>
        {value}
    </button>
  )
}

export default Buttons
