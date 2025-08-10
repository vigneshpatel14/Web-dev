import { useEffect, useRef, useState } from "react";
import useAlertResult from "../hooks/useAlertResult";

function Counter(){

    const [count , setCount] = useState(0)

    function increment(){
        setCount(count => count + 1)
    }


    // useEffect(() =>{
    //     alert('The component is mounted')
    // } , [count])

    useAlertResult(count);

    const inputRef = useRef(null)
    function decrement(){
        setCount(count => {
            if(count == 0)
            {
                alert('negative not allowed')
                return 0
            }
            return count - 1
        })
    }

    return(
        <>
            <button onClick={decrement}>-</button>
            {count}
            <button onClick={increment}>+</button>
            <input ref={inputRef} type="text" />
            <button onClick={() => inputRef.current.focus()}>Focus text</button>
        </>
    ) 
}

export default Counter;